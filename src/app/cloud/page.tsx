"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./cloud.module.css"; // Import your CSS module
import {
  UilCloud,
  UilArrowUp,
  UilDatabase,
  UilServer,
  UilShield,
  UilCheckCircle
} from '@iconscout/react-unicons';

// Interface Definitions
interface MigrationService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface MigrationCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface MigrationFAQ {
  question: string;
  answer: string;
}

// Migration Services Data
const migrationServices: MigrationService[] = [
  {
    icon: UilCloud,
    title: "Cloud Assessment",
    description: "Evaluate your current infrastructure and identify migration opportunities.",
    technologies: [
      "Cloud Readiness Assessment", 
      "Cost Analysis", 
      "Risk Assessment"
    ]
  },
  {
    icon: UilArrowUp,
    title: "Data Migration",
    description: "Securely transfer your data to the cloud with minimal downtime.",
    technologies: [
      "Data Backup", 
      "Data Transfer", 
      "Data Validation"
    ]
  },
  {
    icon: UilDatabase,
    title: "Application Migration",
    description: "Migrate your applications to the cloud seamlessly.",
    technologies: [
      "Lift and Shift", 
      "Replatforming", 
      "Refactoring"
    ]
  },
  {
    icon: UilServer,
    title: "Cloud Infrastructure Setup",
    description: "Set up and configure your cloud environment for optimal performance.",
    technologies: [
      "AWS", 
      "Azure", 
      "Google Cloud"
    ]
  },
  {
    icon: UilShield,
    title: "Security & Compliance",
    description: "Ensure your cloud environment meets security and compliance standards.",
    technologies: [
      "Data Encryption", 
      "Access Control", 
      "Compliance Audits"
    ]
  },
  {
    icon: UilCheckCircle,
    title: "Post-Migration Support",
    description: "Ongoing support and optimization after migration.",
    technologies: [
      "Monitoring", 
      "Performance Tuning", 
      "Technical Support"
    ]
  }
];

// Migration Case Studies
const migrationCases: MigrationCase[] = [
  {
    title: "Healthcare Data Migration",
    industry: "Healthcare",
    challenge: "Migrating sensitive patient data while ensuring compliance.",
    solution: "Implemented a secure data migration strategy with encryption.",
    results: [
      "100% compliance with HIPAA regulations",
      "Zero data loss during migration",
      "Improved data accessibility for healthcare providers"
    ],
    techStack: ["AWS", "Data Encryption", "HIPAA Compliance"]
  },
  {
    title: "E-commerce Platform Migration",
    industry: "Retail",
    challenge: "Migrating a high-traffic e-commerce site with minimal downtime.",
    solution: "Utilized a phased migration approach to ensure continuous availability.",
    results: [
      "30% increase in site performance",
      "Reduced operational costs by 40%",
      "Enhanced user experience with faster load times"
    ],
    techStack: ["Azure", "Load Balancing", "Microservices"]
  }
];

// FAQ Data
const migrationFAQs: MigrationFAQ[] = [
  {
    question: "What is cloud migration?",
    answer: "Cloud migration is the process of moving data, applications, and other business elements from on-premises infrastructure to the cloud."
  },
  {
    question: "How do you ensure data security during migration?",
    answer: "We implement encryption, access controls, and compliance checks to ensure data security throughout the migration process."
  },
  {
    question: "What cloud platforms do you work with?",
    answer: "We work with all major cloud platforms including AWS, Azure, and Google Cloud, tailoring our solutions to fit your needs."
  },
  {
    question: "Do you provide post-migration support?",
    answer: "Yes, we offer comprehensive post-migration support including monitoring, optimization, and technical assistance."
  }
];

const CloudMigrationServicePage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <NextUIProvider >
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container className={styles.container}>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className={styles.heroTitle}>Cloud Migration Services</h1>
              <p className={styles.heroSubtitle}>
                Transition to the cloud with confidence and expertise.
              </p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact"}
              >
                Start Your Migration
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <UilCloud size={300} className={styles.devIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Migration Services</h2>
          <Row>
            {migrationServices.map((service, index) => (
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
          <h2 className={styles.sectionTitle}>Migration Case Studies</h2>
          <Row>
            <Col lg={4}>
              <div className={styles.caseStudyNav}>
                {migrationCases.map((study, index) => (
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
                <h3>{migrationCases[selectedCase].title}</h3>
                <p className={styles.industry}>Industry: {migrationCases[selectedCase].industry}</p>
                <div className={styles.caseStudyContent}>
                  <h4>Challenge</h4>
                  <p>{migrationCases[selectedCase].challenge}</p>
                  <h4>Solution</h4>
                  <p>{migrationCases[selectedCase].solution}</p>
                  <h4>Results</h4>
                  <ul>
                    {migrationCases[selectedCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techStack}>
                      {migrationCases[selectedCase].techStack.map((tech, index) => (
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
                {migrationFAQs.map((faq, index) => (
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
            <Col lg={8} className="mx-auto text-center">
              <h2>Ready to Migrate to the Cloud?</h2>
              <p>Contact us to discuss how we can assist you in your cloud migration journey.</p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact"}
              >
                Schedule a Consultation
              </Button>
            </Col>
          </Row>
        </Container>
      </section>
    </NextUIProvider>
  );
};

export default CloudMigrationServicePage;
