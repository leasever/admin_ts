import {account} from '@/_mock'
import {Logo, NavSection, Scrollbar} from '@/components'
import {useResponsive} from '@/hooks'
import {Avatar, Box, Button, Drawer, Link, Stack, Typography} from '@mui/material'
import {alpha, styled} from '@mui/material/styles'
import {useEffect} from 'react'
import {useLocation} from 'react-router-dom'

import navConfig from './config'

const NAV_WIDTH = 280

const StyledAccount = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(2, 2.5),
  borderRadius: Number(theme.shape.borderRadius) * 1.5,
  background: alpha(theme.palette.grey[500], 0.12),
}))

export interface NavInterface {
  openNav: boolean
  onCloseNav: () => void
}

export default function Nav({openNav, onCloseNav}: NavInterface) {
  const {pathname} = useLocation()

  const isDesktop = useResponsive('up', 'lg')

  useEffect(() => {
    if (openNav) {
      onCloseNav()
    }
  }, [pathname])

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        '& .simplebar-content': {height: 1, display: 'flex', flexDirection: 'column'},
      }}
      children={
        <>
          <Box sx={{px: 2.5, py: 3, display: 'inline-flex'}}>
            <Logo disabledLink={null} sx={null} />
          </Box>

          <Box sx={{mb: 5, mx: 2.5}}>
            <Link underline='none'>
              <StyledAccount>
                <Avatar src={account.photoURL} alt='photoURL' />

                <Box sx={{ml: 2}}>
                  <Typography variant='subtitle2' sx={{color: 'text.primary'}}>
                    {account.displayName}
                  </Typography>

                  <Typography variant='body2' sx={{color: 'text.secondary'}}>
                    {account.role}
                  </Typography>
                </Box>
              </StyledAccount>
            </Link>
          </Box>

          <NavSection data={navConfig} />

          <Box sx={{flexGrow: 1}} />

          <Box sx={{px: 2.5, pb: 3, mt: 10}}>
            <Stack alignItems='center' spacing={3} sx={{pt: 5, borderRadius: 2, position: 'relative'}}>
              <Box component='img' src='/vite.svg' sx={{width: 100, position: 'absolute', top: -50}} />

              <Box sx={{textAlign: 'center'}}>
                <Typography gutterBottom variant='h6'>
                  Get more?
                </Typography>

                <Typography variant='body2' sx={{color: 'text.secondary'}}>
                  Get ready for a development environment that can finally catch up with you
                </Typography>
              </Box>

              <Button href='https://vitejs.dev' target='_blank' variant='contained'>
                Vite
              </Button>
            </Stack>
          </Box>
        </>
      }
    />
  )

  return (
    <Box
      component='nav'
      sx={{
        flexShrink: {lg: 0},
        width: {lg: NAV_WIDTH},
      }}>
      {isDesktop ? (
        <Drawer
          open
          variant='permanent'
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}>
          <>{renderContent}</>
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {width: NAV_WIDTH},
          }}>
          <>{renderContent}</>
        </Drawer>
      )}
    </Box>
  )
}
