"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./digital.module.css"; // Import your CSS module
import {
  UilSync,
  UilMobileAndroid,
  UilDatabase,
  UilCloud,
  UilShield,
  UilChart
} from '@iconscout/react-unicons';

// Interface Definitions
interface TransformationService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface TransformationCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface TransformationFAQ {
  question: string;
  answer: string;
}

// Transformation Services Data
const transformationServices: TransformationService[] = [
  {
    icon: UilSync,
    title: "Process Automation",
    description: "Streamline operations through automation and efficiency.",
    technologies: [
      "Robotic Process Automation", 
      "Workflow Automation", 
      "Business Process Management"
    ]
  },
  {
    icon: UilMobileAndroid,
    title: "Mobile Solutions",
    description: "Develop mobile applications to enhance customer engagement.",
    technologies: [
      "iOS Development", 
      "Android Development", 
      "Cross-Platform Solutions"
    ]
  },
  {
    icon: UilDatabase,
    title: "Data Analytics",
    description: "Leverage data to drive insights and decision-making.",
    technologies: [
      "Business Intelligence", 
      "Data Visualization", 
      "Predictive Analytics"
    ]
  },
  {
    icon: UilCloud,
    title: "Cloud Migration",
    description: "Transition to cloud infrastructure for scalability and flexibility.",
    technologies: [
      "AWS", 
      "Azure", 
      "Google Cloud"
    ]
  },
  {
    icon: UilShield,
    title: "Cybersecurity",
    description: "Protect your digital assets with robust security measures.",
    technologies: [
      "Threat Detection", 
      "Data Protection", 
      "Compliance Management"
    ]
  },
  {
    icon: UilChart,
    title: "Digital Strategy",
    description: "Craft a comprehensive digital strategy for your business.",
    technologies: [
      "Digital Marketing", 
      "Customer Experience", 
      "Change Management"
    ]
  }
];

// Transformation Case Studies
const transformationCases: TransformationCase[] = [
  {
    title: "Retail Digital Transformation",
    industry: "Retail",
    challenge: "Enhancing customer experience in a competitive market.",
    solution: "Implemented an omnichannel strategy with mobile and web integration.",
    results: [
      "25% increase in customer engagement",
      "30% growth in online sales",
      "Improved customer satisfaction scores"
    ],
    techStack: ["React", "Node.js", "AWS", "Salesforce"]
  },
  {
    title: "Manufacturing Process Automation",
    industry: "Manufacturing",
    challenge: "Inefficient production processes leading to delays.",
    solution: "Automated key processes using RPA and IoT solutions.",
    results: [
      "40% reduction in production time",
      "20% decrease in operational costs",
      "Enhanced product quality"
    ],
    techStack: ["RPA", "IoT", "Data Analytics", "Cloud Services"]
  }
];

// FAQ Data
const transformationFAQs: TransformationFAQ[] = [
  {
    question: "What is digital transformation?",
    answer: "Digital transformation is the integration of digital technology into all areas of a business, fundamentally changing how you operate and deliver value to customers."
  },
  {
    question: "How can digital transformation benefit my business?",
    answer: "It can improve efficiency, enhance customer experience, drive innovation, and create new revenue streams."
  },
  {
    question: "What technologies do you use for digital transformation?",
    answer: "We utilize a range of technologies including cloud computing, data analytics, mobile solutions, and automation tools."
  },
  {
    question: "Do you provide ongoing support after implementation?",
    answer: "Yes, we offer continuous support and optimization services to ensure your digital transformation is successful."
  }
];

const DigitalTransformationPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (<>
    <NextUIProvider>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container className={styles.container}>
          <h1 className={styles.heroTitle}>Transform Your Business Digitally</h1>
          <p className={styles.heroSubtitle}>
            Embrace the future with our comprehensive digital transformation services.
          </p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </Container>
      </section>

      {/* Services Section */}
  
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {transformationServices.map((service, index) => (
              <Col key={index} md={4}>
                <Card className={styles.serviceCard}>
                <div className={styles.serviceIcon}>
                    {React.createElement(service.icon)}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <div className={styles.techStack}>
                    {service.technologies.map((tech, idx) => (
                      <span key={idx} className={styles.techBadge}>{tech}</span>
                    ))}
                  </div>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <div className={styles.caseStudyNav}>
            {transformationCases.map((caseStudy, index) => (
              <Button
                key={index}
                className={`${styles.caseStudyButton} ${selectedCase === index ? styles.active : ''}`}
                onClick={() => setSelectedCase(index)}
              >
                {caseStudy.title}
              </Button>
            ))}
          </div>
          <Card className={styles.caseStudyCard}>
            <h4 className={styles.industry}>{transformationCases[selectedCase].industry}</h4>
            <h3>{transformationCases[selectedCase].title}</h3>
            <p><strong>Challenge:</strong> {transformationCases[selectedCase].challenge}</p>
            <p><strong>Solution:</strong> {transformationCases[selectedCase].solution}</p>
            <p><strong>Results:</strong></p>
            <ul>
              {transformationCases[selectedCase].results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
            <p><strong>Tech Stack:</strong> {transformationCases[selectedCase].techStack.join(', ')}</p>
          </Card>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          {transformationFAQs.map((faq, index) => (
            <Card key={index} className={styles.faqItem}>
              <h4 className={styles.question}>{faq.question}</h4>
              <p className={styles.answer}>{faq.answer}</p>
            </Card>
          ))}
        </Container>
      </section>

      {/* Call to Action Section */}
      <section className={styles.ctaSection}>
        <Container>
          <h2>Ready to Transform?</h2>
          <p>Contact us today to start your digital transformation journey.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </Container>
      </section>
    </NextUIProvider></>
  );
};

export default DigitalTransformationPage;