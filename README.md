# Overview

As a software engineer who builds products end to end, I am always looking to
sharpen my ability to work across different frameworks and delivery patterns.
This project gave me the opportunity to deepen my React skills by building a
complete multi-page web application from scratch, using React Router for
client-side navigation, component-based architecture, and dynamic rendering to
create a professional personal portfolio site.

This is a personal portfolio web app built with React. To run it locally,
clone the repository, navigate into the project folder, run `npm install` to
install dependencies, then run `npm start` to start the development server.
Open your browser and navigate to `http://localhost:3000` to view the site.

I built this software to create a living portfolio that represents my work,
skills, and engineering background in a way that I can share with potential
clients, employers, and collaborators. Rather than using a template, I wanted
to design and build it myself so every part of it reflects my own engineering
decisions and design taste.

[![Software Demo Video](https://img.youtube.com/vi/ZWiiXsvyLnQ/maxresdefault.jpg)](https://youtu.be/ZWiiXsvyLnQ)

# Web Pages

**Home** — The landing page of the portfolio. It features a hero section with
my profile photo, floating tech stack badges, a short introduction, and two
call-to-action buttons. Below the hero, the page dynamically renders a preview
of my projects, a grid of my tech skills using official brand logos, and a
contact call-to-action section. All preview content on this page is generated
dynamically from JavaScript data arrays using the `.map()` method.

**Projects** — Displays all four of my featured projects as interactive cards
arranged in a two-column grid. Each card includes a gradient image placeholder,
the tech stack used, a short description, and a link to an individual product
page. Clicking a project navigates dynamically to that project's detail route
using React Router's URL parameters.

**Skills** — Displays all ten technologies I work with as individual cards,
each showing the official brand logo, the technology name, and a short
description of how I use it in real projects. The entire grid is rendered
dynamically from a JavaScript array.

**Contact** — Features a contact form with name, email, and message fields.
On submission, the form is replaced dynamically with a confirmation message
using React state. The page also includes LinkedIn and WhatsApp buttons linking
directly to my profiles.

**Product Detail Page** — A dynamic placeholder page that renders based on
the URL parameter. Each project links to its own route (e.g.
`/projects/ai-assistant-platform`) and the page title updates dynamically
based on the product ID in the URL.

Navigation between all pages is handled entirely by React Router using the
`Link` component and `Routes`, with no full page reloads.

# Development Environment

I developed this software using Visual Studio Code as my editor, with Git for
version control and GitHub for hosting the public repository. The development
server was run using Create React App.

The project is written in JavaScript using React 18. Key libraries used include
React Router DOM v7 for client-side routing and navigation, and the Devicons
CDN for official brand logos. All styling is written in custom CSS using CSS
variables for a consistent design system.

# Useful Websites

* [React Official Documentation](https://react.dev)
* [React Router Documentation](https://reactrouter.com)
* [Devicons CDN](https://devicon.dev)
* [CSS Tricks — Flexbox Guide](https://css-tricks.com/snippets/css/a-guide-to-flexbox)
* [Google Fonts](https://fonts.google.com)

# Future Work

* Replace gradient image placeholders on the Projects page with real product
  screenshots once they are available
* Add a working backend or email service integration to the contact form so
  messages are actually delivered
* Build out the individual product detail pages with full case studies,
  screenshots, and links to live deployments
* Add smooth page transition animations between routes
* Improve mobile responsiveness for the hero section tech badge layout