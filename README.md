# Quick Cart

This is a [Next.js](https://nextjs.org) application built upon version 16.2.1. All tests are utilizing Jest version 30.3.0 and its corresponding libraries. This is my (Vincent Pierce) submission for the Kibo coding challenge project.

All details are listed below on how to setup the project, run the application, and see the live demo!

## Setup

Start by cloning the repository into your desired folder with the following command

```
git clone https://github.com/VincentPierceDev/Quick-Cart.git
```

Next, open your code editor of choice (VSCode recommended) and open the repo that was just downloaded

```
Note: you may have to run the terminal command 'cd quick-cart' to navigate into the NextJS project
```

Run your package managers commands in the terminal one after the other.

```bash
npm install
npm run dev
# or
yarn
yarn dev
# or
pnpm install
pnpm dev
# or
bun install
bun dev
```

Finally open [http://localhost:3000](http://localhost:3000) with your browser to see the final results!

## Testing

For the testing I decided to utilize Jest since it is what I am familiar with. To run all test use the following command in the terminal (ensure you are in the 'quick-cart' folder in your directory).

```bash
npm run test
# or
yarn test
# or
pnpm test
# or
bun test
```

You may also run single tests by copying the filepath and doing...

```bash
npm run test -- paste/the/path/here/file-name.test.ts
```

## Live Demo

For the purposes of the live demo, I had issues with fakestoreapi not allowing my vercel app to make requests from the server address. I tried conteracting this by disguising the request as not being from a serverless server function. Claude had recommended trying this when I was debugging the overall issue. In the end that still did not work, so I ended up having to do the fetch on the client to make fakestoreapi accept the request. I left comments and instructions in page.tsx that go into more details about this, and how to try the app with server fetching in local development.

You may view the fully hosted site [here](https://quick-cart-pi-seven.vercel.app/)


## Final Notes

Overall this was a fun project. My submission meet the requirements of the challenge, however there are a few extra features I would like to add. Filtering is one of them, along with a search bar. So, that will be my future for this project.