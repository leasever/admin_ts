import {Logout} from '@/components'

export interface HomeInterface {}

const Home: React.FC<HomeInterface> = () => {
  return (
    <>
      <div>Home</div>
      <Logout />
    </>
  )
}

export default Home
