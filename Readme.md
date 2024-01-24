# Testing API Server

[![License](https://img.shields.io/badge/license-ISC-blue.svg)](https://opensource.org/licenses/ISC)

A simple mock API server using Express to simulate responses for specific routes. Useful for development and testing scenarios when a real backend is not available.

## Features

- **Mock Data:** Simulate responses for predefined routes with mock data.
- **Express Server:** Utilizes the Express.js framework for handling HTTP requests.
- **Easy to Use:** Start the mock API server with a single function call.

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (>=12.0.0)
- npm (usually comes with Node.js installation)

### Installation

```bash
npm install testing-api-server

##Usage
  1- Import the package in your project;
        const testingApiServer = require('testing-api-server');
  2- Start the mock API server:
        testingApiServer.start();
  3- Access mock data at predefined routes (e.g., /api/users, /api/posts).


##Configuration
Port: By default, the server listens on port 3000. You can set the PORT environment variable to change the port.
Contributing
Contributions are welcome! Please read the Contributing Guidelines for details on how to contribute to this project.

##License
This project is licensed under the ISC License.

##Acknowledgments
Thanks to the Express team for the powerful web application framework.
Mock data inspired by real-world scenarios.

##Contact
For questions or feedback, feel free to contact the project maintainer:

Your Name
Email: kratikbohra5@gmail.com
LinkedIn: www.linkedin.com/in/kratik-bohra-11a39a195
