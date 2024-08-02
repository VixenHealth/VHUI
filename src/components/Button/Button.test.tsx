import React from "react";
import {render} from "@testing-library/react";

import {Button, SizeButtonValues} from "./Button";

describe("Button", () => {
	test("renders the Button component", () => {
		render(<Button text="Hello world!" size={SizeButtonValues.BIG}/>);
	});
});