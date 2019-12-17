import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'
import WorkLists from '../components/Worklists/worklists'
import LatestWork from '../components/Latestwork/latestwork'
import WorkTypefilter from '../components/worktypesfilter'
import '../pages/work/work.css'


const WorkPage = ({ data }) => {
    
    return (
        <Layout>
            <div className="work_min">
            <Container>
                <h1>Work</h1>
            </Container>
                <WorkTypefilter />
                <LatestWork />
                <WorkLists />
            </div>
        </Layout>
    )
}

WorkPage.propTypes = {
    data: PropTypes.shape({
        allMarkdownRemark: PropTypes.shape({
            nodes: PropTypes.array,
        }),
    }),
}

export default WorkPage


