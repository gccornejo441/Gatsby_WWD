# How To Contribute

Thank you for showing interest in contributing to the WebWorks Dreams website, and welcome!

Aside from producing code, there are numerous more methods to contribute. This document's main objective is to provide you a high-level overview of your options for becoming engaged.

## Reporting Issues
We'd want to know about any issues you're having with the website. Please submit an issue in this repository if you find a visual flaw, a functional issue (e.g., links that don't work, server failures when contributing or signing in, etc.), or just a suggestion to make things more manageable.

### Look For an Existing Issue
Before you create a new issue, please do a search in [open issues](https://github.com/gccornejo441/WebWorksDreams/issues) to see if the issue or feature request has already been filed.

If you discover that your problem has previously been addressed, add pertinent comments and your reply. Use a reaction in place of a "+1" comment:

- 👍 - upvote
- 👎 - downvote

### Making Effective Bug Reports and Feature Requests
Create a new issue for each bug and feature request. Multiple bugs or feature requests should not be listed in the same issue.

Unless it is for identical input, do not post your issue as a comment to an existing issue. Many problems appear identical but have diverse causes.

These would be very helpful to include:
- Reproducible steps (1... 2... 3...) that cause the issue
- What you expected to see, versus what you actually saw
- Images, animations, or a link to a video showing the issue occurring

## Writing Code
Read the information below to understand our project structure and set up your development environment if you are interested in creating code to resolve difficulties.

**Please note in an open issue your plan to code out the solution to that issue in order to minimize duplication of effort and to save you time. If it is not evident how that issue will be resolved, clarify what you intend to do to ensure that it is consistent with the maintainers' vision for the project.**

The website is written in [React](https://github.com/facebook/react/) using [Next.js](https://github.com/vercel/next.js) from Zeit. [Tailwindcss](https://tailwindcss.com/) is used as a utility-first CSS framework. 

### Directory Structure
- **components**
  - _Custom React components_
- **pages**
  - _React component containers that correspond to actual pages_
  - **api**
    - _Vercel serverless functions to manage CRUD operation to NoSQL DB (MongoDB)_
- **public**
  - _Images
- **styles**
  - _Stylesheets
- **utils**
  - _Reusable utility functions_

### Local Development Environment
- Install [Node.js and NPM](https://nodejs.org) `>= 8.x`
- Fork this repository, clone it locally, and keep it in sync by following the instructions [here](https://help.github.com/articles/fork-a-repo/)
- Install dependencies by running `npm install` in the project directory
- Create a local environment file named `.env.local`
- Start the website locally by running
  ```shell
  npm run dev
  ```
  When it's done building, access it at this link: http://localhost:3000/

### Opening a Pull Request
Any code modifications should be committed to a branch.

You can open a pull request once you've done making modifications and committed them to your branch. Please include a reference to the issue you resolved in your pull request.

## Thank You!
Your modest or large contributions to open source make initiatives like this possible. Thank you for taking the time to help.