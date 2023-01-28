import {PaletteOptions, alpha} from '@mui/material/styles'

interface BackdropInterface {
  palette?: PaletteOptions
}

export default function Backdrop(theme: BackdropInterface) {
  return {
    MuiBackdrop: {
      styleOverrides: {
        root: {
          backgroundColor: alpha(theme.palette!.grey![800]!, 0.8),
        },
        invisible: {
          background: 'transparent',
        },
      },
    },
  }
}
