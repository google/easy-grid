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
			<img src="https://lh3.googleusercontent.com/NPhI1FYE7JLWESagtFHPKfVm6q4_Wu8iibh5ZGgrUtd0NOCTJVxIPKqCOrePTFhl-G3Moq8fbM35osrGPDFyqtrjJ9CZ44cmZU1FOKunPfPXL__4RB524xHsmQfk077vvGUvFw9-wK86PjWLzdD2svVQKJCr2JJGAkiErM1Kjo9KPplpL2NwNJzwZcgzAdFKSFYaJYMIS5rZYrtzjbM6QunXMNxCYqIpiWoUc_2zzTHnO81OlBgDRyysBhOiAQOmOHIDkHOsRbufpz98EYPBHXMMHxYef8KX57jR2UkV91mwFJf6dhGspHZn47bFR1QKnXTPDJLc0XzueoNDQkg9tf6-CEdrHgH9SOvIPR-jXLKVBLNi237i7oZp3tWmG3UU4Vh6e8zkmHs7URqrgCj4eeOr2qUUx-fujpyUVBicuZigrGEAo3oKy_bX-swAhhk8s6sxeGvegVPOlljjueZIElHtVCLpvmtlAMbC6Dxf4Il8yceZI09PIjuV1H8tuMZcyT9xz6NVffU2Nj4daLwQ7vW12knANv0VLGEu4Ahx4xAHZJ-CPHiK1Ntg11L88W3ErsIq1LHjvAIoudSrnck8l63iaUNoffS4lgkAGB61xQ=w578-h870-no" width="280" height="400">
		</td>
		<td>
			<img src="https://lh3.googleusercontent.com/3Qkm2UST1c_i6lwXthBx-4xv6RcW2SBJcLM20eUA505BAornaUwijQbgUU6jDcLFspUXVzYWYpCT3X3Ewa9eKvxS34loytot2QiAqLzg92HMPeGlQyXjc6VO0iwGWG2Az5o3tltlTDW3uXwcqzKvqLwmMmnskiz09VGZHfAp0zRSLuUn0RoUkxm0LGWg4Y7o7izG7S8n-O_ULB83kJZH1nrD7waogOJIGteo79Dpqyi034XLFiwb2DPiQi9sRthPMQXelVdJ8ZpyYq4M1GUoqmadTEYkK6OD_rO3kzuOnrOt9ACLi8VN2x1RM702ZxUG0LV1CFZpm07ISUY6B3ZHFxqHnaV41Jhgpf4SWgiPc219c7LAKgMvgQFa-quqMVkeE5k0oJOANpCBQWoN5sY2CkJqqC084KCiX-ZiWhncICBwsAR-k28d_YMWnBgoMokBLE2wipjRoBvTyK5-yYiiYfJvDA4BiZMEj6bwTMsI8D2N1aHSYk6TyY87DmUfSAsPyJc-441bfmxDiQPJhb6lKFjZdkPZoGtqlvwFsFOLuK40ByH8B70weiMBUOoHLC0hu4QHRPuJwojhxPM1eyXqhKZDHKhHOGRzSyacUPRQqA=w612-h610-no" width="300" height="300">
		</td>
	</tr>
	<tr>
		<td>
			<img src="https://lh3.googleusercontent.com/9yJqabfm88GYBNONsdRSjn-3wNeu5Jy5uK0I5Q2ZJ1MnmpJD4bSkaVcUjAAsMjVJ7uuKAQvEbn2FfZn5HRolNcXDVvXiOidEb-XV8LotBTLqL_U8vqaadSZpHLgPlc63FXlpJq1oiuIYy37Jwtf6RDhhCkS7NUiM5Mhe2_kGNVQXvsGnP5Ac90e4ZxH3pfnXOnDkYq0_EskfySV-506EW62qXid-3SBassE03rtArwCvbboicXccPqSObuoGpwap8apEEmg0BOdkMj74y-MRWUqj-QS-7R1cpxLr9OJzSLMl2t6IZ1TQijPfq4AGF2TeQWFPxF6MAL6auiYYambyfsRcJ4LG1P7vrZLTMWLYuFtoc29WQDgglTbai6TnZVT6QADF3cMrjqCvG_WbME-yMJgB3oxfw3mQjEPbxgAt632VuF5w1mJTynHygKte3hTPzuB0Qr3t6WEh4N-kssK3YfepGVXuA71p5ooDzoGISMJOwG0ffil3WPkwM5_lC-0j6ugNm9BvIEBbTGRTAgzn6B6CYbs_qoropLRWDElkIMAR0kT6vwBJaSAPqRf9Kcjg45qEyea0fQha9-juXbNQ53aHhwOwxwwOE31Ux_6ADA=w762-h1302-no" width="350" height="550">
		</td>
		<td>
			<img src="https://lh3.googleusercontent.com/_HMNqu9GdQVJtkpwuDpanUVZPAcLiazh8S-8rZouqtEKmmbzSbfyVZsdVniTyGo6tkH_P9qQTjo-ik7tHR9DxnkwZRYotZyiHBQzaVROabBWRvmK6ggBPbyqWZt9T1mavN_4zVKH5huSBX5hITQvAspiM0zPZYYs-KrWS4QFMCO6wd8tEFzVRzHRFLqZxAtSGUL4vwE4vUv7tt42_MFHo8j5DC7MaTtYgI7U5rbLwAriIjUzqJI8FKPRPJ43H6poLQNCaz6PJYYBhkoj3Nlm6fi2qFeeDbHxcw7eMQjPa-jdVPzGd1xPPKr8IFS0wSKsBKGyBCg1WaxL5S18OO_wZjiSeNdDJdCvaz4mLIKbCUhuePu2ff4K9KAahwiZlnued8wANA3o4lL_-uiKT6NKa7DJpmYX3njGQaonbIOGaneHR81CDuAUh2AFkzjrKjz_YX3PU8GVGL67mGUaxRYNAqkrOgew5MxDI_Ywa_SDyShUB-lMXDQnYTKqRKEYv58nD0unw47cel_EDuj94KGrSBAcXTvu4OfGyESRwBIRfoFy-TaCNOZu3Z4S3XiroexoDawOdI-XuYuTyadjJbqiLFrWmucVkSVkAX1l8Q5-SQ=w614-h230-no" width="300" height="100">
		</td>
	</tr>
</table>

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Give examples
```

### Installing

A step by step series of examples that tell you have to get a development env running

Say what the step will be

```
npm install --save easy-grid
```

And repeat

```
until finished
```

End with an example of getting some data out of the system or using it for a little demo

## Running the tests

Explain how to run the automated tests for this system

### Break down into end to end tests

Explain what these tests test and why

```
Give an example
```

### And coding style tests

Explain what these tests test and why

```
Give an example
```

## Deployment

Add additional notes about how to deploy this on a live system

## Importing
easy-grid exports a `grid` factory method:

```javascript
import grid from 'easy-grid';
```

## Usage
The exported `grid` method is used to create layout components based on an ASCII representations of the desired layout grid. For instance:

~~~javascript
const TwoByTwoLayout = grid`
	1fr		1fr
1fr A		A,B
1fr A		A,B
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
		1fr		2fr		3fr
1fr 	A		A,B		A,B
2fr		A		A,B		A,B
`
```
Grid area defintions use commas to separate multiple overlapping grid areas identifiers in a given grid cell.

##### Overlap
Grid areas can overlap, as seen in the example above. This overlap defines a z-ordering. When rendered, an area will be drawn on top of any area it overlaps. **Grid areas are alphabetically ordered. Later areas will be rendered on top of earlier ones.** A grid cell containing grid area defintions `A,D,C` will be ordered as `A,C,D` and will render area `D` on top of area `C` on top of area `A`.

##### Empty Cells
Empty grid cells can be denoted by `..`. For instance,

```javascript
const SpacerGrid = grid`
		10px	50%		10px
10px	..		..		..
50%		..		A		..
10px	..		..		..
`
```
defines a `SpacerGrid` component that has a single grid area with a 10px border around it.

#### Grid Component
As mentioned above, the result of calling the `grid` factory method with a grid definition is a React component. The returned component has the following expectations:

* The number of child components should exactly equal the number of defined **grid areas**.
* The child components should be ordered according to the alphabeticall ordering of **grid area** identifiers or should use the *item* property.


```javascript
const Simple = grid`
		1fr		1fr
1fr		A		A
1fr		B		B
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

## Versioning

We use [SemVer](http://semver.org/) for versioning. For the versions available, see the [tags on this repository](https://github.com/your/project/tags).

## License

This project is licensed under the Apache 2 License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

* A big shout-out to [styled components](https://www.styled-components.com/) for exposing the usefulness of [tagged template literals](https://www.styled-components.com/docs/advanced#tagged-template-literals).

