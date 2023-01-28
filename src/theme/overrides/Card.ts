import {CustomShadowsInteface} from '@/theme/customShadows'

interface CardInterface {
  customShadows?: CustomShadowsInteface
  shape: ShapeInterface
  spacing?: (arg1: number, arg2?: number, arg3?: number) => number | string
}

interface ShapeInterface {
  borderRadius: number
}

export default function Card(theme: CardInterface) {
  return {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: theme.customShadows!.card,
          borderRadius: Number(theme.shape.borderRadius) * 2,
          position: 'relative',
          zIndex: 0,
        },
      },
    },
    MuiCardHeader: {
      defaultProps: {
        titleTypographyProps: {variant: 'h6'},
        subheaderTypographyProps: {variant: 'body2'},
      },
      styleOverrides: {
        root: {
          padding: theme.spacing!(3, 3, 0),
        },
      },
    },
    MuiCardContent: {
      styleOverrides: {
        root: {
          padding: theme.spacing!(3),
        },
      },
    },
  }
}
