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
import Work1 from '../img/work/work1.jpg'
import Work2 from '../img/work/work2.jpg'
import Work3 from '../img/work/work3.jpg'
import Work4 from '../img/work/work4.jpg'
import Work5 from '../img/work/work5.jpg'
import Work6 from '../img/work/work6.jpg'
import Work7 from '../img/work/work7.jpg'
import Work8 from '../img/work/work8.jpg'
import Work9 from '../img/work/work9.jpg'
import Work10 from '../img/work/work10.jpg'
import Work11 from '../img/work/work11.jpg'
import Work12 from '../img/work/work12.jpg'
import Work13 from '../img/work/work13.jpg'
import Work14 from '../img/work/work14.jpg'
import Work15 from '../img/work/work15.jpg'

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


