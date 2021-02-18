import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@/lib/context'
import { lightTheme, darkTheme } from '@/constant'

const StyledHr = styled.hr`
  width: 100%;
  border: none;
  border-top: 1px solid
    ${(props) => (props.darkMode ? darkTheme.primaryText : lightTheme.hrColor)};
`

const HorizontalSeperator = () => {
  const { darkMode } = useContext(ThemeContext)
  return <StyledHr darkMode={darkMode} />
}

export default HorizontalSeperator
