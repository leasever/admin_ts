import {ListItemButton, ListItemIcon, SxProps, Theme} from '@mui/material'
import {styled} from '@mui/material/styles'

interface ListItemButtonInteface {
  component: Object
  to: string | undefined
  sx: SxProps<Theme>
  children: React.ReactNode
}

export const StyledNavItem = styled((props: ListItemButtonInteface) => <ListItemButton disableGutters {...props} />)(
  ({theme}) => ({
    ...theme.typography.body2,
    height: 48,
    position: 'relative',
    textTransform: 'capitalize',
    color: theme.palette.text.secondary,
    borderRadius: theme.shape.borderRadius,
  })
)

export const StyledNavItemIcon = styled(ListItemIcon)({
  width: 22,
  height: 22,
  color: 'inherit',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})
