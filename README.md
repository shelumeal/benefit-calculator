# assessment-react-application

Web application using React and TypeScript

## Tech Stack

**FrontEnd:**

- JavaScript
- ReactJs
- HTML
- CSS
- Bootstrap
- Bootstrap Icons
- React-router
- axios

**BackEnd:**
No

## Installation and Setup Instructions

- Clone down this repository. You will need node and npm installed globally on your machine.
- Installation: run 'npm install'
- To Start Server: run 'npm run dev'
- To Visit App: : localhost:3000/

## Screen Shot(s)

Desktop Views

![Alt text](<Screen 1.png>)

![Alt text](<Screen 2.png>)

![Alt text](<Screen 3.png>)

![Alt text](<Screen 4.png>)

## Project Folder Structure

- Assets
  - images : Images & othet assets
- Common
  - helpers : Helper methods & Utility functions
  - hooks : Custom Hooks
    apiUrls : Maintain all api urls
    colors : Global color variables
- Components
  - SearchBar
  - SearchContainer
  - SearchResult
- Models : TypeScript interface/model for result items
- Pages : Master Page
- Service : Service for API calls or search logic

## Assumptions

- Utilized Vite to build the React application for its fast development experience.
- Leveraged Bootstrap and Sass to implement responsive design.
- Developed a custom debounce hook to display suggestions and minimize multiple API calls.
