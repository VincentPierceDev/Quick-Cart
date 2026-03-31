
import {render, screen, fireEvent} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Button from './Button';

const btnText: string = "Test Button";

test("does not call onclick when disabled", async () => {
    const user = userEvent.setup();
    const click = jest.fn();

    render(
        <Button type='button' onClick={click} ariaDisabled={true} disabledText={btnText}>
            {btnText}
        </Button>
    );

    await user.click(screen.getByText(btnText));
    expect(click).not.toHaveBeenCalled();
});

test("doesn't crash without onClick", () => {
    render(<Button type='button'>{btnText}</Button>);
    expect(() => {
        fireEvent.click(screen.getByText(btnText));
    }).not.toThrow();
});