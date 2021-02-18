import React, { createContext, useState, useEffect } from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles, light, dark } from '@/components/Styles'

export type ContextProps = {
  toggleDarkMode: () => void
  darkMode: boolean
}

export const ThemeContext = createContext<Partial<ContextProps>>({})

const AppProvider = ({ children }: { children: any }) => {
  const [darkMode, setDarkMode] = useState(false)
  const toggleDarkMode = (): void => {
    localStorage.setItem('darkMode', JSON.stringify(!darkMode))
    setDarkMode(!darkMode)
  }

  useEffect(() => {
    setDarkMode(localStorage.getItem('darkMode') === 'true')
  }, [])

  const value: ContextProps = { toggleDarkMode, darkMode }

  return (
    <ThemeContext.Provider value={value}>
      <ThemeProvider theme={darkMode ? dark : light}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

export default AppProvider
