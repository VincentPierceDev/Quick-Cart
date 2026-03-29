import { ReactNode } from "react";

interface Props {
    children?: ReactNode;
    ariaDisabled?: boolean;
    onClick?: () => void;
}

export default function Button(props: Props){
  return (
    <button 
        className=""
        aria-disabled={props.ariaDisabled}
        onClick={props.onClick}
        disabled={props.ariaDisabled}
    >
      {props.children}
    </button>
  );
};