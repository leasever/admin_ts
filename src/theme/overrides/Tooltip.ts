import {PaletteOptions} from '@mui/material/styles'

interface TooltipInterface {
  palette?: PaletteOptions
}

export default function Tooltip(theme: TooltipInterface) {
  return {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: theme.palette!.grey![800],
        },
        arrow: {
          color: theme.palette!.grey![800],
        },
      },
    },
  }
}
