import React from 'react';
import { servicesData } from '../../data';
import styles from './Services.module.scss';

const Services = () => {
  return (
    <section className={styles.services}>
      {servicesData.map((serviceItem, index) => (
        <div className={styles.service} key={index}>
          <h3 className={styles.serviceItem}>{serviceItem.service}</h3>
          <div id="mySpecialDiv">
          <p className={styles.serviceDescription}>{serviceItem.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Services;
