import React, { PureComponent } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const StatisticsComponent = () => {
    const data = [
        {
            name: 'One',
            tm: 60,
            mm: 60,
        },
        {
            name: 'Two',
            tm: 60,
            mm: 59,
        },
        {
            name: 'Three',
            tm: 60,
            mm: 60,
        },
        {
            name: 'Four',
            tm: 60,
            mm: 55,
        },
        {
            name: 'Five',
            tm: 60,
            mm: 57,
        },
        {
            name: 'Six',
            tm: 60,
            mm: 41,
        },
        {
            name: 'Seven',
            tm: 60,
            mm: 60,
        },
        {
            name: 'Eight',
            tm: 60,
            mm: 60,
        },
    ];

    return (
        <div className="bg-white dark:bg-gray-800">
            <div style={{ width: '100%', height: 300, paddingTop: '50px' }}>
                <ResponsiveContainer>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="mm" stroke="#8884d8" fill="#8884d8" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default StatisticsComponent;