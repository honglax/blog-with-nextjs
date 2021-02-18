import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  max-width: 72rem;
  min-width: 20rem;
  padding: 0 2rem;
  display: flex;
  flex-direction: ${({ flexDirection }) =>
    flexDirection ? flexDirection : 'column'};
  justify-content: ${({ justifyContent }) =>
    justifyContent ? justifyContent : 'flex-start'};
  flex-grow: ${({ flexGrow }) => (flexGrow ? flexGrow : 'initial')};

  @media only screen and (max-width: 630px) {
    padding: 0 1rem;
  }
`

export default Container
