import {useState} from 'react'
import {Outlet} from 'react-router-dom'
import Header from './header'
import Nav from './nav'
import {Main, StyledRoot} from './styles'

export default function DashboardLayout() {
  const [open, setOpen] = useState(false)

  return (
    <StyledRoot>
      <Header onOpenNav={() => setOpen(true)} />
      <Nav openNav={open} onCloseNav={() => setOpen(false)} />
      <Main>
        <Outlet />
      </Main>
    </StyledRoot>
  )
}
