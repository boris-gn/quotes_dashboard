import { AreaChart, Area, ResponsiveContainer } from 'recharts';

const data = [
	{ name: 'Jan', value: 30 },
	{ name: 'Feb', value: 50 },
	{ name: 'Mar', value: 20 },
	{ name: 'Apr', value: 80 },
	{ name: 'May', value: 40 },
];

const QuotesChart: React.FC = () => {
	return (
		<ResponsiveContainer width="100%" height="100%">
			<AreaChart data={data}>
				<defs>
					<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="#8884d8"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="#8884d8"
							stopOpacity={0}
						/>
					</linearGradient>
					<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
						<stop
							offset="5%"
							stopColor="#82ca9d"
							stopOpacity={0.8}
						/>
						<stop
							offset="95%"
							stopColor="#82ca9d"
							stopOpacity={0}
						/>
					</linearGradient>
				</defs>
				<Area
					type="monotone"
					dataKey="value"
					stroke="#8884d8"
					strokeWidth={2}
					fillOpacity={1}
					fill="url(#colorUv)"
				/>
			</AreaChart>
		</ResponsiveContainer>
	);
};

export default QuotesChart;
