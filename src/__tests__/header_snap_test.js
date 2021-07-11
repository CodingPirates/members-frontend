import React from "react";
import { create } from "react-test-renderer";
import Header from "../components/header.js";
describe("Header Test", () => {
  test("it matches the snapshot", () => {
    const component = create(<Header />);
    expect(component.toJSON()).toMatchSnapshot();
  });
});
