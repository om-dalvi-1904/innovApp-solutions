import React, { useState } from 'react';
import '../styles/Testimonials.css';

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      company: 'TechGrowth Inc.',
      text: 'InnovApp Solutions transformed our outdated systems into a streamlined digital ecosystem. Their cloud services have significantly improved our operational efficiency.',
      avatar: 'https://randomuser.me/api/portraits/women/32.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      company: 'Retail Innovations',
      text: 'The mobile application developed by InnovApp Solutions has revolutionized how we engage with our customers. The user experience is intuitive and the design is exceptional.',
      avatar: 'https://randomuser.me/api/portraits/men/45.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      company: 'Global Finance',
      text: 'Working with InnovApp Solutions on our custom software needs was a game-changer. Their team understood our requirements perfectly and delivered beyond our expectations.',
      avatar: 'https://randomuser.me/api/portraits/women/68.jpg'
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="testimonials" id="testimonials">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>
        <p className="section-subtitle">Success stories from businesses we've helped</p>
        
        <div className="testimonial-slider">
          <button className="slider-arrow prev" onClick={prevTestimonial}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M15.41 7.41L14 6L8 12L14 18L15.41 16.59L10.83 12L15.41 7.41Z" />
            </svg>
          </button>
          
          <div className="testimonial-container">
            {testimonials.map((testimonial, index) => (
              <div 
                className={`testimonial-card ${index === activeIndex ? 'active' : ''}`} 
                key={testimonial.id}
                style={{ transform: `translateX(${(index - activeIndex) * 100}%)` }}
              >
                <div className="testimonial-content">
                  <div className="quote-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6 17H9L11 13V7H5V13H8L6 17ZM14 17H17L19 13V7H13V13H16L14 17Z" />
                    </svg>
                  </div>
                  <p className="testimonial-text">{testimonial.text}</p>
                  <div className="testimonial-author">
                    <img src={testimonial.avatar} alt={testimonial.name} className="author-avatar" />
                    <div className="author-info">
                      <h4>{testimonial.name}</h4>
                      <p>{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <button className="slider-arrow next" onClick={nextTestimonial}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M8.59 16.59L10 18L16 12L10 6L8.59 7.41L13.17 12L8.59 16.59Z" />
            </svg>
          </button>
        </div>
        
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              className={`dot ${index === activeIndex ? 'active' : ''}`}
              onClick={() => setActiveIndex(index)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;