/* eslint-disable */
import { assert, expect } from "chai";
import React from "react";
import {
  cleanup,
  render,
  screen,
  waitForElement
} from "@testing-library/react";
import AntdButton from "./Button";
import App from "./App";

Object.defineProperty(window, "matchMedia", {
  value: () => {
    return {
      matches: false,
      addListener: () => {},
      removeListener: () => {}
    };
  }
});

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
    getByText("Hello CodeSandbox");
  });

  it("Should render AntdButton component", function () {
    const { debug, getByText } = render(<AntdButton text="antd" />);
    debug();
    getByText("antd");
  });
});
