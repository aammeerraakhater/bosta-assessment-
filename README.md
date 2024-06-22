# bosta-assessment-

# My Project

## Table of Contents

- [Task requirements](#Task-requirements)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)

## Task requirements

    Currency Exchange Public API
    Implement a simple system that exposes a public API for currency exchange.
    Functional Requirements
    Currency Exchange:
    1. Integrate with a public currency conversion API to read the latest currency exchange rates
    or any other API that you see fit.
    2. Provide a public API that allows users to get exchange rates given from currency and to
    currency parameters.
    Non-functional Requirements
    1. Programming: The task shall be implemented using Node.js.
    2. API: Implement a RESTful API to support the currency exchange operation.
    3. Error Handling: The system should gracefully handle errors and provide meaningful
    feedback.
    Bonus (Optional)
    1. Caching: Implement caching to reduce the number of requests to the external API.
    2. Rate Limiting: Implement rate limiting for the API to prevent abuse.
    3. Dockerizing: Dockerize the application using docker-compose.
    4. Unit Tests: Add unit tests for the currency exchange module.
    Submission
    1. Codebase: Share the code repository link (like GitHub).
    2. Documentation: Include instructions to set up and run the application. Document the API
    endpoints with expected inputs/outputs using Swagger or a similar tool.
    Evaluation Criteria
    1. Functional Requirements: All functional requirements should be implemented.
    2. Code Quality: Clear naming conventions, modularity, and comments.
    3. API Design: Proper use of HTTP methods, status codes, and endpoint structuring.
    4. Error Handling: Proper error feedback and handling of edge cases.
    5. (Optional) Bonus features and enhancements.

## Installation

- Install code using github repo through the green button with ( Code ) text and either download through zip, https, ssh.
- After downloading you need to download modules, you can dowload all the modules through `npm install`
- generate your own api key from the api website using email and insert in in the app file
- supposedly the app will run if not you need to run the app through the terminal ` nodemon app`

## Usage

- App contains rate limiting and caching
- After runing the application you can test or use through postman using `http://localhost:3000/exchange-rate` and sending data through body and then select raw, it should look something like this:
  {
  "exchangeFrom":"inr",
  "exchangeTo":["egp", "azn", "usd"]
  }
  where exchangeFrom is a string of the source currency, and exchangeTo is the array of target currencies in string

## API Endpoint

- POST /exchange-rate
- Description: Sends data to the api currency exchanger and receives required rate data.
- Response:
  {
  "egp_azn": 0.035666421,
  "egp_egp": 1,
  "egp_usd": 0.020980254
  }
