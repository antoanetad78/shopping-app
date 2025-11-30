## Descriptoin

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).
It is a simple e-commerce application that allows users to browse products, add them to a shopping cart, and view the cart contents.

The application uses a dummy api and for the sake of speed - does not include any pagination for the products list.

The functionality is simple:

-   Home page is the product list. Each product is displayed as a card, with some information and a button, that allows it to be added to the cart.
-   Each product has a Prodct details page, containing a little more information about the product, a button to ad it to the card, and a button to continue shopping.
    When a product is added to the cart, a label is dispalyed to let the user know they have successfully added something to the cart.

-   The cart page displays the products in the cart, with a quantity control, a remove button, and a total price. A chekout button and a continue shopping button are also displayed. The cheklout button is not implemented. The continue shopping button redirects the user to the home page.

-   The Header component displays the logo and a navigation bar. The navigation bar contains links to the home page and the cart page. The cart page also displays a badge with the number of items in the cart.

## Notes

-   The application is deployed to [https://nextjs-d605ewu3g-antoanetad78s-projects.vercel.app/](https://nextjs-d605ewu3g-antoanetad78s-projects.vercel.app/)

-   No test were added, as the focus was on the implementation of the functionality.
-   App router was used instead of pages router, as it is the more modern way to structure NextJS applications.
-   The application uses the CartContext to manage the cart state, alongside storing the cart in the session storage. Session storage is used to persist the cart state across page refreshes, but not across different sessions. As this is a small, test application, this is sufficient and keeps the browser clean.
-   There is no Authentication implemented, as it was not requested in the task.

## Getting Started

This project uses `pnpm` as a package manager.

To run th project locally, first run the development server:

```bash

pnpm dev

```

Then open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The project is deployed to [https://nextjs-d605ewu3g-antoanetad78s-projects.vercel.app/](https://nextjs-d605ewu3g-antoanetad78s-projects.vercel.app/)

## Technologies

-   Next.js
-   TypeScript
-   Tailwind CSS
-   Vercel
