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
`

const SocialBlock = ({ icon, title }) => (
  <BlockWrapper>
    <span className="icon">{icon}</span>
    <span>{title}</span>
  </BlockWrapper>
)

export default SocialBlock
