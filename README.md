<!-- PROJECT LOGO -->
<br />
<div align="center">
    <img src="./src/assets/JetSavr-logo.png" alt="JetSavr Logo" width="50%">
</div>

---

<!-- ABOUT THE PROJECT -->

Welcome to our Express-based travel planning web application! This project utilizes Express for the backend and PugJs as the template engine. The website aims to simplify travel planning by enabling users to find flights to their desired destinations and calculate currency exchange rates.

Hosted on onrender.com. You can view the live demo [here](https://travel-app-william-halimah.onrender.com/).

The site requires roughly 50 seconds to spin up if it is not actively used.

### Built With

- Node/Express
- PugJs

### Features

- Flight Search: Users can search for flights to their chosen destinations.
- Currency Exchange: The platform offers a currency exchange feature to calculate current exchange rates.
- Backend Integration: We leverage backend integration with third-party APIs to provide up-to-date flight information and exchange rates.

### Project Document

Click [here](https://docs.google.com/document/d/1cCKN9tts8O1Bavcez0RRJr6EXYNl2MbiEPXfCL31dVI/edit?usp=sharing) to view our project document and planning and resources used.

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple example steps.

### Installation

1. Get a free Exchange Rate API Key at [https://www.exchangerate-api.com/](https://www.exchangerate-api.com/)
2. Get a free unofficial Sky Scanner API Key at [https://rapidapi.com/ntd119/api/sky-scanner3](https://rapidapi.com/ntd119/api/sky-scanner3)
3. Fork the repo. Instructions can be found [here](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
4. Install NPM packages
   ```sh
   npm install
   ```
5. Enter your API keys in your `.env` like below. You can view a template in `.env.template`.
   ```js
   PORT = 3000
   SESSION_SECRET = GENERATE SECRET USING PASSWORD GENERATOR
   SKYSCANNER_KEY = API_KEY_HERE
   EXCHANGE_KEY = EXCHANGE_API_KEY_HERE
   SKYSCANNER_URL = https://sky-scanner3.p.rapidapi.com/flights/search-roundtrip?
   EXCHANGERATE = https://v6.exchangerate-api.com/v6/
   ```
6. To run the server, type `npm run dev` in your terminal.
7. The server will be visible on `localhost:3000`.

<p align="right">(<a href="#readme-top">back to top</a>)</p>