import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

const postDirectory: string = path.join(process.cwd(), '_posts')

export function getSortedPostsData() {
  const fileNames: string[] = fs.readdirSync(postDirectory)
  const allPostsData = fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '')

    const fullPath: string = path.join(postDirectory, fileName)
    const fileContent: string = fs.readFileSync(fullPath, 'utf-8')

    const matterResult: matter.GrayMatterFile<string> = matter(fileContent)

    return {
      id,
      ...(matterResult.data as { date: string; title: string }),
    }
  })

  return allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1
  })
}

export function getAllPostIds() {
  const fileNames: string[] = fs.readdirSync(postDirectory)
  return fileNames.map((fileName: string) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }))
}

export async function getPostData(id: string) {
  const fullPath: string = path.join(postDirectory, `${id}.md`)
  const fileContents: string = fs.readFileSync(fullPath, 'utf-8')

  const matterResult: matter.GrayMatterFile<string> = matter(fileContents)

  const processContent = await remark().use(html).process(matterResult.content)
  const contentHtml = processContent.toString()

  return {
    id,
    contentHtml,
    ...(matterResult.data as { date: string; title: string }),
  }
}
