import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col, Button } from "react-bootstrap";
import { meta } from "../../content_option";

export const Resume = () => {
  return (
    <HelmetProvider>
      <Container className="Resume-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>Resume | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* Page Title */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">My Resume</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* PDF Resume Section */}
        <Row className="sec_sp d-flex justify-content-center text-center">
          <Col lg="10">
            <iframe
              src="/assets/CV.pdf"
              title="Resume PDF"
              className="resume-viewer"
            ></iframe>

            <div className="mt-4">
              <Button
                variant="outline-light"
                href="/assets/CV.pdf"
                download
              >
                Download PDF
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
