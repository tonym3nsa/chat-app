import React from "react";
import { shallow } from "enzyme";
import { Bubble } from "./Bubble";

const setup = (props = {}) => shallow(<Bubble {...props} />);
const findByTestAttr = (wrapper, val) => wrapper.find(`[data-test='${val}']`);

const props = {
  message: "Hello world!",
  timestamp: 0,
  author: "Mark Twain",
};
describe("Bubble Component Tests", () => {
  test("Bubble Component exists", () => {
    const wrapper = setup(props);
    expect(wrapper.exists()).toBe(true);
  });

  test("Bubble message displays accordingly", () => {
    const wrapper = setup(props);
    const message = findByTestAttr(wrapper, "bubble-message");
    expect(message.text()).toBe("Hello world!");
  });

  test("Bubble displays human readable time", () => {
    const wrapper = setup(props);
    const timestamp = findByTestAttr(wrapper, "timestamp");
    expect(timestamp.text()).toBe("1 Jan 1970 00:00");
  });
});
