import {Box, List, ListItemText} from '@mui/material'
import {NavLink as RouterLink} from 'react-router-dom'
import {StyledNavItem, StyledNavItemIcon} from './styles'

interface Data {
  title?: string
  path?: string
  icon?: JSX.Element
  info?: string
}

export default function NavSection({data = [{}], ...other}) {
  return (
    <Box {...other}>
      <List disablePadding sx={{p: 1}}>
        {data.map((item: Data) => (
          <NavItem key={item.title} item={item} />
        ))}
      </List>
    </Box>
  )
}

function NavItem({item}: {item: Data}) {
  const {title, path, icon, info} = item
  return (
    <StyledNavItem
      component={RouterLink}
      to={path}
      sx={{
        '&.active': {
          color: 'text.primary',
          bgcolor: 'action.selected',
          fontWeight: 'fontWeightBold',
        },
      }}>
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>
      <ListItemText disableTypography primary={title} />
      {info && info}
    </StyledNavItem>
  )
}
