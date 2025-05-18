import React from 'react'
import SectionTitle from './SectionTitle'
import PortfolioCard from './PortfolioCard'

const Portfolio = () => {
  return (
    <div className='flex flex-col text-left justify-between pt-8 relative'>
      <SectionTitle title='i experiment in some areas.'/>
      <div className='p-5'>
        <PortfolioCard />
      </div>
    </div>
  )
}

export default Portfolio