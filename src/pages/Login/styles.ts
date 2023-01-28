import {CustomShadowsInteface} from '@/theme/customShadows'
import {PaletteOptions, styled} from '@mui/material'

interface StyledSectionInteface {
  customShadows?: CustomShadowsInteface
  palette: PaletteOptions
}

export const StyledRoot = styled('div')(({theme}) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
  },
}))

export const StyledSection = styled('div')(({theme}: {theme: StyledSectionInteface}) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: theme.palette.background!.default,
  boxShadow: theme.customShadows!.card,
}))

export const StyledContent = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  padding: theme.spacing(12, 0),
}))
