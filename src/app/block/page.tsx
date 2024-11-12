"use client";
import React, { useState } from 'react';
import { NextUIProvider, Button, Card } from '@nextui-org/react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from "./blockchain.module.css"; // Import your CSS module
import {
  UilShield,
  UilArrow,
  UilDatabase,
  UilCloud,
  UilChart,
  UilUser
} from '@iconscout/react-unicons';

// Interface Definitions
interface BlockchainService {
  icon: React.ComponentType;
  title: string;
  description: string;
  technologies: string[];
}

interface BlockchainCase {
  title: string;
  industry: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
}

interface BlockchainFAQ {
  question: string;
  answer: string;
}

// Blockchain Services Data
const blockchainServices: BlockchainService[] = [
  {
    icon: UilShield,
    title: "Smart Contract Development",
    description: "Create secure and efficient smart contracts for your business.",
    technologies: [
      "Solidity", 
      "Ethereum", 
      "Hyperledger"
    ]
  },
  {
    icon: UilArrow,
    title: "DApp Development",
    description: "Build decentralized applications that run on blockchain technology.",
    technologies: [
      "React", 
      "Web3.js", 
      "IPFS"
    ]
  },
  {
    icon: UilDatabase,
    title: "Blockchain Integration",
    description: "Integrate blockchain solutions with your existing systems.",
    technologies: [
      "REST APIs", 
      "GraphQL", 
      "Chainlink"
    ]
  },
  {
    icon: UilCloud,
    title: "Private Blockchain Solutions",
    description: "Develop private blockchain networks tailored to your needs.",
    technologies: [
      "Hyperledger Fabric", 
      "Corda", 
      "Quorum"
    ]
  },
  {
    icon: UilChart,
    title: "Blockchain Consulting",
    description: "Get expert advice on blockchain strategy and implementation.",
    technologies: [
      "Business Analysis", 
      "Feasibility Studies", 
      "Roadmap Development"
    ]
  },
  {
    icon: UilUser,
    title: "Token Development",
    description: "Create and manage your own tokens on various blockchain platforms.",
    technologies: [
      "ERC20", 
      "ERC721", 
      "BEP20"
    ]
  }
];

// Blockchain Case Studies
const blockchainCases: BlockchainCase[] = [
  {
    title: "Supply Chain Transparency",
    industry: "Supply Chain",
    challenge: "Lack of transparency in the supply chain process.",
    solution: "Implemented a blockchain solution to track products from origin to consumer.",
    results: [
      "Increased transparency and trust",
      "Reduced fraud and errors",
      "Improved efficiency in tracking"
    ],
    techStack: ["Ethereum", "Solidity", "IPFS"]
  },
  {
    title: "Decentralized Finance (DeFi) Platform",
    industry: "Finance",
    challenge: "High fees and slow transactions in traditional finance.",
    solution: "Developed a DeFi platform for peer-to-peer lending and borrowing.",
    results: [
      "Reduced transaction fees by 80%",
      "Increased transaction speed",
      "Enhanced user engagement"
    ],
    techStack: ["Ethereum", "React", "Web3.js"]
  }
];

// FAQ Data
const blockchainFAQs: BlockchainFAQ[] = [
  {
    question: "What is blockchain technology?",
    answer: "Blockchain is a decentralized digital ledger that records transactions across many computers securely and transparently."
  },
  {
    question: "How can blockchain benefit my business?",
    answer: "Blockchain can enhance security, improve transparency, reduce costs, and streamline processes."
  },
  {
    question: "What types of blockchain solutions do you offer?",
    answer: "We offer smart contract development, DApp development, blockchain integration, private blockchain solutions, and more."
  },
  {
    question: "Is blockchain technology secure?",
    answer: "Yes, blockchain technology is designed to be secure through cryptographic techniques and decentralized consensus."
  }
];

const BlockchainDevelopmentPage = () => {
  const [selectedCase, setSelectedCase] = useState<BlockchainCase | null>(null);

  const handleCaseSelect = (caseStudy: BlockchainCase) => {
    setSelectedCase(caseStudy);
  };

  return (
    <NextUIProvider>
      <Container className={styles .blockchainDevelopmentPage}>
        <section className={styles.heroSection}>
          <h1 className={styles.heroTitle}>Blockchain Development Solutions</h1>
          <p className={styles.heroSubtitle}>Empowering businesses with innovative blockchain technology.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Get Started</Button>
        </section>

        <section className={styles.servicesSection}>
          <h2 className={styles.sectionTitle}>Our Services</h2>
          <Row>
            {blockchainServices.map((service, index) => (
              <Col key={index} md={4}>
                <Card className={styles.serviceCard}><div className={styles.serviceIcon}>
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
            {blockchainCases.map((caseStudy, index) => (
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
            {blockchainFAQs.map((faq, index) => (
              <div key={index} className={styles.faqItem}>
                <h4 className={styles.question}>{faq.question}</h4>
                <p className={styles.answer}>{faq.answer}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.ctaSection}>
          <h2>Ready to Transform Your Business?</h2>
          <p>Contact us today to learn more about our blockchain solutions.</p>
          <Button className={styles.ctaButton}
          onClick={() => window.location.href = "/#contact-us"}>Contact Us</Button>
        </section>
      </Container>
    </NextUIProvider>
  );
};

export default BlockchainDevelopmentPage;
