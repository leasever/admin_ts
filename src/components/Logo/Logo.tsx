import reactLogo from '@/assets/react.svg'
import {Box, Link, SxProps, Theme} from '@mui/material'
import {forwardRef} from 'react'
import {Link as RouterLink} from 'react-router-dom'

export interface LogoInterface {
  disabledLink: boolean | null
  sx: SxProps<Theme>
}

const Logo = forwardRef(({disabledLink = false, sx, ...other}: LogoInterface, ref) => {
  const logo = <Box component='img' src={reactLogo} sx={{width: 40, height: 40, cursor: 'pointer', ...sx}} />

  if (disabledLink) {
    return <>{logo}</>
  }

  return (
    <Link to='/' component={RouterLink} sx={{display: 'contents'}}>
      {logo}
    </Link>
  )
})
export default Logo
