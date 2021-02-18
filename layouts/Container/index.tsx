import styled from 'styled-components'

const Container = styled.div`
  width: 72rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'column'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-grow: ${({ flexGrow }) => (flexGrow ? flexGrow : 'initial')};
`

export default Container
