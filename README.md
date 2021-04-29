# Portfolio for developers

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev&env=GITHUB_TOKEN,NEXT_PUBLIC_PORTFOLIO_FORMIK_ENDPOINT,NEXT_PUBLIC_RECAPTCHA_KEY&envDescription=All%20env%20variables%20are%20required%20to%20deploy%20the%20project&envLink=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev%2Fblob%2Fmaster%2F.env.development.template&project-name=my-portfolio&repo-name=my-portfolio&demo-title=Portfolio%20demo&demo-description=A%20simple%20portfolio%20for%20developers&demo-url=https%3A%2F%2Fportfolio-next.smakosh.com&demo-image=https%3A%2F%2Fportfolio-next.smakosh.com%2Fstatic%2Fthumbnail-16a70559ab07712f83d3ce412dfbb5a6.png)

[![Powered by Vercel](./powered-by-vercel.svg)](https://vercel.com?utm_source=smakosh&utm_campaign=oss)

## Gatsby version

[Gatsby-portfolio-portfolio](https://github.com/smakosh/gatsby-portfolio-dev)

## Features

- TypeScript
- Eslint/Prettier configured
- Scores 100% on a11y / Performance / PWA / SEO
- PWA (desktop & mobile)
- Easy to customize
- Nice project structure
- Amazing illustrations by [Undraw.co](https://undraw.co)
- Tablet & mobile friendly
- Continuous deployment with [Vercel](https://vercel.com/?utm_source=smakosh)
- A contact form protected by Google Recaptcha powered by Formium
- Can be deployed with one click
- Fetches your Github pinned projects with most stars (You could customize this if you wish) using ISR
- One click deployment to Vercel

## Design

Project on [Behance](https://www.behance.net/gallery/74172961/Free-Gatsby-portfolio-for-developers)

## Prerequisites

### Online

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh) and grab your form endpoint url
2. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
3. Grab your Github token from [GitHub](https://github.com/settings/tokens/new?scopes=repo&description=portfolio-dev)
4. Click [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/git/external?repository-url=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev&env=GITHUB_TOKEN,NEXT_PUBLIC_PORTFOLIO_FORMIK_ENDPOINT,NEXT_PUBLIC_RECAPTCHA_KEY&envDescription=All%20env%20variables%20are%20required%20to%20deploy%20the%20project&envLink=https%3A%2F%2Fgithub.com%2Fsmakosh%2Fnext-portfolio-dev%2Fblob%2Fmaster%2F.env.development.template&project-name=my-portfolio&repo-name=my-portfolio&demo-title=Portfolio%20demo&demo-description=A%20simple%20portfolio%20for%20developers&demo-url=https%3A%2F%2Fportfolio-next.smakosh.com&demo-image=https%3A%2F%2Fportfolio-next.smakosh.com%2Fstatic%2Fthumbnail-16a70559ab07712f83d3ce412dfbb5a6.png) and pass in your:

- Formik form endpoint
- Google recaptcha public key
- Github token

To Env variables section.

### Locally

1. Create an account at [Formik](https://formik.com/?utm_source=smakosh)
2. Install [Yarn](https://yarnpkg.com/en/)
3. Grab a Google recaptcha key from [Google Recaptcha](https://www.google.com/recaptcha/admin)
4. Grab your Github token from GitHub
5. Run `cp .env.development.local.template .env.development.local`
6. Run `yarn && yarn dev`

> You could run `vercel env pull` to get your env variables from Vercel.

### Deploying locally to Vercel

I highly recommend that you push to GitHub/GitLab and deploy your repository to Vercel instead or just hit the Deploy button.

## Built with

- Adobe XD
- Next js
- TypeScript
- Formik
- Google recaptcha
- VSCode
- And these useful of JavaScript libraries & Gatsby plugins [package.json](package.json)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for more details

## Contributors

## Support

If you love this Gatsby template and want to support me, you can do so through my GitHub profile.