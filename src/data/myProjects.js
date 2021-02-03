const myProjects = [
  {
    title: "WSJ-Noted.",
    info: "role: Product Designer",
    description:
      "A digital magazine focused on what it's like to be young in today's world",
    imgCaptions: {
      header: "Wordmark for WSJ Noted.",
      one: "Section Front (Landing Page)",
      two: "One style of an article header",
      three: "Article body w/ photo",
    },
    links: {
      siteType: "WSJ Noted.",
      site: "https://www.wsj.com/noted",
    },
    role: "Product Designer",
    summary: {
      paraOne: `WSJ Noted. is a new product from WSJ–a digital magazine that reports on what it's like to be young
      in today's world. I was the product designer for this project, working with design directors and an international team 
      of engineers to create a new experience for a younger audience.`,
      paraTwo: `We created a new brand that could attract young readers and fits within the current 
      WSJ visual identity. We ran a branding workshop and got user validation from our UX and marketing teams to 
      solidify the final direction of visual elements to be used. With branding in place, 
      existing templates and components from other WSJ products were adapted and modified accordingly to match the new style.`,
      paraThree: `The approach for the WSJ Noted. designs revolved around the reusability of components 
      that existed within the WSJ product ecosystem, along with a system to create new components that can be shared 
      back into that ecosystem. Based on user research, we were able to map the habits of our target audience with
      how they currently use our core product offering in order to find the best existing components to use. 
      Filling in gaps of what was missing allowed us to craft a more enjoyable and user friendly experience.`,
      paraFour: `Along with the new content being produced, WSJ Noted. is acting as an incubator for 
      new forms of storytelling and features. It has also allowed us to solidify a direction for the 
      larger WSJ design system based on common components that were used in building this product.`,
    },
  },
  {
    title: "MTA-tracker",
    info: "tech: Javascript, Nodejs, Raspberry Pi, C++, lumber",
    description: "Live transit tracker for NYC transit",
    imgCaptions: {
      header: "Adding to the greenery",
      one: "Pile of stuff (LED Matrices, Raspberry Pi, wires, other stuff)",
      two: "Early iteration of the design",
    },
    links: {
      siteType: "Medium article",
      site:
        "https://medium.com/@jakezuke/tracking-the-nyc-subway-from-my-apartment-eaf047ec8b7e",
      github: "https://github.com/Jzuke/MTA-tracker",
    },
    tech: "Javascript, Node.js, Raspberry Pi, C++, lumber",
    summary: {
      paraOne: `This was a personal project I created both for utility and aesthetics.
      It's a real-time tracker for NYC public transportation that lets me know the best time to leave my apartment to catch the train. The current iteration
      only takes advantage of the G train since that's the closest train for me, but it can be modified to pull in data from any train or
      bus schedule. It's built using a Raspberry Pi with a few Node.js and C++ libraries to pull in the data and connect it to the LED matrices.`,
    },
  },
  {
    title: "Creative-Writing-App",
    info:
      "tech: Javascript, webpack, localStorage, HTML, CSS\u2014migrating to React and Firebase",
    description: "A web app for creative writing",
    imgCaptions: {
      header: "The minimalist text editor",
      one: "Blank page with no entries",
      two: "Populated entry",
    },
    links: {
      siteType: "Website",
      site: "https://boring-kirch-8243fd.netlify.app/",
      github: "https://github.com/Jzuke/writing-app",
    },
    tech: "Javascript, webpack, localStorage, HTML, CSS",
    summary: {
      paraOne: `The purpose of this app is to be a catalyst for creative writing. The methodology I use here is adapted from a book called
      Songwriting Without Boundaries. I originally built this for myself and other writer friends to practice a specific type of writing called object
      writing, specifically meant to focus on your senses. The app generates a random prompt based on a list of adjectives and verbs and then starts a timed writing session.`,
      paraTwo: `I'm currently expanding it out into something more robust which will connect the entries to a database, include different types of writing 
      exercises and create the option for an empty space to journal thoughts. The current iteration uses vanilla Javascript and localStorage, but I'm transiting to a Firebase
      database and React. Also working on workshopping an actual name for this thing.`,
    },
  },

  {
    title: "WSJ-Snapchat-Discover",
    info: "role: Motion Designer",
    description: "Motion graphics created for WSJ's Snapchat Discover page",
    imgCaptions: {
      header: "Header image on WSJ Snapchat profile",
    },
    summary: {
      paraOne: `Snapchat Discover helped provide a platform to push innovative storytelling methods around typical WSJ content. My role was primarily to create short animated videos by collecting assets,
      creating illustrative elements and editing video. I also helped write out some of the scripts for the stories. My primary tools for creating these videos were from Adobe CC including After Effects, Photoshop, Illustrator and Premiere.`,
      paraTwo: `During my first year on this team, we were able to surpass 1 million subscribers, increase daily unique visitors by 19%, and increase returning users by 26%. We were also able to capture the eyes of an audience 
      that typically does not engage with WSJ content. This in turn helped inform overall company strategy moving forward and the insights carried over to my role as a Product Designer for young audiences.`,
    },
  },

  {
    title: "Teachers-Supporting-Teachers",
    info: "tech/tools: Wordpress, HTML, CSS, Sketch, Photoshop",
    description:
      "Redesigned website for non-profit Teachers Supporting Teachers",
    imgCaptions: {
      header: "Updated homepage",
      one: "Updated internal page",
      two: "Restructured navigation",
      three: "Old homepage",
      four: "Old internal page",
      five: "Old navigation",
    },
    links: {
      siteType: "Website",
      site: "http://www.tstnfp.org/",
    },
    tech: "Wordpress, HTML, CSS, Sketch, Photoshop",
    summary: {
      paraOne: `A redesigned website for the non-profit Teachers Supporting Teachers (TST). The goals for the project were to create a cohesive visual identity for the 
      site, make the CTAs more clear and easily accessible, serve as a hub for events, allow for easy integration of a CRM  and to clean up the overall information architecture/navigation of the site.`,
      paraTwo: `Since the redesign TST has increased overall member signup, had the site serve as a home base for their first-ever individual giving campaign which yielded over $18,000+, recieved a new grant,
      mobilized a 15 person associate board who brought in 5 new sponsors for their benefit gala, and hooked up to their CRM and donation platform which streamlined operations.`,
    },
  },

  {
    title: "Art-Basel-Banana(s)",
    info: "tech: React, CSS, HTML",
    description: "My artistic take on the infamous Art Basel Banana",
    imgCaptions: {
      header: "A taped banana",
      one: "Multiple taped bananas ",
    },
    links: {
      siteType: "Website",
      site: "https://www.artbaselbananas.com/",
      github: "https://github.com/Jzuke/art-basel-bananas",
    },
    tech: "React, CSS, HTML",
    summary: {
      paraOne: `If you've ever really wanted to tape a banana to a wall, but didn't want to use real tape or a real banana, now is your chance. This project
      uses React and some CSS/SVG animations. And all it does is exactly as mentioned.`,
    },
  },

  {
    title: "Snapchat-Window-Mural",
    info: "tech: Post-it notes, Ricoh printer",
    description: "A scannable Snapchat code made out of post-its",
    imgCaptions: {
      header: "The final product (mostly not photoshopped)",
      one:
        "Not pictured\u2014my lack of sanity after sticking that many stickies",
      two: "Lots of iterations",
    },
    links: {
      siteType: "Medium article",
      site:
        "https://ideas.redpepper.land/how-to-post-digital-content-on-windows-91ca86834776",
    },
    tech: "Post-it notes, Ricoh printer",
    summary: {
      paraOne: `At my previous company in Nashville, we had a great window. One of those windows that can cause some serious window envy (you know the ones I'm talking about).
      We decided to use that real estate to display some monthly post-it art to help put a smile on the daily commuter's face. In this specific iteration I decided
      to help with the task to create something not only pleasing to the eye, but to connect the digital world to the physical. This post-it art was a Snapchat code
      that you could actually scan to add us (redpepper) as a friend on the app. The tech I used here was nothing more than a few (a lot) of post-it notes. And a handy enterprise 
      Ricoh printer that we never had problems with..`,
    },
  },
];

export { myProjects as default };
