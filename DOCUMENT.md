- [Document](#document)
- [Getting Started](#getting-started)
- [Basic Features](#basic-features)
  - [Pages](#pages)
    - [Pages with Dynamic Routes](#pages-with-dynamic-routes)
    - [Pre-rendering](#pre-rendering)
      - [Two forms of Pre-rendering](#two-forms-of-pre-rendering)
    - [Static Generation (Recommended)](#static-generation-recommended)

# Document
https://nextjs.org/docs

# Getting Started
So far, we get:

- Automatic compilation and bundling (with webpack and babel)
- React Fast Refresh
- Static generation and server-side rendering of ./pages/
- Static file serving. ./public/ is mapped to /

# Basic Features
## Pages
https://nextjs.org/docs/basic-features/pages

### Pages with Dynamic Routes
Next.js supports pages with dynamic routes. For example, if you create a file called `pages/posts/[id].js`, then it will be accessible at `posts/1`, `posts/2`, etc.

```
To learn more about dynamic routing, check the [Dynamic Routing documentation](https://nextjs.org/docs/routing/dynamic-routes).
```

### Pre-rendering
By default, Next.js `pre-renders` every page. This means that Next.js generates HTML for each page in advance, instead of having it all done by client-side JavaScript. Pre-rendering can result in better performance and SEO.

Each generated HTML is associated with minimal JavaScript code necessary for that page. When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called `hydration`.)

#### Two forms of Pre-rendering
Next.js has two forms of pre-rendering: `Static Generation` and `Server-side Rendering`. The difference is in `when` it generates the HTML for a page.

### Static Generation (Recommended)
https://nextjs.org/docs/basic-features/pages#static-generation-recommended

Examples
- [WordPress Example](https://github.com/vercel/next.js/tree/canary/examples/cms-wordpress) ([Demo](https://next-blog-wordpress.vercel.app/))
- [Blog Starter using markdown files](https://github.com/vercel/next.js/tree/canary/examples/blog-starter) ([Demo](https://next-blog-starter.vercel.app/))
- [DatoCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-datocms) ([Demo](https://next-blog-datocms.vercel.app/))
- [TakeShape Example](https://github.com/vercel/next.js/tree/canary/examples/cms-takeshape) ([Demo](https://next-blog-takeshape.vercel.app/))
- [Sanity Example](https://github.com/vercel/next.js/tree/canary/examples/cms-sanity) ([Demo](https://next-blog-sanity.vercel.app/))
- [Prismic Example](https://github.com/vercel/next.js/tree/canary/examples/cms-prismic) ([Demo](https://next-blog-prismic.vercel.app/))
- [Contentful Example](https://github.com/vercel/next.js/tree/canary/examples/cms-contentful) ([Demo](https://next-blog-contentful.vercel.app/))
- [Strapi Example](https://github.com/vercel/next.js/tree/canary/examples/cms-strapi) ([Demo](https://next-blog-strapi.vercel.app/))
- [Prepr Example](https://github.com/vercel/next.js/tree/canary/examples/cms-prepr) ([Demo](https://next-blog-prepr.vercel.app/))
- [Agility CMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-agilitycms) ([Demo](https://next-blog-agilitycms.vercel.app/))
- [Cosmic Example](https://github.com/vercel/next.js/tree/canary/examples/cms-cosmic) ([Demo](https://next-blog-cosmic.vercel.app/))
- [ButterCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-buttercms) ([Demo](https://next-blog-buttercms.vercel.app/))
- [Storyblok Example](https://github.com/vercel/next.js/tree/canary/examples/cms-storyblok) ([Demo](https://next-blog-storyblok.vercel.app/))
- [GraphCMS Example](https://github.com/vercel/next.js/tree/canary/examples/cms-graphcms) ([Demo](https://next-blog-graphcms.vercel.app/))
- [Kontent Example](https://github.com/vercel/next.js/tree/canary/examples/cms-kontent) ([Demo](https://next-blog-kontent.vercel.app/))
- [Builder.io Example](https://github.com/vercel/next.js/tree/canary/examples/cms-builder-io) ([Demo](https://cms-builder-io.vercel.app/))
- [Static Tweet (Demo)](https://static-tweet.vercel.app/)