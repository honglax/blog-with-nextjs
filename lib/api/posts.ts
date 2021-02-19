import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import html from 'remark-html'

export interface IDataProps {
  title: string
  date: string
  excerpt: string
  tags: string[]
  coverImage?: string
}

const postDirectory: string = path.join(process.cwd(), '_posts')

function normalizeTag(tag: string): string {
  return tag
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D')
    .split(' ')
    .join('-')
}

function getAllPostData() {
  const fileNames: string[] = fs.readdirSync(postDirectory)
  return fileNames.map((fileName: string) => {
    const id: string = fileName.replace(/\.md$/, '')

    const fullPath: string = path.join(postDirectory, fileName)
    const fileContent: string = fs.readFileSync(fullPath, 'utf-8')

    const matterResult: matter.GrayMatterFile<string> = matter(fileContent)
    const tags = matterResult.data.tags.map((tag: string) => ({
      original: tag,
      normalized: normalizeTag(tag),
    }))

    return {
      id,
      ...(matterResult.data as IDataProps),
      tags,
      content: matterResult.content,
    }
  })
}

const allPostsData = getAllPostData()

const getSortedPostsData = () =>
  allPostsData.sort((a, b) => {
    return a.date < b.date ? 1 : -1
  })

const getAllPostIds = () => {
  const fileNames: string[] = fs.readdirSync(postDirectory)
  return fileNames.map((fileName: string) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }))
}

const getPostData = async (id: string) => {
  const postData = allPostsData.filter((post) => post.id === id)[0]

  const processContent = await remark().use(html).process(postData.content)
  const contentHtml = processContent.toString()

  return {
    id,
    contentHtml,
    ...postData,
  }
}

export { getSortedPostsData, getAllPostIds, getPostData }
