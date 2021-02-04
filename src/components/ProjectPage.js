import React from "react";
import myProjects from "../data/myProjects";
import SnapchatPage from "./SnapchatPage";
import MetaData from "./MetaData";
import Nav from "./Nav";
import Contact from "./Contact";
import { useLocation } from "react-router-dom";
import FadeIn from "react-lazyload-fadein";

const ProjectPage = () => {
  const location = useLocation();
  const project = myProjects.find(
    (project) => project.title === location.pathname.split("/").pop()
  );
  if (project.title === "WSJ-Snapchat-Discover") {
    return <SnapchatPage />;
  } else {
    return (
      <>
        <Nav />

        <div className="project-page-container">
          <h1 className="project-page-title">
            {project.title.replace(/-/g, " ")}
          </h1>
          <h2 className="project-page-summary">{project.description}</h2>
          <figure className="header-image">
            <FadeIn>
              {(onload) => (
                <>
                  <img
                    className="responsive"
                    src={`../img/${project.title}/header.jpg`}
                    onLoad={onload}
                    alt={`${project.title} header`}
                  />
                  <figcaption>{project.imgCaptions.header}</figcaption>
                </>
              )}
            </FadeIn>
          </figure>
          <MetaData projectData={project} />
          <h3 className="summary">Summary</h3>
          <p className="project-page-content">{project.summary.paraOne}</p>
          {project.summary.paraTwo === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraTwo}</p>
          )}
          {project.summary.paraThree === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraThree}</p>
          )}
          {project.summary.paraFour === undefined ? (
            ""
          ) : (
            <p className="project-page-content">{project.summary.paraFour}</p>
          )}
          <figure className="body-image">
          <FadeIn>
            {(onload) => (
              <>
                <img
                  src={`../img/${project.title}/one.jpg`}
                  onLoad={onload}
                  alt={`${project.title} 2`}
                />
                <figcaption>{project.imgCaptions.one}</figcaption>
              </>
            )}
          </FadeIn>
          </figure>

          {project.imgCaptions.two === undefined ? (
            ""
          ) : (
            <figure className="body-image">
            <FadeIn>
              {(onload) => (
                <>
                  <img
                    src={`../img/${project.title}/two.jpg`}
                    onLoad={onload}
                    alt={`${project.title} 3`}
                  />

                  <figcaption>{project.imgCaptions.two}</figcaption>
                </>
              )}
            </FadeIn>
            </figure>
          )}

          {project.imgCaptions.three === undefined ? (
            ""
          ) : (
            <figure className="body-image">
            <FadeIn>
              {(onload) => (
                <>
                  <img
                    src={`../img/${project.title}/three.jpg`}
                    onLoad={onload}
                    alt={`${project.title} 4`}
                  />
                  <figcaption>{project.imgCaptions.three}</figcaption>
                </>
              )}
            </FadeIn>
            </figure>
          )}

          {project.imgCaptions.four === undefined ? (
            ""
          ) : (
            <figure className="body-image">
            <FadeIn>
              {(onload) => (
                <>
                  <img
                    src={`../img/${project.title}/four.jpg`}
                    onLoad={onload}
                    alt={`${project.title} 5`}
                  />
                  <figcaption>{project.imgCaptions.four}</figcaption>
                </>
              )}
            </FadeIn>
            </figure>
          )}

          {project.imgCaptions.five === undefined ? (
            ""
          ) : (
            <figure className="body-image">
            <FadeIn>
              {(onload) => (
                <>
                  <img
                    src={`../img/${project.title}/five.jpg`}
                    onLoad={onload}
                    alt={`${project.title} 6`}
                  />
                  <figcaption>{project.imgCaptions.five}</figcaption>
                </>
              )}
            </FadeIn>
            </figure>
          )}

          <Contact position={"bottom"} />
        </div>

        <span className="frame-border-project frame-border-top"></span>
        <span className="frame-border-project frame-border-bottom"></span>
        <span className="frame-border-project frame-border-left"></span>
        <span className="frame-border-project frame-border-right"></span>
      </>
    );
  }
};

export { ProjectPage as default };
