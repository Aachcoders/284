"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./iot.module.css"; // Import your CSS module
import {
  UilWifi,
  UilTablet,
  UilCloud,
  UilLock,
  UilChart,
  UilUser 
} from '@iconscout/react-unicons';

// Interface Definitions
interface IoTService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface IoTCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface IoTFAQ {
  question: string;
  answer: string;
}

// IoT Services Data
const iotServices: IoTService[] = [
  {
    icon: UilWifi,
    title: "IoT Device Development",
    description: "Design and develop smart IoT devices for various applications.",
    technologies: [
      "Arduino", 
      "Raspberry Pi", 
      "ESP8266"
    ]
  },
  {
    icon: UilTablet,
    title: "IoT Application Development",
    description: "Create applications to manage and control IoT devices.",
    technologies: [
      "React Native", 
      "Flutter", 
      "Node.js"
    ]
  },
  {
    icon: UilCloud,
    title: "Cloud Integration",
    description: "Integrate IoT devices with cloud platforms for data storage and analysis.",
    technologies: [
      "AWS IoT", 
      "Azure IoT", 
      "Google Cloud"
    ]
  },
  {
    icon: UilLock,
    title: "IoT Security Solutions",
    description: "Implement security measures to protect IoT devices and data.",
    technologies: [
      "Encryption", 
      "Authentication", 
      "Network Security"
    ]
  },
  {
    icon: UilChart,
    title: "Data Analytics",
    description: "Analyze data collected from IoT devices for actionable insights.",
    technologies: [
      "Machine Learning", 
      "Big Data", 
      "Data Visualization"
    ]
  },
  {
    icon: UilUser ,
    title: "Custom IoT Solutions",
    description: "Tailored IoT solutions to meet specific business needs.",
    technologies: [
      "Custom Development", 
      "Prototyping", 
      "Consulting"
    ]
  }
];

// IoT Case Studies
const iotCases: IoTCase[] = [
  {
    title: "Smart Home Automation",
    industry: "Home Automation",
    challenge: "Fragmented control of home devices.",
    solution: "Developed a centralized IoT platform for smart home management.",
    results: [
      "Improved user experience with a single app control",
      "Increased energy efficiency",
      "Enhanced security features"
    ],
    techStack: ["Arduino", "AWS IoT", "React Native"]
  },
  {
    title: "Industrial IoT Monitoring",
    industry: "Manufacturing",
    challenge: "Lack of real-time monitoring of equipment.",
    solution: "Implemented IoT sensors for real-time equipment monitoring.",
    results: [
      "Reduced downtime by 30%",
      "Improved maintenance scheduling",
      "Enhanced operational efficiency"
    ],
    techStack: ["Raspberry Pi", "Azure IoT", "Node.js"]
  }
];

// FAQ Data
const iotFAQs: IoTFAQ[] = [
  {
    question: "What is IoT?",
    answer: "IoT (Internet of Things) refers to the network of physical devices connected to the internet, allowing them to collect and exchange data."
  },
  {
    question: "How can IoT benefit my business?",
    answer: "IoT can enhance operational efficiency, improve data collection, and enable better decision-making through real-time insights."
  },
  {
    question: "What types of IoT solutions do you offer?",
    answer: "We offer IoT device development, application development, cloud integration, security solutions, and data analytics."
  },
  {
    question: "Is IoT technology secure?",
    answer: "While IoT devices can be vulnerable, we implement robust security measures to protect your devices and data."
  }
];

const IoTDevelopmentPage = () => {
  const [selectedCase, setSelectedCase ] = useState<IoTCase | null>(null);

  const handleCaseSelect = (caseStudy: IoTCase) => {
    setSelectedCase(caseStudy);
  };

  return (
    <NextUIProvider>
      <Container className={styles.iotDevelopmentPage}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>IoT Development Solutions</h1>
          <p className={styles.heroSubtitle}>Connecting devices for a smarter future.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {iotServices.map((service, index) => (
              <Col key={index} md={4}>
                <Card className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    {React.createElement(service.icon)}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
                  <p className={styles.serviceDescription}>{service.description}</p>
                  <p>Technologies: {service.technologies.join(', ')}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </section>

        <section className={styles.caseStudiesSection}>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <div className={styles.caseStudyNav}>
            {iotCases.map((caseStudy, index) => (
              <Button
                key={index}
                className={`${styles.caseStudyButton} ${selectedCase?.title === caseStudy.title ? styles.active : ''}`}
                onClick={() => handleCaseSelect(caseStudy)}
              >
                {caseStudy.title}
              </Button>
            ))}
          </div>
          {selectedCase && (
            <Card className={styles.caseStudyCard}>
              <h3 className={styles.industry}>{selectedCase.industry}</h3>
              <h4>{selectedCase.title}</h4>
              <p><strong>Challenge:</strong> {selectedCase.challenge}</p>
              <p><strong>Solution:</strong> {selectedCase.solution}</p>
              <p><strong>Results:</strong></p>
              <ul>
                {selectedCase.results.map((result, index) => (
                  <li key={index}>{result}</li>
                ))}
              </ul>
              <p><strong>Tech Stack:</strong> {selectedCase.techStack.join(', ')}</p>
            </Card>
          )}
        </section>

        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {iotFAQs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to explore our IoT solutions.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </section>
      </Container>
    </NextUIProvider>
  );
};

export default IoTDevelopmentPage;
