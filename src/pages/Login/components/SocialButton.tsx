import {Button} from '@mui/material'

export interface SocialButtonInterface {}

const SocialButton: React.FC<SocialButtonInterface> = (props: any) => {
  return (
    <Button
      fullWidth
      size='large'
      color='secondary'
      variant='outlined'
      title={`${props.children[1]}`}
      sx={{
        height: 50,
      }}>
      {props.children[0]}
    </Button>
  )
}
export default SocialButton
