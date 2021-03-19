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
* [husky](https://typicode.github.io/husky/), required to enable the above
* [editorconfig](https://editorconfig.org/) just for fun

No static site generator though.

You'll also need to add polyfills as you need them. `core-js` is your friend here.

Prerequisites
=============
* [Node.js](https://nodejs.org/) `>= 12`
* [yarn](https://yarnpkg.com/) `>= 1.22.4`
* Under windows: [windows-build-tools](https://www.npmjs.com/package/windows-build-tools): `npm install --global --production windows-build-tools@4.0.0`

It is also recommended (though not required) to install the following plugins in your IDE (I favor VSCode) to get the most out of this repo:
* EditorConfig
* ESLint
* gitignore
* Prettier
* SCSS
* stylelint
* Typescript-Essentials
* Visual Studio IndelliCode

Install
=======
* in project-root run `yarn install`

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

Start developing
================
* in project-root run `yarn start`

QA and code quality
===================
There are multiple libraries involved in ensuring the best possible code quality, even when working with teams.

To verify parts of the code on-demand just do (one of) the following:
* in project-root run `yarn check:ts` to verify that the typescript compiler can interprete your project and otherwise lists the errors
* in project-root run `yarn lint:ts` to let eslint crawl through your code and find warnings and errors
* in project-root run `yarn check:deps` to let dependency-cruiser check all your dependencies
* in project-root run `yarn check:all` to run all the above tests
* in project-root run `yarn pretty` to clean up all auto-fixable code styling warnings and errors

Also lint-staged will do all the above (except `check:deps`) with all staged files in a `pre-commit` git hook.
