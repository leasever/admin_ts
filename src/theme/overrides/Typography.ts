interface TypographyInterface {
  spacing?: (abs: number) => number | string
}

export default function Typography(theme: TypographyInterface) {
  return {
    MuiTypography: {
      styleOverrides: {
        paragraph: {
          marginBottom: theme.spacing!(2),
        },
        gutterBottom: {
          marginBottom: theme.spacing!(1),
        },
      },
    },
  }
}
