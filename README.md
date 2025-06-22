# Random Quote Generator

![Random Quote Generator Screenshot/GIF]

## Table of Contents

- [Random Quote Generator](#random-quote-generator)
  - [Table of Contents](#table-of-contents)
  - [About The Project](#about-the-project)
  - [Features](#features)
  - [Technologies Used](#technologies-used)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
  - [API Used](#api-used)
  - [Contributing](#contributing)
  - [License](#license)
  - [Contact](#contact)

## About The Project

This project is a simple yet engaging web application built with React.js that displays random inspirational or thought-provoking quotes. Users can generate a new quote with a click of a button, offering a quick dose of wisdom or motivation.

This mini-project was developed as a hands-on exercise to solidify fundamental React concepts, including:

- Component-based architecture
- State management with `useState`
- Handling user interactions with event handlers
- Conditional rendering (for loading/error states)
- Lifecycle management with `useEffect` (for API fetching)
- Basic styling with CSS

## Features

- **Random Quote Display:** Presents a new quote and its author on load.
- **Generate New Quote:** A dedicated button to fetch and display another random quote.
- **External API Integration with Fallback:** Fetches quotes from a public API, ensuring a diverse range of quotes. **The application includes a fallback to a set of hardcoded quotes if the API is unavailable or fails.**
- **Loading State:** Provides visual feedback whilst a new quote is being fetched.
- **Basic Styling:** Clean and user-friendly interface.

## Technologies Used

- **React.js:** The core JavaScript library for building user interfaces.
- **HTML:** For structuring the web content.
- **CSS:** For styling the application.
- **JavaScript (ES6+):** For application logic.
- **`fetch` API:** For making HTTP requests to the quote API.
- **React Hooks:** `useState`, `useEffect`.

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn) installed on your machine.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1.  **Clone the repo**
    ```sh
    git clone [YOUR_REPOSITORY_URL_HERE]
    ```
2.  **Navigate into the project directory**
    ```sh
    cd random-quote-generator
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    # or
    # yarn install
    ```
4.  **Start the development server**
    ```sh
    npm start
    # or
    # yarn start
    ```
    The application will open in your browser, usually at `http://localhost:3000`.

## Usage

1.  Upon opening the application, a random quote will be displayed automatically, either from the API or from the hardcoded fallback list.
2.  Click the "New Quote" button to instantly fetch and display another random quote. If the API fails, a new quote will be pulled from the local fallback list.

## API Used

This project utilises the [DummyJSON](https://dummyjson.com/) for fetching random quotes.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## License

Distributed under the MIT License. See [LICENSE](https://img.shields.io/badge/license-custom-blue.svg) for more information.

## Contact

egbonyigiftvicky@gmail.com

Project Link: [https://giftintech.github.io/Quote-Generator/](https://giftintech.github.io/Quote-Generator/)

---
