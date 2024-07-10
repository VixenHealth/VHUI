import React from "react";

export interface ButtonProps {
	labell: string;
}

const Button = (props: ButtonProps) => {
	return <button>{props.labell}</button>;
};

export default Button;