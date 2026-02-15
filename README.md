# Dana Ranch Ward Website

A static website built with Remix and deployed to GitHub Pages.

- [Remix Docs](https://remix.run/docs)

## Development

Ensure all packages are installed by running:

```sh
npm install
```

Run the development server:

```sh
npm run dev
```

Open up [http://localhost:5173](http://localhost:5173), and you're ready to go!

## Building

To build the static site:

```sh
npm run build
```

To preview the production build locally:

```sh
npm run start
```

Your site will be available at [http://localhost:4173](http://localhost:4173).

## Deployment

This site automatically deploys to GitHub Pages when changes are pushed to the `master` branch. The GitHub Actions workflow handles the build and deployment process.

To manually trigger a deployment, push your changes to the `master` branch:

```sh
git push origin master
```

## Tech Stack

- Remix (SPA Mode)
- Vite
- Tailwind CSS
- GitHub Pages

## Project Management

- [x] Splash img at top of services
- [x] Church logo under splash img
- [ ] Button to join broadcast
- [ ] Announcements bubble
- [ ] Services elements
- [ ] Contact page
- [ ] Automate splash img selection based on month
- [ ] Fill data from a single config.json file
- [ ] Add /edit route with UI to edit services
- [ ] Hook up database to use with edit functionality
- [ ] Time travel route to view past services
- [ ] Missionaries page
