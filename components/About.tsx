import React from 'react'
import SectionTitle from './SectionTitle'

const About = () => {
  return (
    <div className='flex flex-col text-left justify-between pt-8 relative'>
      <SectionTitle title='here is little things about me.'/>
      <p><span className='text-primary'>{'>'}</span> I’m a backend engineer with over 8 years of experience building scalable
        and modular software.</p>
      <p><span className='text-primary'>{'>'}</span> I specialize in clean architecture and writing maintainable, testable
        code.</p>
      <p><span className='text-primary'>{'>'}</span> I also implement monitoring and logging solutions to ensure system
        reliability and observability.</p>
      <p><span className='text-primary'>{'>'}</span> I’m a backend engineer with over 8 years of experience building scalable
        and modular software.</p>
      <p><span className='text-primary'>{'>'}</span> Currently exploring new ideas and building cool stuff at helloibe.com.</p>
      <div className="experience mt-10">
        <div className="experience-entry pb-10">
          <h3><span className='text-primary'>{'>'} </span>PT. Skyshi Digital (1.5 years)</h3>
          <p>Working with a team to build application for many clients, handle a few redux technologies and mostly doing backend stuff REST Api stuff</p>
          <span className='text-primary'>Nodejs, Reactjs, Mysql</span>
        </div>
        <div className="experience-entry pb-10">
          <h3><span className='text-primary'>{'>'} </span>PT. Bukalapak (4.5 years)</h3>
          <p>Handle supply chain of warehouse of online-to-offline goods, make sure all the stock in warehouse is in place. Create monitor and alerting to early detect some defect data or flow in stock</p>
          <span className='text-primary'>Reactjs, Mysql, Ruby on rails, Golang, Google Cloud Project, Datadog</span>
        </div>
        <div className="experience-entry">
          <h3><span className='text-primary'>{'>'} </span>Allofresh (2 years - still active)</h3>
          <p>Make sure stock, price and promo reliability by sync between two organizations, also doing integration with a lot of vendor to handle warehouse managemen and ERP</p>
          <span className='text-primary'>Reactjs, Mysql, Postgre, Golang, Google Cloud Project, Kafka, Datadog</span>
        </div>
      </div>
    </div>
  )
}

export default About