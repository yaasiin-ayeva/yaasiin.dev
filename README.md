<div align="center">
  <h1>Yaasiin.dev</h1>
  <br>
  <p>A minimalist portfolio template for developers built with Next.js and TypeScript inspired by <a href="https://github.com/magic-ike/leanfolio">leanfolio</a> </p>
  <br>
</div>

## Getting Started

### Running Locally

npm

```bash
npm install
npm run dev

```

### Making Changes

- Go to `data/portfolio.js` and replace the placeholder data with your own.
- To add a favicon to your site, put your `favicon.ico` file directly in the `public/` folder.

### Google Analytics (Optional)

To add Google Analytics tracking to your portfolio locally, you'll need to create a `.env.local` file in your root directory and paste in the following code:

```bash
GOOGLE_ANALYTICS_MEASUREMENT_ID=$MEASUREMENT_ID

```

- To get the Measurement ID, [set up a new Google Analytics property](https://support.google.com/analytics/answer/9304153), then set up a **Web** data stream for that property and copy the Measurement ID you see after setup.
- In the `.env.local` file, replace `$MEASUREMENT_ID` with the actual Measurement ID. If your local server was already running, restart it so your changes can be reflected.

### Deployment

- Go to [Vercel](https://vercel.com/dashboard) and sign up for an account if necessary.
- Click **New Project**.
- Import your repository. This should take you to the project configuration screen.
- **_(Optional - Google Analytics)_** If you want to add Google Analytics tracking to your live portfolio, you'll need to grab the environment variable you added to your local environment and add it to this environment. Expand the **Environment Variables** dropdown and add the following name-value pair:

| NAME                            | VALUE (WILL BE ENCRYPTED) |
| ------------------------------- | ------------------------- |
| GOOGLE_ANALYTICS_MEASUREMENT_ID | Your Measurement ID       |

- Click **Deploy**.
- If everything went smoothly, your portfolio should now be live. Congrats! 🎉

## License

[MIT](LICENSE)
