import React from "react";
import Footer from "@/components/footer.jsx";
import Navigation from "@/components/navigation";
const projectPage = () => {
  return (
    <main>
      <Navigation />
      <section className="container-fluid">
  <div className="d-flex w-100 flex-column">
    <div className="container-fluid d-flex mb-4 justify-content-between">
      <h2>Projects</h2>
      <div className="btn btn-sm btn-outline-primary">sort</div>
    </div>
    <div className="d-flex container-fluid flex-column align-items-center mb-5">
      <h3 className="align-self-start mb-2">Professional</h3>
      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Company Dashboard</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Full-stack</h5>
          <p>Type: Web Development</p>
          <p>
            <strong>Front-End:</strong> Company Dashboard | HTML5/CSS3, TypeScript, React, Redux-Saga AWS LAMBDA, Serverless, Cognito, Jira
          </p>
          <p>Developed a highly interactive React-based dashboard for administrators, enabling seamless CRUD operations on user data for effective management and oversight.</p>
          <p>Implemented React Redux and Redux Saga to handle complex state management, ensuring efficient data flow and smooth user interactions across the platform.</p>
          <p>Focused on delivering an intuitive user interface, optimizing the dashboard for scalability and ease of use in an administrative setting.</p>
          <p>Note: Due to company policy, this project cannot be publicly showcased.</p>
        </div>
      </div>
    </div>
  </div>

  <div className="d-flex w-100 flex-column">
    <div className="container-fluid d-flex mb-2">
      <h2>University</h2>
    </div>
    <div className="d-flex container-fluid gap-2 flex-column mb-4">
      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Team Yaaper Webchat Application</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Full-stack</h5>
          <p>Type: Web Development</p>
          <p><strong>Tech Stack:</strong> HTML5/CSS3, TypeScript, MEAN Stack (MongoDB, Express.js, Angular, Node.js)</p>
          <p>Developed a feature-rich real-time chat application using Angular for the front-end, with full CRUD functionalities, image upload, and robust administrator controls for managing user interactions.</p>
          <p>Utilised MongoDB for efficient and scalable database management, Express.js for seamless back-end routing, and Node.js for server-side logic and performance optimization.</p>
          <p>Integrated real-time messaging with WebSockets, greatly enhancing user communication and providing instant updates in chat rooms.</p>
        </div>
      </div>

      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Peer Review University Website</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Full-stack</h5>
          <p>Type: Web Development</p>
          <p><strong>Tech Stack:</strong> HTML5/CSS, PHP, Laravel, SQLite</p>
          <p>Developed a peer review platform for university courses, supporting user registration, peer review submissions, and full CRUD functionality for managing reviews.</p>
          <p>Leveraged SQLite3 for lightweight and efficient database management, integrated with Laravel to handle routing, authentication, and database operations.</p>
          <p>Implemented automated course creation by reading data from JSON files, streamlining the process of adding new courses and associated reviews.</p>
        </div>
      </div>

      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Game Review Website</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Full-stack</h5>
          <p>Type: Web Development</p>
          <p><strong>Tech Stack:</strong> HTML5/CSS, PHP, Laravel, MySQL</p>
          <p>Built a comprehensive game review website that enables users to create, read, update, and delete (CRUD) reviews for various game products.</p>
          <p>Utilized SQLite3 as the database to manage user and review data, integrated with Laravel for handling routing, authentication, and server-side operations.</p>
        </div>
      </div>

      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Fake Store Mobile Application</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Front-End</h5>
          <p>Type: Mobile App Development</p>
          <p><strong>Tech Stack:</strong> HTML5/CSS3, JavaScript, React-Native, Expo Go</p>
          <p>Developed a full-stack mobile store application that allows users to browse, add, update, and delete products, utilizing complete CRUD functionality.</p>
          <p>Built using React Native and Expo Go, ensuring seamless cross-platform performance on both iOS and Android devices, with a responsive and intuitive user interface.</p>
        </div>
      </div>

      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Websmash Web Application</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Front-End</h5>
          <p>Type: Web Development</p>
          <p><strong>Tech Stack:</strong> JavaScript, React, RESTful APIs, HTML5/CSS3</p>
          <p>Developed a React-based web aggregator that integrates YouTube, Spotify, Pexels, and Flickr APIs to provide users with curated multimedia content from various platforms.</p>
        </div>
      </div>

      <div className="card w-100">
        <div className="card-header d-flex">
          <h4>Docker / Kubernetes AWS Deployment</h4>
        </div>
        <div className="card-body d-flex flex-column text-start">
          <h5>Back-end</h5>
          <p>Type: Web Development</p>
          <p><strong>Tech Stack:</strong> AWS EC2, Express.Js, Nginx</p>
          <p>Deployed a full-stack web application on AWS EC2 using Docker, Docker-Compose, and Kubernetes to ensure scalable and efficient server management.</p>
          <p>Integrated MongoDB with a graphical interface for database management and set up an Nginx reverse proxy to handle web traffic, enhancing security and performance.</p>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer />
    </main>
  );
};

export default projectPage;
