import React, { useState, useEffect } from 'react';
import { Container, Row } from '../components/Grid';
import TableRow from '../components/tableRow';
import { UnorderList, ListItem } from '../components/unorderedList';
import SearchTable from '../components/searchTable';
import portfolioObject from '../utils/projects';


const Portfolio = () => {

    const [filterValue, setFilterValue] = useState('');
    const [projects, setProjects] = useState(portfolioObject);
    const [filteredProjects, setFilteredProjects] = useState(portfolioObject);
    const [search, setSearch] = useState('');

    useEffect( () => {
        console.log(filterValue);
        console.log(search);
        if (!search) {
            setFilteredProjects(projects);
        } else {
            if (filterValue === "tech") {
                console.log('tech');
                console.log(search);
                const filterProjs = projects.filter((project) => {
                    console.log(project.tech);
                    console.log(search);
                    if (project.tech.includes(search))
                    return project
                    })
                setFilteredProjects(filterProjs);
            };
        };
    }, [search])
        
    const handleSearchChange = (event) => {
 
        console.log('search change');
        setSearch(event.target.value);

        console.log(search);
    }

     //This function is used in the <Select/> to add the value the user select to the state variable
    const handleSelectChange = (event) => {
        console.log('select change');
        setFilterValue(event.target.value);

        console.log(filterValue);
    }

    return (
        <Container fluid={true}>
            <Row center={true}>
                <div className="content col-lg-10">
                    <div className="row font-weight-bold w-100 p-4 mt-4">
                        <h3>Portfolio</h3>
                        <SearchTable
                                selectSearch={filterValue}
                                selectChange={handleSelectChange}
                                filterFunc={handleSearchChange}
                        />
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
                                    filteredProjects.map((value, index) => {
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
            </Row>
        </Container>

    );

                            }

export default Portfolio;
