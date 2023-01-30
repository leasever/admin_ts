import {SvgColor} from '@/components'

const icon = (name: string) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{width: 1, height: 1}} />

const navConfig = [
  {
    title: 'dashboard',
    path: '/private/dashboard',
    icon: icon('ic_analytics'),
    info: '',
  },
  {
    title: 'user',
    path: '/private/home',
    icon: icon('ic_user'),
    info: '',
  },
  {
    title: 'product',
    path: '/private/client',
    icon: icon('ic_cart'),
    info: '',
  },
  {
    title: 'blog',
    path: '/private/product',
    icon: icon('ic_blog'),
    info: '',
  },
  {
    title: 'login',
    path: '/login',
    icon: icon('ic_lock'),
    info: '',
  },
  {
    title: 'Not found',
    path: '/404',
    icon: icon('ic_disabled'),
    info: '',
  },
]

export default navConfig
