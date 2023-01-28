import {Iconify} from '@/components'
import {useFetchAndLoad} from '@/hooks'
import {PrivateRoutes, PublicRoutes} from '@/models'
import {createUser, resetUser, UserKey} from '@/redux/states/user'
import {login} from '@/services'
import {clearLocalStorage} from '@/utilities'
import {LoadingButton} from '@mui/lab'
import {Box, IconButton, InputAdornment, Stack, TextField} from '@mui/material'
import {useEffect, useState} from 'react'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'

export interface LoginFormInterface {}

const LoginForm: React.FC<LoginFormInterface> = () => {
  const [showPassword, setShowPassword] = useState(false)
  const {loading, callEndpoint} = useFetchAndLoad()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    clearLocalStorage(UserKey)
    dispatch(resetUser())
    navigate(`/${PublicRoutes.LOGIN}`, {replace: true})
  }, [])

  const handleSubmit = async () => {
    if (email && password) {
      const {data} = await callEndpoint(login(email, password))
      if (data) {
        dispatch(createUser({...data}))
        navigate(`/${PrivateRoutes.PRIVATE}`, {replace: true})
      }
    }
  }

  return (
    <Box component='form' sx={{mt: 1}}>
      <Stack spacing={3}>
        <TextField name='email' label='Email address' onChange={(e) => setEmail(e.target.value)} />
        <TextField
          name='password'
          label='Password'
          onChange={(e) => setPassword(e.target.value)}
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton
                  onClick={() => setShowPassword(!showPassword)}
                  title={showPassword ? 'hide' : 'show'}
                  sx={{
                    width: 40,
                  }}>
                  <Iconify icon={showPassword ? 'eva:eye-off-fill' : 'eva:eye-fill'} height={30} width={30} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <LoadingButton fullWidth size='large' loading={loading} variant='contained' onClick={handleSubmit}>
          Login
        </LoadingButton>
      </Stack>
    </Box>
  )
}

export default LoginForm
