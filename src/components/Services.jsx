import React from 'react';
import '../styles/Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions to optimize your business operations and enhance security.',
      icon: 'cloud'
    },
    {
      id: 2,
      title: 'Website Designing',
      description: 'Custom website designs that captivate your audience and drive conversions.',
      icon: 'web'
    },
    {
      id: 3,
      title: 'Mobile Applications',
      description: 'Intuitive mobile apps that provide seamless experiences across all devices.',
      icon: 'mobile'
    },
    {
      id: 4,
      title: 'Custom Software',
      description: 'Tailored software solutions designed to address your unique business challenges.',
      icon: 'software'
    }
  ];

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">Comprehensive digital solutions for your business needs</p>
        
        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon === 'cloud' && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M4.5 10.5C3.675 10.5 3 11.175 3 12S3.675 13.5 4.5 13.5H19.5C20.325 13.5 21 12.825 21 12S20.325 10.5 19.5 10.5H4.5ZM4.5 7.5C2.01 7.5 0 9.51 0 12S2.01 16.5 4.5 16.5H19.5C21.99 16.5 24 14.49 24 12S21.99 7.5 19.5 7.5H4.5Z" />
                  </svg>
                )}
                {service.icon === 'web' && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM4 9H20V18H4V9ZM20 8H4V6H20V8ZM13 15H17V13H13V15ZM9 15H12V13H9V15ZM5 15H8V13H5V15Z" />
                  </svg>
                )}
                {service.icon === 'mobile' && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 1.01L7 1C5.9 1 5 1.9 5 3V21C5 22.1 5.9 23 7 23H17C18.1 23 19 22.1 19 21V3C19 1.9 18.1 1.01 17 1.01ZM17 19H7V5H17V19ZM12 21C12.83 21 13.5 20.33 13.5 19.5C13.5 18.67 12.83 18 12 18C11.17 18 10.5 18.67 10.5 19.5C10.5 20.33 11.17 21 12 21Z" />
                  </svg>
                )}
                {service.icon === 'software' && (
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9.4 16.6L4.8 12L9.4 7.4L8 6L2 12L8 18L9.4 16.6ZM14.6 16.6L19.2 12L14.6 7.4L16 6L22 12L16 18L14.6 16.6Z" />
                  </svg>
                )}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;