import styled from 'styled-components'
import { lightTheme, darkTheme } from '@/constant'

interface ISeperator {
  darkMode?: boolean
}

const HorizontalSeperator = styled.hr<ISeperator>`
  width: 100%;
  border: none;
  border-top: 1px solid
    ${(props) => (props.darkMode ? darkTheme.primaryText : lightTheme.hrColor)};
`

export default HorizontalSeperator
