# nohands

nohands is my personal, opinionated, zero-config starter kit based on [yarn](https://yarnpkg.com/), [parcel-bundler](https://v2.parceljs.org/), [typescript](https://www.typescriptlang.org/), [react](https://reactjs.org/), [react-router](https://reactrouter.com/web/guides/quick-start), [reactstrap](https://reactstrap.github.io/), [i18next](https://www.i18next.com/), [bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/), [prettier](https://prettier.io/), [eslint](https://eslint.org/) and [editorconfig](https://editorconfig.org/) using [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/), [SASS variables](https://sass-lang.com/documentation/variables) and [everything nice the bundler brings with it](https://v2.parceljs.org/features/api-proxy/).

No static site generator though.

Prerequisites
=============
* [Node.js](https://nodejs.org/) `>= 12`
* [yarn](https://yarnpkg.com/) `>= 1.22.4`
* Under windows: [windows-build-tools](https://www.npmjs.com/package/windows-build-tools): `npm install --global --production windows-build-tools@4.0.0`

Install
=======
* in project-root run `yarn install`

Start developing
================
* in project-root run `yarn start`

Pro Tip
=======
I added aliases for the main commands (windows cmder):

```cmd
alias yo=yarn outdated $*
alias yup=yarn upgrade-interactive --latest $*
alias yes=yarn start $*
alias yb=yarn build $*
alias y=yarn $*
alias gco=git checkout $*
alias gm=git merge $*
alias gcam=git commit -am $*
alias gs=git status $*
alias gps=git push $*
```
