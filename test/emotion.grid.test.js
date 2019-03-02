import grid from "../emotion";
import React from "react";
import { create as render } from "react-test-renderer";
import serializer, { matchers } from "jest-emotion";
expect.extend(matchers);
expect.addSnapshotSerializer(serializer);

const renderJSON = el => render(el).toJSON();

describe("The grid component should", () => {
  it("accept layout via interpolation", () => {
    const TwoByTwo = grid`
					1fr  2fr
			3fr A,B  A,B
			4fr A    A
		`;
  });

  it("throw on too many header row columns", () => {
    expect(() => {
      grid`
						1fr  2fr
				3fr A,B
				4fr A  
			`;
    }).toThrow(/headers row has too many columns/);
  });

  it("throw on non-uniform column lengths", () => {
    expect(() => {
      grid`
				    1fr
				1fr  A
				1fr
			`;
    }).toThrow(/should have the same number of/);
  });

  it("be able to handle only column headers", () => {
    let Component = null;
    expect(() => {
      Component = grid`1fr 2fr 3fr`;
    }).not.toThrow();
    expect(Component.colHeaders).toEqual("1fr 2fr 3fr");
  });

  it("be able to handle only row headers", () => {
    let Component = null;
    expect(() => {
      Component = grid`
			1fr
			2fr 
			3fr`;
    }).not.toThrow();
    expect(Component.rowHeaders).toEqual("1fr 2fr 3fr");
  });

  it("produce a dimensions map", () => {
    const Component = grid`
						3fr   4fr
				1fr	A,B   A,B
				2fr A     A
			`;
    const areaDimensions = Component.extractedDimensions;
    expect(areaDimensions["A"].top).toBe(0);
    expect(areaDimensions["A"].left).toBe(0);
    expect(areaDimensions["A"].bottom).toBe(1);
    expect(areaDimensions["A"].right).toBe(1);

    expect(areaDimensions["B"].top).toBe(0);
    expect(areaDimensions["B"].left).toBe(0);
    expect(areaDimensions["B"].bottom).toBe(0);
    expect(areaDimensions["B"].right).toBe(1);

    expect(Component.colHeaders).toEqual("3fr 4fr");
    expect(Component.rowHeaders).toEqual("1fr 2fr");
  });

  it("assign dimensions based on sorting", () => {
    const Component = grid`
						3fr   4fr
				1fr	A,B   A,B
				2fr A     A
			`;

    const json = renderJSON(
      <Component>
        <div />
        <div />
      </Component>
    );

    expect(json).toMatchSnapshot();

    const firstGridItem = json.children[0];
    const secondGridItem = json.children[1];

    expect(firstGridItem).toHaveStyleRule("grid-row-start", "1");
    expect(firstGridItem).toHaveStyleRule("grid-row-end", "3");
    expect(firstGridItem).toHaveStyleRule("grid-column-start", "1");
    expect(firstGridItem).toHaveStyleRule("grid-column-end", "3");
    expect(secondGridItem).toHaveStyleRule("grid-row-start", "1");
    expect(secondGridItem).toHaveStyleRule("grid-row-end", "2");
    expect(secondGridItem).toHaveStyleRule("grid-column-start", "1");
    expect(secondGridItem).toHaveStyleRule("grid-column-end", "3");
  });

  it("assign dimensions based on gridItem", () => {
    const Component = grid`
			3fr		4fr 	
		1fr A,B		A,B	
		2fr A		  A	
			`;

    const json = renderJSON(
      <Component>
        <div item="B" />
        <div item="A" />
      </Component>
    );

    expect(json).toMatchSnapshot();
    const firstGridItem = json.children[0];
    const secondGridItem = json.children[1];

    expect(firstGridItem).toHaveStyleRule("grid-row-start", "1");
    expect(firstGridItem).toHaveStyleRule("grid-row-end", "2");
    expect(firstGridItem).toHaveStyleRule("grid-column-start", "1");
    expect(firstGridItem).toHaveStyleRule("grid-column-end", "3");
    expect(secondGridItem).toHaveStyleRule("grid-row-start", "1");
    expect(secondGridItem).toHaveStyleRule("grid-row-end", "3");
    expect(secondGridItem).toHaveStyleRule("grid-column-start", "1");
    expect(secondGridItem).toHaveStyleRule("grid-column-end", "3");
  });

  it("support empty cells", () => {
    const Component = grid`
						3fr   4fr
				1fr	..   ..
				2fr A     A
			`;
    const areaDimensions = Component.extractedDimensions;
    expect(areaDimensions["A"].top).toBe(1);
    expect(areaDimensions["A"].left).toBe(0);
    expect(areaDimensions["A"].bottom).toBe(1);
    expect(areaDimensions["A"].right).toBe(1);

    expect(Component.colHeaders).toEqual("3fr 4fr");
    expect(Component.rowHeaders).toEqual("1fr 2fr");
  });
});
