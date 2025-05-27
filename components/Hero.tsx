import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-full text-second top-15 relative heroElem flex pt-40 pb-40 m-auto justify-center text-center flex-col z-1'
      style={{ maxWidth: "1200px" }}
    >
      <h1 className="heroTitle inline-block text-5xl md:text-6xl w-auto relative lg:text-7xl tracking-tighter items-center mb-10 font-medium">
        <span className='text-primary'>{'>'}</span> Hello, ibe is <span className="text-primary">me</span>
        <Image
          alt=''
          className="sqD squiggle-hero-html w-16 top-[-90px] right-[5%] sm:top-[-90px] sm:right-[170px]"
          style={{ animationDelay: "0.1s" }}
          src="/static/commandline.svg"
        />
        <Image
          alt=''
          className="sqD bottom-[-320px] right-[65%] sm:right-[45%]"
          style={{ animationDelay: "0.6s" }}
          src="/static/commandline.svg"
          width={150}
        />
        <Image
          alt=''
          className="sqD right-[-60px] sm:right-0 bottom-[-180px] lg:[5%]"
          style={{ animationDelay: "0.7s" }}
          src="/static/mysqllogo.svg"
          width={90}
        />
        <Image
          alt=''
          className="sqD squiggle-hero-pop1 hidden sm:block sm:top-[-130px] sm:left-[15%] lg:top-[-130px] lg:left-[120px]"
          src="/static/go_2.svg"
          width={150}
        />
        <Image
          alt=''
          className="sqD left-[-35px] bottom-[-85px] sm:bottom-[-100px] sm:left-5 opacity-40"
          style={{ animationDelay: "0.9s" }}
          src="/static/typescript.svg"
          width={170}
        />
      </h1>
      <h2>I build robust backend systems with clean architecture and strong
        observability.</h2>
      <h2>Over 8 years of experience engineering scalable solutions that just
        work.</h2>
      <a className="cursor-pointer hover:text-primary pt-10"><span className='text-primary'>{'{' }</span>my experiments<span className='text-primary'>{'}'}</span></a>
    </div>
  )
}

export default Hero