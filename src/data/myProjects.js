const myProjects = [{
    title: "MTA-tracker",
    info: "tech: Javascript, Nodejs, Raspberry Pi, C++, lumber",
    description: "Live transit tracker for NYC",
    imgCaptions: {
      header: "Adding to the greenery",
      one:"Pile of stuff ( LED Matrices, Raspberry Pi, wires, other stuff )",
      two:"Early iteration of the design"
    },
    links: {
      siteType: "Medium article",
      site: "https://medium.com/@jakezuke/tracking-the-nyc-subway-from-my-apartment-eaf047ec8b7e",
      github: "https://github.com/Jzuke/MTA-tracker"
    },
    tech: "Raspberry Pi, Node.js, C++, lumber",
    summary:{
      paraOne:`This was a personal project I created both for utility and aesthetics.
      It's a live tracker for NYC public transportation. The current iteration
      only takes advantage of the G train since that's the closest train for me, but it can be modified to pull in data from any train or
      bus schedule. It's built using a Raspberry Pi with a few Node.js and C libraries to pull in the data and connect it to the LED matrices.`
    }
  },


  {
    title: "Creative-Writing-App",
    info: "tech: Javascript, webpack, localStorage, HTML, CSS\u2014migrating to React and Firebase",
    description: "A web app for creative writing",
    imgCaptions: {
      header: "Minimalist word editor",
      one: "Blank page, no entries",
      two: "Populated entry"
    },
    links: {
      siteType: "Website",
      site: "https://boring-kirch-8243fd.netlify.app/",
      github: "https://github.com/Jzuke/writing-app"
    },
    tech:"Javascript, HTML, CSS, webpack, localStorage",
    summary: {
      paraOne:`The purpose of this app is to be a catalyst for creative writing. The methodology I use here is adapted from Pat Pattison"s book 
      Songwriting Without Boundaries. I originally built this for myself and other writer friends to practice a specific type of writing called object
      writing. The app generates a random prompt based on a list of adjectives and verbs and then starts a timed writing session.`,
      paraTwo: `I'm currently expanding it out into something more robust which will include the option to choose different types of writing exercises
      along with just being an empty space to journal your thoughts. The current iteration uses Javascript and localStorage, but I"m transiting to a Firebase
      database and React. Also working on workshopping an actual name for this thing.`
    }
},

  {
    title: "WSJ-Snapchat-Discover",
    info: "tools: Adobe CC",
    description: "Motion graphics created for WSJ's Snapchat Discover page",
    imgCaptions: {
      header: "Header image on WSJ Snapchat profile"
    },
    summary:{
      paraOne:`Working on Snapchat Discover helped provide a platform to push innovative storytelling around typical WSJ content. My role was primarily to collect assets,
      create illustrative elements and edit video to create full editions. I also helped write out some of the scripts for the stories. My primary tools for creating these were tools from Adobe CC, including After Effects, Photoshop, Illustrator and Premiere.`,
      paraTwo:`During my first year on this team, we were able to surpass 1 million subscribers, increase daily uniques by 19%, and increase returning users by 26%. We were also able to capture the eyes of an audience 
      that typically does not read WSJ content. This in turn helped inform overall company strategy moving forward and the insights contributed to my role as a Product Designer.`
    }
  },


  {
    title: "Teachers-Supporting-Teachers",
    info: "tech/tools: Wordpress, HTML, CSS, Sketch, Photoshop",
    description: "Redesigned website for non-profit Teachers Supporting Teachers",
    imgCaptions: {
      header: "Updated homepage",
      one: "Updated internal page",
      two: "Restructured nav",
      three: "Old homepage",
      four: "Old internal page",
      five: "Old nav"
    },
    links: {
      siteType:"Website",
      site: "http://www.tstnfp.org/",
    },
    tech:"Wordpress, HTML, CSS, Sketch, Photoshop",
    summary:{
      paraOne:`A redesigned website for the non-profit Teachers Supporting Teachers. The goal for the project was to create a cohesive visual identity for the 
      site, make the CTAs more clear and easily accessible, and to clean up the overall information architecture/navigation of the site.`
    }
  },
  
  {
    title: "Art-Basel-Banana(s)",
    info: "tech: React, CSS, HTML",
    description: "My artistic take on the infamous Art Basel Banana",
    imgCaptions: {
      header: "A taped banana",
      one:"Multiple taped bananas ",
    },
    links: {
      siteType:"Website",
      site: "https://www.artbaselbananas.com/",
      github: "https://github.com/Jzuke/art-basel-bananas"
    },
    tech:"React, CSS, HTML",
    summary:{
      paraOne:`If you've ever really wanted to tape a banana to a wall, but didn't want to use real tape or a real banana, now is your chance. This project
      uses React and some CSS/SVG animations.`
    }
  },


  {
    title: "Snapchat-Window-Mural",
    info: "tech: Post-it notes, Ricoh printer",
    description: "A scannable Snapchat code made out of post-its",
    imgCaptions: {
      header: "The final product (mostly not photoshopped)",
      one: "Not pictured\u2014my lack of sanity after sticking that many stickies",
      two: "Lots of iterations"
    },
    links: {
      siteType:"Medium article",
      site: "https://ideas.redpepper.land/how-to-post-digital-content-on-windows-91ca86834776",
    },
    tech:"Post-it notes, Ricoh printer",
    summary:{
      paraOne:`At my previous company in Nashville, we had a great window. One of those windows that can cause some serious envy (you know the ones I"m talking about)
      We decided to use that real estate to display some monthly post-it art to help put a smile on the daily commuters faces. In this specific iteration I decided
      to help with the task to create something not only pleasing to the eye, but a to connect the digital world to the physical. This post-it art was a Snapchat code
      that you could actually scan to add us as a friend on the app. The tech I used here was nothing more than a a few (a lot) of stickies. And a Ricoh enterprise printer.`
    }
  }]
  

  export { myProjects as default }