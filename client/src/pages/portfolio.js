import React, { useState } from 'react';
import { Container, Row } from '../components/Grid';
import TableRow from '../components/tableRow';
import { UnorderList, ListItem } from '../components/unorderedList';
import portfolioObject from '../utils/projects';


function Portfolio() {

    // const [projects, setProjects] = useState();

    // setProjects({projects: portfolioObject});

    return (
        <Container fluid={true}>
            <Row center={true}>
                {/* <div className="col-lg-1"></div> */}
                <div className="content col-lg-10">
                    <div className="row font-weight-bold w-100 p-4 mt-4">
                        <h3>Portfolio</h3>
                    </div>
                    <div className='table-responsive'>
                        <table className="table">
                            <thead className="thead-dark">
                                <tr>
                                    <th scope='col' style={{ width: '5%' }}>#</th>
                                    <th scope='col' style={{ width: '5%' }}>Title</th>
                                    <th scope='col' style={{ width: '25%' }}/*onClick={e => this.onSortString(e, 'firstName', this.state.ascKey)}*/>Image</th>
                                    <th scope='col' style={{ width: '20%' }}>Functional Preview</th>
                                    <th scope='col' style={{ width: '10' }}>Deployed App Link</th>
                                    <th scope='col' style={{ width: '30%' }}/*onClick={e => this.onSortNumber(e, 'yearsWithCompany', this.state.ascKey)}*/>Description</th>
                                    <th scope='col' style={{ width: '5%' }}>Technologies Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    portfolioObject.map((value, index) => {
                                        console.log(value);
                                        return <TableRow
                                            scope="row"
                                            key={index}
                                            num={index}
                                            image={value.imgLink}
                                            appLink={value.appLink}
                                            title={value.title}
                                            gifLink={value.functionalPreview}
                                            desc={value.description}
                                        >
                                            <UnorderList>
                                                    {
                                                    value.tech.map((value, index) => {
                                                        return <ListItem key={index}>{value}</ListItem>
                                                    })
                                                    }
                                            </UnorderList>
                                        </TableRow>
                                    })
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
                {/* <div className="col-lg-1"></div> */}
            </Row>
        </Container>

    );
}

export default Portfolio;
