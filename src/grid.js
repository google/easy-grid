/**
 * Copyright 2017 Google LLC
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 * https://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React from 'react';
import styled from 'styled-components';

 const GridDiv = styled('div')(({
	rowHeaders,
	colHeaders 
  }) => ({
	display: "grid",
	gridTemplateRows: rowHeaders || "initial",
	gridTemplateColumns: colHeaders || "initial"
  }))
  
   const GridCell = styled('div')(({ top, bottom, left, right }) => ({
	gridRowStart: top + 1,
	gridRowEnd: bottom + 2,
	gridColumnStart: left + 1,
	gridColumnEnd: right + 2,
	position: "relative"
  }))

const validateRows = (rows) => {
	const colsRegEx = /[\s]+/;
	const toValidate = rows.map(row => row.split(colsRegEx)).map(cols =>
		cols.reduce((acc, val) => {
			return val.length == 0 ? acc : acc.concat([val]);
		}, []));

	const colCounts = toValidate.map(row => row.length);
	if (colCounts.length == 1) {
		return toValidate;
	}
	const allSame = colCounts.slice(1).reduce((acc, val) => {
		return acc && val == colCounts[1];
	}, true);
	if (!allSame) {
		throw `Rows 1 - ${colCounts.length} should have the same number of ` +
			`columns.`;
	}
	if (colCounts[1] != 1 && colCounts[0] != colCounts[1] - 1) {
		throw `The column headers row has too many columns.`;
	}
	return toValidate;
};

const extractDimensions = (layout) => {
	const areas = {};
	for (let i = 0; i < layout.length; i++) {
		for (let j = 0; j < layout[i].length; j++) {
			if (layout[i][j] == '..') {
				continue;
			}
			const cellAreas = layout[i][j].split(',');
			cellAreas.forEach(area => {
				if (!areas[area]) {
					areas[area] = {
						top: i,
						left: j,
						bottom: i,
						right: j,
					};
				} else {
					areas[area] = {
						...areas[area],
						bottom: i,
						right: j,
					};
				}
			});
		}
	}
	return areas;
};

const GridComponentFactory = (...args) => {
	const layoutString = args[0][0];
	const rows = validateRows(layoutString.split('\n').reduce((acc, row) => {
		// Verify that the row is not empty.
		const match = row.match(/[\s]*/);
		if (row.length > 0 && match && match[0].length != match.input.length) {
			return acc.concat(row);
		}
		return acc;
	}, []));

	let rowHeaders = null;
	if (rows.length > 1) {
		// Remove the first row of layout data if this is a grid. If it's only
		// row headers, do not remove the first row of data.
		const rowHeadersToUse = rows[0].length > 1 ? rows.slice(1) : rows;
		rowHeaders = rowHeadersToUse.reduce((acc, row) => {
			return acc.concat([row[0]]);
		}, []).join(' ');
	}
	let colHeaders = null;
	if (rows[0].length > 1) {
		colHeaders = rows[0].join(' ');
	}
	let extractedDimensions = null;
	let sortedDimensionKeys = null;
	if (rows.length > 1 && rows[1].length > 1) {
		// Remove the column headers and row headers.
		const layout = rows.slice(1).map(row => row.slice(1));
		extractedDimensions = extractDimensions(layout);
		// The grid items are sorted alphabetically and matched against the
		// corresponding child element. Unless the child element contains a
		// gridItem property.
		sortedDimensionKeys = Object.keys(extractedDimensions).sort();
	}
	// Return a wrapper component that lays out its children using a generated
	// grid and grid items. Individual grid items are used to wrap the actual
	// child elements.
	const component = (props) => {
		let children = props.children;
		if (extractedDimensions) {
			const numberOfChildren = React.Children.count(props.children);
			if (numberOfChildren > sortedDimensionKeys.length) {
				throw `There are more children than defined areas for the grid.`;
			} else if (numberOfChildren < sortedDimensionKeys.length) {
				throw `There are fewer children than defined areas for the grid.`;
			}
			// Use cloneElement with an automatically assigned postion: absolute
			// style parameter. This allows positioning attributes of the child
			// element to behave as expected.
			children = React.Children.map(props.children, (child, index) => {
				let dimension =
					(child.props.item && extractedDimensions[child.props.item]) ||
					extractedDimensions[sortedDimensionKeys[index]];
				return (
					<GridCell
						top={dimension.top}
						bottom={dimension.bottom}
						left={dimension.left}
						right={dimension.right}>
						{React.cloneElement(child, {
							style: {...child.style || {}, position: 'absolute'}
						})}
					</GridCell>
				)
			});
		}
		return (
			<GridDiv
				rowHeaders={rowHeaders}
				colHeaders={colHeaders}
				className={props.className}>
				{children}
			</GridDiv>
		);
	};
	// Add properties for unit testing purposes.
	component.rowHeaders = rowHeaders;
	component.colHeaders = colHeaders;
	component.extractedDimensions = extractedDimensions;
	return component;
};
export default GridComponentFactory;