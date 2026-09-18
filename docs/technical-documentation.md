# Technical Documentation

## 1. Project Overview

This project is a responsive personal portfolio website developed using HTML, CSS, and JavaScript. The website introduces me as a Software Engineering student with a concentration in Cloud Computing, presents selected academic projects, and provides contact information through links and a contact form.

The website was designed to work across different screen sizes and includes an interactive light/dark theme toggle.

## 2. Technologies Used

### HTML5

HTML is used to define the structure and content of the portfolio. Semantic elements are used to organize the page, including:

- `<header>` for the introductory content and theme toggle.
- `<nav>` for navigation between the main sections.
- `<main>` for the primary page content.
- `<section>` for the About Me, Projects, and Contact sections.
- `<article>` for individual project cards.
- `<form>` for the contact form.
- `<footer>` for the copyright information.

### CSS3

CSS is used for the visual design, layout, responsive behavior, and light/dark themes.

The stylesheet includes:

- Flexbox layouts.
- CSS custom properties.
- Gradients.
- Hover and focus states.
- Sticky navigation.
- Responsive media queries.
- Light and dark theme styles.
- Transitions and visual effects.

### JavaScript

JavaScript is used to provide the interactive light/dark theme toggle.

The script listens for a click on the theme button, changes the class applied to the `<body>` element, updates the theme icon, and updates the button's ARIA label.

## 3. Project Structure

```text
.
├── assets/
│   └── images/
│       ├── academic-copilot.jpg
│       ├── moon.png
│       ├── route-repair.jpg
│       └── sun.png
├── css/
│   └── styles.css
├── docs/
│   ├── ai-usage-report.md
│   └── technical-documentation.md
├── js/
│   └── script.js
├── .gitignore
├── index.html
└── README.md
```

### File Responsibilities

- `index.html` contains the structure and content of the portfolio.
- `css/styles.css` contains the layout, colors, themes, responsive design, and visual styling.
- `js/script.js` contains the JavaScript functionality for switching between light and dark themes.
- `assets/images/` stores the project images and theme icons.
- `docs/ai-usage-report.md` documents how AI was used during development.
- `docs/technical-documentation.md` explains the technical implementation of the project.
- `README.md` provides an overview of the project and instructions for running it locally.

## 4. Page Structure

The portfolio is divided into three main content sections.

### About Me

The About Me section contains a short introduction, a tagline, and information about my academic background and interests.

### Projects

The Projects section displays two academic projects using reusable project cards.

Each project includes:

- A project image.
- Project title.
- Related course.
- Project description.
- Additional project information such as the target audience or key features.

The project cards use a Flexbox container on larger screens and change to a vertical layout on smaller screens.

### Contact

The Contact section provides:

- An email link.
- A GitHub link.
- A contact form with Name, Email, and Message fields.
- A Send Message button.

The form is currently front-end only and does not connect to a backend service.

## 5. Navigation

The website includes navigation links for:

- About Me
- Projects
- Contact

Each link points to the corresponding section using an HTML fragment identifier.

The navigation bar uses `position: sticky`, allowing it to remain visible at the top of the page while scrolling.

Smooth scrolling is enabled through CSS:

```css
html {
   scroll-behavior: smooth;
}
```

A `scroll-margin-top` value is applied to sections so that section headings remain visible below the sticky navigation bar when a navigation link is selected.

## 6. Responsive Design

The website was designed to support desktop, tablet, and mobile screen sizes.

Flexbox is used for several layouts, including:

- Navigation links.
- Header information.
- Project cards.
- Contact links.

A media query is used for screens with a maximum width of 768px:

```css
@media (max-width: 768px) {
   /* Responsive styles */
}
```

On smaller screens:

- The header spacing and heading size are reduced.
- Header information changes to a vertical layout.
- Project cards change from a horizontal layout to a vertical layout.
- Navigation spacing and font sizes are reduced.
- Contact links can wrap when necessary.
- Form padding is reduced.
- The theme toggle is resized and repositioned.

The responsive behavior was tested by resizing the browser and using browser developer tools.

## 7. Light and Dark Theme

The website supports both dark and light themes.

CSS custom properties are defined in `:root` for the default theme. These variables control values such as:

- Background colors.
- Text colors.
- Accent colors.
- Card colors.
- Borders.
- Form colors.
- Footer colors.
- Shadows.

Example:

```css
:root {
   --background: #071525;
   --text: #c7d5e3;
   --accent: #65b5ed;
}
```

The light theme overrides these variables using the `light-mode` class:

```css
body.light-mode {
   --background: #f4f8fc;
   --text: #34465b;
   --accent: #3977a9;
}
```

Using CSS custom properties allows the appearance of multiple components to change without creating a separate stylesheet.

## 8. JavaScript Theme Toggle

The theme toggle is implemented in `js/script.js`.

JavaScript first accesses the theme button and icon:

```javascript
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.getElementById("theme-icon");
```

A click event listener is attached to the theme button.

When the button is clicked:

1. The `light-mode` class is toggled on the `<body>`.
2. CSS responds to the class by applying the light or dark theme variables.
3. The displayed icon changes between the sun and moon images.
4. The `aria-label` is updated to describe the action available to the user.

This keeps the JavaScript focused on behavior while CSS controls the visual appearance of each theme.

## 9. Accessibility and User Experience

Several design decisions were included to improve usability and accessibility:

- Project images include descriptive `alt` text.
- The theme toggle includes an `aria-label`.
- The theme button's ARIA label changes when the active theme changes.
- Form fields are connected to labels using matching `for` and `id` attributes.
- Keyboard focus styles are provided for form inputs and textareas.
- Navigation links use descriptive section names.
- Text and interface colors are designed to remain readable in both themes.
- Hover effects provide visual feedback for interactive elements.
- Responsive layouts improve usability on smaller screens.

## 10. Performance and Maintainability

The project uses plain HTML, CSS, and JavaScript without external frameworks or large third-party libraries.

To keep the project organized and maintainable:

- HTML, CSS, and JavaScript are stored in separate files.
- Images are stored in a dedicated assets directory.
- CSS custom properties reduce repeated color values.
- Reusable CSS classes are used for project cards and contact buttons.
- Responsive behavior is grouped inside a media query.
- JavaScript is kept small and focused on the theme toggle.
- Important sections of the CSS and HTML include comments for readability.

This structure makes future updates easier because content, presentation, and behavior are separated.

## 11. Testing

The website was tested locally using Visual Studio Code and Live Server.

Testing included:

- Opening and navigating through all three main sections.
- Testing the About Me, Projects, and Contact navigation links.
- Confirming that the sticky navigation remains visible while scrolling.
- Switching between light and dark themes multiple times.
- Confirming that the theme icon changes correctly.
- Checking the contact form layout.
- Resizing the browser to test responsive behavior.
- Checking the mobile layout.
- Checking the browser console for JavaScript errors.
- Verifying that project images and links load correctly.

No JavaScript errors were observed in the browser console during the final test.

## 12. Browser and Device Compatibility

The website uses standard HTML5, CSS, and JavaScript features supported by modern web browsers.

The layout is designed to adapt to different screen widths using flexible layouts and a responsive media query. The project was tested using Google Chrome and browser developer tools to verify desktop and smaller-screen behavior.

## 13. Future Improvements

Possible future improvements include:

- Connecting the contact form to a backend or form-processing service.
- Saving the user's selected theme between visits.
- Adding additional portfolio projects.
- Adding more sections such as skills, achievements, or experience.
- Deploying the portfolio using a hosting service such as GitHub Pages.