import {useMemo} from 'react'
import {CssBaseline} from '@mui/material'
import {
  ThemeProvider as MUIThemeProvider,
  PaletteOptions,
  StyledEngineProvider,
  createTheme,
} from '@mui/material/styles'
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
  shape: ShapeInterface
  spacing?: (arg: number) => number | string
  transitions?: Object
  typography?: Object
}
interface ShapeInterface {
  borderRadius: number
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
