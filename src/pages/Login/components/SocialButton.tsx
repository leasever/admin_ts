import {Button} from '@mui/material'

interface SocialButtonInterface {
  props: React.ReactNode
  title: string
}

const SocialButton: React.FC<SocialButtonInterface> = ({props, title}) => {
  return (
    <Button
      fullWidth
      size='large'
      color='inherit'
      variant='outlined'
      title={title}
      sx={{
        height: 50,
      }}>
      {props}
    </Button>
  )
}
export default SocialButton
