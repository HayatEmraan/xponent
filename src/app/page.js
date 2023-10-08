
import Blogs from '@/components/homepage/Blogs'
import Navbar from '@/components/homepage/Navbar'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
<Navbar></Navbar>
<Blogs></Blogs>
    

    </main>
  )
}
