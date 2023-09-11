import React from 'react'
import { servicesData } from '../../data'


const Services = () => {
    return (
        <section id="services">
          <h2>Our Services</h2>
          {servicesData.map((serviceItem, index) => (
            <div key={index}>
              <h3>{serviceItem.category}</h3>
              <p>{serviceItem.service}</p>
              {/* <p>{serviceItem.price}</p> */}
            </div>
          ))}
        </section>
      )
}


export default Services