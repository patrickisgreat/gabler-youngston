import React from "react";
import { kebabCase } from "lodash";
import { Container, Row, Col, Dropdown } from "react-bootstrap";
import { Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const NewsTypefilter = ({ data }) => {
  return (
    <Container>
      <Row>
        <Col md="7" xs="6">
          <h1>News</h1>
        </Col>
        <Col md="5" xs="6">
          <div className="filter_div">
            <Dropdown className="mobile-filter">
              <Dropdown.Toggle id="dropdown-basic">
                <strong>Filter by category</strong>
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Link to="/news" className="dropdown-item" role="button">
                  {" "}
                  All
                </Link>
                {data.nodes &&
                  data.nodes.map((newscat) => (
                    <Link
                      key={newscat.fields.slug}
                      className="dropdown-item"
                      role="button"
                      to={`/newscat/${kebabCase(newscat.frontmatter.categoryname)}/`}
                    >
                      {" "}
                      {newscat.frontmatter.categoryname}
                    </Link>
                  ))}
              </Dropdown.Menu>
            </Dropdown>
            <div className="d-filter">
              <strong>Filter by category</strong>
              <ul>
                <li>
                  <Link activeClassName="active-cat" to="/news">
                    All
                  </Link>
                </li>
                {data.nodes &&
                  data.nodes.map((newscat) => (
                    <li key={newscat.fields.slug}>
                      <Link
                        activeClassName="active-cat"
                        to={`/newscat/${kebabCase(newscat.frontmatter.categoryname)}/`}
                      >
                        {newscat.frontmatter.categoryname}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default NewsTypefilter;
