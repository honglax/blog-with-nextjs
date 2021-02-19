import styled from 'styled-components'
import Link from 'next/link'
import { FaArrowLeft } from 'react-icons/fa'

const Wrapper = styled.div`
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

  @media only screen and (max-width: 576px) {
    font-size: 1rem;
  }
`

const BackToHome = () => (
  <Wrapper>
    <Link href="/">
      <a>
        <FaArrowLeft />
        <span>Quay lại trang chính</span>
      </a>
    </Link>
  </Wrapper>
)

export default BackToHome
