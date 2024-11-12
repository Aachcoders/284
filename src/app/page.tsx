"use client"  
import AboutUs from "./components/Aboutus";
import styles from "./components/Navbar.module.css"
import React, { useState, useRef } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { 
  UilWhatsapp,
  UilRobot, 
  UilModem, 
  UilShield, 
  UilShoppingCart, 
  UilDatabase, 
  UilMobileAndroid, 
  UilCloud, 
  UilChartGrowth, 
  UilEnvelope, 
  UilFacebook, 
  UilInstagram,
  UilBitcoinCircle,
  UilAtom,
  UilBrowser, 
  IconProps,
} from '@iconscout/react-unicons';
import Link from 'next/link';
import "./styles.css"
import HomeSection from "./home";

// Interface definitions
interface ServiceItem {
  icon: React.FC<IconProps>;
  title: string;
  description: string;
  features: string[];
  link: string;
  ref: string;
}

interface Testimonial {
  name: string;
  company: string;
  quote: string;
  role: string;
  image: string;
  rating: number;
  date: string;
  projectType: string;
}



// Services Data with expanded information
const services: ServiceItem[] = [
  { 
    icon: UilRobot, 
    title: 'AI & Machine Learning', 
    description: 'Unlock the power of AI for automation, insights, and innovation.',
    features: [
      'Deep Learning Models',
      'Natural Language Processing ',
      'Predictive Analytics',
      'Computer Vision'
    ],ref:'/AI',
    link: '#ai-ml'
  },
  { 
    icon: UilModem, 
    title: 'Full-Stack Development', 
    description: 'End-to-end development for web, mobile, and software platforms.',
    features: [
      'Frontend Development',
      'Backend Development',
      'Database Management',
      'API Integration'
    ],ref:'/stack',
    link: '#full-stack'
  },
  { 
    icon: UilShield, 
    title: 'Cybersecurity', 
    description: 'Comprehensive security solutions to protect your digital assets.',
    features: [
      'Vulnerability Assessment',
      'Penetration Testing',
      'Incident Response',
      'Security Consulting'
    ],ref:'/security',
    link: '#cybersecurity'
  },
  { 
    icon: UilShoppingCart, 
    title: 'E-commerce Solutions', 
    description: 'Build modern, scalable online stores that drive sales and growth.',
    features: [
      'Custom E-commerce Development',
      'E-commerce Platform Integration',
      'Payment Gateway Integration',
      'Order Management System'
    ],ref:'/commerce',
    link: '#e-commerce'
  },
  { 
    icon: UilDatabase, 
    title: 'Big Data Analytics', 
    description: 'Harness the power of your data with advanced analytics tools.',
    features: [
      'Data Mining',
      'Predictive Modeling',
      'Data Visualization',
      'Business Intelligence'
    ],ref:'/data',
    link: '#big-data'
  },
  { 
    icon: UilMobileAndroid, 
    title: 'Mobile App Development', 
    description: 'Create stunning, high-performance apps for iOS and Android.',
    features: [
      'Native App Development',
      'Cross-Platform Development',
      'App Design',
      'App Testing'
    ],ref:'/mobile',
    link: '#mobile-app'
  },
  { 
    icon: UilCloud, 
    title: 'Cloud Migration', 
    description: 'Seamlessly transition your infrastructure to the cloud.',
    features: [
      'Cloud Assessment',
      'Cloud Migration Strategy',
      'Cloud Deployment',
      'Cloud Management'
    ],ref:'/cloud',
    link: '#cloud-migration'
  },
  { 
    icon: UilChartGrowth, 
    title: 'Digital Transformation', 
    description: 'Transform your business with comprehensive digital strategies.',
    features: [
      'Digital Strategy Development',
      'Digital Roadmap Creation',
      'Change Management',
      'Digital Adoption'
    ],ref:'/digital',
    link: '#digital-transformation'
  },
  { 
    icon: UilBitcoinCircle, 
    title: 'Blockchain Development', 
    description: 'Leverage blockchain technology for secure, decentralized solutions.',
    features: [
      'Smart Contract Development',
      'Decentralized App (DApp) Creation',
      'Cryptocurrency Integration',
      'Blockchain Consulting'
    ],ref:'/block',
    link: '#blockchain'
  },
  { 
    icon: UilRobot, 
    title: 'AR/VR Development', 
    description: 'Create immersive experiences with augmented and virtual reality.',
    features: [
      'AR/VR App Development',
      '3D Modeling and Animation',
      'Interactive Simulations',
      'Virtual Product Showcases'
    ],ref:'/AR',
    link: '#ar-vr'
  },
  { 
    icon: UilAtom, 
    title: 'IoT Solutions', 
    description: 'Connect and optimize your devices with Internet of Things technology.',
    features: [
      'IoT Device Integration',
      'IoT Platform Development',
      'Data Analytics for IoT',
      'IoT Security'
    ],ref:'/iot',
    link: '#iot'
  },
  { 
    icon: UilBrowser, 
    title: 'DevOps Services', 
    description: 'Streamline your development and operations with DevOps practices.',
    features: [
      'CI/CD Pipeline Implementation',
      'Infrastructure as Code',
      'Containerization (Docker, Kubernetes)',
      'Monitoring and Logging'
    ],ref:'/dev',
    link: '#devops'
  }
];

// Case Studies Data with expanded information


// Testimonials Data with expanded information
const testimonials: Testimonial[] = [
  { 
    name: 'John Doe', 
    company: 'Tech Solutions Inc.', 
    quote: 'Futuristic World has been instrumental in our digital transformation journey.',
    role: 'CEO',
    image: 'testimonial-1.jpg',
    rating: 4.5,
    date: 'February 10, 2023',
    projectType: 'Digital Transformation'
  },
  { 
    name: 'Jane Smith', 
    company: 'E-commerce Experts', 
    quote: 'Their expertise in AI and machine learning has helped us stay ahead of the competition.',
    role: 'CTO',
    image: 'testimonial-2.jpg',
    rating: 5,
    date: 'March 15, 2024',
    projectType: 'E-commerce Solutions'
  },
  { 
    name: 'Bob Johnson', 
    company: 'Innovative Startups', 
    quote: 'Futuristic World\'s team is highly skilled and dedicated to delivering exceptional results.',
    role: 'Founder',
    image: 'testimonial-3.jpg',
    rating: 4.5,
    date: 'April 20, 2024',
    projectType: 'Cybersecurity Solutions'
  },
];


function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    budget: '',
    message: '',
  });
  

  
  const [status, setStatus] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    try {
        const response = await fetch('/api/Contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        const data = await response.json();

        if (response.ok) {
            setStatus('Message sent successfully!');
            setFormData({
                name: '',
                email: '',
                phone: '',
                budget: '',
                message: '',
            });
            // Optional: Add success notification or UI feedback
        } else {
            setStatus(`Error: ${data.error || 'Failed to send message'}`);
            // Optional: Add error notification or UI feedback
        }
    } catch (error) {
        setStatus('An error occurred while sending the message.');
        console.error('Error:', error);
        // Optional: Add error notification or UI feedback
    } finally {
        // Optional: Reset status after a delay
        setTimeout(() => {
            setStatus('');
        }, 5000);
    }
};
  const [navExpanded, setNavExpanded] = useState(false);

  const servicesRef = useRef(null);
  const testimonialsRef = useRef(null);


  return (<>
    <NextUIProvider>
      
       <Navbar id="nav" expand="lg" className={`${styles.navbar} ${navExpanded ? styles.navExpanded : ''}`} fixed="top">
  <Container className="p-0">
    <Navbar.Brand href="#home" className={styles.logoContainer}>
      <div className={styles.futuristicLogo}>
        <span className={styles.logoText}>FUTURISTIC</span>
      </div>
    </Navbar.Brand>

    <Navbar.Toggle 
      aria-controls="basic-navbar-nav" 
      onClick={() => setNavExpanded(!navExpanded)}
      className={styles.navbarToggle}
    />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className={`ms-auto ${styles.navLinks} p-0 m-0`}>
        <Nav.Link href="/#" className={styles.navLink}>Home</Nav.Link>
        <Nav.Link href="/#about" className={styles.navLink}>About us</Nav.Link>
        <Nav.Link href="/#services" className={styles.navLink}>Services</Nav.Link>
         <Button onClick={() => window.location.href = "/#contact-us"} className={styles.navLink} >GET IN TOUCH</Button>

      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
      
<HomeSection/>
      <section id="services" ref={servicesRef} className={styles.services}>
  <Container>
    <Row className="mb-5">
      <Col lg={12} className="text-center">
        <h2 className={`${styles.sectionHeading} color-white`} >Our Services</h2>
        <div className={styles.headingUnderline}></div>
      </Col>
    </Row>
    <Row>
      {services.map((service, index) => (
        <Col lg={3} key={index}>
          <Card className={styles.serviceCard}>
            <Card>
              <div className={styles.serviceIcon} 
                style={{filter: `invert(1)`}}
              >
                <service.icon size={40} />
              </div>
              <Card className={styles.serviceTitle}>{service.title}</Card>
              <Card className={styles.serviceDescription}>{service.description}</Card>
              <ul className={styles.serviceFeatures}>
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                  
                ))}<Link href={service.ref} className={styles.learnMoreLink} 
                style={{color: '#C8F018'}}
                >
               Learn More</Link>
              </ul>
            </Card>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
</section>



<section id="testimonials" ref={testimonialsRef} className={styles.testimonials}>
  <Container>
    <Row className="mb-1">
      <Col lg={12} className="text-center">
        <h2 className={styles.sectionHeading}>Client Testimonials</h2>
      </Col>
    </Row>
    <Row>
      {testimonials.map((testimonial, index) => (
        <Col lg={4} key={index}>
          <Card className={styles.testimonialCard}>
            <Card>
              <div className={styles.testimonialQuote}>&quot;{testimonial.quote}&quot;</div>
              <div className={styles.testimonialAuthor}>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.role} at {testimonial.company}</p>
              </div>
            
            </Card>
          </Card>
        </Col>
      ))}
    </Row>
   
        <AboutUs/>
  </Container></section><div id="contact-us"className={styles.contactContainer}>
  <h2 className={`${styles.sectionHeading} color-white text-center`} >Our Services</h2>

      <form onSubmit={handleSubmit} className={`${styles.contactForm} MaxWidthHere`}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Your Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <input
          type="text"
          name="budget"
          placeholder="Your Budget"
          value={formData.budget}
          onChange={handleChange}
          required
          className={styles.contactInput}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
          className={styles.contactTextarea}
        />
        <button type="submit" className={styles.contactButton}>Send Message</button>
      </form>
      {status && <p className={styles.status}>{status}</p>}
      
    </div>
    <footer className={styles.footer}>
  <Container>
    <Row>
      {/* About Us Section */}
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.sectionHeading}>About Us</h5>
        <p className={styles.footerText}>
          Futuristic World is a leading provider of AI, machine learning, and digital transformation solutions.
        </p>
      </Col>

      {/* Get in Touch Section */}
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>Get in Touch</h5>
        <ul className={styles.footerList}>
          <li>
            <UilWhatsapp size={20} className={styles.footerIcon} />
            <a href="https://wa.me/+917859006724" target="_blank" rel="noopener noreferrer">
              +91 7859006724
            </a>
          </li>
          <li>
            <UilEnvelope size={20} className={styles.footerIcon} />
            <a href="mailto:sales@futuristiccreations.tech">sales@futuristiccreations.tech</a>
          </li>
        </ul>
      </Col>

      {/* Follow Us Section */}
      <Col lg={4} className={styles.footerColumn}>
        <h5 className={styles.footerHeading}>Follow Us</h5>
        <ul className={styles.footerList}>
          <li>
            <UilFacebook size={20} className={styles.footerIcon} />
            <a href="Currentlly unavailable" target="_blank" rel="noopener noreferrer">
              Facebook(Currently unavailable)
            </a>
          </li>
          <li>
            <UilInstagram size={20} className={styles.footerIcon} />
            <a href="https://www.instagram.com/futu.ristic498/" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </Col>
    </Row>

    <Row>
      <Col lg={12} className={styles.footerCopyright}>
        <p>&copy; 2024 Futuristic World. All rights reserved.</p>
      </Col>
    </Row>
  </Container>
</footer>

</NextUIProvider></>

  );
  };

export default App;
