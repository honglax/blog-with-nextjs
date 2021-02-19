import { GetStaticProps, GetStaticPaths } from 'next'
import { useContext } from 'react'
import { ThemeContext } from '@/lib/context'
import { Layout, PostPreview, TagsBlock } from '@/components'
import { getAllPostTags, getPostByTag } from '@/lib/api/tags'

const PostsByTags = ({ posts, filteredTag }) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Layout>
      <TagsBlock tags={[filteredTag]} />
      {posts.map(({ id, date, title, excerpt }) => (
        <PostPreview
          key={id}
          darkMode={darkMode}
          title={title}
          href={`/posts/${id}`}
          date={date}
          excerpt={excerpt}
        />
      ))}
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostTags()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => ({
  props: {
    ...getPostByTag(params.tag as string),
  },
})

export default PostsByTags
