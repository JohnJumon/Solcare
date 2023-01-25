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
import { Pie } from 'react-chartjs-2';

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

const labels = ['Sukses', 'Gagal', 'Pending'];

const data = {
    labels,
    datasets: [
        {
            label: 'Total Campaign',
            data: [100, 200, 300],
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            align: 'start',
        },
    },
};

const PieChart = () => {
    return (<Pie options={options} data={data} />);
};  

export default PieChart;