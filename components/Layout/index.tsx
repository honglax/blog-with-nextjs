import styled from 'styled-components'
import {
  MetaHead,
  HomeHeader,
  HomeTitle,
  HorizontalSeperator,
  Footer,
} from '@/components'
import siteMetaData from '@/lib/data'
import { Container } from '@/layouts'

type LayoutProps = { children: React.ReactNode; home?: boolean }

const ChildContainer = styled.div`
  width: 100%;
  max-width: 64rem;
  padding: 1rem;
  margin: 0 auto;
`

const Layout = ({ children, home }: LayoutProps) => {
  const { title, siteTitle, author, headDescription, image } = siteMetaData
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
            <HorizontalSeperator />
          </>
        ) : (
          <></>
        )}

        <ChildContainer>{children}</ChildContainer>
      </Container>
      <Footer />
    </>
  )
}

export default Layout
