import {memo} from 'react'
import {Box, SxProps, Theme} from '@mui/material'
import {StyledRootScrollbar, StyledScrollbar} from './styles'

interface ScrollbarInterface {
  sx: SxProps<Theme>
  children: React.ReactNode
  other?: Object
  timeout?: number
}

const Scrollbar: React.FC<ScrollbarInterface> = ({children, sx, ...other}) => {
  const userAgent = typeof navigator === 'undefined' ? 'SSR' : navigator.userAgent

  const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)

  if (isMobile) {
    return (
      <Box sx={{overflowX: 'auto', ...sx}} {...other}>
        {children}
      </Box>
    )
  }

  return (
    <StyledRootScrollbar>
      <StyledScrollbar timeout={500} clickOnTrack={false} sx={sx} {...other}>
        {children}
      </StyledScrollbar>
    </StyledRootScrollbar>
  )
}

export default memo(Scrollbar)
