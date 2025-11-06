import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, meta } from "../../content_option";

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="Portfolio-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Portfolio | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Header */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">Portfolio</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* Portfolio Cards */}
        <div className="portfolio-grid">
          {dataportfolio.map((project, i) => (
            <div key={i} className="portfolio-card">
              <img src={project.img} alt={project.title} className="portfolio-img" />

              <div className="portfolio-body">
                <h3 className="portfolio-title">{project.title}</h3>
                <p className="portfolio-role">
                  <strong>Role:</strong> {project.role}
                </p>
                <p className="portfolio-desc">{project.description}</p>
                <p className="portfolio-skills">
                  <strong>Skills:</strong> {project.skills}
                </p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="portfolio-btn"
                >
                  View on GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </HelmetProvider>
  );
};
