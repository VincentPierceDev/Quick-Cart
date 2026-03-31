import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CartItem from "./cart-item";
import { ItemData } from "@/global-types/shop/shop-types";

const testUpdateCart = jest.fn();

jest.mock("@/contexts/shop/cart-provider", () => ({
  useCart: () => ({
    updateCart: testUpdateCart,
    cartProducts: [{ id: 1, quantity: 3 }],
  }),
}));

jest.mock("@/contexts/shop/shop-provider", () => ({
  useShopData: () => ({
    shopProducts: [
      { id: 1, title: "This is a very long product title that should be truncated", price: 99, image: "img.png", rating: { rate: 5, count: 10 } } as ItemData,
    ],
  }),
}));

describe("CartItem - verification cases", () => {

  test("shortens long title to 25 characters", () => {
    render(<CartItem cartInfo={{ id: 1, quantity: 3 }} />);
    
    const titleSpan = screen.getByText(/This is a very long produ.../i);
    expect(titleSpan).toBeInTheDocument();
    expect(titleSpan.textContent).toMatch(/^.{25}\.\.\.$/); // check the length not including the dots
  });

  //verify the item is actually fully deleted
  test("delete button calls updateCart with -Number.MAX_SAFE_INTEGER", async () => {
    const user = userEvent.setup();
    render(<CartItem cartInfo={{ id: 1, quantity: 3 }} />);

    const deleteBtn = screen.getByText("🗑");
    await user.click(deleteBtn);

    expect(testUpdateCart).toHaveBeenCalledWith(1, -Number.MAX_SAFE_INTEGER);
  });

});