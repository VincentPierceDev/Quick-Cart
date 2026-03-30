import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    ariaDisabled?: boolean;
    disabledText?: string;
    toggled?: boolean;
    extraClasses?: string; //extra classes added at end to overwrite anything
    onClick?: () => void;
}

export default function Button(props: Props){
  return (
    <button 
        className={`block pt-1 pb-1 pl-2 pr-2 bg-[var(--secondary-color)] text-[color:var(--tertiary-color)] font-bold rounded cursor-pointer shadow-[color:var(--tertiary-color)] hover:shadow-md transition-shadow duration-300 ease-in-out ${props.extraClasses}`}
        aria-disabled={props.ariaDisabled}
        onClick={props.onClick}
        disabled={props.ariaDisabled}
        aria-pressed={props.toggled}
    >
      {props.ariaDisabled ? props.disabledText : props.children}
    </button>
  );
};