import { getSortedPostsData } from '@/lib/api/posts'

const sortedPostsData = getSortedPostsData()

const getAllPostTags = () => {
  const tags = Array.from(
    new Set(
      sortedPostsData
        .map((post) =>
          post.tags
            .map(
              (tag: { original: string; normalized: string }) => tag.normalized
            )
            .flat()
        )
        .flat()
    )
  )

  return tags.map((tag) => ({
    params: { tag },
  }))
}

const getPostByTag = (paramTag: string) => {
  let filteredTag = {}

  const allPostsByTag = sortedPostsData.filter((post) => {
    for (let tag of post.tags) {
      if (tag.normalized === paramTag) {
        filteredTag = tag
        return true
      }
    }
  })

  return {
    posts: allPostsByTag,
    filteredTag,
  }
}

export { getAllPostTags, getPostByTag }
