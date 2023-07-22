# Test Assignment Frontend Angular

Assignment should be made with [Angular](https://angular.io/start) framework.

Just use this repository as a [**template**](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-repository-from-a-template) to generate repo in your account and make an assignment in it.

Create a **new** branch, make the task in it, then make a **Pull Request** to the **main** branch, so we are able to review it and leave some comments if needed.

## Task
Application should fetch data from Pokemon API (https://pokeapi.co/docs/v2) and render it:
* Create a view for the list of the pokemons on the main page with a pagination (site.com/?page=1)
* Create view for a single pokemon on another page (site.com/{id})

### Extras (optional)
* Pokemon avatars not provided, so you can find them and add to your project or just use some placeholder api like [this](https://ui-avatars.com/) or [this](https://www.stefanjudis.com/blog/apis-to-generate-random-user-avatars/).
* Deploy it somewhere (e.g. [Vercel](https://vercel.com/), [GitHub Pages](https://pages.github.com/), [Netlify](https://www.netlify.com/), [Heroku](https://www.heroku.com/), [Firebase](https://firebase.google.com/), etc.)

## Info
There is already created ApiService (`src/app/api.service.ts`) to make requests to the Pokemon API.

It’s **bad** practice to use *any* (https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#any) or to not use types at all in typescript, so try to make typings for all your code.

You can make your own design and template(cards/lists, whatever). Just do it with CSS (css modules, scss, tailwind, MaterialUI, etc.).

## Useful Links
Angular CLI - https://angular.io/cli. You can use it generate all kinds of stuff.

Components in Angular - https://angular.io/guide/component-overview

Templates in Angular - https://angular.io/guide/interpolations

Routing in Angular - https://angular.io/guide/router

Typescript object types to make nice typings - https://www.typescriptlang.org/docs/handbook/2/objects.html

Documentation for the API:
* https://pokeapi.co/docs/v2#resource-listspagination-section - to get a list
* https://pokeapi.co/docs/v2#pokemon - to get a single

## Commands
Start development server - `npm start` or `ng serve`.

Build project - `npm run build` or `ng build`.
