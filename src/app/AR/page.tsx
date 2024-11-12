"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./ar.module.css"; // Import your CSS module
import {
  UilEye,
  UilMobileAndroid,
  UilDesktop,
  UilAtom,
  UilRobot
} from '@iconscout/react-unicons';

// Interface Definitions
interface ARVRService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface ARVRCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface ARVRFAQ {
  question: string;
  answer: string;
}

// AR/VR Services Data
const arvrServices: ARVRService[] = [
  {
    icon: UilEye,
    title: "Augmented Reality Solutions",
    description: "Enhance real-world experiences with AR technology.",
    technologies: [
      "ARKit", 
      "ARCore", 
      "Unity"
    ]
  },
  {
    icon: UilDesktop,
    title: "Virtual Reality Development",
    description: "Create immersive VR experiences for gaming and training.",
    technologies: [
      "Oculus SDK", 
      "HTC Vive", 
      "Unreal Engine"
    ]
  },
  {
    icon: UilMobileAndroid,
    title: "Mobile AR/VR Applications",
    description: "Develop mobile applications that leverage AR/VR capabilities.",
    technologies: [
      "React Native", 
      "Flutter", 
      "Vuforia"
    ]
  },
  {
    icon: UilDesktop,
    title: "Desktop VR Solutions",
    description: "Build desktop applications for VR headsets.",
    technologies: [
      "Unity", 
      "C#", 
      "OpenVR"
    ]
  },
  {
    icon: UilAtom,
    title: "AR/VR Consulting",
    description: "Get expert advice on AR/VR strategy and implementation.",
    technologies: [
      "Business Analysis", 
      "Feasibility Studies", 
      "Roadmap Development"
    ]
  },
  {
    icon: UilRobot,
    title: "Custom AR/VR Experiences",
    description: "Tailor-made AR/VR solutions for your specific needs.",
    technologies: [
      "Custom Development", 
      "3D Modeling", 
      "Animation"
    ]
  }
];

// AR/VR Case Studies
const arvrCases: ARVRCase[] = [
  {
    title: "Virtual Training Simulation",
    industry: "Education",
    challenge: "Ineffective training methods leading to low retention.",
    solution: "Developed a VR training simulation for hands-on learning.",
    results: [
      "Increased retention rates by 70%",
      "Enhanced engagement and interactivity",
      "Reduced training costs"
    ],
    techStack: ["Unity", "Oculus SDK", "C#"]
  },
  {
    title: "AR Marketing Campaign",
    industry: "Marketing",
    challenge: "Low customer engagement in traditional campaigns.",
    solution: "Launched an AR campaign that allowed users to interact with products.",
    results: [
      "Boosted engagement by 50%",
      "Increased sales by 30%",
      "Enhanced brand visibility"
    ],
    techStack: ["ARKit", "Unity", "Vuforia"]
  }
];

// FAQ Data
const arvrFAQs: ARVRFAQ[] = [
  {
    question: "What is AR/VR technology?",
    answer: "AR (Augmented Reality) overlays digital content on the real world, while VR (Virtual Reality) immerses users in a completely virtual environment."
  },
  {
    question: "How can AR/VR benefit my business?",
    answer: "AR/VR can enhance customer experiences, improve training methods, and create innovative marketing strategies."
  },
  {
    question: "What types of AR/VR solutions do you offer?",
    answer: "We offer AR solutions, VR development, mobile applications, consulting, and custom experiences."
  },
  {
    question: "Is AR/VR technology expensive?",
    answer: "The cost varies based on the complexity of the project, but we provide solutions tailored to different budgets."
  }
];

const ARVRDevelopmentPage = () => {
  const [selectedCase, setSelectedCase] = useState<ARVRCase | null>(null);

  const handleCaseSelect = (caseStudy: ARVRCase) => {
    setSelectedCase(caseStudy);
  };

  return (
    <NextUIProvider>
      <Container className={styles.arvrDevelopmentPage}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>AR/VR Development Solutions</h1>
          <p className={styles.heroSubtitle}>Transforming experiences through augmented and virtual reality.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {arvrServices.map((service, index) => (
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
            {arvrCases.map((caseStudy, index) => (
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
            {arvrFAQs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Elevate Your Business?</h2>
          <p>Contact us today to explore our AR/VR solutions.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </section>
      </Container>
    </NextUIProvider>
  );
};

export default ARVRDevelopmentPage;
