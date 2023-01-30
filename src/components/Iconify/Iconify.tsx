import {Icon} from '@iconify/react'
import {Box, Skeleton, SxProps, Theme} from '@mui/material'
import {forwardRef, useState} from 'react'

export interface IconifyInterface {
  icon: string
  width?: number
  height?: number
  sx?: SxProps<Theme>
  color?: string
  other?: any
}

const Iconify: React.FC<IconifyInterface> = forwardRef(({icon, width, height, sx, ...other}, ref) => {
  const [loaded, setLoaded] = useState(true)

  const BoxIcon = () => {
    return (
      <Box
        ref={ref}
        component={Icon}
        icon={icon}
        sx={{width, height, ...sx}}
        {...other}
        onLoad={() => setLoaded(false)}
      />
    )
  }
  return (
    <>
      {loaded ? (
        <Skeleton variant='circular' width={width} height={height}>
          <BoxIcon />
        </Skeleton>
      ) : (
        <BoxIcon />
      )}
    </>
  )
})
export default Iconify
