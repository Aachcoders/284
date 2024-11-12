"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./secure.module.css";
import {
  UilShield,
  UilLock,
  UilBug,
  UilEye,
  UilCloud,
  UilArrow
} from '@iconscout/react-unicons';

// Interface Definitions
interface CyberService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface CyberProjectCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface CyberFAQ {
  question: string;
  answer: string;
}

// Cybersecurity Services Data
const cyberServices: CyberService[] = [
  {
    icon: UilShield,
    title: "Threat Assessment",
    description: "Comprehensive evaluation of vulnerabilities and risks",
    technologies: [
      "Vulnerability Scanning", 
      "Penetration Testing", 
      "Risk Assessment", 
      "Compliance Audits"
    ]
  },
  {
    icon: UilLock,
    title: "Data Protection",
    description: "Strategies to safeguard sensitive information",
    technologies: [
      "Encryption", 
      "Data Loss Prevention", 
      "Access Control", 
      "Identity Management"
    ]
  },
  {
    icon: UilBug,
    title: "Incident Response",
    description: "Rapid response to security breaches and incidents",
    technologies: [
      "Forensics", 
      "Malware Analysis", 
      "Threat Intelligence", 
      "Crisis Management"
    ]
  },
  {
    icon: UilEye,
    title: "Security Monitoring",
    description: "Continuous monitoring for suspicious activities",
    technologies: [
      "SIEM", 
      "Log Management", 
      "Intrusion Detection", 
      "Behavioral Analysis"
    ]
  },
  {
    icon: UilCloud,
    title: "Cloud Security",
    description: "Securing cloud environments and applications",
    technologies: [
      "Cloud Access Security", 
      "API Security", 
      "Cloud Compliance", 
      "Container Security"
    ]
  },
  {
    icon: UilArrow,
    title: "Compliance & Governance",
    description: "Ensuring adherence to security standards and regulations",
    technologies: [
      "GDPR", 
      "HIPAA", 
      "ISO 27001", 
      "NIST Framework"
    ]
  }
];

// Project Case Studies
const cyberProjectCases: CyberProjectCase[] = [
  {
    title: "Healthcare Data Security",
    industry: "Healthcare",
    challenge: "Protecting sensitive patient data from breaches",
    solution: "Implemented a multi-layered security framework with encryption and access controls",
    results: [
      "100% compliance with HIPAA regulations",
      "Zero data breaches in 2 years",
      "Increased patient trust and satisfaction"
    ],
    techStack: ["Encryption", "Access Control", "Incident Response", "Security Audits"]
  },
  {
    title: "E-commerce Security Enhancement",
    industry: "Retail",
    challenge: "Preventing fraud and securing customer transactions",
    solution: "Deployed advanced fraud detection systems and secure payment gateways",
    results: [
      "30% reduction in fraudulent transactions",
      "Enhanced customer confidence",
      "Improved overall security posture"
    ],
    techStack: ["Fraud Detection", "Payment Security", "Vulnerability Scanning", "Compliance Audits"]
  }
];

// FAQ Data
const cyberFAQs: CyberFAQ[] = [
  {
    question: "What cybersecurity services do you offer?",
    answer: "We provide a range of services including threat assessments, data protection, incident response, security monitoring, cloud security, and compliance governance to safeguard your organization."
  },
  {
    question: "How do you assess security risks?",
    answer: "We conduct thorough vulnerability assessments and penetration testing to identify potential risks and provide actionable insights to mitigate them."
  },
  {
    question: "Can you help with compliance requirements?",
    answer: "Absolutely! We assist organizations in achieving compliance with various regulations such as GDPR, HIPAA, and ISO standards through comprehensive audits and governance frameworks."
  },
  {
    question: "What technologies do you use?",
    answer: "We utilize cutting-edge technologies including SIEM systems, encryption tools, and advanced monitoring solutions to ensure robust security for our clients."
  }
];

const CybersecurityPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (<>
    <NextUIProvider className={styles.conatiner}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container className={styles.conatiner}>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className={styles.heroTitle}>Cybersecurity Solutions</h1>
              <p className={styles.heroSubtitle}>
                Protecting your digital assets with comprehensive security strategies
              </p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact-us"}
              >
                Secure Your Business
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <UilShield size={300} className={styles.devIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Cybersecurity Services</h2>
          <Row>
            {cyberServices.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
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
          <h2 className={styles.sectionTitle}>Project Showcases</h2>
          <Row>
            <Col lg={4}>
              <div className={styles.caseStudyNav}>
                {cyberProjectCases.map((study, index) => (
                  <Button
                    key={index}
                    className={`${styles.caseStudyButton} ${selectedCase === index ? styles.active : ''}`}
                    onClick={() => setSelectedCase(index)}
                  >
                    {study.title}
                  </Button>
                ))}
              </div>
            </Col>
            <Col lg={8}>
              <Card className={styles.caseStudyCard}>
                <h3>{cyberProjectCases[selectedCase].title}</h3>
                <p className={styles.industry}>Industry: {cyberProjectCases[selectedCase].industry}</p>
                <div className={styles.caseStudyContent}>
                  <h4>Challenge</h4>
                  <p>{cyberProjectCases[selectedCase].challenge}</p>
                  <h4>Solution</h4>
                  <p>{cyberProjectCases[selectedCase].solution}</p>
                  <h4>Results</h4>
                  <ul>
                    {cyberProjectCases[selectedCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techStack}>
                      {cyberProjectCases[selectedCase].techStack.map((tech, index) => (
                        <span key={index} className={styles.techBadge}>{tech}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className={styles.faqSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <Row>
            <Col lg={8} className="mx-auto">
              <div className={styles.faqContainer}>
                {cyberFAQs.map((faq, index) => (
                  <div key={index} className={styles.faqItem}>
                    <h3 className={styles.question}>{faq.question}</h3>
                    <p className={styles.answer}>{faq.answer}</p>
                  </div>
                ))}
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* CTA Section */}
      <section className={styles.ctaSection}>
        <Container>
          <Row>
            <Col lg={8} className=" mx-auto text-center">
              <h2>Ready to Secure Your Business?</h2>
              <p>Contact us to discuss how we can enhance your cybersecurity posture.</p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact-us"}
              >
                Schedule a Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </NextUIProvider>
  </>);
};

export default CybersecurityPage;
