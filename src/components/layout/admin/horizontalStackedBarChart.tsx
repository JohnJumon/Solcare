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
    indexAxis: 'y' as const,
    scales: {
        x: {
            stacked: true,
        },
        y: {
            stacked: true,
            ticks: {
                display: false
            }
        },
    },
    responsive: false,
    plugins: {
        legend: {
            display: false
        },
    },
    maintainAspectRatio: false,
};


const HorizontalStackedBarChart = (props: any) => {
    return (<Bar options={options}
        data={{
            labels: [props.title], datasets: [
                {
                    label: 'Hari Ini',
                    data: [100],
                },
                {
                    label: 'Semalam',
                    data: [200],
                },
            ],
        }} height={50}/>)
};

export default HorizontalStackedBarChart;