"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import styles from "./ecommerce.module.css"; // Create a corresponding CSS module
import {
  UilShoppingCart,
  UilChart,
  UilShield,
  UilDatabase,
  UilCloud,
  UilUser   
} from '@iconscout/react-unicons';

// Interface Definitions
interface ECommerceService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface ECommerceProjectCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface ECommerceFAQ {
  question: string;
  answer: string;
}

// E-commerce Services Data
const ecommerceServices: ECommerceService[] = [
  {
    icon: UilShoppingCart,
    title: "Online Store Development",
    description: "Build robust and scalable online stores tailored to your business needs.",
    technologies: [
      "Shopify", 
      "WooCommerce", 
      "Magento", 
      "Custom Solutions"
    ]
  },
  {
    icon: UilChart,
    title: "E-commerce Analytics",
    description: "Leverage data to drive sales and improve customer experience.",
    technologies: [
      "Google Analytics", 
      "A/B Testing", 
      "Conversion Rate Optimization"
    ]
  },
  {
    icon: UilShield,
    title: "Payment Gateway Integration",
    description: "Secure and seamless payment processing solutions.",
    technologies: [
      "Stripe", 
      "PayPal", 
      "Square", 
      "Custom Payment Solutions"
    ]
  },
  {
    icon: UilDatabase,
    title: "Inventory Management",
    description: "Efficiently manage your inventory and supply chain.",
    technologies: [
      "Real-time Tracking", 
      "Automated Reordering", 
      "Reporting Tools"
    ]
  },
  {
    icon: UilCloud,
    title: "Cloud Hosting Solutions",
    description: "Reliable and scalable hosting for your e-commerce platform.",
    technologies: [
      "AWS", 
      "Azure", 
      "Google Cloud"
    ]
  },
  {
    icon: UilUser ,
    title: "Customer Relationship Management",
    description: "Enhance customer engagement and retention.",
    technologies: [
      "CRM Integration", 
      "Email Marketing", 
      "Loyalty Programs"
    ]
  }
];

// Project Case Studies
const ecommerceProjectCases: ECommerceProjectCase[] = [
  {
    title: "Fashion E-commerce Platform",
    industry: "Retail",
    challenge: "High cart abandonment rates and low conversion.",
    solution: "Implemented a user-friendly interface and optimized checkout process.",
    results: [
      "25% increase in conversion rates",
      "30% reduction in cart abandonment",
      "Enhanced user experience"
    ],
    techStack: ["Shopify", "Google Analytics", "Stripe"]
  },
  {
    title: "Grocery Delivery Service",
    industry: "Food & Beverage",
    challenge: "Need for real-time inventory management.",
    solution: "Developed a custom inventory management system integrated with the e-commerce platform.",
    results: [
      "Improved inventory accuracy by 40%",
      "Reduced stockouts by 50%",
      "Increased customer satisfaction"
    ],
    techStack: ["Custom Solution", "AWS", "Real-time Tracking"]
  }
];

// FAQ Data
const ecommerceFAQs: ECommerceFAQ[] = [
  {
    question: "What e-commerce platforms do you work with?",
    answer: "We specialize in various platforms including Shopify, WooCommerce, Magento, and can also develop custom solutions tailored to your needs."
  },
  {
    question: "How do you ensure the security of online transactions?",
    answer: "We implement industry-standard security measures including SSL certificates, secure payment gateways, and regular security audits."
  },
  {
    question: "Can you help with digital marketing for my e-commerce store?",
    answer: "Yes, we offer digital marketing services including SEO, PPC, and social media marketing to help drive traffic to your store."
  },
  {
    question: "Do you provide ongoing support after the project is completed?",
    answer: "Absolutely! We offer maintenance and support packages to ensure your e-commerce platform runs smoothly."
  }
];

const ECommerceSolutionsPage = () => {
  const [activeCase, setActiveCase] = useState<number>(0 );

  return (<>
    <NextUIProvider>
      <Container className={styles.ecommerceContainer}>
        {/* Hero Section */}
        <div className={styles.heroSection}>
          <h1 className={styles.heroTitle}>E-Commerce Solutions</h1>
          <p className={styles.heroSubtitle}>Transforming your online business with innovative solutions.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </div>

        {/* Services Section */}
        <div className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {ecommerceServices.map((service, index) => (
              <Col key={index} md={4}>
                <Card className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    {React.createElement(service.icon)}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <p><strong>Technologies:</strong> {service.technologies.join(', ')}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>

        {/* Case Studies Section */}
        <div className={styles.caseStudiesSection}>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <div className={styles.caseStudyNav}>
            {ecommerceProjectCases.map((project, index) => (
              <Button
                key={index}
                className={`${styles.caseStudyButton} ${activeCase === index ? 'active' : ''}`}
                onClick={() => setActiveCase(index)}
              >
                {project.title}
              </Button>
            ))}
          </div>
          <Card className={styles.caseStudyCard}>
            <h3>{ecommerceProjectCases[activeCase].title}</h3>
            <p><strong>Industry:</strong> {ecommerceProjectCases[activeCase].industry}</p>
            <p><strong>Challenge:</strong> {ecommerceProjectCases[activeCase].challenge}</p>
            <p><strong>Solution:</strong> {ecommerceProjectCases[activeCase].solution}</p>
            <p><strong>Results:</strong></p>
            <ul>
              {ecommerceProjectCases[activeCase].results.map((result, index) => (
                <li key={index}>{result}</li>
              ))}
            </ul>
            <p><strong>Tech Stack:</strong> {ecommerceProjectCases[activeCase].techStack.join(', ')}</p>
          </Card>
        </div>

        {/* FAQ Section */}
        <div className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          {ecommerceFAQs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <p className={styles.question}>{faq.question}</p>
              <p className={styles.answer}>{faq.answer}</p>
            </div>
          ))}
        </div>
        <Card className={styles.caseStudyCard}>
            <h3>{ecommerceProjectCases[activeCase].title}</h3>
            <p><strong>Industry:</strong> {ecommerceProjectCases[activeCase].industry}</p>
            <p><strong>Challenge:</strong> {ecommerceProjectCases[activeCase].challenge}</p>
            <p><strong>Solution:</strong> {ecommerceProjectCases[activeCase].solution}</p>
            <p><strong>Results:</strong> {ecommerceProjectCases[activeCase].results.join(', ')}</p>
            <p><strong>Tech Stack:</strong> {ecommerceProjectCases[activeCase].techStack.join(', ')}</p>
          </Card>
        
        <Row className={styles.ctaSection}>
          <Col>
            <h2 className={styles.sectionTitle}>Ready to Elevate Your E-Commerce Business?</h2><Link href="/#contact">
            <Button className={styles.ctaButton}
            onClick={() => window.location.href = "/#contact-us"}>Contact Us Today</Button></Link>
          </Col>
        </Row>
      </Container>
    </NextUIProvider> 
          </>
  );
};

export default ECommerceSolutionsPage;

