import { useContext } from 'react'
import styled from 'styled-components'
import { ThemeContext } from '@/lib/context'
import { lightTheme, darkTheme } from '@/constant'

const SwitcherWrapper = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;
  padding: 0.5rem;
  cursor: pointer;
  background-color: ${(props: { darkMode: boolean }) =>
    props.darkMode ? darkTheme.secondaryBg : lightTheme.secondaryBg};
`

const ThemeSwitcher = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext)
  return (
    <SwitcherWrapper darkMode={darkMode} onClick={toggleDarkMode}>
      <img
        src={`/images/toggle/${darkMode ? 'sunny' : 'moon'}.png`}
        alt="Toggle"
      />
    </SwitcherWrapper>
  )
}

export default ThemeSwitcher
