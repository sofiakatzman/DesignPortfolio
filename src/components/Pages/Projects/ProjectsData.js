const PROJECTSDATA = [
    {
      name: "Milestones",
      summary: "A social platform dedicated to illustrating user's life accomplishments via milestones aimed at displaying a user's 'full life' in an effort to understand their journey and development better. ",
      stack: "React front-end, Python backend with Flask API. Websocket.io integration for instant user updates. Bcrypt for user authentication and authorization. UseContext global state handling.",
      github: "https://github.com/sofiakatzman/Milestones",
      walkthrough: "https://www.youtube.com/watch?v=23grUYcH2Qw",
      technologies: ["JavaScript", "React", "Python", "Flask", , "Gunicorn", "HTML/CSS", "WebSocket.io", "Formik", "Bycrypt"],
      livedemo: false,
      image: "https://media.istockphoto.com/id/1276686973/vector/continuous-line-drawing-champagne-bottle.jpg?s=612x612&w=0&k=20&c=Osd_Q4WO5IYQXDnWt64ym--WiEh_9mwgNO90ppAf-9s=",
      details: {
        description: "Milestones is a social platform dedicated to illustrating users' life accomplishments via milestones. The platform aims to display users' 'full life' to help understand their journey and development better. The project features a React front-end and a Python backend with a Flask API. It also integrates Websocket.io for instant user updates and Bcrypt for user authentication and authorization. Global state handling is achieved using React's UseContext.",
        keyFeatures: [
          "Milestone Tracking: Users can add and track their life milestones and accomplishments.",
          "React Front-End: The platform's front-end is built using React for an interactive user experience.",
          "Python Backend: The backend is powered by Python and utilizes a Flask API for handling requests.",
          "Websocket Integration: Websocket.io is integrated to provide instant user updates and interactions.",
          "User Authentication: Utilizes Bcrypt for secure user authentication and authorization.",
          "Global State Handling: React's UseContext is employed for efficient global state management.",
          "Technologies: The project employs JavaScript, React, Python, Flask, HTML, CSS, and Websocket.io."
        ],
        technologyStack: [
          "Front-End: Built with React to offer a dynamic and interactive user interface.",
          "Back-End: Python backend with Flask API for handling server-side operations.",
          "User Authentication: Implements Bcrypt for secure user authentication and authorization.",
          "Global State Management: Leverages React's UseContext for efficient state management.",
          "Technologies: Utilizes JavaScript, React, Python, Flask, HTML, CSS, and Websocket.io."
        ],
        achievements: [
          "Created a social platform for tracking and displaying users' life milestones and accomplishments.",
          "Incorporated React for an engaging and interactive front-end user experience.",
          "Integrated Websocket.io to provide real-time updates and interactions for users."
        ]
      },
      caseStudy: {
        problem: "People often struggle with sharing their life accomplishments in a consolidated way.",
        solution: "Milestones provides a platform where users can record and display their life milestones, creating a comprehensive timeline of their journey where others can learn about them in a more profound way.",
        media: [
          { type: "gif", url: "", alt: "Milestones Demo" }, //link project gifs here
        ]}
    },
    {
      name: "RecycleQuest",
      summary: "A gamified social platform aimed at increasing recycling knowledge and awareness, as well as creating a competitive and engaging environment to promote contributions. ",
      stack: "React front-end, Ruby on Rails backend, deployed Postgres database and API. UseContext global state handling.",
      github: "https://github.com/elainedoud/RecycleQuest",
      walkthrough: "https://www.youtube.com/watch?v=X9x1nlTRcv0",
      technologies: ["JavaScript", "React", "Ruby", "Rails", "HTML/CSS"],
      livedemo: "https://ruby-rails-blazer-part-ii.onrender.com/",
      image: "https://img.freepik.com/premium-vector/continuous-line-drawing-recycle-symbol-vector-illustration_500861-160.jpg",
      details: {
        description: "RecycleQuest is a gamified social platform that focuses on increasing recycling knowledge and awareness. The platform creates a competitive and engaging environment to encourage contributions towards a more sustainable future. The project was submitted as an entry for the 'Girls in Tech: Hack for the Environment' hackathon.",
        keyFeatures: [
          "Gamified Approach: The platform gamifies recycling knowledge and encourages active participation by users.",
          "User Engagement: Users are motivated to contribute and engage with recycling activities.",
          "Competitive Environment: The gamified nature promotes competition among users, enhancing engagement.",
          "Browser-Click-and-Find-Game: Utilizes conditional rendering CSS rules to create a browser-based click-and-find game.",
          "User Tracking: Leverages user authentication, Bcrypt, and cookies to track user sessions and activities.",
          "In-Game Activity: Utilizes React's useContext to manage and track user in-game activities.",
          "Increased Awareness: Aims to enhance recycling awareness by making the learning process interactive and fun.",
          "Technologies: The project utilizes JavaScript, React, Ruby, Rails, HTML, and CSS."
        ],
        technologyStack: [
          "Front-End: Built with React, utilizing the useContext feature to handle user in-game activity.",
          "Back-End: Ruby on Rails was used to create the backend functionality.",
          "Database: Utilizes a deployed Postgres server to store user and game-related data.",
          "User Authentication: Incorporates user authentication using Bcrypt for secure password hashing.",
          "Competitive Gaming: Leverages user sessions and cookies for tracking competitive gaming sessions.",
          "CSS Styling: Employs conditional rendering CSS rules for the browser-click-and-find-game.",
          "Technologies: Employs JavaScript, React, Ruby, Rails, HTML, and CSS."
        ],
        achievements: [
          "Submitted for 'Girls in Tech: Hack for the Environment' hackathon, showcasing the project's commitment to sustainability.",
          "Successfully created a gamified platform that bridges education and entertainment to enhance recycling awareness.",
          "Implemented a competitive gaming environment to engage and motivate users towards recycling practices."
        ]
      },
      caseStudy: {
        problem: "Lack of recycling knowledge and engagement among users leads to low recycling rates.",
        solution: "RecycleQuest gamifies recycling education, fostering engagement and competition among users to promote recycling practices.",
        media: [
          { type: "image", url: "", alt: "RecycleQuest Solution" }, //link project gifs here
      
        ]
      }
    },
    {
      name: "BunnyWalks",
      summary: "A full-stack application designed to keep a record of walks, paths, and bunnies encountered.",
      stack: "React front-end, Python backend with Flask API. Mobile and WebVersion available.",
      github: "https://github.com/sofiakatzman/Bunny-Walks.git",
      walkthrough: "https://www.youtube.com/watch?v=A9YwlcA_n5E",
      technologies: ["JavaScript", "React", "Python", "Flask", "HTML/CSS"],
      livedemo: false,
      image: "https://img.freepik.com/premium-vector/easter-bunny-continuous-one-line-drawing-minimalist-hand-drawn-illustration-isolated-element-vector_593228-160.jpg",
      details: {
        description: "BunnyWalks is a full-stack application designed to record walks, paths, and bunny encounters. The project features a React front-end and a Python backend with a Flask API. It offers both mobile and web versions for user convenience.",
        keyFeatures: [
          "Walk Recording: Allows users to record details about their walks and bunny encounters.",
          "Full-Stack Application: Features a React front-end and a Python backend with a Flask API.",
          "Mobile and Web Versions: Provides both mobile and web versions for users to choose their preferred platform.",
          "User-Friendly Interface: Offers a user-friendly and intuitive interface for recording walk information.",
          "Technologies: The project utilizes JavaScript, React, Python, Flask, HTML, and CSS."
        ],
        technologyStack: [
          "Front-End: Built with React to provide an interactive and visually appealing user interface.",
          "Back-End: Python backend with Flask API for handling server-side operations.",
          "Mobile and Web Versions: Offers both mobile and web versions to cater to different user preferences.",
          "User-Friendly Interface: Provides a user-friendly interface for recording and managing walk information.",
          "Technologies: Employs JavaScript, React, Python, Flask, HTML, and CSS."
        ],
        achievements: [
          "Developed a versatile application for recording walks and bunny encounters.",
          "Created an interactive and user-friendly front-end interface using React.",
          "Implemented both mobile and web versions for enhanced user accessibility."
        ]
      }, 
      caseStudy: {
        problem: "My neighbors often wanted to keep track of their walks and encounters with bunnies within our community, but lack a centralized platform for recording and viewing this information.",
        solution: "BunnyWalks provides a full-stack application that allows users to log their walks, paths, and bunny encounters, providing a convenient way to organize and review their experiences.",
        media: [
          { type: "image", url: "", alt: "BunnyWalks Solution" }, //link project gifs here
        ]
      }
    },
    {
      name: "EventManager",
      summary: "A Command Line Interface Application designed to streamline the process of hiring and booking event staff.",
      stack: "Python backend with SQLAlchemy database. No GUI; entirely designed using text and special characters. ",
      github: "https://github.com/sofiakatzman/Event-Manager",
      walkthrough: "https://www.youtube.com/watch?v=AS7z6d3M1Qc",
      technologies: ["Python", "SQL", "SQLAlchemy", "CLI", "Alembic"],
      livedemo: false,
      image: "https://media.istockphoto.com/id/1197573398/vector/continuous-one-line-drawing-clock-icon-with-doodle-handdrawn-style-on-white-background.jpg?s=612x612&w=0&k=20&c=9AqkHQ2FILkhU-M7mn3K-zDUX7-WX6NO93FoDSuThCc=",
      details: {
        description: "EventManager is a Command Line Interface (CLI) application designed to streamline the process of hiring and booking event staff. The project is built with a Python backend and utilizes the SQLAlchemy database library for efficient data management. It provides a text-based design for interacting with the application.",
        keyFeatures: [
          "CLI Application: Designed as a Command Line Interface (CLI) application for efficient text-based interactions.",
          "Hiring and Booking: Streamlines the process of hiring and booking event staff.",
          "Python Backend: Features a Python backend for handling application logic and data management.",
          "SQLAlchemy Database: Utilizes SQLAlchemy for efficient management and querying of the database.",
          "Efficient Data Management: Employs Alembic for efficient database migrations.",
          "Technologies: The project utilizes Python, SQL, SQLAlchemy, CLI, and Alembic."
        ],
        technologyStack: [
          "Python Backend: Built with Python to handle the application's logic and data management.",
          "Database: Utilizes SQLAlchemy for efficient and organized database management.",
          "CLI Application: Designed as a Command Line Interface (CLI) application for text-based interactions.",
          "Database Migrations: Employs Alembic for efficient database schema management and migrations.",
          "Technologies: Employs Python, SQL, SQLAlchemy, CLI, and Alembic."
        ],
        achievements: [
          "Developed a CLI application for streamlined hiring and booking of event staff.",
          "Created an efficient data management system using SQLAlchemy and Alembic.",
          "Implemented a text-based design for interacting with the application."
        ]
      }, 
      caseStudy: {
        problem: "Event organizers often face challenges in efficiently booking and tracking event staff, leading to potential inefficiencies and miscommunications.",
        solution: "EventManager simplifies the process of hiring and booking event staff through a CLI application, enabling organizers to manage staff-related tasks more effectively.",
        media: [
          { type: "image", url: "", alt: "EventManager Solution" },  //link project gifs here
        ]
      }
    }
  ]
  
  export default PROJECTSDATA
  