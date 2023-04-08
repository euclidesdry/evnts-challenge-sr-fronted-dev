# Evnts challenge Sr. Fronted Developer

Evnts Pokemon Challenge for Sr Frontend Developer job

---

The whole challenge goals is to use the [PokeAPI](https://pokeapi.co/) to filter, show up and interact with the API given pokemon's details, description and other information about the pokemon world. Therefore, in the next topics, we will explain more about the project **Decisions**, **Code Organization**, **Features**, and how to run the project on your local machine.

---

## You can access the project deployed at: [PokeApp.vercel.app](https://evnts-challenge-pokeapi-i1ghikw6a-euclidesdry.vercel.app)

## Decisions

On this challenge I've made some decisions about the project organization and how structure it. In the following I'll show some decisions that I've made by some topics.

### Technologies

To build this project I used [ReactJS](https://reactjs.org) v18, [HTML5](https://developer.mozilla.org/en-US/docs/Glossary/HTML5), [CSS3](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) by [SASS](https://sass-lang.com) and [Styled Components](https://styled-components.com) and plenty others.

I also used Tests Libraries as is explained in the following topic.

### Tests

I have some technique's to test, one of my decisions was to use [Testing Pyramid](https://www.headspin.io/blog/the-testing-pyramid-simplified-for-one-and-all) framework to deliver automated tests on this project. You can know more about it on the article: [What is a Testing Pyramid?](https://www.headspin.io/blog/the-testing-pyramid-simplified-for-one-and-all).

Right now I'm applying the rule 60-30-10:

- 60% - Unit tests;
- 30% - Component/Integration tests;
- 10% - E2E Tests;

I choose the libraries such as [Jest](https://jestjs.io/docs/26.x/tutorial-react), [Testing Library](https://testing-library.com/docs/), and [Cypress](https://www.cypress.io) to use as my main testing tools.

### Commits

The project commits are created following the [CommitLint](https://commitlint.js.org/) pattern, following the Conventional Commits specification for more readable commit messages. You can learn more about on the [Conventional Commits Website](https://www.conventionalcommits.org/en/v1.0.0/).

Before each commit, or when you push a git change, the project have the configuration to verify code structure by linting tool and auto-fix when it's possible.

## Code Organization

## Features

The app has the following features:

- List of Pokemons
- Pokemon list with filter by name
- Pokemon list with filter by type
- Pokemon details page
- Pagination

## Instructions

Go and Install [Docker](https://www.docker.com) on your machine, and run the following commands and [GNU Make](https://www.gnu.org/software/make/) (for [Windows](https://community.chocolatey.org/packages/make), [Mac](https://ports.macports.org/port/gmake/) or [Linux](https://www.opensourceforu.com/2012/06/gnu-make-in-detail-for-beginners/)):

### Setup project

```bash
make setup
```

### Run after every time after you set up the project

```bash
make start
```

OR

To run the code you will need to install [Node.JS v16](https://nodejs.org/download/release/v16.19.0/), that was fully tested on it, relative to your OS installer

With Node.js installed you can now run the project with the following commands:

### Install all node dependencies

```bash
npm install
```

or

```bash
yarn install
```

### Run the project

```bash
npm run dev
```

or

```bash
yarn dev
```

### Build to deploy

```bash
npm run build
```

or

```bash
yarn build
```

### Checking issues (Lint)

```bash
npm run lint
```

or

```bash
yarn lint
```

### Testing features

```bash
npm run test
```

or

```bash
yarn test
```

### Auto-fixing (Lint)

```bash
npm run lint
```

or

```bash
yarn lint
```

### Formating code (Lint/Prettier)

```bash
npm run lint:format
```

or

```bash
yarn lint:format
```
