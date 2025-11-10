import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import {
  dataabout,
  meta,
  worktimeline,
  skills,
} from "../../content_option";

export const About = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title>About | {meta.title}</title>
          <meta name="description" content={meta.description} />
        </Helmet>

        {/* ---------- Page Title ---------- */}
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4">About Me</h1>
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        {/* ---------- About Section ---------- */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">{dataabout.title}</h3>
          </Col>
          <Col lg="7" className="d-flex align-items-center">
            <div>
              <p>{dataabout.description}</p>
            </div>
          </Col>
        </Row>

        {/* ---------- Work Experience ---------- */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Work Experience</h3>
          </Col>
          <Col lg="7">
            <table className="table caption-top">
              <tbody>
                {worktimeline.map((data, i) => (
                  <tr key={i}>
                    <th scope="row">{data.jobtitle}</th>
                    <td>{data.where}</td>
                    <td>{data.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Col>
        </Row>

        {/* ---------- Skills Section ---------- */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Skills</h3>
          </Col>
          <Col lg="7">
            {skills.map((section, i) => (
              <div key={i} className="mb-5">
                <h3 className="color_sec py-4">{section.category}</h3>
                <hr className="t_border my-4 ml-0 text-left" />
                {section.skills.map((skill, index) => (
                  <div key={index} className="mb-3">
                    <h6 className="progress-title fw-semibold">
                      {skill.name}
                    </h6>
                    {skill.description && (
                      <p className="text-muted" style={{ fontSize: "0.9rem" }}>
                        {skill.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            ))}
          </Col>
        </Row>

        {/* ---------- Certifications Section ---------- */}
        <Row className="sec_sp">
          <Col lg="5">
            <h3 className="color_sec py-4">Certifications</h3>
          </Col>
          <Col lg="7">
            <div className="certification">
              <h5>AWS Academy Cloud Foundations (2024)</h5>
              <p className="text-muted">
                Completed the AWS Academy Cloud Foundations course, gaining a
                comprehensive understanding of fundamental cloud computing
                concepts. Acquired knowledge in AWS core services, security
                best practices, cloud architecture, and cost management.
              </p>

              <h5>Google AI Agent Intensive Course</h5>
              <p className="text-muted">
                Completed an in-depth training on Google’s AI Agent frameworks,
                focusing on building, deploying, and optimizing conversational
                and generative AI systems. Gained practical exposure to Vertex
                AI tools, model fine-tuning, and prompt engineering.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </HelmetProvider>
  );
};
