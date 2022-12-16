
import { Inter } from '@next/font/google'
import Landing from '../components/Landing/Landing'
import Navbar from '../components/Navbar/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className="bg-landing w-full h-screen bg-[length:1800px_1030px] bg-blend-multiply bg-black/20 bg-no-repeat">
      <Landing />
    </div>
  )
}
