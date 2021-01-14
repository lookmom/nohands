# nohands

nohands is my personal, opinionated, zero-config starter kit based on:
* [yarn](https://yarnpkg.com/) for its speed and [workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
* [parcel-bundler](https://parceljs.org/) for its (zero-config) ease of use and tree-shaking (in v2)
* [typescript](https://www.typescriptlang.org/) for its types, duuh. (Also its es5 transpiling)
* [SCSS](https://sass-lang.com/), because you don't want to do CSS (also I hate the css-in-js approach, especially in production)
* [react](https://reactjs.org/) for its minimal boilerplate - In my entire (15 year career) I have never written less to achieve the same goal
* [react-router](https://reactrouter.com/web/guides/quick-start) for its industry-standard and awesome documentation
* [bootstrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/) for its style framework and very good variables
* [reactstrap](https://reactstrap.github.io/) for its convenient way of using bootstrap components
* [i18next](https://www.i18next.com/) for its easy to learn and use way of doing i18n, also industry-standards (BabelEdit etc.)
* [prettier](https://prettier.io/), because I don't want to reinvent the wheel - set and enforce standards across the team (possibly prevent the tabs-vs-spaces war, because spaces are surely superior as everyone knows and agrees upon on)
* [stylelint](https://stylelint.io/) for its help in consistency and quality
* [eslint](https://eslint.org/) for its help in consistency and quality
* [lint-staged](https://github.com/okonet/lint-staged) for its convenience when working together
* [husky](https://typicode.github.io/husky/) required to enable the above
* [editorconfig](https://editorconfig.org/)

No static site generator though.

_Heads up:_ Right now I stick to parcel v1 because parcel v2 is only in beta right now. But the replacement will be a minimal invasive surgery because of its almost matching APIs, also the package.json is already v2 ready.

You'll also need to add polyfills as you need them. `core-js` is your friend here.

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
