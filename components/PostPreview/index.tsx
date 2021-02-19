import Link from 'next/link'
import styled from 'styled-components'
import { Date } from '@/components'
import { commonTheme, darkTheme, lightTheme } from '@/constant'

type PreviewProps = {
  darkMode: boolean
  href: string
  title: string
  date: string
  excerpt: string
}

const PreviewWrapper = styled.section`
  width: 100%;
  padding: 0.5rem 0;
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
`

const PostTitle = styled.div`
  font-size: 1.75rem;
  line-height: 1.5;
  font-weight: 700;
  margin-bottom: 0.5rem;

  a {
    text-decoration: none;
    color: ${commonTheme.linkColor};

    &:hover {
      text-decoration: none;
    }
  }
`

const PostOn = styled.small`
  font-size: 0.9rem;
  margin-bottom: 1.25rem;
  font-weight: 300;

  time {
    color: ${(props: { darkMode: boolean }) =>
      props.darkMode ? darkTheme.secondaryText : lightTheme.secondaryText};
  }
`

const PostExcerpt = styled.div`
  font-size: 1.1rem;
  line-height: 1.5;
  text-indent: 5%;

  .read-more {
    color: ${commonTheme.linkColor};
    font-weight: 500;
  }
`

const PostPreview = ({
  darkMode,
  href,
  title,
  date,
  excerpt,
}: PreviewProps) => {
  return (
    <PreviewWrapper>
      <PostTitle>
        <Link href={href}>
          <a>{title}</a>
        </Link>
      </PostTitle>
      <PostOn darkMode={darkMode}>
        <Date dateString={date} />
      </PostOn>
      <PostExcerpt>
        {excerpt}...&nbsp;
        <Link href={href}>
          <a className="read-more">Đọc tiếp</a>
        </Link>
      </PostExcerpt>
    </PreviewWrapper>
  )
}

export default PostPreview
