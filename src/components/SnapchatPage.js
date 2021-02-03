import React, { Component } from "react";
import Zuck from "zuck.js";
import Nav from "./Nav";
import Contact from "./Contact";
import myProjects from "../data/myProjects";
import FadeIn from "react-lazyload-fadein";

export default class SnapchatPage extends Component {
  constructor(props) {
    super(props);
    this.storiesElement = null;
    this.storiesApi = null;
    this.state = {
      stories: [
        Zuck.buildTimelineItem(
          "Berkeley Data",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail1.jpg",
          "",
          "",
          0,
          [
            [
              "berkeley-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail1.jpg",
              "",
              false,
              false,
            ],
            [
              "berkeley-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail1.jpg",
              "",
              false,
              false,
            ],
            [
              "berkeley-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/BERKELEYDATAsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail1.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "College Risks",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
          "",
          "",
          "",
          [
            [
              "college-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-4",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap4.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-5",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap5.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-6",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap6.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-7",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap7.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-8",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap8.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-9",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap9.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-10",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap10.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
            [
              "college-11",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/COLLEGERISKSsnap11.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail2.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Allbirds",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail3.jpg",
          "",
          "",
          0,
          [
            [
              "allbirds-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail3.jpg",
              "",
              false,
              false,
            ],
            [
              "allbirds-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail3.jpg",
              "",
              false,
              false,
            ],
            [
              "allbirds-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/ALLBIRDSsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail3.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Retire",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
          "",
          "",
          0,
          [
            [
              "retire-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-4",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap4.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-5",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap5.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-6",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap6.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-7",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap7.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-8",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap8.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
            [
              "retire-9",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/RETIREsnap9.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail4.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Supreme",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
          "",
          "",
          0,
          [
            [
              "supreme-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap1.mp4",
              "WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
              "",
              false,
              false,
            ],
            [
              "supreme-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap2.mp4",
              "WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
              "",
              false,
              false,
            ],
            [
              "supreme-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap3.mp4",
              "WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
              "",
              false,
              false,
            ],
            [
              "supreme-4",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap4.mp4",
              "WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
              "",
              false,
              false,
            ],
            [
              "supreme-5",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SUPREMEsnap5.mp4",
              "WSJ-Snapchat-Discover/thumbnail/thumbnail5.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Tesla",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail6.jpg",
          "",
          "",
          0,
          [
            [
              "tesla-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail6.jpg",
              "",
              false,
              false,
            ],
            [
              "tesla-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail6.jpg",
              "",
              false,
              false,
            ],
            [
              "tesla-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/TESLA AMRADIOsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail6.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "HQ",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
          "",
          "",
          0,
          [
            [
              "HQ-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
              "",
              false,
              false,
            ],
            [
              "HQ-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
              "",
              false,
              false,
            ],
            [
              "HQ-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
              "",
              false,
              false,
            ],
            [
              "HQ-4",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap4.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
              "",
              false,
              false,
            ],
            [
              "HQ-5",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/HQsnap5.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail7.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Gen Z",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
          "",
          "",
          0,
          [
            [
              "genz-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-4",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap4.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-5",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap5.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-6",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap6.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-7",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap7.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-8",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap8.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-9",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap9.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-10",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap10.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-11",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap11.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
            [
              "genz-12",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/GENZsnap12.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail8.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
        Zuck.buildTimelineItem(
          "Sharpies",
          "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail9.jpg",
          "",
          "",
          0,
          [
            [
              "sharpies-1",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap1.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail9.jpg",
              "",
              false,
              false,
            ],
            [
              "sharpies-2",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap2.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail9.jpg",
              "",
              false,
              false,
            ],
            [
              "sharpies-3",
              "video",
              0,
              "https://cdn.jsdelivr.net/gh/jzuke/videos/SHARPIESsnap3.mp4",
              "../img/WSJ-Snapchat-Discover/thumbnail/thumbnail9.jpg",
              "",
              false,
              false,
            ],
          ]
        ),
      ],
    };
  }

  componentDidMount() {
    new Zuck(this.storiesElement, {
      skin: "facesnap", // container class
      avatars: true, // shows user photo instead of last story item preview
      list: true, // displays a timeline instead of carousel
      openEffect: true, // enables effect when opening story - may decrease performance
      cubeEffect: false, // enables the 3d cube effect when sliding story - may decrease performance
      autoFullScreen: false, // enables fullscreen on mobile browsers
      backButton: true, // adds a back button to close the story viewer
      backNative: false, // uses window history to enable back button on browsers/android
      previousTap: true, // use 1/3 of the screen to navigate to previous item when tap the story
      localStorage: false, // set true to save "seen" position. Element must have a id to save properly.
      reactive: true, // set true if you use frameworks like React to control the timeline (see react.sample.html)
      callbacks: {
        onDataUpdate: function (currentState, callback) {
          this.setState(
            (state) => {
              state.stories = currentState;

              return state;
            },
            () => {
              callback();
            }
          );
        }.bind(this),
      },
      stories: this.state.stories,
      language: {
        unmute: "",
      },
    });
  }

  render() {
    const timelineItems = [];

    this.state.stories.map((story, storyId) => {
      const storyItems = [];

      story.items.map((storyItem) => {
        return storyItems.push(
          <li key={storyItem.id} data-id={storyItem.id} className="">
            <a
              href={storyItem.src}
              data-type={storyItem.type}
              data-length={storyItem.length}
              data-link={storyItem.link}
              data-linktext={storyItem.linkText}
            >
              <img alt={storyItem.type} src={storyItem.preview} />
            </a>
          </li>
        );
      });

      let arrayFunc = "push";
      return timelineItems[arrayFunc](
        <div
          className={story.seen ? "story" : "story"}
          key={storyId}
          data-id={storyId}
          data-last-updated={story.lastUpdated}
          data-photo={story.photo}
        >
          <a className="item-link" href={story.link}>
            <span className="item-preview">
              <img alt={story.name} src={story.photo} />
            </span>
            <span
              className="info"
              itemProp="author"
              itemScope=""
              itemType="http://schema.org/Person"
            >
              <strong className="name" itemProp="name">
                {story.name}
              </strong>
            </span>
          </a>

          <ul className="items">{storyItems}</ul>
        </div>
      );
    });

    const project = myProjects[3];

    return (
      <div className="snapchat-page-container">
        <Nav />
        <h1
          className="project-page-title full-grid"
          style={{ gridColumnEnd: 12 }}
        >
          {project.title.replace(/-/g, " ")}
        </h1>
        <h2 className="project-page-summary full-grid ">
          {project.description}
        </h2>
        <figure className="header-img">
          <FadeIn>
            {(onload) => (
              <>
                <img
                  className="responsive"
                  src={`../img/${project.title}/header.jpg`}
                  onLoad = {onload}
                  alt={`${project.title} header`}
                />
                <figcaption>{project.imgCaptions.header}</figcaption>
              </>
            )}
          </FadeIn>
        </figure>
        <h3 className="summary">Summary</h3>
        <p className="project-page-content full-grid">
          {project.summary.paraOne}
        </p>
        <p className="project-page-content full-grid">
          {project.summary.paraTwo}
        </p>
        <h3
          className="project-page-content full-grid show-for-desktop"
          style={{ fontWeight: 300 }}
        >
          Click any image below for full story:{" "}
        </h3>
        <h3
          className="project-page-content show-for-mobile"
          style={{ fontWeight: 300 }}
        >
          Tap any image below for full story:
        </h3>

        <div
          ref={(node) => (this.storiesElement = node)}
          id="stories-react"
          className="storiesWrapper"
        >
          {timelineItems}
        </div>
        <Contact position={"bottom"} />
      </div>
    );
  }
}
