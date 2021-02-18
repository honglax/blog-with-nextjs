import { useContext } from 'react'
import styled from 'styled-components'
import { FaCat, FaGithub, FaLinkedin } from 'react-icons/fa'
import { ThemeContext } from '@/lib/context'
import { lightTheme, darkTheme } from '@/constant'
import { Container } from '@/layouts'
import { SocialBlock } from '@/components'

interface ISocialData {
  id: number
  title: string
  icon: JSX.Element
}

const FooterWrapper = styled.div`
  width: 100vw;
  padding: 1.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ darkMode }: { darkMode: boolean }) =>
    darkMode ? darkTheme.secondaryBg : lightTheme.secondaryBg};
  font-family: space mono, monospace;
  font-weight: 300;
  letter-spacing: 0;

  @media only screen and (max-width: 1000px) {
    .footer__container {
      flex-flow: column;
    }
  }
`

const SocialWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex-grow: 1;
  align-items: center;

  @media only screen and (max-width: 1000px) {
    justify-content: center;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid
      ${({ darkMode }) =>
        darkMode ? darkTheme.primaryText : lightTheme.hrColor};
  }
`

const Copyright = styled.div`
  a {
    color: inherit;
    font-weight: 600;
    text-decoration: none;
  }

  @media only screen and (max-width: 1000px) {
    text-align: center;
  }
`

const socialData: ISocialData[] = [
  {
    id: 1,
    title: 'Hong La',
    icon: <FaCat />,
  },
  {
    id: 2,
    title: 'Github',
    icon: <FaGithub />,
  },
  {
    id: 3,
    title: 'LinkedIn',
    icon: <FaLinkedin />,
  },
]

const Footer = () => {
  const { darkMode } = useContext(ThemeContext)
  const socialBlocks = socialData.map(({ id, title, icon }: ISocialData) => (
    <SocialBlock key={id} title={title} icon={icon} />
  ))
  return (
    <FooterWrapper darkMode={darkMode}>
      <Container className="footer__container" flexDirection="row">
        <SocialWrapper>{socialBlocks}</SocialWrapper>
        <Copyright>
          Blog được tạo ra với ❤️&nbsp;dành cho&nbsp;
          <a
            href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            NextJS
          </a>
        </Copyright>
      </Container>
    </FooterWrapper>
  )
}

export default Footer
