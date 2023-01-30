import {Iconify} from '@/components'
import {bgBlur} from '@/utilities'
import {AppBar, Box, IconButton, Stack, Toolbar} from '@mui/material'
import {styled} from '@mui/material/styles'
import AccountPopover from './AccountPopover'
import LanguagePopover from './LanguagePopover'
import NotificationsPopover from './NotificationsPopover'
import Searchbar from './Searchbar'

const NAV_WIDTH = 280

const HEADER_MOBILE = 64

const HEADER_DESKTOP = 92

const StyledRoot = styled(AppBar)(({theme}) => ({
  ...bgBlur({color: theme.palette.background.default}),
  position: 'fixed',
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}))

const StyledToolbar = styled(Toolbar)(({theme}) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}))

export default function Header({onOpenNav}: {onOpenNav: () => void}) {
  return (
    <StyledRoot>
      <StyledToolbar>
        <IconButton
          onClick={onOpenNav}
          sx={{
            mr: 1,
            color: 'text.primary',
            display: {lg: 'none'},
          }}>
          <Iconify icon='eva:menu-2-fill' />
        </IconButton>

        <Searchbar />
        <Box sx={{flexGrow: 1}} />

        <Stack
          direction='row'
          alignItems='center'
          spacing={{
            xs: 0.5,
            sm: 1,
          }}>
          <LanguagePopover />
          <NotificationsPopover />
          <AccountPopover />
        </Stack>
      </StyledToolbar>
    </StyledRoot>
  )
}
