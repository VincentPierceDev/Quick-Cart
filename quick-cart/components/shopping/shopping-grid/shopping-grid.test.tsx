
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ShoppingGrid from "./shopping-grid";
import { ShopDataProvider } from "@/contexts/shop/shop-provider";
import { ItemData, ItemRating } from "@/global-types/shop/shop-types";

const testUpdateCart = jest.fn();

//this path needs to match the import in the component
jest.mock("@/components/shopping/shopping-item/shopping-item", () => ({
    useCart: () => ({
        updateCart: testUpdateCart,
    }),
}));

jest.mock("@/contexts/shop/cart-provider", () => ({
    useCart: () => ({
        updateCart: testUpdateCart,
    })
}))


jest.mock("../shopping-item/shopping-item", () => ({info}: any) => {
        return(
            <button onClick={() => require("../../../contexts/shop/cart-provider").useCart().updateCart(info.id, 1)}>
                {info.title}
            </button>
        );
});

describe("ShoppingGrid Component - Functional Tests", () => {
    beforeEach(() => {
        testUpdateCart.mockClear();
    });

    test("Clicking an Add to Cart button provides correct ID for updating", async () => {
        const user = userEvent.setup();

        const itemTemplate: ItemData = {
            id: 1,
            description: "test 1",
            price: 100,
            image:"/asdasd.png",
            category: "electronics",
            rating: {rate: 5, count: 100} as ItemRating,
            title: "Product 1"
        }

        const id2 = 555;
        const id3 = 63263264;

        //may as well test for any id side effects as well
        const products: ItemData[] = [
            {...itemTemplate}, //small num
            {...itemTemplate, id: id2, title: "Product 2"}, //same digits
            {...itemTemplate, id: id3, title: "Product 3"} //large num
        ];

        render(
            <ShopDataProvider initialProducts={products}>
                <ShoppingGrid/>
            </ShopDataProvider>
        );

        const buttons: HTMLElement[] = screen.getAllByRole("button");

        await user.click(buttons[0]);
        expect(testUpdateCart).toHaveBeenCalledTimes(1);
        expect(testUpdateCart).toHaveBeenCalledWith(1, 1);
        
        await user.click(buttons[1]);
        expect(testUpdateCart).toHaveBeenCalledTimes(2);
        expect(testUpdateCart).toHaveBeenCalledWith(id2, 1);
        
        await user.click(buttons[2]);
        expect(testUpdateCart).toHaveBeenCalledTimes(3);
        expect(testUpdateCart).toHaveBeenCalledWith(id3, 1);
    });


    test("renders 0 item display when products are empty", () => {
        render(
            <ShopDataProvider initialProducts={[]}>
                <ShoppingGrid/>
            </ShopDataProvider>
        )

        const spanElement = screen.getByText("Showing 0 Items");
        expect(spanElement).toBeInTheDocument();
    })

})

