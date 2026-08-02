# Fashion-Trends-EcomerceShoppingWebsite

This project was generated with Next.js version 16.2.12

## Development server

Run `npm run dev` for a dev server. Navigate to `http://localhost:3000/`. The app will automatically reload if you change any of the source files.

## Running it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # verify production build
```

## Verification checklist

- [ ] `npm run build` completes with no type errors
- [ ] Visiting `/products` while logged out redirects to `/login`
- [ ] Logging in redirects to `/products` and the nav shows Logout
- [ ] Logout returns to Home and hides Products
- [ ] Refreshing keeps you logged in (localStorage + cookie persist)
- [ ] 404 shows for unknown routes
