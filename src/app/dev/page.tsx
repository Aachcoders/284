"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./dev.module.css"; // Import your CSS module
import {
  UilCloud,
  UilSetting,
  UilLock,
  UilChart,
  UilUser ,
  UilServer 
} from '@iconscout/react-unicons';

// Interface Definitions
interface DevOpsService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface DevOpsCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface DevOpsFAQ {
  question: string;
  answer: string;
}

// DevOps Services Data
const devOpsServices: DevOpsService[] = [
  {
    icon: UilCloud,
    title: "Continuous Integration/Continuous Deployment (CI/CD)",
    description: "Automate your software delivery process with CI/CD pipelines.",
    technologies: [
      "Jenkins", 
      "GitLab CI", 
      "CircleCI"
    ]
  },
  {
    icon: UilSetting,
    title: "Infrastructure as Code (IaC)",
    description: "Manage your infrastructure using code for better scalability.",
    technologies: [
      "Terraform", 
      "Ansible", 
      "CloudFormation"
    ]
  },
  {
    icon: UilLock,
    title: "Security and Compliance",
    description: "Implement security best practices throughout the DevOps lifecycle.",
    technologies: [
      "OWASP", 
      "Snyk", 
      "Aqua Security"
    ]
  },
  {
    icon: UilChart,
    title: "Monitoring and Logging",
    description: "Gain insights into your applications with monitoring and logging tools.",
    technologies: [
      "Prometheus", 
      "Grafana", 
      "ELK Stack"
    ]
  },
  {
    icon: UilUser ,
    title: "Collaboration and Communication",
    description: "Enhance team collaboration with DevOps tools and practices.",
    technologies: [
      "Slack", 
      "Microsoft Teams", 
      "Jira"
    ]
  },
  {
    icon: UilServer,
    title: "Cloud Services Management",
    description: "Optimize your cloud infrastructure for performance and cost.",
    technologies: [
      "AWS", 
      "Azure", 
      "Google Cloud"
    ]
  }
];

// DevOps Case Studies
const devOpsCases: DevOpsCase[] = [
  {
    title: "E-commerce Platform Optimization",
    industry: "E-commerce",
    challenge: "Slow deployment times affecting customer experience.",
    solution: "Implemented CI/CD pipelines to automate deployments.",
    results: [
      "Reduced deployment time by 70%",
      "Improved application stability",
      "Enhanced customer satisfaction"
    ],
    techStack: ["Jenkins", "AWS", "Docker"]
  },
  {
    title: "Financial Services Security Enhancement",
    industry: "Finance",
    challenge: "Compliance with strict security regulations.",
    solution: "Integrated security practices into the DevOps pipeline.",
    results: [
      "Achieved 100% compliance",
      "Reduced security incidents by 50%",
      "Increased stakeholder trust"
    ],
    techStack: ["Terraform", "Snyk", "Kubernetes"]
  }
];

// FAQ Data
const devOpsFAQs: DevOpsFAQ[] = [
  {
    question: "What is DevOps?",
    answer: "DevOps is a set of practices that combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle."
  },
  {
    question: "How can DevOps benefit my organization?",
    answer: "DevOps can improve collaboration, increase deployment frequency, and enhance the quality of software products."
  },
  {
    question: "What types of DevOps services do you offer?",
    answer: "We offer CI/CD implementation, infrastructure as code, security and compliance, monitoring, and cloud services management."
  },
  {
    question: "Is DevOps suitable for all types of businesses?",
    answer: "Yes, DevOps practices can be tailored to fit organizations of all sizes and industries."
  }
];

const DevOpsServicePage = () => {
  const [selectedCase, setSelectedCase] = useState<DevOpsCase | null>(null);

  const handleCaseSelect = (caseStudy: DevOpsCase) => {
    setSelectedCase(caseStudy);
  };

  return (
    <NextUIProvider>
      <Container className={styles.devOpsServicePage}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>DevOps Services</h1>
          <p className={styles.heroSubtitle}>Streamlining your development and operations.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {devOpsServices.map((service, index) => (
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
            {devOpsCases.map((caseStudy, index) => (
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
            {devOpsFAQs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Optimize Your Development Process?</h2>
          <p>Contact us today to explore our DevOps services.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </section>
      </Container>
    </NextUIProvider>
  );
};

export default DevOpsServicePage;
