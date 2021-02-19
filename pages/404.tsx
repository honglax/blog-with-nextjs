import Head from 'next/head'
import Link from 'next/link'
import styled from 'styled-components'
import { FaArrowLeft } from 'react-icons/fa'
import { Layout } from '@/components'

const Custom404Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex-grow: 1;

  h1 {
    font-size: 3rem;
    font-weight: 600;
  }

  h2 {
    font-size: 2rem;
    font-weight: 300;
    margin: 1rem 0;
  }

  @media screen and (max-width: 576px) {
    h1 {
      font-size: 2rem;
    }

    h2 {
      font-size: 1.5rem;
    }

    a {
      font-size: 1.1rem;
    }
  }
`

const BackToHome = styled.a`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  text-decoration: none;
  cursor: pointer;

  span {
    margin-left: 1rem;
  }
`

export default function Custom404() {
  return (
    <Layout>
      <Head>
        <title>404 - Page Not Found</title>
      </Head>
      <Custom404Wrapper>
        <h1>404 - Không tìm thấy trang bạn yêu cầu</h1>
        <h2>Oops, hình như bạn đang bị lạc đúng không nhỉ 🤔?</h2>
        <Link href="/">
          <BackToHome>
            <FaArrowLeft />
            <span>Quay lại trang chính tại đây nhé</span>
          </BackToHome>
        </Link>
      </Custom404Wrapper>
    </Layout>
  )
}
