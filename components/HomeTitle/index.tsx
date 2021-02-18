import styled from 'styled-components'

type HomeTitleProps = {
  title: string
  author: string
  description: string
}

const TitleWrapper = styled.div`
  display: flex;
  flex-flow: column nowrap;
  margin-bottom: 1rem;
`

const Title = styled.h2`
  font-family: space mono, monospace;
  font-weight: 300;
  font-size: 2rem;
  line-height: 1.5;
  text-transform: uppercase;
  margin: 0;
`

const Description = styled.h4`
  font-size: 1.1rem;
  font-family: space mono, monospace;
  line-height: 1.5;
  font-weight: 300;
  margin: 0;
`

const HomeTitle = ({ title, author, description }: HomeTitleProps) => (
  <TitleWrapper>
    <Title>{title}</Title>
    <Description>{description}</Description>
  </TitleWrapper>
)

export default HomeTitle
