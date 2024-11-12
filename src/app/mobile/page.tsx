"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./mobile.module.css"; // Ensure this CSS file is created
import {
  UilPhone,
  UilPlay,
  UilCodeBranch,
  UilUser 
} from '@iconscout/react-unicons';

// Interface definitions
interface AppService {
  icon: React.ComponentType;
  title: string;
  description: string;
  benefits: string[];
}

interface AppCaseStudy {
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

// App Services Data
const appServices: AppService[] = [
  {
    icon: UilPhone,
    title: "iOS App Development",
    description: "Build high-quality iOS applications tailored to your business needs.",
    benefits: [
      "User -friendly interfaces",
      "Seamless integration with Apple services",
      "High performance and security",
      "Regular updates and maintenance"
    ]
  },
  {
    icon: UilPlay,
    title: "Android App Development",
    description: "Create robust Android applications that reach a wide audience.",
    benefits: [
      "Customizable features",
      "Support for various devices",
      "Integration with Google services",
      "Scalable architecture"
    ]
  },
  {
    icon: UilCodeBranch,
    title: "Cross-Platform Development",
    description: "Develop applications that work on both iOS and Android platforms.",
    benefits: [
      "Cost-effective solutions",
      "Faster time to market",
      "Consistent user experience",
      "Single codebase for multiple platforms"
    ]
  },
  {
    icon: UilUser ,
    title: "UI/UX Design",
    description: "Design intuitive and engaging user interfaces for your applications.",
    benefits: [
      "User -centered design approach",
      "Prototyping and wireframing",
      "Usability testing",
      "Brand consistency"
    ]
  }
];

// Case Studies Data
const appCaseStudies: AppCaseStudy[] = [
  {
    title: "E-commerce Mobile App",
    industry: "Retail",
    challenge: "A retail company needed a mobile app to enhance customer engagement and sales.",
    solution: "Developed a feature-rich e-commerce app with user-friendly navigation and secure payment options.",
    results: [
      "50% increase in mobile sales",
      "30% higher customer retention",
      "Improved user satisfaction ratings"
    ],
    technologies: ["React Native", "Node.js", "Firebase", "Stripe"]
  },
  {
    title: "Fitness Tracking App",
    industry: "Health & Fitness",
    challenge: "A fitness startup wanted to create an app to help users track their workouts and nutrition.",
    solution: "Built a mobile app with personalized workout plans, nutrition tracking, and social sharing features.",
    results: [
      "20,000 downloads in the first month",
      "4.8-star rating on app stores",
      "Increased user engagement"
    ],
    technologies: ["Flutter", "Django", "PostgreSQL", "AWS"]
  }
];

// FAQ Data
const faqs: FAQ[] = [
  {
    question: "How long does it take to develop a mobile app?",
    answer: "The timeline varies based on the complexity of the app. Simple apps can take 2-3 months, while more complex applications may take 6 months or longer."
  },
  {
    question: "What platforms do you develop for?",
    answer: "We develop for both iOS and Android platforms, as well as cross-platform solutions using frameworks like React Native and Flutter."
  },
  {
    question: "Do you provide post-launch support?",
    answer: "Yes, we offer ongoing support and maintenance services to ensure your app remains up-to-date and performs optimally."
  },
  {
    question: "Can you help with app store submission?",
    answer: "Absolutely! We assist with the entire app submission process, including preparing the necessary documentation and meeting app store guidelines."
  },
  {
    question: "What technologies do you use for mobile app development?",
    answer: "We use a variety of technologies including React Native, Flutter, Swift, Kotlin, and more, depending on the project requirements."
  }
];

const MobileAppDevelopmentPage = () => {
  const [selectedCase, setSelectedCase] = useState<number>( 0);

  return (
    <NextUIProvider>
      <Container className={styles.mobileAppDevelopment}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Mobile App Development</h1>
          <p className={styles.heroSubtitle}>Transforming ideas into powerful mobile applications.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {appServices.map((service, index) => (
              <Col key={index} md={3}>
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
        </section>

        <section className={styles.caseStudiesSection}>
          <h2 className={styles.sectionTitle}>Case Studies</h2>
          <div className={styles.caseStudyNav}>
            {appCaseStudies.map((caseStudy, index) => (
              <Button
                key={index}
                className={`${styles.caseStudyButton} ${selectedCase === index ? styles.active : ''}`}
                onClick={() => setSelectedCase(index)}
              >
                {caseStudy.title}
              </Button>
            ))}
          </div>
          <div className={styles.caseStudyCard}>
            <h3 className={styles.industry}>{appCaseStudies[selectedCase].industry}</h3>
            <h4>{appCaseStudies[selectedCase].title}</h4>
            <p><strong>Challenge:</strong> {appCaseStudies[selectedCase].challenge}</p>
            <p><strong>Solution:</strong> {appCaseStudies[selectedCase].solution}</p>
            <p><strong>Results:</strong></p>
            <ul>
              {appCaseStudies[selectedCase].results.map((result, idx) => (
                <li key={idx}>{result}</li>
              ))}
            </ul>
            <p><strong>Technologies Used:</strong> {appCaseStudies[selectedCase].technologies.join(', ')}</p>
          </div>
        </section>

        <section className={styles.faqSection}>
          <h2 className={styles.sectionTitle}>Frequently Asked Questions</h2>
          <div className={styles.faqContainer}>
            {faqs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Build Your Mobile App?</h2>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </section>
      </Container>
    </NextUIProvider>
  );
};

export default MobileAppDevelopmentPage;
