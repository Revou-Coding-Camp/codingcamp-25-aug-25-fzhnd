# Portfolio Website

## Project Description
This project is a responsive portfolio website developed to present a fictional technology company named **NeoTech**. The website is designed to demonstrate front-end web development, including structured layout design, responsive navigation, interactive user interfaces, and client-side form handling. The project emphasizes clarity, usability, and modern visual aesthetics while remaining fully client-side without server dependencies.

The website consists of multiple sections—Home, Our Profile, Portfolio, and Message Us—each serving a specific communicative function. Interactive elements such as a hamburger navigation menu, carousel-based portfolio display, and validated contact form enhance user engagement and reflect contemporary web interaction patterns.


## Objectives
- To design a clean and modern portfolio website using semantic HTML.
- To implement responsive layouts suitable for desktop and mobile devices.
- To integrate interactive components using vanilla JavaScript.
- To demonstrate effective separation of structure (HTML), presentation (CSS), and behavior (JavaScript).

## Technologies Used
- **HTML5**: Semantic structure and content organization  
- **Tailwind CSS (CDN)**: Utility-first styling for responsive and modern UI design  
- **Custom CSS**: Typography and visual effects (neon and highlight text styles)  
- **JavaScript (ES6)**: DOM manipulation, event handling, form validation, and UI interactivity  
- **Google Fonts**: Orbitron and Exo 2 for modern typography  

All technologies were selected to ensure accessibility, maintainability, and ease of deployment in a static environment.

## Project Structure
```
Portfolio-Website/
│
├── index.html
│
├── css/
│   └── style.css
│
├── js/
│   └── script.js
│
└── README.md
```

### File Descriptions
- **index.html**  
  Defines the overall structure of the website, including navigation, content sections, portfolio carousel, and contact form.

- **style.css**  
  Contains custom typography settings and visual text effects that complement Tailwind CSS styling.

- **script.js**  
  Implements interactive behavior, including:
  - User name prompt and personalized greeting
  - Responsive hamburger menu toggle
  - Infinite-loop carousel navigation
  - Contact form validation and dynamic data display

## Features
1. **Responsive Navigation Menu**  
   A hamburger menu is implemented for smaller screen sizes, ensuring accessibility across devices.

2. **Personalized User Greeting**  
   Users are prompted to enter their name, which is then displayed dynamically on the homepage.

3. **Portfolio Carousel**  
   A horizontally scrollable carousel with previous and next controls, implemented using pure JavaScript without external libraries.

4. **Validated Contact Form**  
   The form enforces input completeness and displays submitted data dynamically, including the current timestamp.

5. **Modern Visual Design**  
   The interface applies neon-inspired typography and gradient-based color schemes aligned with a technology-focused theme.

## Setup Instructions
1. Clone the repository:
   ```bash
   git clone https://github.com/Revou-Coding-Camp/codingcamp-25-aug-25-fzhnd.git

2. Navigate to the project directory:
   ```bash
   cd codingcamp-25-aug-25-fzhnd

3. Run the project:
   Open `index.html` directly in a modern web browser.
   No additional dependencies or build steps are required.

## Usage Notes
* The project runs entirely on the client side.
* Internet access is required to load Tailwind CSS and Google Fonts via CDN.
* JavaScript must be enabled for full functionality.

## Limitations and Future Improvements
* No backend integration for persistent data storage.
* Form submissions are not stored beyond the current session.
* Future extensions may include backend support, accessibility audits, and automated testing.
