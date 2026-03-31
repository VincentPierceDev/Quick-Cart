# Technical Documentation

## Architecture Overview

Quick Cart is built utilizing NextJS and its component driven architecture, with centralized state management, for a single point of truth, scalability, and maintainability. The application is split into three main layers, which include data fetching, state handling, and UI rendering.

### 1. Data Layer (API libs)

Product data is retrieved from an external API (fakestoreapi.com/products) through a dedicated shop service. This seperates the API logic from any components that may want to retrieve the data for various reasons. Since the provided data from the backend is a list of 20 items, all the shop items are then handled by the State Management Layer. However, with the abstracted libs for fetching data, a system that fetches a few items at a time can be implemented for a larger amount of items.

The Data Layer also provides the application with means of communicating back to the backend. Although for this project the backend is just JSON data, a function is included that mocks sending the cart checkout to the backend by logging the data in the browser.

### 2. State Management Layer (Providers)

Quick Cart uses React Context to manage the global states throughout the application. This simply prevents prop drilling and serves as a single point of truth, as stated above.

* Shop Provider: Handles item data fetched from the API and provides it throughout the application.
* Cart Provider: Manages the cart state, including additing items, quantity, and removing items.

Seperating these allows increased scalability and prevents the cart from being directly tied to this specific shop.

### 3. Presentation Layer (Components)

The UI is composed of reusable components responsible for rendering the data and handling all the user interactions. Shop related components display item data and trigger cart actions, cart components reflect the current cart state, and global components such as buttons, loading, navbar, footer, etc maintain consistency.

## Data Flow

The application follows a unidirectional data flow. Products are fetched from the API and stored, components consume this data to render product listings, user interactions trigger various actions in the cart provider, the cart provider updates state which re-renders dependent components.

## Components



## Testing Strategy

Quick Cart includes unit and integration tests that focus on validating the core functionality, state management, and UI & user interactions. Testing was implemented with Jest and React Testing Library, along with various assistant libraries for types.

The testing strategy prioritizes core business logic and user facing behavior over exhaustive component coverage. Key features such as data fetching, storing, cart functionality and state updates are tested with obscure edge cases to ensure reliability.

### Unit Testing

Unit tests were written for the critical components on the application:

* API Services: verifies that product data is fetched and handeled correctly.
* Shop Provider: Ensures product data is properly stored and exposed to components.
* Cart Provider: Tests adding items, updateing quantities, and maintaining correct cart state.
* UI Components: Validates rendering, user interactions, and expected behaviors (eg., properly disabled, etc)

Each component includes multiple test cases covering typical usage. More testing is expected to be added in the future as the project grows larger.

### Integration Testing

In addition to unit tests, integration tests were used to validate interactions between components and state:

* Adding an item from the shopping item UI correctly provides data to be updated.
* Cart states propogate to the UI as expected.

Thes tests ensure that the core components work together correctly as a whole application.

## Tradeoffs & Decisions

Throughout the development procerss, several decision were made to balance simplicity and scalability, while meeting all requirements within the alloted time constraints.

### State Management Approach

I chose to utilize React Context with the two seperate providers (Shop and Cart)

* Tradeoff: This introduced slightly more structure than what a very small application requires.
* Reasoning: It allowed the app to be structured as if it was a real enterprise application. New features can easily work with these providers to access or change whatever data they need to.

### Avoiding External Libraries

As highlighted in the developer-log.md, tools like TanStack Query were under consideration for data fetching and caching, state management, etc.

* Tradeoff: Not using a dedicated library means less built in features that are fully fleshed out.
* Reasoning: I opted to stick with what I know and trust rather than relying on third party libraries that are actually meant for enterprise or large scale applications. Sped up development by reducing complexity.

### Client Data Fetching fro Deployment

Initially, shop data was fetched on the server. However, during deployment the API did not respond to serverless function requests. However, details are provided to switch back to server fetching as well as notes in the develop-log.md, in case the need arises if the backend changes.

* Tradeoff: Switching to client side fetching forced the entire cart to be client side. It also introduced a longer loading state when fetching data.
* Reasoning: As stated above, this fix ensured consistent functionality by transfering the fetch request away from serverless functions.

### Testing Scope

Testing was focused on core functionality rather than exhaustive coverage of all components.

* Tradeoff: Some pure presentational (extremely unlikely to fail) components were not tested
* Reasoning: Priority was given to testing business logic, state updates, and user interactions, which have the highest impact on usability. Time management played a factor as well, completing what I could within the given time frame.

### Tailwind

Tailwind was used for styling

* Tradeoff: Tailwind introcuded a learning curve, where I was looking at a cheat sheet for almost everything, and it reduces component readability.
* Reasoning: It is designed for a project like this that needs rapid development, spending less time writing media queries helps dramatically. Plus learning a new skill is always a plus. 

