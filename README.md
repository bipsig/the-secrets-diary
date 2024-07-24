# API Authentication Project

This project was created to learn and understand different API authentication methods and how they are used with Axios in a Node.js environment. The project uses Express for server-side logic and EJS for rendering the frontend.

## Table of Contents

- [Getting Started](#getting-started)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
  - [No Authentication](#no-authentication)
  - [Basic Authentication](#basic-authentication)
  - [API Key Authentication](#api-key-authentication)
  - [Bearer Token Authentication](#bearer-token-authentication)
- [Dependencies](#dependencies)
- [Acknowledgements](#acknowledgements)

## Getting Started

These instructions will help you set up and run the project on your local machine.

## Prerequisites

- Node.js
- npm (Node Package Manager)

## Installation

1. Clone the repository:
   - `git clone https://github.com/bipsig/api-authentication-project.git`

2. Navigate to the project directory:
   - `cd api-authentication-project`

3. Install the dependencies:
   - `npm install`

## Usage

Start the server:
- `npm start`

Navigate to `http://localhost:3000` in your browser to see the homepage. Use the buttons on the page to test different types of API authentication methods.

### No Authentication

- Endpoint: `/noAuth`
- Description: Sends a request to an API endpoint that does not require authentication.

### Basic Authentication

- Endpoint: `/basicAuth`
- Description: Sends a request to an API endpoint using Basic Authentication.

### API Key Authentication

- Endpoint: `/apiKey`
- Description: Sends a request to an API endpoint using an API Key for authentication.

### Bearer Token Authentication

- Endpoint: `/bearerToken`
- Description: Sends a request to an API endpoint using a Bearer Token for authentication.

## Dependencies

- express
- axios
- ejs

Install these dependencies using:
- `npm install express axios ejs`

## Acknowledgements

This project was made to learn and understand different API authentication methods and how they are used with Axios.
