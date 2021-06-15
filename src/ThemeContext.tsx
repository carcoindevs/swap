import React from 'react'
import { DefaultTheme, ThemeProvider as SCThemeProvider } from 'styled-components'
import { dark } from '@pancakeswap-libs/uikit'

// const CACHE_KEY = 'IS_DARK'

const ourDark: DefaultTheme = {
  ...dark,
  colors: {
    ...dark.colors,
    primary: '#b85000',
    primaryBright: '#b85000',
    background: '#ffffff',
    text: '#444343',
    textSubtle: '#b85000',
    input: 'transparent',
    // borderColor: '#FFC107',
    backgroundDisabled: '#6A2EFF'
  },
  card: { ...dark.card, background: '#2f2f2f' },
  modal: { ...dark.modal, background: '#2f2f2f' },
}

export interface ThemeContextType {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = React.createContext<ThemeContextType>({ isDark: false, toggleTheme: () => null })

const ThemeContextProvider: React.FC = ({ children }) => {
  // const [isDark, setIsDark] = useState(() => {
  //   const isDarkUserSetting = localStorage.getItem(CACHE_KEY)
  //   return isDarkUserSetting ? JSON.parse(isDarkUserSetting) : false
  // })

  const toggleTheme = () => {
    // setIsDark((prevState: any) => {
    //   localStorage.setItem(CACHE_KEY, JSON.stringify(!prevState))
    //   return !prevState
    // })
  }

  return (
    <ThemeContext.Provider value={{ isDark: true, toggleTheme }}>
      <SCThemeProvider theme={ourDark}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  )
}

export { ThemeContext, ThemeContextProvider }
