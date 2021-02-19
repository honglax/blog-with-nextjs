import { useContext } from 'react'
import styled from 'styled-components'
import { Date } from '@/components'
import { ThemeContext } from '@/lib/context'
import { commonTheme, darkTheme, lightTheme } from '@/constant'

type PostProps = {
  title: string
  date: string
  contentHtml: string
  coverImage: string
}

const PostTitle = styled.h1`
  font-size: 2.25rem;
  line-height: 1.5;
  font-weight: 700;
  margin: 1rem 0;
  text-transform: capitalize;
  color: ${commonTheme.linkColor};

  @media only screen and (max-width: 576px) {
    font-size: 2rem;
  }
`

const PostOn = styled.p`
  font-size: 1rem;
  margin-bottom: 0.75rem;
  font-weight: 300;
  line-height: 1.5;

  time {
    font-weight: 600;
    color: ${(props: { darkMode: boolean }) =>
      props.darkMode ? darkTheme.secondaryText : lightTheme.secondaryText};
  }

  @media only screen and (max-width: 576px) {
    font-size: 0.85rem;
  }
`

const PostCoverWrapper = styled.div`
  width: 100%;
  margin: 2rem 0;

  img {
    margin: 0 auto;
    border-radius: 0.5rem;
  }

  @media only screen and (max-width: 576px) {
    margin-bottom: 1rem;
  }
`

const PostDetail = ({ title, date, contentHtml, coverImage }: PostProps) => {
  const { darkMode } = useContext(ThemeContext)
  return (
    <>
      <PostTitle>{title}</PostTitle>
      <PostOn darkMode={darkMode}>
        Đăng ngày <Date dateString={date} />
      </PostOn>
      <PostCoverWrapper>
        <img
          src={coverImage ? coverImage : '/images/default-post.png'}
          alt={title}
        />
      </PostCoverWrapper>
      <div
        className="markdown"
        dangerouslySetInnerHTML={{ __html: contentHtml }}
      />
    </>
  )
}

export default PostDetail
