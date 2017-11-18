# easy-grid for React
***This is not an official Google product.***

easy-grid is a React component factory that provides a declarative layout mechanism for utilizing [CSS grid layouts](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout). It uses ASCII layout descriptions to generate layout components that arrange child components according to the defined grid.

<table>
	<thead>
		<td>
			<b>Code</b>
		</td>
		<td>
			<b>Rendered</b>
		</td>
	</thead>
	<tr>
		<td>
			<img width="289" alt="code-one" src="https://user-images.githubusercontent.com/208079/32584263-4ad479b2-c4ac-11e7-9308-03a4f26cdca9.png">
		</td>
		<td>
			<img width="306" alt="render-one" src="https://user-images.githubusercontent.com/208079/32584270-4ee201b4-c4ac-11e7-94d2-6e9899e4ea99.png">
		</td>
	</tr>
	<tr>
		<td>
			<img width="381" alt="code-two" src="https://user-images.githubusercontent.com/208079/32584274-5123d4ac-c4ac-11e7-85c0-66ce58c5ef01.png">
		</td>
		<td>
			<img width="307" alt="render-two" src="https://user-images.githubusercontent.com/208079/32584277-539e76ec-c4ac-11e7-9f1a-067b50a7d71f.png">
		</td>
	</tr>
</table>

## Getting Started

### Prerequisites

Make sure you have the [npm package manager](https://www.npmjs.com/get-npm) installed on your development machine.

### Installing

Clone the git repository to a local directory:

```
git clone git@github.com:google/easy-grid.git
cd easy-grid
```

Run `npm install` and then run the examples:

```
npm install
npm run examples
```

This will start a browser pointing at 'index.html' in the [examples subdirectory](https://github.com/google/easy-grid/tree/master/examples).

To play around with the library, make changes to the [examples.js](https://github.com/google/easy-grid/blob/master/examples/examples.js) React app and re-run `npm run examples`.

## Running the tests

```
npm test
```

## Deployment

To use the library in a production environment, simply run:

```
npm install --save easy-grid
```

## Importing
easy-grid exports a `grid` factory method:

```javascript
import grid from 'easy-grid';
```

## Usage
The exported `grid` method is used to create layout components based on an ASCII representations of the desired layout grid. For instance:

~~~javascript
const TwoByTwoLayout = grid`
    1fr   1fr
1fr A     A,B
1fr A     A,B
`
~~~
defines a React component, TwoByTwoLayout, that will distribute it's child elements along a two by two grid. element "A" will take up the entire grid, while element "B" will overlap element "A" and take up the right half of the grid. The two rows will each have the same height, namely half the height of the parent element. Likewise, the two columns will each have the same width, or half the width of the parent component.

### Grid Definition Syntax
Grids are defined by a back-tick ``` ` ``` string. Spaces and new-lines are non-trivial as they are used to parse the grid definition from the string.

Row and column header definitions use the syntax defined for [grid-template-rows](https://developer.mozilla.org/en-US/docs/Web/CSS/grid-template-rows):

 **Type** | **Syntax** | **Usage** |
----------|:----------:|-----------|
*Flex* | *n*fr | Using a [flex-value](https://developer.mozilla.org/en-US/docs/Web/CSS/flex_value) allows rows and columns to be defined by distributing space proportionally between them. |
*Percentage* | *n*% | [Percentage values](https://developer.mozilla.org/en-US/docs/Web/CSS/percentage) define the size of a column or row relative to its parent container. |
*Length* | *n*px, *n*em, etc. | All standard [length values](https://developer.mozilla.org/en-US/docs/Web/CSS/length) can be used to give rows or columns fixed heights and widths respectively. |


#### Column Headers
The first line of the string is a space-delimited definition of **column headers**. A component can be defined by only using column headers. For instance,

```javascript
const ColumnsOnly = grid`
	1fr 2fr 1fr
`
```
defines a `ColumnsOnly` component that will arrange its children in 3 columns. The first and last column will be half the size of the middle column.

#### Row Headers
Each line after the first line defines a new row in the grid. The first element in the space-deilimited row definition defines the height of that row, and is called the **row header**. However, similar to column-only grid definitions, row-only grid defintions can be created by only specifying row headers on each new line. For instance,

```javascript
const RowsOnly = grid`
	10px
	50px
	100px
`
```
defines a `RowsOnly` component that will give each of its three child components heights of 10 pixels, 50 pixels and 100 pixels respectively.

#### Grid Areas
Using a combination of column headers and row headers, a grid is defined. The cells of the grid should be used to define **grid areas**. Grid areas are continuous square areas defined by an arbitrary identifier being placed in a **grid cell**. For example, the following grid defines two grid areas, one denoted by "A" and one denoted by "B".

```javascript
const SomeGrid = grid`
      1fr    2fr    3fr
1fr   A      A,B    A,B
2fr   A      A,B    A,B
`
```
Grid area defintions use commas to separate multiple overlapping grid areas identifiers in a given grid cell.

##### Overlap
Grid areas can overlap, as seen in the example above. This overlap defines a z-ordering. When rendered, an area will be drawn on top of any area it overlaps. **Grid areas are alphabetically ordered. Later areas will be rendered on top of earlier ones.** A grid cell containing grid area defintions `A,D,C` will be ordered as `A,C,D` and will render area `D` on top of area `C` on top of area `A`.

##### Empty Cells
Empty grid cells can be denoted by `..`. For instance,

```javascript
const SpacerGrid = grid`
       25%   50%   25%
25%    ..    ..    ..
50%    ..    A     ..
25%    ..    ..    ..
`
```
defines a `SpacerGrid` component that has a single grid area with a 10px border around it.

#### Grid Component
As mentioned above, the result of calling the `grid` factory method with a grid definition is a React component. The returned component has the following expectations:

* The number of child components should exactly equal the number of defined **grid areas**.
* The child components should be ordered according to the alphabeticall ordering of **grid area** identifiers or should use the *item* property.


```javascript
const Simple = grid`
      1fr    1fr
1fr   A      A
1fr   B      B
`

/** Error: not enough children */
<Simple>
	<Child/>
</Simple>

/** The first child is grid area "A", the second is grid area "B" */
<Simple>
	<ChildA/>
	<ChildB/>
</Simple>

/** The second child is grid area "A", the first is grid area "B" */
<Simple>
	<Child item="B"/>
	<Child item="A"/>
</Simple>
```

Grid components can also be styled via the `className` property. If your project is using [styled components](https://www.styled-components.com/), the returned grid component can also be styled using the `styled` method:

```javascript
const Simple = grid`
		1fr		1fr
1fr		A		A
1fr		B		B
`

const StyledSimple = styled(Simple)`
	background-color: red;
`
```

## Built With

* [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
* [Styled Components](https://www.styled-components.com/) - An awesome framework for styled React elements and components.

## Contributing

Please read [CONTRIBUTING.md](https://gist.github.com/PurpleBooth/b24679402957c63ec426) for details on our code of conduct, and the process for submitting pull requests to us.

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* A big shout-out to [styled components](https://www.styled-components.com/) for exposing the usefulness of [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals).

