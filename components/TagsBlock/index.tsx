import Link from 'next/link'
import styled from 'styled-components'
import { commonTheme } from '@/constant'

const TagsWrapper = styled.div`
  display: flex;
  flex-direction: row wrap;
  align-items: center;
  margin: 1rem 0;
`

const PillWrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: flex-start;
`

const TagPill = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin: 0.5rem;
  margin-top: 0;
  color: ${commonTheme.linkColor};
  border: 1px solid ${commonTheme.linkColor};
  padding: 0.25rem 0.5rem;
  border-radius: 1rem;
`

const TagsBlock = ({
  tags,
}: {
  tags: { original: string; normalized: string }[]
}) => (
  <TagsWrapper>
    <b className="mb-2">Tags:</b>
    <PillWrapper>
      {tags.map((tag, idx) => (
        <Link key={idx} href={`/tags/${tag.normalized}`}>
          <TagPill>{tag.original}</TagPill>
        </Link>
      ))}
    </PillWrapper>
  </TagsWrapper>
)

export default TagsBlock
