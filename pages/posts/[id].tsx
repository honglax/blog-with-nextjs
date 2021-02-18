import { GetStaticProps, GetStaticPaths } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { Layout, PostDetail } from '@/components'
import { getAllPostIds, getPostData } from '@/lib/api/posts'

type PostProps = {
  postData: {
    title: string
    date: string
    contentHtml: string
    coverImage: string
  }
}

const BackToHome = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  margin: 2rem 0;

  a {
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
  }

  span {
    margin-left: 1rem;
  }
`

const Post = ({ postData }: PostProps) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <article>
      <PostDetail {...postData} />
    </article>
    <BackToHome>
      <Link href="/">
        <a>
          <FaArrowLeft />
          <span>Quay lại trang chính</span>
        </a>
      </Link>
    </BackToHome>
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
