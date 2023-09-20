'use client'

import NavBar from "@/components/NavBar"
import  Footer  from "@/components/Footer"

const dashboard = () => {
  return (
    <>
      <NavBar />
      <div className="">
        <p className="text-2xl text-center">User Dashboard</p>
      </div>
      <Footer />
    </>
    
  )
}

export default dashboard