"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./data.module.css"; // Ensure this CSS file is created
import {
  UilDatabase,
  UilChartGrowth,
  UilAnalysis,
  UilServer
} from '@iconscout/react-unicons';

// Interface definitions
interface DataService {
  icon: React.ComponentType;
  title: string;
  description: string;
  benefits: string[];
}

interface DataCaseStudy {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  technologies: string[];
}

interface FAQ {
  question: string;
  answer: string;
}

// Data Services Data
const dataServices: DataService[] = [
  {
    icon: UilDatabase,
    title: "Data Warehousing",
    description: "Centralized storage solutions for your data to enable quick access and analysis.",
    benefits: [
      "Scalable storage solutions",
      "Real-time data access",
      "Enhanced data security",
      "Seamless integration with analytics tools"
    ]
  },
  {
    icon: UilChartGrowth,
    title: "Data Visualization",
    description: "Transform complex data into insightful visual representations.",
    benefits: [
      "Interactive dashboards",
      "Custom reports",
      "Real-time analytics",
      "Enhanced decision-making"
    ]
  },
  {
    icon: UilAnalysis,
    title: "Predictive Analytics",
    description: "Utilize historical data to forecast future trends and behaviors.",
    benefits: [
      "Data-driven decision making",
      "Risk assessment",
      "Customer behavior prediction",
      "Market trend analysis"
    ]
  },
  {
    icon: UilServer,
    title: "Big Data Infrastructure",
    description: "Set up and manage robust infrastructures to handle large volumes of data.",
    benefits: [
      "High-performance computing",
      "Distributed data processing",
      "Data governance",
      "Cost-effective solutions"
    ]
  }
];

// Case Studies Data
const dataCaseStudies: DataCaseStudy[] = [
  {
    title: "Retail Sales Optimization",
    industry: "Retail",
    challenge: "A major retailer needed to optimize inventory and sales forecasting.",
    solution: "Implemented a big data analytics solution to analyze sales patterns and inventory levels.",
    results: [
      "20% reduction in inventory costs",
      "15% increase in sales",
      "Improved customer satisfaction"
    ],
    technologies: ["Hadoop", "Spark", "Tableau", "Python"]
  },
  {
    title: "Financial Fraud Detection",
    industry: "Finance",
    challenge: "A financial institution faced challenges in detecting fraudulent transactions.",
    solution: "Developed a real-time analytics system to monitor transactions and flag anomalies.",
    results: [
      "30% reduction in fraudulent activities",
      "Enhanced security measures",
      "Improved compliance with regulations"
    ],
    technologies: ["Apache Kafka", "Hadoop", "Python", "R"]
  }
];

// FAQ Data
const faqs: FAQ[] = [
  {
    question: "What is big data analytics?",
    answer: "Big data analytics refers to the process of examining large and varied data sets to uncover hidden patterns, correlations, and other insights."
  },
  {
    question: "How do you ensure data quality?",
    answer: "We implement strict data governance practices, including data validation, cleaning, and continuous monitoring to ensure data quality."
  },
  {
    question: "Can you integrate with our existing systems?",
    answer: "Yes, we can integrate our big data analytics solutions with your existing systems, ensuring a seamless flow of data and insights across your organization."
  },
  {
    question: "What tools do you use for big data analytics?",
    answer: "We utilize a variety of tools and technologies including Hadoop, Spark, Tableau, and custom Python scripts to analyze and visualize data effectively."
  },
  {
    question: "How long does it take to see results from big data analytics?",
    answer: "The timeline for seeing results can vary based on the complexity of the project. Generally, initial insights can be obtained within a few weeks, while comprehensive analysis may take several months."
  }
];

const BigDataAnalyticsPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <NextUIProvider>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className={styles.heroTitle}>Big Data Analytics Solutions</h1>
              <p className={styles.heroSubtitle}>
                Unlock the power of your data with our advanced big data analytics services.
              </p>
              <Button
                className={styles.ctaButton}
                onClick={() => window.location.href = "/#contact-us"}
              >
                Get Started
              </Button>
            </Col>
            <Col lg={6}>
              <div className={styles.heroImage}>
                <UilDatabase size={300} className={styles.dataIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our Big Data Services</h2>
          <Row>
            {dataServices.map((service, index) => (
              <Col lg={4} md={6} key={index} className="mb-4">
                <Card className={styles.serviceCard}>
                  <div className={styles.serviceIcon}>
                    {React.createElement(service.icon)}
                  </div>
                  <h3 className={styles.serviceTitle}>{service.title}</h3>
 <p className={styles.serviceDescription}>{service.description}</p>
                  <ul className={styles.benefitsList}>
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx}>{benefit}</li>
                    ))}
                  </ul>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Case Studies Section */}
      <section className={styles.caseStudiesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Success Stories</h2>
          <Row>
            <Col lg={4}>
              <div className={styles.caseStudyNav}>
                {dataCaseStudies.map((study, index) => (
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
                <h3>{dataCaseStudies[selectedCase].title}</h3>
                <p className={styles.industry}>Industry: {dataCaseStudies[selectedCase].industry}</p>
                <div className={styles.caseStudyContent}>
                  <h4>Challenge</h4>
                  <p>{dataCaseStudies[selectedCase].challenge}</p>
                  <h4>Solution</h4>
                  <p>{dataCaseStudies[selectedCase].solution}</p>
                  <h4>Results</h4>
                  <ul>
                    {dataCaseStudies[selectedCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techStack}>
                      {dataCaseStudies[selectedCase].technologies.map((tech, index) => (
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
              <h2>Ready to Harness the Power of Big Data?</h2>
              <p>Contact us to discuss how our big data analytics solutions can drive your business forward.</p>
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
  );
};

export default BigDataAnalyticsPage;
