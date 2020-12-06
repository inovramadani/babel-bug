/* eslint-disable */
import { assert, expect } from "chai";
import {
  cleanup,
  render,
  screen,
  waitForElement
} from "@testing-library/react";
import AntdButton from "./Button";
import App from "./App";

const component = () => render(<div>hello</div>);

describe("App", function () {
  afterEach(function () {
    cleanup();
  });

  it("Should render test component", function () {
    const { getByText } = component();
    getByText("hello");
  });

  it("Should render App component", function () {
    const { getByText } = render(<App />);
    getByText("Hello Codesandbox");
  });

  it("Should render AntdButton component", function () {
    const { debug, getByText } = render(<AntdButton />);
    debug();
    getByText("antd");
  });
});
