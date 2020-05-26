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

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState("");
  const [projects, setProjects] = useState(portfolioObject);
  const [filteredProjects, setFilteredProjects] = useState(portfolioObject);
  const [search, setSearch] = useState("");
  const [animateGif, setAnimateGif] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [imageTooltip, setImageTooltip] = useState(false);
  const [gifOpen, setGifOpen] = useState(false);
  const [currentProject, setCurrentProject] = useState(portfolioObject[0]);

  function handleContactOpen() {
    setContactOpen(true);
  }

  function handleContactClose() {
    setContactOpen(false);
  }

  useEffect(() => {
    console.log(filterValue);
    console.log(search);

    if (!search) {
      setFilteredProjects(projects);
    } else {
      if (filterValue === "title") {
        console.log("searching title");
        const filterProjs = projects.filter((project) => {
          if (project.title.toString().includes(search)) return project;
        });
        setFilteredProjects(filterProjs);
      } else {
        console.log("searching tech");
        const filterProjs = projects.filter((project) => {
          if (project.tech.toString().includes(search)) return project;
        });
        setFilteredProjects(filterProjs);
      }
    }
  }, [search]);

  const handleSearchChange = (event) => {
    console.log("search change");
    setSearch(event.target.value);

    console.log(search);
  };

  //This function is used in the <Select/> to add the value the user select to the state variable
  const handleSelectChange = (event) => {
    console.log("select change");
    setFilterValue(event.target.value);

    console.log(filterValue);
  };

  const handleAnimate = (event) => {
    console.log(event.target);
    console.log(event.target.value);
    setAnimateGif(true);
  };

  const endAnimate = (event) => {
    setAnimateGif(false);
  };

  const handleGifTooltipOpen = (event) => {
    // console.log(link);
    // console.log(event.target);

    const projectIndex = event.target.getAttribute("data-projIndex");
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
          <div className="row justify-content-center font-weight-bold w-100 p-4 mt-4">
            <div className="col-10">
              <h3>Portfolio</h3>
              <p>
                Below is a list of my projects and some info about them. There
                is a search bar and drop-down menu that allow the table to be
                filtered.{" "}
              </p>
            </div>
          </div>
          <div className="row align-items-center p-2 mb-2">
            <div className="col">
              {/* <div className="col"> */}
              <SearchTable
                selectSearch={filterValue}
                selectChange={handleSelectChange}
                filterFunc={handleSearchChange}
              />
              {/* </div> */}
            </div>
          </div>
          <div className="row">
            <div className="table-responsive">
              <table className="table">
                <thead className="thead-dark">
                  <tr>
                    <th scope="col" style={{ width: "5%" }}>
                      #
                    </th>
                    <th scope="col" style={{ width: "5%" }}>
                      Title
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "45%",
                      }} /*onClick={e => this.onSortString(e, 'firstName', this.state.ascKey)}*/
                    >
                      Image
                    </th>
                    {/* <th scope='col' style={{ width: '20%' }}>Functional Preview</th> */}
                    <th scope="col" style={{ width: "5%" }}>
                      Deployed App Link
                    </th>
                    <th
                      scope="col"
                      style={{
                        width: "35%",
                      }} /*onClick={e => this.onSortNumber(e, 'yearsWithCompany', this.state.ascKey)}*/
                    >
                      Description
                    </th>
                    <th scope="col" style={{ width: "5%" }}>
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
                        animate={animateGif}
                        image={value.imgLink}
                        gifLink={value.functionalPreview}
                        appLink={value.appLink}
                        title={value.title}
                        // startAnimate={handleAnimate}
                        startAnimate={handleGifTooltipOpen}
                        stopAnimate={handleGifTooltipClose}
                        desc={value.description}
                        tooltipChange={imageTooltip}
                        tooltipText={"Click to see a GIF"}
                        handleOpenGif={handleGifModalOpen}
                        // openGif={gifOpen}
                        // closeGif={handleGifModal}
                      >
                        <UnorderList>
                          {value.tech.map((value, index) => {
                            return <ListItem key={index}>{value}</ListItem>;
                          })}
                          }{" "}
                        </UnorderList>
                      </TableRow>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
          <ContactModal
            // modalClasses={"contactModal"}
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
