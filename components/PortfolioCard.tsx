import React from 'react'
import Image from 'next/image'

const PortfolioCard = () => {
  return (
    <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700">
      <a href="#">
        <Image alt='' className="rounded-t-lg" src="/static/helloibe.png" />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Helloibe.com 2025</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">First personal website doing all the html and css with nextjs and tailwindcss</p>
      </div>
    </div>
  )
}

export default PortfolioCard