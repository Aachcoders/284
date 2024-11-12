"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./stack.module.css";
import {
  UilReact,
  UilArrow,
  UilDatabase,
  UilServer,
  UilCloud,
  UilCodeBranch
} from '@iconscout/react-unicons';

// Interface Definitions
interface DevService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface ProjectCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface DevFAQ {
  question: string;
  answer: string;
}

// Development Services Data
const devServices: DevService[] = [
  {
    icon: UilReact,
    title: "Frontend Development",
    description: "Cutting-edge user interfaces using modern JavaScript frameworks",
    technologies: [
      "React", 
      "Next.js", 
      "TypeScript", 
      "Tailwind CSS", 
      "Responsive Design"
    ]
  },
  {
    icon: UilArrow,
    title: "Backend Development",
    description: "Scalable server-side solutions with robust architecture",
    technologies: [
      "Node.js", 
      "Express", 
      "NestJS", 
      "GraphQL", 
      "Microservices"
    ]
  },
  {
    icon: UilDatabase,
    title: "Database Solutions",
    description: "Optimized data management and storage strategies",
    technologies: [
      "MongoDB", 
      "PostgreSQL", 
      "Redis", 
      "TypeORM", 
      "Database Optimization"
    ]
  },
  {
    icon: UilServer,
    title: "Cloud Infrastructure",
    description: "Reliable and scalable cloud deployment solutions",
    technologies: [
      "AWS", 
      "Docker", 
      "Kubernetes", 
      "CI/CD", 
      "Serverless"
    ]
  },
  {
    icon: UilCloud,
    title: "DevOps & Deployment",
    description: "Streamlined development and operational workflows",
    technologies: [
      "Jenkins", 
      "GitHub Actions", 
      "Terraform", 
      "Monitoring", 
      "Auto-scaling"
    ]
  },
  {
    icon: UilCodeBranch,
    title: "Full Stack Integration",
    description: "End-to-end web and mobile application development",
    technologies: [
      "MERN Stack", 
      "JAMstack", 
      "Microservices", 
      "API Design", 
      "Performance Optimization"
    ]
  }
];

// Project Case Studies
const projectCases: ProjectCase[] = [
  {
    title: "Enterprise Management Platform",
    industry: "Business Management",
    challenge: "Complex workflow management and real-time collaboration",
    solution: "Developed a comprehensive full-stack solution with real-time features",
    results: [
      "40% increase in team productivity",
      "99.9% uptime",
      "Seamless cross-platform integration"
    ],
    techStack: ["React", "Node.js", "GraphQL", "WebSockets", "MongoDB"]
  },
  {
    title: "E-commerce Microservices",
    industry: "Retail",
    challenge: "Scalable and performant online shopping experience",
    solution: "Implemented distributed microservices architecture",
    results: [
      "50% faster page load times",
      "90% reduction in server costs",
      "Enhanced security and reliability"
    ],
    techStack: ["Next.js", "Kubernetes", "gRPC", "Redis", "PostgreSQL"]
  }
];

// FAQ Data
const faqs: DevFAQ[] = [
  {
    question: "What technologies do you specialize in?",
    answer: "We specialize in modern web technologies including React, Next.js, Node.js, GraphQL, and cloud-native solutions. Our team stays up-to-date with the latest industry trends and best practices."
  },
  {
    question: "How do you ensure code quality?",
    answer: "We implement rigorous code review processes, automated testing, continuous integration, and follow industry-standard design patterns and best practices to ensure high-quality, maintainable code."
  },
  {
    question: "Do you provide ongoing support?",
    answer: "Yes, we offer comprehensive support packages including maintenance, updates, performance optimization, and technical support to ensure your application continues to run smoothly."
  },
  {
    question: "Can you work with our existing technology stack?",
    answer: "Absolutely! We're experienced in integrating with existing systems and can adapt to your current technology ecosystem while providing recommendations for improvement."
  }
];

const FullStackPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (<>
    <NextUIProvider className={styles.container}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className={styles.heroTitle}>Full Stack Development Solutions</h1>
              <p className={styles.heroSubtitle}>
                Comprehensive web and mobile application development from concept to deployment
              </p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact-us"}
              >
                Start Your Project
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <UilCodeBranch size={300} className={styles.devIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Development Services</h2>
          <Row>
            {devServices.map((service, index) => (
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
                {projectCases.map((study, index) => (
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
                <h3>{projectCases[selectedCase].title}</h3>
                <p className={styles.industry}>Industry: {projectCases[selectedCase].industry}</p>
                <div className={styles.caseStudyContent}>
                  <h4>Challenge</h4>
                  <p>{projectCases[selectedCase].challenge}</p>
                  <h4>Solution</h4>
                  <p>{projectCases[selectedCase].solution}</p>
                  <h4>Results</h4>
                  <ul>
                    {projectCases[selectedCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techStack}>
                      {projectCases[selectedCase].techStack.map((tech, index) => (
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
                {faqs.map((faq, index) => (
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
              <h2>Ready to Build Your Next Project?</h2>
              <p>Contact us to discuss how we can help you achieve your development goals.</p>
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
    </NextUIProvider></>
  );
};

export default FullStackPage;
