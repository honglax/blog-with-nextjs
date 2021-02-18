import styled from 'styled-components'
import { commonTheme } from '@/constant'

const BlockWrapper = styled.a`
  margin: 0 0.5rem;
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  display: flex;
  flex-flow: row nowrap;
  line-height: 1.25rem;

  &:hover {
    color: ${commonTheme.linkColor};
    transition: color 0.3s ease-in-out;
  }

  span {
    margin-left: 0.5rem;

    &.icon {
      font-weight: 700;
    }
  }

  @media only screen and (max-width: 630px) {
    flex-flow: column;
    justify-content: center;
    align-items: center;
    margin: 0 1rem;

    span {
      margin-left: 0;
      &.icon {
        margin-bottom: 0.5rem;
      }
    }
  }
`

const SocialBlock = ({ icon, title }) => (
  <BlockWrapper>
    <span className="icon">{icon}</span>
    <span>{title}</span>
  </BlockWrapper>
)

export default SocialBlock
