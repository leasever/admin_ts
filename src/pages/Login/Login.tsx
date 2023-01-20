import reactLogo from '@/assets/react.svg'
import {Iconify} from '@/components/Iconify'
import useResponsive from '@/hooks/useResponsive'
import {LoginForm} from '@/sections/auth'
import {Container, Divider, Stack, Typography} from '@mui/material'
import {SocialButton} from './components'
import {StyledContent, StyledRoot, StyledSection} from './styled'

export interface LoginInterface {}

const Login: React.FC<LoginInterface> = () => {
  const mdUp = useResponsive('up', 'md')

  return (
    <StyledRoot>
      {mdUp && (
        <StyledSection>
          <Typography variant='h3' sx={{px: 5, mt: 10, mb: 5}}>
            Hi, Welcome Back
          </Typography>

          <a href='https://vitejs.dev' target='_blank'>
            <img src='/vite.svg' className='logo' alt='Vite logo' />
          </a>
          <a href='https://reactjs.org' target='_blank'>
            <img src={reactLogo} className='logo react' alt='React logo' />
          </a>
        </StyledSection>
      )}

      <Container maxWidth='sm'>
        <StyledContent>
          <Typography variant='h4' gutterBottom>
            Sign in
          </Typography>

          <Stack direction='row' spacing={2}>
            <SocialButton>
              <Iconify icon='eva:google-fill' height={30} width={22} color='#DF3E30' />
              Google
            </SocialButton>
            <SocialButton>
              <Iconify icon='eva:facebook-fill' height={30} width={22} color='#1877F2' />
              Facebook
            </SocialButton>
            <SocialButton>
              <Iconify icon='eva:twitter-fill' height={30} width={22} color='#1C9CEA' />
              Twitter
            </SocialButton>
          </Stack>

          <Divider sx={{my: 3}}>
            <Typography variant='body2' sx={{color: 'text.secondary'}}>
              OR
            </Typography>
          </Divider>

          <LoginForm />
        </StyledContent>
      </Container>
    </StyledRoot>
  )
}

export default Login
