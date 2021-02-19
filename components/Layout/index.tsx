import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '@/lib/context'
import {
  MetaHead,
  HomeHeader,
  HomeTitle,
  HorizontalSeperator,
  Footer,
} from '@/components'
import siteMetaData from '@/lib/data'
import { Container } from '@/layouts'

type LayoutProps = { children: React.ReactNode; home?: boolean; post?: boolean }

interface IChildContainerProps {
  post?: boolean
}

const ChildContainer = styled.div<IChildContainerProps>`
  width: 100%;
  max-width: 64rem;
  padding: 1rem;
  margin: 0 auto;

  @media only screen and (max-width: 576px) {
    padding: 1rem ${({ post }) => (post ? '0' : '0.5rem')};
  }
`

const Layout = ({ children, home, post }: LayoutProps) => {
  const { title, siteTitle, author, headDescription, image } = siteMetaData
  const { darkMode } = useContext(ThemeContext)
  return (
    <>
      <MetaHead {...siteMetaData} />
      <Container flexGrow={1}>
        <HomeHeader image={image} siteTitle={siteTitle} />
        {home ? (
          <>
            <HomeTitle
              title={title}
              author={author}
              description={headDescription}
            />
            <HorizontalSeperator darkMode={darkMode} />
          </>
        ) : (
          <></>
        )}

        <ChildContainer post={post}>{children}</ChildContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
