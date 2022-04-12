---
title: 'A Web Framework To Help You With Search Engine Optimization (SEO)'
date: 'February 01, 2022'
excerpt: 'How Next.js can help developers design more SEO friendly websites.'
cover_image: '/images/posts/SSR.png'
---

Next.js was initially released sometime back in 2016, since, then Next.js has been a top-running front-end framework ahead of others. What sets Next.js apart from other software products is its seamlessly easy-to-use core concepts, which I believe puts the "next" in Next.js, as in the next generation front-end framework. One of the more alluring features in Next.js is its file-based routing comparable to React Router. With this out-of-the-box feature, the folks over at Next have enabled other superb components that give way to more salient embedded features, which grant Next.js its status as the next platform for best SEO and website speed.

Quoted by Jason Miller from Web DevRel and Addy Osmani from Web Developer Relations, in their article "Rendering on the Web" on Google Developers, "*understanding the need to shift to server rendering or static rending over full-rehydration through performance can assist developers in implementing appropriate forms of rending in their application.*" What Miller and Osmani want developers to understand is the importance of utilizing proper tools when the need arises. If you don't know when that need is, inspect your website's performance using tools such as Google's Lighthouse.

![](https://cdn-images-1.medium.com/max/1200/1*tXXS2-1u9jIkUy7q3Ie68g.jpeg)


Tracing back to Next.js, its creators have placed a strong focus on SEO, which is why they've implemented pre-rendering as part of the *pages* directory's design. If you don't know by now, pre-rendering allows for better SEO; read Miller and Osmani's blog post as they dive further in-depth. At its core, pre-rendering comes in two flavors, Static Generation and Server-Side Rendering (SSR).

## Two Forms of Pre-Rendering: Static Generation & Server-Side Rendering

Static Generation is the process where HTML is generated during build-time, or better yet since this post is about Next.js, HTML is generated when the npm next build (yarn next build) command runs. Without getting too into the weeds, the Next team has implemented next build to call the asynchronous function getStaticProps to pre-render your HTML. The reason why static generation is great for a website's performance and the user's experience is that content is generated before a user's request.

Static generation can optimize a website's performance by generating content before a user's request, this can lead to greater user experience since the First Paint time is short. One of the many common drawbacks to static generation is its difficulty with interacting with incoming requests from, let's say, an API that is constantly updating. So it's critical to know when static generation is appropriate.

On the other hand, we have SSR that will pre-render at the user's request. In this case, SSR works well in situations where data needs to be repeatedly updated. Next.js also has a neat asynchronous function called getSeverSideProps that allows the developer to choose which pages use either SSR or SSG. A negative with SSR is that pages need to be pre-rendered at the user's request, which means that if a user is requesting data from a different route it will need to be pre-rendered, and if it's content-heavy it'll load a lot slower.

## Search Engine Optimization

Static websites were widely used throughout the internet before Static Side Generators (SSG) came into the picture. Some popular SSGs frameworks are Vue.js, Jekyll, Gatsby, and even Next.js. One reason for SSGs is that developers had been tasked to design websites that conformed with search engines. Search engines crawl websites, and SSGs are best suited for web crawlers since pre-rendering optimizes website speed for search engine crawlers.

## Concluding Thoughts

Next.js is a powerful tool for SEO and performance. However, it's heavily dependent on developers utilizing the tools at their disposal to get the most out of Next.js. Further, Next.js comes with great out-of-the-box features that enable developers to design SEO-friendly websites.