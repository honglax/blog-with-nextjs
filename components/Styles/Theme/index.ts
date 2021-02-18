import { lightTheme, darkTheme } from '@/constant'

export interface ITheme {
  body: string
  text: string
}

export const light: ITheme = {
  body: lightTheme.primaryBg,
  text: lightTheme.primaryText,
}

export const dark: ITheme = {
  body: darkTheme.primaryBg,
  text: darkTheme.primaryText,
}
