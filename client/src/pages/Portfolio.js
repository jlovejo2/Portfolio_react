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
    const [animateGif, setAnimateGif] = useState(false);

    useEffect( () => {
        console.log(filterValue);
        console.log(search);
        if (!search) {
            setFilteredProjects(projects);
        } else {
            if (filterValue === "tech") {

                const filterProjs = projects.filter((project) => {
                    if (project.tech.includes(search))
                    return project
                    })
                setFilteredProjects(filterProjs);
            } else {
                const filterProjs = projects.filter((project) => {
                    
                    if (project.title.includes(search))
                    return project
                    })
                setFilteredProjects(filterProjs);
            }
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

    const handleAnimate = (event) => {
        console.log(event.target);
        setAnimateGif(true);
    }

    const endAnimate = (event) => {
        setAnimateGif(false);
    }

    return (
        <Container fluid={true}>
            <Row center={true}>
                <div className="content animated fadeInRight delay-1s col-lg-10">
                    <div className="row justify-content-center font-weight-bold w-100 p-4 mt-4">
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
                                    <th scope='col' style={{ width: '45%' }}/*onClick={e => this.onSortString(e, 'firstName', this.state.ascKey)}*/>Image</th>
                                    {/* <th scope='col' style={{ width: '20%' }}>Functional Preview</th> */}
                                    <th scope='col' style={{ width: '5%' }}>Deployed App Link</th>
                                    <th scope='col' style={{ width: '35%' }}/*onClick={e => this.onSortNumber(e, 'yearsWithCompany', this.state.ascKey)}*/>Description</th>
                                    <th scope='col' style={{ width: '5%' }}>Technologies Used</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    filteredProjects.map((value, index) => {
                                        return <TableRow
                                            scope="row"
                                            key={index}
                                            num={index}
                                            animate={animateGif}
                                            image={value.imgLink}
                                            gifLink={value.functionalPreview}
                                            appLink={value.appLink}
                                            title={value.title}
                                            startAnimate={handleAnimate}
                                            stopAnimate={endAnimate}
                                            
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
