
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingItem from "./shopping-item";
import { ItemData, ItemRating } from "@/global-types/shop/shop-types";

const testUpdateCart = jest.fn();
jest.mock("../../../contexts/shop/cart-provider", () => ({
    useCart: () => ({
        updateCart: testUpdateCart,
    }),
}));

//example product, doesn't have to be real data
const testProduct: ItemData = {
    id: 2,
    title: "Sneaky Sneakers",
    description: "They are very quiet!",
    category: "men's clothing",
    price: 50,
    image: "https://images.unsplash.com/photo-1603787081207-362bcef7c144?q=80&w=465&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    rating: {
        rate: 5,
        count: 5000
    } as ItemRating
};

const imgAltText = /Sneaky Sneakers Showcase/i

describe("ShoppingItem - Non Visually Obvious Tests", () => {
    beforeEach(() => {
        testUpdateCart.mockClear();
    });

    test("clicking Add to Cart calls updateCart with correct args", async () => {
        const user = userEvent.setup();
        render(<ShoppingItem info={testProduct}/>);
        const button = screen.getByRole("button");
        await user.click(button);
        expect(testUpdateCart).toHaveBeenCalledWith(testProduct.id, 1);
    });

    test("lazy loading is applied for all images below the fold", () => {
        const lowerProduct = {...testProduct, id: 4} //fold is set to 3
        render(<ShoppingItem info={lowerProduct}/>);
        const img = screen.getByAltText(imgAltText);
        expect(img.getAttribute("loading")).toBe("lazy");
    });
})

describe("ShoppingItem - Visually Obvious Tests", () => {
    beforeEach(() => {
        testUpdateCart.mockClear();
    });

    test("hover effect properly applying and unapplying", () => {
        render(<ShoppingItem info={testProduct}></ShoppingItem>);
        const img = screen.getByAltText(imgAltText);
        const container = img.parentElement;

        if(!container)
            throw new Error("container invalid!");

        //hvr
        fireEvent.mouseEnter(container);
        expect(img.classList.contains("scale-110")).toBe(true);

        //unhvr
        fireEvent.mouseLeave(container);
        expect(img.classList.contains("scale-110")).toBe(false);
    });

    test("spam clicking still add each item to cart", async () => {
        const user = userEvent.setup();
        render(<ShoppingItem info={testProduct}/>);
        const button = screen.getByRole("button");
        const loopAmnt: number = 5;
        for(let i = 0; i < loopAmnt; i++) {
            await user.click(button);
        }
        expect(testUpdateCart).toHaveBeenCalledTimes(loopAmnt);
    });
})