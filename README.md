# GitHub Profile Finder

A modern, responsive web application built with **React.js**, **Vite**, and **Tailwind CSS** to search and explore GitHub user profiles, account statistics, and latest public repositories in real time.

## Live Demo

[View Live Project](https://engy2003.github.io/github-finder-react/)

## Features

- **Instant Profile Search:** Search any GitHub username via button click or pressing `Enter`.
- **Quick Suggestion Chips:** One-click search for popular developer profiles (`torvalds`, `gaearon`, `sindresorhus`).
- **Detailed User Overview:** Displays user avatar, display name, username handle, bio, public repositories count, followers, and following stats.
- **Latest Repositories Grid:** Fetches and displays the user's 6 most recently created repositories with descriptions, star counts, and direct links.
- **Error & Loading States:** Clean feedback while fetching data or when a username is not found.
- **Fully Responsive UI:** Optimized layout across desktop, tablet, and mobile screens.

## Tech Stack

- **Frontend Library:** React.js (Functional Components, Props, Conditional Rendering)
- **React Hooks:** `useState`, `useEffect`
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **API:** GitHub REST API (`https://api.github.com/users/`)

## Project Structure

```text
github-finder-react/
├── index.html
├── package.json
├── vite.config.js
└── src/
    ├── index.css
    ├── main.jsx
    ├── App.jsx
    └── components/
        ├── Header.jsx
        ├── SearchSection.jsx
        ├── ProfileCard.jsx
        ├── ReposList.jsx
        └── Footer.jsx