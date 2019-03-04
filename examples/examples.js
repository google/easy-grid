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
import ReactDOM from 'react-dom';
import styled from 'styled-components';

import grid from '../src/grid';

const SquareFill = styled.div`
	width: 100%;
	height: 100%;
	opacity: 0.3;
	background-color: ${props => props.color || 'red'};
`

const Example = styled.div`
	width: 300px;
	height: 300px;
	margin-top: 5px;
	margin-bottom: 5px;
`

const GridOne = styled(grid`
	1fr 50px 2fr
`)`
	width: 300px;
	height: 300px;
`
const ExampleOne = () => (
	<Example>
		<GridOne>
			<SquareFill color="red"/>
			<SquareFill color="green"/>
			<SquareFill color="blue"/>
		</GridOne>
	</Example>
);

const GridTwo = styled(grid`
	1fr
	50px
	2fr
`)`
	height: 300px;
	width: 300px;
`
const ExampleTwo = () => (
	<Example>
		<GridTwo>
			<SquareFill color="red"/>
			<SquareFill color="green"/>
			<SquareFill color="blue"/>
		</GridTwo>
	</Example>
);

const PlaidGrid = styled(grid`
			1fr		1fr 	1fr 	1fr 	1fr
	1fr A,H		A,I		A,J		A,K		A,L
	1fr B,H		B,I		B,J		B,K		B,L
	1fr C,H		C,I		C,J		C,K		C,L
	1fr D,H		D,I		D,J		D,K		D,L
	1fr E,H		E,I		E,J		E,K		E,L
`)`
	height: 300px;
	width: 300px;
`

const Plaid = () => (
	<Example>
		<PlaidGrid>
			<SquareFill color="red"/>
			<SquareFill color="blue"/>
			<SquareFill color="red"/>
			<SquareFill color="blue"/>
			<SquareFill color="red"/>
			<SquareFill color="blue"/>
			<SquareFill color="red"/>
			<SquareFill color="blue"/>
			<SquareFill color="red"/>
			<SquareFill color="blue"/>
		</PlaidGrid>
	</Example>
);

const Badge = styled.div`
	width: 100%;
	height: 100%;
	border-radius: 50%;
	background-color: red;
	color: white;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto', sans-serif;
`

const Button = styled.div`
	width: 100%;
	height: 100%;
	border: 1px solid black;
	border-radius: 10px;
	color: black;
	display: flex;
	justify-content: center;
	align-items: center;
	font-family: 'Roboto', sans-serif;
`

const ButtonGrid = styled(grid`
				270px 10px 10px 10px
	10px   ..    B     B   B
	10px   A     A,B   A,B B
	10px   A     A,B   A,B B
	70px   A     A     A   ..
`)`
	height: 300px;
	width: 300px;
`

const BadgeButton = () => (
	<Example>
		<ButtonGrid>
			<Button item="A">Some Button</Button>
			<Badge item="B">1</Badge>
		</ButtonGrid>
	</Example>
)

const SpacerGrid = styled(grid`
	     25% 50% 25%
	25%  ..  ..  ..
	50%  ..  A   ..
	25%  ..  ..  ..
`)`
	height: 300px;
	width: 300px;
	border: 1px solid black;
`

const Spacer = () => (
	<Example>
		<SpacerGrid>
			<SquareFill color="red"/>
		</SpacerGrid>
	</Example>
)

ReactDOM.render(
  <ExampleOne />,
  document.getElementById('exampleOne')
);

ReactDOM.render(
  <ExampleTwo />,
  document.getElementById('exampleTwo')
);

ReactDOM.render(
  <Plaid />,
  document.getElementById('plaid')
);

ReactDOM.render(
  <BadgeButton />,
  document.getElementById('badgeButton')
);

ReactDOM.render(
  <Spacer />,
  document.getElementById('spacer')
);