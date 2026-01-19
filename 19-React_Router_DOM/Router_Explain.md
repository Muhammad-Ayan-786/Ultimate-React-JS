## React Router DOM Guide

### Install
```bash
npm i react-router-dom
```

### Router Types

#### BrowserRouter
- Uses the HTML5 History API for client-side routing (no page reloads).
- Stores navigation history in the browser with clean URLs.
- Default choice for most React apps.
- Example:
```jsx
<BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</BrowserRouter>
```

#### HashRouter
- Uses the URL hash (`#`) instead of the History API.
- Server never handles the route; good for hosts without SPA support (e.g., GitHub Pages).
- URLs look like `portfolio.com/#/about`.
- Example:
```jsx
<HashRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</HashRouter>
```

#### MemoryRouter
- Keeps history in memory; the browser URL never changes.
- Ideal for testing or non-browser environments (e.g., React Native).
- Example:
```jsx
<MemoryRouter>
  <Routes>
    <Route path="/" element={<Home />} />
  </Routes>
</MemoryRouter>
```

#### StaticRouter
- Designed for server-side rendering (SSR); no client-side navigation.
- Uses a fixed `location` prop to render routes on the server.
- Example:
```jsx
<StaticRouter location="/about">
  <Routes>
    <Route path="/about" element={<About />} />
  </Routes>
</StaticRouter>
```

### Quick Summary
- BrowserRouter → Clean URLs; standard client-side routing.
- HashRouter → Uses `#`; works on static hosting.
- MemoryRouter → No URL changes; great for testing.
- StaticRouter → Server-side rendering with fixed location.