import React from 'react';
import {
	BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from 'recharts';

const Diagram = ({data}) => {
	
	return (
		<>
			<BarChart
				width={300}
				height={300}
				data={data}
				margin={{
					top: 20,
					right: 30,
					left: 20,
					bottom: 5,
				}}
			>
				<CartesianGrid strokeDasharray="3 3" />
				<XAxis dataKey="name" />
				<YAxis />
				<Tooltip />
				<Legend />
				<Bar dataKey="right" stackId="a" fill="#8884d8" />
				<Bar dataKey="wrong" stackId="a" fill="#82ca9d" />
			</BarChart>
		</>
	);
};

export default Diagram;