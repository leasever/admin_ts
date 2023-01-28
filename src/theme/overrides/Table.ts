import {PaletteOptions} from '@mui/material/styles'

interface TableInterface {
  palette?: PaletteOptions
}

export default function Table(theme: TableInterface) {
  return {
    MuiTableCell: {
      styleOverrides: {
        head: {
          color: theme.palette!.text!.secondary,
          backgroundColor: theme.palette!.background,
        },
      },
    },
  }
}
