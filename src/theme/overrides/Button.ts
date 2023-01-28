import {PaletteOptions, alpha} from '@mui/material/styles'
import {CustomShadowsInteface} from '@/theme/customShadows'

interface ButtonInterface {
  palette?: PaletteOptions
  customShadows?: CustomShadowsInteface
}

export default function Button(theme: ButtonInterface) {
  return {
    MuiButton: {
      styleOverrides: {
        root: {
          '&:hover': {
            boxShadow: 'none',
          },
        },
        sizeLarge: {
          height: 48,
        },
        containedInherit: {
          color: theme.palette!.grey![800],
          boxShadow: theme.customShadows!.z8,
          '&:hover': {
            backgroundColor: theme.palette!.grey![400],
          },
        },
        containedPrimary: {
          boxShadow: theme.customShadows!.primary,
        },
        containedSecondary: {
          boxShadow: theme.customShadows!.secondary,
        },
        outlinedInherit: {
          border: `1px solid ${alpha(theme.palette!.grey![500]!, 0.32)}`,
          '&:hover': {
            backgroundColor: theme.palette!.action!.hover,
          },
        },
        textInherit: {
          '&:hover': {
            backgroundColor: theme.palette!.action!.hover,
          },
        },
      },
    },
  }
}
