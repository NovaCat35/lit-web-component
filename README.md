# Lit Web Components

The purpose of this project is two parts. First, it is a short demo of using Lit.dev to produce different web components. Second, it must be published on NPM so that the product team can install and use these components. 🚀

NPM Package link: https://www.npmjs.com/package/@novacat35/lit-web-components
Playground repo (to showcase the use of this package): https://github.com/NovaCat35/my-component-playground

## Tech Stack 🌐
- Vite
- Typescript
- Lit.dev
- Storybook

## Instructions for using this NPM package 📙
> Run the following to get started with using my package
`npm i @novacat35/lit-web-components@latest`

---

> [!NOTE]
> Below are notes for the developer creating a new project to upload to NPM as a package.

## Publishing to NPM
> Note the package.json changes & then run the following: 
1) `npm run build` 
2) `npm login`
3) `npm publish` (or `npm publish --access=public`)

> To update an NPM module that you published, change the version in your package.json or use npm version <new-version>. After changing the version number in your package.json, you can run npm publish to publish the new version to NPM.


> [!WARNING]
> The configuration steps below are incomplete and while it does not affect the main codebase, it simply doesn't work at the moment. 

## Manage Version Control & Changelogs (Changesets)
> This project uses Changesets to manage version control and changelogs. Changesets is a CLI tool that helps us keep track of changes and generate a `CHANGELOG.md` file.
> [Reference video](https://www.youtube.com/watch?v=eh89VE3Mk5g) start @ 1:25
STEPS: 
> You can install pnpm with: `npm install -g pnpm`
1) `pnpm add -D @changesets/cli`
2) `pnpm changeset init `

> Every time you make a change, you can add a changeset:
3) ` pnpm changeset`

## Configuring Workflow (CI)
> [Reference video](https://www.youtube.com/watch?v=eh89VE3Mk5g) start @ 1:58

1) See the .github/workflows -> files
