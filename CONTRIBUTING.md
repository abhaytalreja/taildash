# Development Setup

A simple starter project for playing around with Tailwind in a proper PostCSS environment.

To get started and see the code in action:

1. Clone the repository:

   ```bash
   git clone https://github.com/tailwindcss/playground.git tailwindcss-playground

   cd tailwindcss-playground
   ```

2. Install the dependencies:

   ```bash
   # Using npm
   npm install

   # Using Yarn
   yarn
   ```

3. Start the development server:

   ```bash
   # Using npm
   npm run serve

   # Using Yarn
   yarn serve
   ```

   Now you should be able to see the project running at localhost:8080.
   
4. Open `public/index.html` in your editor and start experimenting!

To build an optimized version of your CSS, simply run:

```bash
# Using npm
npm run production

# Using Yarn
yarn production
```

After that's done, check out `./public/build/tailwind.css` to see the optimized output.

## Pull Requests

- Create a feature branch from the default branch (`master`) and merge back against that branch.
- It's OK to have multiple small commits as you work on the PR - GitHub automatically squashes them before merging.
- Considering this is an HTML template, please check for the change in all the various resolution. We want to maintain the responsiveness of the template. You can also add screenshots as part of the PR
- If adding a new feature:
  - Add accompanying test result(s) including the current behavior and the docs update.
  - Provide a convincing reason to add this feature. Ideally, you should open a suggestion issue first and have it approved before working on it.
- If fixing bug:
  - If you are resolving an open issue, add `(fix #xxxx)` (`#xxxx` being the issue ID) in your PR title for a better release log, e.g. `chore(feat): implement charts (fix #1234)`.
  - Provide a detailed description of the bug in the PR. Live demo preferred.
  
## Commit Specification

Commit messages should follow the [commit message convention](https://www.conventionalcommits.org) so that changelogs can be automatically generated.

