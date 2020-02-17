import React from 'react'
import PropTypes from 'prop-types'
import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container} from 'react-bootstrap';
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


