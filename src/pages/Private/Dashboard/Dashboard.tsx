import { ComponentTest, ComponentTest2 } from './components'

export interface DashboardInterface {}
const Dashboard: React.FC<DashboardInterface> = () => {
  return (
    <>
      <h1>Dashboard</h1>
      <ComponentTest2 />
      <ComponentTest />
    </>
  )
}

export default Dashboard
