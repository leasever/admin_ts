import {Breakpoint, CssBaseline} from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  PaletteOptions,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'
import {useMemo} from 'react'
import customShadows, {CustomShadowsInteface} from './customShadows'
import GlobalStyles from './globalStyles'
import componentsOverride from './overrides'
import palette from './palette'
import shadowsCustom from './shadows'
import typography from './typography'

interface ThemeProviderInterface {
  children: React.ReactNode
}

export interface ComponentsOverridesInterface {
  customShadows?: CustomShadowsInteface
  palette: PaletteOptions
  breakpoints?: BreakpointsInterface
  shape: ShapeInterface
  spacing?: (arg1: number, arg2?: number, arg3?: number) => number | string
  transitions?: Object
  typography?: Object
}
interface ShapeInterface {
  borderRadius: number
}
interface BreakpointsInterface {
  up: (key: number | Breakpoint) => string
}

const ThemeProvider: React.FC<ThemeProviderInterface> = ({children}) => {
  const themeOptions: ComponentsOverridesInterface = useMemo(
    () => ({
      palette,
      shape: {borderRadius: 6},
      typography,
      shadows: shadowsCustom(),
      customShadows: customShadows(),
    }),
    []
  )

  const theme = createTheme(themeOptions)
  theme.components = componentsOverride(theme)

  return (
    <StyledEngineProvider injectFirst>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles />
        {children}
      </MUIThemeProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider
