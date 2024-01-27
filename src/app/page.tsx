import CreateTask from '@/components/organism/createTask/CreateTask'
import Header from '@/components/organism/header/Header'
import MainSection from '@/components/organism/mainSection/MainSection'

export default function Home() {
  return (
    <>
      <Header />
      <CreateTask />
      <MainSection />
    </>
  )
}
