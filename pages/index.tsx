import { useContext } from 'react'
import { GetStaticProps } from 'next'
import { Layout, PostPreview } from '@/components/'
import { ThemeContext } from '@/lib/context'
import { getSortedPostsData } from '@/lib/api/posts'

type HomeProps = {
  allPostsData: {
    date: string
    title: string
    id: string
    excerpt: string
  }[]
}

export default function Home({ allPostsData }: HomeProps) {
  const { darkMode } = useContext(ThemeContext)
  return (
    <Layout home>
      {allPostsData.map(({ id, date, title, excerpt }) => (
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData,
    },
  }
}
