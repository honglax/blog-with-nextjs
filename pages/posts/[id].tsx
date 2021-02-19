import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { Layout, PostDetail, BackToHome, TagsBlock } from '@/components'
import { getAllPostIds, getPostData } from '@/lib/api/posts'

type PostProps = {
  postData: {
    title: string
    date: string
    contentHtml: string
    coverImage: string
    tags: { original: string; normalized: string }[]
  }
}

const Post = ({ postData }: PostProps) => (
  <Layout post>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <PostDetail {...postData} />
    </article>
    <TagsBlock tags={postData.tags} />
    <BackToHome />
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)

  return {
    props: {
      postData,
    },
  }
}

export default Post
