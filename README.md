# Benefit-Calculator-application

Web application using React,TypeScript & NodeJs

## Tech Stack

**FrontEnd:**

- JavaScript
- ReactJs
- HTML
- CSS
- Bootstrap
- React-router
- Axios
- TypeScript
- Vite

**BackEnd:**

- NodeJs
- ExpressJs
- TypeScript

## Installation and Setup Instructions

**Client App:**

- Clone down this repository. You will need node and npm installed globally on your machine.
- Installation: run 'npm install'
- To Start Server: run 'npm run dev'
- To Visit App: : localhost:8080/

**Server App:**

- Clone down this repository. You will need node and npm installed globally on your machine.
- Installation: run 'npm install'
- To Start Server: run 'npm run start'
- To Visit App: : localhost:5001/

## Screen Shot(s)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%201.png)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%202.png)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%203.png)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%204.png)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%205.png)

![ScreenShot](https://github.com/shelumeal/benefit-calculator/blob/main/screenshots/Screen%206.png)

## Project Folder Structure

**Client App:**

- Assets
  - images : Images & othet assets
- Common
  - helpers : Helper methods & Utility functions
  - hooks : Custom Hooks
    apiUrls : Maintain all api urls
    colors : Global color variables
- Components
  - NavBar
  - ResultItem
  - SearchBar
  - SearchResult
- Models : TypeScript interface/model for result items
- Pages : Master Pages
- Service : Service for API calls or search logic

**Server App:**

- Common
  - helpers : Helper methods & Utility functions
- Config
  - dbConfig : Database configuration & connection string
- Controllers : API controlers
- Models : TypeScript interface/model
- Routes : Route configuration
- Server.ts : (Entry point) Server & middleware configuration

## Assumptions

- Utilized Vite to build the React application for its fast development experience.
- Leveraged Bootstrap and Sass to implement responsive design.
