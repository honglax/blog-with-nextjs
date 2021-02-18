import Link from 'next/link'
import styled from 'styled-components'
import { ThemeSwitcher } from '@/components'

type HeaderProps = {
  image: string
  siteTitle: string
}

const HeaderWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`

const LogoWrapper = styled.a`
  display: block;
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  background-color: #fff;
  cursor: pointer;
`

const HomeHeader = ({ image, siteTitle }: HeaderProps) => (
  <HeaderWrapper>
    <Link href="/">
      <LogoWrapper>
        <img src={image} alt={siteTitle} />
      </LogoWrapper>
    </Link>
    <ThemeSwitcher />
  </HeaderWrapper>
)

export default HomeHeader
