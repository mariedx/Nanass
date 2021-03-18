import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export const siteTitle = 'Nanass'

const Layout = ({ children, home }) => {
  return (
    <div> 
      <nav className='flex items-center flex-wrap bg-green-300 p-3 '>
        
      </nav>
      <main>{children}</main>
    </div>
  )
}

export default Layout;
