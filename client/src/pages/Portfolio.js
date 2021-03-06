import React, { useState, useEffect } from "react";
import { Container, Row } from "../components/Grid";
import TableRow from "../components/tableRow";
import { UnorderList, ListItem } from "../components/unorderedList";
import SearchTable from "../components/searchTable";
import portfolioObject from "../utils/projects";
import SideNav from "../components/SideNav";
import ContactModal from "../components/ContactModal";
import GifModal from "../components/GifModal/gifModal";
import RootContext from "../utils/RootContext";
import { convertArrayToString } from "../utils/customfunctions";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState("");
  const [projects /*setProjects*/] = useState(portfolioObject);
  const [filteredProjects, setFilteredProjects] = useState(portfolioObject);
  const [search, setSearch] = useState("");
  const [contactOpen, setContactOpen] = useState(false);
  const [imageTooltip, setImageTooltip] = useState(false);
  const [gifOpen, setGifOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(portfolioObject[0]);

  // let windowWidthSize = window.innerWidth;
  // console.log(windowWidthSize);

  function handleContactOpen() {
    setContactOpen(true);
  }

  function handleContactClose() {
    setContactOpen(false);
  }

  useEffect(() => {
    if (!search) {
      setFilteredProjects(projects);
    } else {
      if (filterValue === "title") {
        console.log("searching title");
        const filterProjs = projects.filter((project) => {
          if (project.title.toLowerCase().includes(search)) {
            return project;
          } else {
            return null;
          }
        });
        setFilteredProjects(filterProjs);
      } else {
        console.log("searching tech");
        const filterProjs = projects.filter((project) => {
          const techArray = convertArrayToString(project.tech);
          console.log(techArray);
          if (techArray.toLowerCase().includes(search)) return project;
          else return null;
        });
        setFilteredProjects(filterProjs);
      }
    }
  }, [filterValue, projects, search]);

  const handleSearchChange = (event) => {
    console.log("search change");

    const searchQuery = event.target.value.toLowerCase();

    setSearch(searchQuery);

    console.log(search);
  };

  //This function is used in the <Select/> to add the value the user select to the state variable
  const handleSelectChange = (event) => {
    console.log("select change");
    setFilterValue(event.target.value);

    console.log(filterValue);
  };

  const handleGifTooltipOpen = (event) => {
    const projectIndex = event.target.getAttribute("data-projindex");
    setCurrentProject(projects[projectIndex]);
    setImageTooltip(true);

    console.log("currentProject value", currentProject);
  };

  const handleGifTooltipClose = (event) => {
    setImageTooltip(false);
  };

  const handleGifModalOpen = (event) => {
    console.log("Value of Gif before open", currentProject);

    setGifOpen(true);
  };

  const handleGifModalClose = (event) => {
    setGifOpen(false);
  };

  return (
    <Container fluid={true}>
      <RootContext.Consumer>
        {({ contactText, setContactText }) => (
          <SideNav
            activeContact={handleContactOpen}
            onHoverTextDisplay={contactText}
            changeContactText={setContactText}
          />
        )}
      </RootContext.Consumer>
      <Row center={true}>
        <div className="content animated fadeInRight delay-1s col-lg-10">
          <div className="row justify-content-center font-weight-bold w-100 pt-2 mt-4">
            <div className="col-10">
              <h3>Portfolio</h3>
              <p>
                Below is a list of my projects and some info about them. There
                is a search bar and drop-down menu that allow the table to be
                filtered.
              </p>
            </div>
          </div>
          <div className="row align-items-center justify-content-center pb-1 mb-2">
            <SearchTable
              selectSearch={filterValue}
              selectChange={handleSelectChange}
              filterFunc={handleSearchChange}
            />
          </div>
          <div className="row p-3">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" style={{ width: "5%" }}>
                      Title
                    </th>
                    <th
                      className="d-none d-lg-table-cell"
                      scope="col"
                      style={{
                        width: "45%",
                      }} /*onClick={e => this.onSortString(e, 'firstName', this.state.ascKey)}*/
                    >
                      Image
                    </th>
                    <th
                      className="d-none d-lg-table-cell"
                      scope="col"
                      style={{
                        width: "35%",
                      }} /*onClick={e => this.onSortNumber(e, 'yearsWithCompany', this.state.ascKey)}*/
                    >
                      Description
                    </th>
                    <th
                      className="d-none d-lg-table-cell"
                      scope="col"
                      style={{ width: "5%" }}
                    >
                      Technologies Used
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {filteredProjects.map((value, index) => {
                    return (
                      <TableRow
                        scope="row"
                        key={index}
                        num={index}
                        image={value.imgLink}
                        gifLink={value.functionalPreview}
                        appLink={value.appLink}
                        title={value.title}
                        startAnimate={handleGifTooltipOpen}
                        stopAnimate={handleGifTooltipClose}
                        desc={value.description}
                        tooltipChange={imageTooltip}
                        tooltipText={"Click to see a GIF"}
                        handleOpenGif={handleGifModalOpen}
                      >
                        <UnorderList
                          bootStrapList
                          classes="m-1"
                          horizontal={window.innerWidth < 992 ? true : false}
                          listItemWidth={100 / value.tech.length}
                        >
                          {window.innerWidth < 992 ? (
                            <p className="portfolio-card__horizontal-tech">
                              {value.tech.map((value, index) => {
                                return `${value}, `;
                              })}
                            </p>
                          ) : (
                            value.tech.map((value, index) => {
                              return <ListItem key={index}>{value}</ListItem>;
                            })
                          )}
                        </UnorderList>
                      </TableRow>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <ContactModal
            showContact={contactOpen}
            closeContact={handleContactClose}
          />
          <GifModal
            project={currentProject}
            showGIF={gifOpen}
            closeGif={handleGifModalClose}
          />
        </div>
      </Row>
    </Container>
  );
};

export default Portfolio;
