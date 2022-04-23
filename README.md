# Technical test from [APPLICANT NAME] for [COMPANY NAME]

Thanks for reviewing this code!

## Getting Started

First, install the dependencies

```bash
npm ci
```

Then you can run the project either in dev mode or production mode

```bash
# dev mode
npm run dev

# production mode
npm run build && npm run start
```
Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.





## Code architecture

To be written

## Tests, typecheck and linters

To run jest tests

```bash
npm run test
# or
npm run test:watch
```

You can also via CLI test the TypeScript compliance:

```bash
npm run typecheck
```

Both [ESLint](https://eslint.org/) & [Prettier](https://prettier.io/) are setup in this project.

To lint the files just run

```bash
npm run lint
```

You can also fix improper code style syntax before linting doing

```bash
npm run lint:fix
```

### Visual Code Studio integration
For [Visual Code Studio](https://code.visualstudio.com/) users, the project comes with a workspace setting in order to format on save following Prettier and ESLint rules.

To do so, you need to install the following extension to your Visual Code Studio:
* [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)



## Possible iterations

To be written

## Technical stack
This project has been bootstraped with [LoicGoyet/hiring-test-boilerplate](https://github.com/LoicGoyet/hiring-test-boilerplate).

### Main technologies
* [TypeScript](https://www.typescriptlang.org/)
* [React 18 release candidate](https://reactjs.org/blog/2021/12/17/react-conf-2021-recap.html)
* [Next.js](https://nextjs.org/)
* [styled-components](https://styled-components.com/)

### Tooling
* [ESLint](https://eslint.org/)
* [Prettier](https://prettier.io/)
* [Husky](https://typicode.github.io/husky/#/)
* [lint-staged](https://github.com/okonet/lint-staged)


## Reviewee Guide
This section covers points to acknowledge when you use this project to deliver a technical test. If you are a reviewer, you can skip this part, tho it might give hints on configuration and workflows.

All the following instructions take for granted that you installed the dependencies first. See "Reviewer Guide > Getting Started" for more informations.

### Getting started

1. run `gh repo clone LoicGoyet/hiring-test-boilerplate project-name`
2. run `cd project-name`
3. commit an update of the `NEXT_PUBLIC_COMPANY_NAME`/`NEXT_PUBLIC_APPLICANT_NAME` environnement variables and this README.md title
4. run `git reset $(git commit-tree HEAD^{tree} -m "bootstrap project")`
5. run `git remote set-url origin https://github.com/LoicGoyet/project-name.git`
6. run `git push -u origin main`
7. run `npm ci && npm run dev`

### Before sending
1. Remove the "## Reviewee Guide" section
2. Eventually complete the "## Technical stack" section
3. Complete the "## Code architecture" section
4. Complete the "## Possible iterations" section

### Next.js
This project uses Next.js 12.1.0 and React 18.0.0 release candidate 0. Check out Next.js documentation for every features available. 

If you want to rollback to a stable version of React:

```bash
npm install --save --save-exact react@17.0.2 react-dom@17.0.2
```

Then within `next.config.js` remove the `experimental` attribute.

