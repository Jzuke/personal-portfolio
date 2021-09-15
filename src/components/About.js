import React, { useRef } from "react";
import { useSpring, useChain, animated } from "react-spring";
import * as easings from "d3-ease";

const About = () => {
  const containerRef = useRef();
  const mobile_containerRef = useRef();
  const props = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "0%",
      height: "100%",
      background: "#1ADAFF",
    },
    to: async (next, cancel) => {
      await next({
        left: "50%",
        top: "0%",
        width: "50%",
        height: "100%",
        background: "#1ADAFF",
      });
    },
    ref: containerRef,
    config: { duration: 1500, easing: easings.easeCubicOut },
  });

  const propsMobile = useSpring({
    from: {
      left: "0%",
      top: "0%",
      width: "100%",
      height: "0%",
      background: "#1ADAFF",
    },
    to: async (next, cancel) => {
      await next({
        left: "0%",
        top: "50%",
        width: "100%",
        height: "70vh",
        background: "#1ADAFF",
      });
    },
    ref: mobile_containerRef,
    config: { duration: 1500, easing: easings.easeCubicOut },
  });

  const textRef = useRef();
  const textAnim = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    ref: textRef,
  });

  const textRefMobile = useRef();
  const textAnimMobile = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 },
    ref: textRefMobile,
  });

  useChain([containerRef, textRef], [0, 1]);
  useChain([mobile_containerRef, textRefMobile], [0, 1]);

  return (
    <>
      <animated.div className="about-container show-for-desktop" style={props}>
        <animated.div className="about-copy" style={textAnim}>
          Currently a Product Designer at Morning Brew. <br /> <br />
          I'm a tinkerer and love experimenting with new tech, striving to
          create delightful experiences that are unique, simple and usable.{" "}
          <br /> <br />
          If I'm not building stuff, I'm out playing beach volleyball or writing
          music.
        </animated.div>
      </animated.div>

      <animated.div
        className="about-container__mobile show-for-mobile"
        style={propsMobile}
      >
        <animated.div className="about-copy__mobile" style={textAnimMobile}>
          Currently a Product Designer at Morning Brew. <br /> <br />
          I'm a tinkerer and love experimenting with new tech, striving to
          create delightful experiences that are unique, simple and usable.{" "}
          <br /> <br />
          If I'm not building stuff, I'm out playing beach volleyball or writing
          music.
        </animated.div>
      </animated.div>
    </>
  );
};

export { About as default };
