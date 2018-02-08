import React from 'react'
import Header from '../Header'
import Footer from '../Footer'

const HowItWorks = ({relative, isActive}) => {
  return (
    <div>
      <Header relative={relative} isActive={isActive} />
      <Footer relative={relative} isActive={isActive} />
    </div>
  )
}

export default HowItWorks
