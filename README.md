# Weather app

## Demo

[https://next-weather-97vc.vercel.app/](https://next-weather-97vc.vercel.app/)

## Questions

### Component Composition

1. Please explain how you have broken down your UI into different components.
   Also explain why you did this and if you reused some of the components.

I broke down the UI in the following components and hooks:

- Navigation
- CityTiles
  - CityTile
- CityListItem
- useDefaultCity
- useSelectedCities

The Navigation component is seperate from the layout file because in some cases
I can exclude it from the app's layout based on Pathname in the future.

The @CityTiles folder holds 3 components with relations to eachother.
<CityTiles />, (which could be renamed to <Cities /> after adding
<CityListItem />) holds 2 states: defaultCity and selectedCities. These two
states are shared between child components <CityTile /> and <CityListItem />.

I drilled <CityTile /> into a child component because it holds itself a hook
which fetches the weather and every time this hooks run, it would rerender the
whole <CityTiles /> component unnecessarily.

I could not fetch the weather from each city in one query, otherwise this would
be a consideration to fetch from <CityTiles />. It is also a benefit to fetch
each cities weather from it's own seperate <CityTile />, because even though the
user alters the selectedCities input, it won't result in all <CityTile />
component remounting it's own weather, which is undesirable.

I didn't find a use case for re-using any components in this project, but the
useDefaultCity hook is reusable which is able to get the defaultCity from
localStorage. This hook can easily be called from anywhere in the application
which would be very convenient.

2. How would you pass data between parent and child components?

As an extension from above, <CityTiles /> holds two states, defaultCity and
selectedCities. These states are both hold in localStorage and in component
state. Both childs <CityTile /> and <CityListItem /> use these states (either
using the value, or setting the state, or both).

<CityListItem /> sets the selectedCities state. <CityTile /> does not use the
selectedCities internally but I use it decide whether to render the tile.

<CityTile /> does hold the <Switch /> component to set the defaultCity.
<CityListItem /> then uses the defaultCity to disable the <Checkbox />
component, because it is undesirable to remove a city which is set as
defaultCity.

### Styling

3. Which stylesheet format did you use and why?

I did not use stylesheets other than the default globals.css from NextJS. I did
use however TailwindCSS, which is a very lightweight framework that uses mostly
utility classes. I also used HeadlessUI, a small component library made by the
same developers as TailwindCSS. Additionally I used pre-made components from the
TailwindUI component library.

4. Would you use a different CSS-preprocessor in production than the one you’ve
   used in your solution. If yes, why?

   I did not use any CSS-preprocessor as I used tailwind, which I would also use
   in a production application because it is very lightweight. For a heavier app
   with a desire for more complex components I would use something like MUI or
   Chakra (The latter I have not yet experienced with). MUI uses a CSS-in-JS
   library called EmotionCSS. I would not really use a pre-processor like
   SASS/LESS in combination with my options as there is not really a need for
   that anymore.

5. Can you describe the benefits of using CSS-in-JS? Did you use it already, if
   yes in which scenarios.

I used it already working on GraphCommerce. Benefits is that the CSS-in-JS is
precompiled which means that it does not necessarily make the client slower.
However libraries that use it like MUI do increase the bundle size quite a bit.
Another benefit would be that it is very developer friendly as the developer can
make use of Intellisense and ESLint. Also the won't be split from the
HTML/JSX/JS code as with normal stylesheets which means you have to search less
for where the css is implemented from.

### Handling data

6. Which sources did you consult in the past when you needed help, guidance or
   simply had to look up best practices when designing REST APIs.

   I find reading documentation or looking at proven examples from developers
   before me (like on StackOverflow) very useful when finding out how to do
   something I have not done before.

7. How would you implement caching in your application?

   I implemented caching using the SWR library (which has cache functionality
   prebuilt). The SWR library uses a Map to hold cached data which is easily
   accessible using their hooks. Additionally I integrated state data with
   localStorage.

8. What is the difference between REST and GraphQL APIs? Does GraphQL make sense
   here? Explain your thoughts.

REST and GraphQL APIs are both popular API methods that fetch data. An important
difference is that GraphQL is a schema-based API, meaning that clients can
specify exactly what data they need by defining a query structure in the schema.
This is different compared to REST APIs, where clients receive a fixed set of
data for each request.

GraphQL could make sense here. Let's say I wanted to fetch today's current
weather: In GraphQL I could write a query where I just fetch the `current`
object from the API. whereas the REST API gives all the data like the `daily`
and `minutely` objects. OpenWeather's REST API gives a solution with the
`exclude` parameter, however this is not as flexible as the GraphQL approach.

9. How did you persist the data in your app? Why did you choose this approach
   and would you use the same approach in production (assuming the site would
   grow much bigger)?

I persisted data using localStorage. This was the most efficiënt way to get the
job done (because I did not have the resources to build a backend system saving
the data like selectedCities or defaultCity). If the app would scale, having a
database which holds data per user account would probably have my preference.

### Optimizations

10. What optimization techniques did you use in your application or would you
    recommend to use in practice?

- With the SWR library I reduced the number of API calls which optimizes
  performance using cache and localStorage.
- I splitted my code where needed to reduce the amount of re-renders to optimize
  performance.
- NextJS and TailWind minifies my JS and CSS.
- I used TypeScript to make development more efficiënt.
- Images are automatically optimized by NextJS.
- Server Side Rendering (SSR) is something I would implement in practice but had
  no use case in this project.

11. What use case do you see for your little app that would benefit by adding
    RxJS? Describe how you would possibly implement it.

As a React developer RxJS is quite unknown to me. Reading through its
documentation at first glanse I don't see a use case from RxJS for React.

12. How would you add authentication to the app? Explain your thought process.

I honestly have not much experience with setting up Authentication from scratch
but I'm aware that there are third party solutions for this like Auth0 or login
with Google/Facebook.
