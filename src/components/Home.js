import React, { useState } from "react";
import "../styles/styles.scss";
import { useLocation } from "react-router-dom";
import About from "./About";
import ProjectList from "./ProjectList";
import Nav from "../components/Nav";
import Contact from "./Contact";

function Home() {
  const things = [
    "stuff",
    "products",
    "apps",
    "websites",
    "IoT things",
    "animations",
    "graphics",
    "music",
    "boxes",
    "houseboats",
    "friends",
  ];
  const [title, setTitle] = useState("stuff");
  const location = useLocation();

  let nextItem;
  let index = things.indexOf(title);
  nextItem =
    index >= 0 && index < things.length - 1
      ? (nextItem = things[index + 1])
      : (nextItem = things[0]);

  return (
    <>
      <div className="main-container">
        <Nav mobileBackground="mobile-blue" />
        <div className="left-container">
          <h1 className="intro">
            Hi I'm Jake Zuke <br />
            and I make{" "}
            <u>
              <span className="clickswitch" onClick={() => setTitle(nextItem)}>
                {title}
              </span>
            </u>
          </h1>
          <Contact />
        </div>

        <div className="right-container">
          {location.pathname.split("/").pop() === "about" ? (
            <About isActive={true} />
          ) : (
            <ProjectList />
          )}
        </div>

        <span className="frame-border-home frame-border-top"></span>
        <span className="frame-border-home frame-border-bottom"></span>
        <span className="frame-border-home frame-border-left"></span>
        <span className="frame-border-home frame-border-right"></span>
      </div>
    </>
  );
}

export default Home;
