---
title: 'Using React-Helmet with Next.js For Better SEO'
date: 'Aug 26, 2022'
excerpt: 'Safety first, then teamwork.'
cover_image: '/images/posts/React-Helmet-SEO-Thumbnail.webp'
alt: 'React Helmet Thumbnail'
image_title: 'React-Helmet with Next.js Thumbnail'
image_description: 'Created Using Figma w/images from WIKI and RH Github'
---

Have you ever found yourself searching for a guaranteed method of managing ALL of your changes to your document head? Well, for the unfamiliar the doc head is everything between these boys,

```javascript
<head>

/*

Fun document head tags supported by React-Helmet.

title, base, meta, link, script, noscript, & style.

*/

</head>
```

How about when dealing with a React framework, such as Next.js, which is primarily used for its server-side rendering (SSR) capabilities?

Fortunately, the folks over at Next.js have taken the helm on this one and laid out what using React-helmet and Next.js would work.

## The Motivation

Next.js with React-Helmet is an easy-to-use React component that allows search engines and crawlers to get to those vital meta tags in your document head.

## The Implementation

As of React-Helmet v6.1.0, React v18.0, and Next.js v12.2, this React head component still functions similarly to prior versions.

Assuming you have Next.js ready to go, follow the proceeding steps to get React-Helmet installed on your environment.


**1) install the module**
```bash 
npm i react-helmet 
```

**2) Once installed, create an _app.js page if you don’t already have one, then give the component a test drive.**

*input*
```javascript
import { Helmet } from 'react-helmet'

const myApp = () => {
    return (
        <>
            <Helmet title="Next.js w/React-Helmet"/>
        </>
    )
}

export default myApp;
```

*output*
![Output HTML on console](/images/posts/output-html.png "Output HTML on console")

Now, let’s take a peek at what other properties are available for this component.

![HelmetData definition](https://miro.medium.com/max/640/1*IJHyQMjcXbOckiVtzfMCsQ.png "HelmetData definition")

If you look closely, you can see that the Helmet component takes htmlAttributes, such as the lang attribute, which search engines use to declare the language of the webpage.

## For Server Rendering

Using React-Helmet on the server is easy. Use Helmet.renderstatic() if you want your data to be prerendered on the head.

In Next.js, create a _document.js file, which is defaulted on Next.js. We want to use the _document.js file because this file is only rendered on the server side and not the client side, which for SEO is highly encouraged.

Here is what the _document.js file will look something like,

![_document.js using R-H](https://miro.medium.com/max/640/1*yToUuG7pWntbsPCWnCLTEA.png "_document.js using R-H")

Here is a tip taken from the docs, if you plan on taking advantage of the JSX spread operator, use the toComponent().

And that’s about it for this React component. There is an async React-Helmet, but I’ll leave that up to you now that I have got you up and running.

Cheers and happy coding!