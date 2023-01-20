import {styled} from '@mui/material'

export const StyledRoot = styled('div')(({theme}) => ({
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '0',
  margin:'0'
}))

export const StyledSection = styled('div')(({theme}) => ({
  width: '100%',
  maxWidth: 480,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  backgroundColor: theme.palette.background.default,
}))

export const StyledContent = styled('div')(({theme}) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
}))
