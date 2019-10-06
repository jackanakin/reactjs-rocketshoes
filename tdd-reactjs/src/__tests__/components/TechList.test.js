import React from "react";
import TechList from "~/components/TechList";
import { render, fireEvent, getByLabelText } from "@testing-library/react";
import { useSelector, useDispatch } from "react-redux";
jest.mock("react-redux");

describe("TechList component", () => {
  it("Should render tech list", () => {
    useSelector.mockImplementation(cb =>
      cb({
        techs: ["Node.js", "ReactJS"]
      })
    );

    const { getByTestId, getByText } = render(<TechList />);

    expect(getByTestId("tech-list")).toContainElement(getByText("Node.js"));
    expect(getByTestId("tech-list")).toContainElement(getByText("ReactJS"));
  });

  it("should be able to add new tech", () => {
    const { getByTestId, getByLabelText } = render(<TechList />);

    const dispatch = jest.fn();

    useDispatch.mockReturnValue(dispatch);

    fireEvent.change(getByLabelText("Tech"), { target: { value: "Node.js" } });
    fireEvent.submit(getByTestId("tech-form"));

    expect(dispatch).toHaveBeenCalledWith({
      type: "ADD_TECH",
      payload: { tech: "Node.js" }
    });
  });
});
