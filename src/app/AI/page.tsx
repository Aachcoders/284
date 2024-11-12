"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./Ai.module.css";
import {
  UilRobot,
  UilBrain,
  UilChart,
  UilServer,
  UilDatabase,
  UilAnalysis,
  UilArrow
} from '@iconscout/react-unicons';

// Interface definitions
interface AIService {
  icon: React.ComponentType;
  title: string;
  description: string;
  benefits: string[];
}

interface CaseStudy {
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

// AI Services Data
const aiServices: AIService[] = [
  {
    icon: UilBrain,
    title: "Deep Learning Solutions",
    description: "Custom neural networks and deep learning models tailored to your business needs",
    benefits: [
      "Image and speech recognition",
      "Natural language processing",
      "Pattern recognition",
      "Predictive modeling",
      "Autonomous systems"
    ]
  },
  {
    icon: UilChart,
    title: "Machine Learning Applications",
    description: "Transform your data into actionable insights with advanced ML algorithms",
    benefits: [
      "Predictive analytics",
      "Customer segmentation",
      "Recommendation systems",
      "Anomaly detection",
      "Time series analysis"
    ]
  },
  {
    icon: UilServer,
    title: "AI Infrastructure Setup",
    description: "End-to-end AI infrastructure development and deployment",
    benefits: [
      "Cloud-based AI platforms",
      "Model deployment pipelines",
      "Scalable AI architecture",
      "Performance optimization",
      "Infrastructure monitoring"
    ]
  },
  {
    icon: UilDatabase,
    title: "Data Processing & Analysis",
    description: "Transform raw data into meaningful insights with AI-powered analytics",
    benefits: [
      "Data cleaning and preparation",
      "Feature engineering",
      "Statistical analysis",
      "Data visualization",
      "Automated reporting"
    ]
  },
  {
    icon: UilAnalysis,
    title: "Computer Vision Systems",
    description: "Advanced image and video processing solutions",
    benefits: [
      "Object detection",
      "Facial recognition",
      "Video analytics",
      "Quality control systems",
      "Visual search"
    ]
  },
  {
    icon: UilArrow,
    title: "Natural Language Processing",
    description: "Extract insights from text and speech with advanced NLP",
    benefits: [
      "Text classification",
      "Sentiment analysis",
      "Language translation",
      "Chatbot development",
      "Text summarization"
    ]
  }
];

// Case Studies Data
const caseStudies: CaseStudy[] = [
  {
    title: "E-commerce Recommendation Engine",
    industry: "Retail",
    challenge: "A leading online retailer struggled with personalized product recommendations, resulting in low conversion rates.",
    solution: "Implemented an AI-powered recommendation engine using collaborative filtering and deep learning.",
    results: [
      "45% increase in conversion rate",
      "30% higher average order value",
      "60% improvement in customer engagement"
    ],
    technologies: ["TensorFlow", "Python", "AWS", "Docker"]
  },
  {
    title: "Predictive Maintenance System",
    industry: "Manufacturing",
    challenge: "Large manufacturing plant faced frequent unexpected machinery breakdowns leading to costly downtimes.",
    solution: "Developed an IoT-based predictive maintenance system using machine learning algorithms.",
    results: [
      "85% reduction in unplanned downtimes",
      "40% decrease in maintenance costs",
      "20% increase in equipment lifespan"
    ],
    technologies: ["PyTorch", "IoT Sensors", "Azure ML", "Kubernetes"]
  },
  {
    title: "Healthcare Diagnosis Assistant",
    industry: "Healthcare",
    challenge: "Medical facility needed to improve early disease detection and reduce diagnostic errors.",
    solution: "Created an AI-powered diagnostic support system using deep learning and computer vision.",
    results: [
      "93% accuracy in early detection",
      "50% reduction in diagnostic time",
      "30% decrease in false positives"
    ],
    technologies: ["TensorFlow", "CUDA", "Python", "Medical Imaging APIs"]
  }
];



// FAQ Data
const faqs: FAQ[] = [
  {
    question: "How long does it take to develop and deploy an AI solution?",
    answer: "The timeline varies depending on the complexity of your project. Simple ML models can be deployed within 4-6 weeks, while complex AI systems might take 3-6 months. We'll provide a detailed timeline during our initial consultation."
  },
  {
    question: "What kind of data do you need to build an AI solution?",
    answer: "The type and amount of data needed depends on your specific use case. Generally, we recommend having historical data relevant to your problem. We can help you assess your data requirements and even assist with data collection strategies."
  },
  {
    question: "How do you ensure the security of our data?",
    answer: "We implement industry-standard security measures including data encryption, secure access controls, and compliance with GDPR and other relevant regulations. All data handling processes are documented and transparent."
  },
  {
    question: "Can you integrate AI solutions with our existing systems?",
    answer: "Yes, we specialize in creating AI solutions that integrate seamlessly with existing infrastructure. We can work with your current tech stack and provide custom APIs and interfaces as needed."
  },
  {
    question: "Do you provide maintenance and support after deployment?",
    answer: "Yes, we offer ongoing maintenance and support packages. This includes model monitoring, performance optimization, retraining schedules, and technical support to ensure your AI solution continues to perform optimally."
  }
];

const AIPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>(0);

  return (
    <NextUIProvider>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <Container>
          <Row className="align-items-center">
            <Col lg={6}>
              <h1 className={styles.heroTitle}>AI & Machine Learning Solutions</h1>
              <p className={styles.heroSubtitle}>
                Transform your business with cutting-edge artificial intelligence and machine learning solutions
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
                <UilRobot size={300} className={styles.aiIcon} />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Services Section */}
      <section className={styles.servicesSection}>
        <Container>
          <h2 className={styles.sectionTitle}>Our AI & ML Services</h2>
          <Row>
            {aiServices.map((service, index) => (
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
                {caseStudies.map((study, index) => (
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
                <h3>{caseStudies[selectedCase].title}</h3>
                <p className={styles.industry}>Industry: {caseStudies[selectedCase].industry}</p>
                <div className={styles.caseStudyContent}>
                  <h4>Challenge</h4>
                  <p>{caseStudies[selectedCase].challenge}</p>
                  <h4>Solution</h4>
                  <p>{caseStudies[selectedCase].solution}</p>
                  <h4>Results</h4>
                  <ul>
                    {caseStudies[selectedCase].results.map((result, index) => (
                      <li key={index}>{result}</li>
                    ))}
                  </ul>
                  <div className={styles.technologies}>
                    <h4>Technologies Used</h4>
                    <div className={styles.techStack}>
                      {caseStudies[selectedCase].technologies.map((tech, index) => (
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
              <h2>Ready to Transform Your Business with AI?</h2>
              <p>Lets discuss how our AI solutions can help you achieve your goals.</p>
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

export default AIPage;
