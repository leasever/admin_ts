import {account} from '@/_mock'
import {PublicRoutes} from '@/models'
import {UserKey, resetUser} from '@/redux/states/user'
import {clearLocalStorage} from '@/utilities'
import {Avatar, Box, Divider, IconButton, MenuItem, Popover, Stack, SxProps, Theme, Typography} from '@mui/material'
import {alpha} from '@mui/material/styles'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

const MENU_OPTIONS = [
  {
    label: 'Home',
    icon: 'eva:home-fill',
  },
  {
    label: 'Profile',
    icon: 'eva:person-fill',
  },
  {
    label: 'Settings',
    icon: 'eva:settings-2-fill',
  },
]

export default function AccountPopover() {
  const [open, setOpen] = useState<null | HTMLButtonElement>(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setOpen(event.currentTarget)
  }

  const handleClose = () => {
    setOpen(null)
  }

  const logOut = () => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...((open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme: Theme) => alpha(theme.palette.grey[900], 0.8),
            },
          }) as SxProps),
        }}>
        <Avatar src={account.photoURL} alt='photoURL' />
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{vertical: 'bottom', horizontal: 'right'}}
        transformOrigin={{vertical: 'top', horizontal: 'right'}}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}>
        <Box sx={{my: 1.5, px: 2.5}}>
          <Typography variant='subtitle2' noWrap>
            {account.displayName}
          </Typography>
          <Typography variant='body2' sx={{color: 'text.secondary'}} noWrap>
            {account.email}
          </Typography>
        </Box>

        <Divider sx={{borderStyle: 'dashed'}} />

        <Stack sx={{p: 1}}>
          {MENU_OPTIONS.map((option) => (
            <MenuItem key={option.label} onClick={handleClose}>
              {option.label}
            </MenuItem>
          ))}
        </Stack>

        <Divider sx={{borderStyle: 'dashed'}} />

        <MenuItem onClick={logOut} sx={{m: 1}}>
          Logout
        </MenuItem>
      </Popover>
    </>
  )
}
