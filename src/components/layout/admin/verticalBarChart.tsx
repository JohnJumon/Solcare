import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Colors
} from 'chart.js';
import { Bar, Pie } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
    Colors
);

ChartJS.defaults.scale.grid.display = false;

const options = {
    scales: {
        x: [{
            grid: {
                display: false
            }
        }],
        y: [{
            grid: {
                display: false
            }
        }]
    },
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
        },
    },
    maintainAspectRatio: false,
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

const data = {
    labels,
    datasets: [
        {
            label: 'Total Donasi',
            data: [100, 200, 300, 400, 500, 600, 700],
        },
    ],
};

const VerticalBarChart = () => {
    return <Bar height={200} options={options} data={data} />
};

export default VerticalBarChart;