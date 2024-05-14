
import { LineChart as LChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';
const LineChart = () => {

    const studentData = [
        { id: 1, name: 'John Doe', math: 78, physics: 78, chemistry: 70 },
        { id: 2, name: 'Jane Smith', math: 85, physics: 85, chemistry: 82 },
        { id: 3, name: 'Alice Johnson', math: 72, physics: 72, chemistry: 65 },
        { id: 4, name: 'Bob Brown', math: 90, physics: 90, chemistry: 88 },
        { id: 5, name: 'Eva Martinez', math: 68, physics: 68, chemistry: 75 },
        { id: 6, name: 'Michael Lee', math: 93, physics: 93, chemistry: 85 },
        { id: 7, name: 'Sophia Wilson', math: 80, physics: 80, chemistry: 72 },
        { id: 8, name: 'Oliver Garcia', math: 75, physics: 75, chemistry: 78 },
        { id: 9, name: 'Emily Taylor', math: 87, physics: 87, chemistry: 92 },
        { id: 10, name: 'Daniel Rodriguez', math: 79, physics: 79, chemistry: 76 }
      ];

    return (
        <div>
            <LChart width={500} height={400} data={studentData}>
                <Line dataKey={'math'} stroke="yellow"></Line>
                <Line dataKey={'physics'} stroke='red' activeDot={{ r: 8 }} ></Line>
                <CartesianGrid strokeDasharray="3 3" />
                <Tooltip />
                <XAxis dataKey="name" />
                <YAxis />
            </LChart>
        </div>
    );
};

export default LineChart;