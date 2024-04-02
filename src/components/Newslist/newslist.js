import React from "react";
import { Link, graphql } from "gatsby";
import "./newslist.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col } from "react-bootstrap";

const NewsList = ({ data }) => {
  const { nodes: newses } = data;

  return (
    <div className="news_feed">
      <Row>
        <Col md="8">
          {newses.map((news) => (
            <Link key={news.fields.slug} to={news.fields.slug} className="news">
              <img
                src={news.frontmatter.featuredimage.childImageSharp.fixed.src}
                alt=""
              />
              <br />
              <br />
              <strong className="news-date">{news.frontmatter.date}</strong>
              <h6>{news.frontmatter.title}</h6>
            </Link>
          ))}
        </Col>
        <Col md="4">
          <div className="instagram_feed">
            {/* {allInstaNode.map((post) => (
              <Link to={post.node.preview}>
                <img
                  src={post.node.preview}
                  alt={post.node.caption}
                  style={{ display: 'block', width: '100%', marginTop: '20px' }}
                />
              </Link>
            ))}*/}
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default NewsList;
