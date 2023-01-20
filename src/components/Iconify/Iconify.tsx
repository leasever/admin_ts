import {Icon} from '@iconify/react'
import {Box} from '@mui/material'
import {forwardRef} from 'react'

export interface IconifyInterface {
  icon: string
  width?: number
  height?: number
  sx?: object
  color?: string
  other?: any
}

const Iconify: React.FC<IconifyInterface> = forwardRef(({icon, width, height, sx, ...other}, ref) => <Box ref={ref} component={Icon} icon={icon} sx={{width, height, ...sx}} {...other} />)
export default Iconify
