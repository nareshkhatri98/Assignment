import React from 'react'
import Navbar from './components/Navbar'
import LeftSidebar from './components/LeftSidebar/LeftSidebar'
import RightSidebar from './components/RightSidebar/RightSidebar'
import MiddleContainer from './components/MainContainer/MiddleContainer'


const App = () => {
  return (
    <div>
      <Navbar />
      <div className='flex mobileView'>

      <LeftSidebar />
      <MiddleContainer />
     
      <RightSidebar /> 
      </div>
    </div>
  )
}

export default App