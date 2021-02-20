import Head from 'next/head'
import styled from 'styled-components'
import { FaPaperPlane } from 'react-icons/fa'
import { Layout, BackToHome } from '@/components'
import { commonTheme } from '@/constant'

const ContentWrapper = styled.div`
  p {
    text-indent: 5%;
    font-size: 1.25rem;
    font-weight: 300;

    span {
      font-weight: 700;
    }

    &:not(:last-child) {
      margin-bottom: 1rem;
    }
  }
`

const EmailButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${commonTheme.linkColor};
  border: 3px solid ${commonTheme.linkColor};
  border-radius: 50px;
  font-size: 2rem;
  font-weight: 700;
  transition: box-shadow 0.3s cubic-bezier(0.2, 1, 0.3, 1) 0s;
  width: 15rem;
  margin: 10vh auto 5vh;
  padding: 1rem;

  &:hover {
    box-shadow: 0 0.5rem 0 0 ${commonTheme.linkColor};
  }
`

const AboutMe = () => (
  <Layout>
    <Head>
      <title>Góc nhỏ của Hồng</title>
    </Head>
    <article>
      <h1
        className="text-center text-2xl md:text-4xl mt-8 mb-8 uppercase xs:leading-normal font-bold tracking-wider"
        style={{ color: commonTheme.linkColor }}
      >
        Góc nhỏ của Hồng
      </h1>
      <img
        className="max-w-full md:max-w-2xl mt-0 md:mt-8 mb-16 ml-auto mr-auto rounded-full "
        src="/images/about-me.jpg"
        alt="Hong La"
      />
      <ContentWrapper>
        <p>
          Xin chào, mình là Xuân Hồng. Gia đình mình có truyền thống rất dễ thương đó là theo nghiệp Kỹ sư. Ba là <span>Kỹ sư thủy lợi</span>, mẹ là <span>Kỹ sư xây dựng</span>. Còn mình là <span>Kỹ sư phần mềm</span> - hiện đang làm việc tại công ty{' '}
          <span>KMS Technology Việt Nam</span>.
        </p>
        <p>
          Chiếc blog này đơn giản chỉ là nơi mình viết vu vơ về những gì mình
          trải nghiệm trong công việc, trong cuộc sống thường nhật. Cũng là nơi
          mình lưu lại những gì mà mình cảm thấy tâm đắc và giúp ích cho cuộc
          đời mình. Nếu bạn đã ghé qua đây, thì hãy dành chút thời gian đọc nó
          nhé. Hi vọng những điều mình chia sẻ ít nhiều sẽ giúp ích được điều gì
          đó cho bạn.
        </p>
        <p>
          Bạn cảm thấy mình thú vị và muốn liên hệ với mình? Đừng ngại ngùng
          nhấn vào chiếc nút nhỏ phía dưới. Mình sẽ rất vui nếu được làm quen
          cùng bạn.
        </p>
      </ContentWrapper>
      <EmailButton href="mailto:hongla.html@gmail.com">
        <FaPaperPlane />
      </EmailButton>
    </article>
    <BackToHome />
  </Layout>
)

export default AboutMe
