# Frontend Mentor - E-commerce product page

![](./images/desktop-preview.jpg)

Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Vite](https://v3.vitejs.ru/) - Building the project
- [Typescript](https://www.typescriptlang.org/) - Typing
- [Tailwind](https://tailwindcss.com/) - For styles
- [Zustand](https://github.com/pmndrs/zustand) - For state management
- [Gulp](gulpjs.com) - Converting png/jpg images to webp format

### What I learned

In this challenge I tried new libraries like Tailwind and Zustand. They made everything much easier than other libraries I used before. Zustand needs minimum setup to go. That's all my code for creating the store:
```js
interface ProductsState {
    products: Product[],
    add: (product: Product) => void,
    delete: (index: number) => void,
}

export const useProductStore = create<ProductsState>()(set => ({
    products: [],
    add: (product) => set(state => ({ products: [...state.products, product] })),
    delete: (index) => set(state => ({ products: state.products.filter((_, i) => index !== i) }))
}))
```
And then just using the hook for accessing the store:
```js
const products = useProductStore(state => state.products)
```
Also I used React Portals for implementing pop-up window and the lightbox gallery. It prevented the props-drilling issue.

```js
interface ModalProps {
    isVisible: boolean,
    children: ReactNode
}

function Modal({ isVisible, children }: ModalProps) {
    const container = useMemo(
        () => document.getElementById('modal'),
        []
    )
    return container && isVisible && createPortal(children, container)
}

export default Modal
```

### Useful resources

- [Teleportation in React: Positioning, Stacking Context, and Portals](https://www.developerway.com/posts/positioning-and-portals-in-react) - A usefull article on absolute positioning and why React Portals are cool.

## Author

- Frontend Mentor - [katgur](https://www.frontendmentor.io/profile/katgur)