
import { Inter } from '@next/font/google'
import Landing from '../components/Landing/Landing'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-landing  w-full h-screen md:bg-center bg-cover  bg-blend-multiply md:bg-black/20 bg-black/40 bg-no-repeat">
      <Landing />
    </div>
  )
}
