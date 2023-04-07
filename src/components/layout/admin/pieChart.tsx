import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
    ArcElement,
    Colors,
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

// const labels = ['Sukses', 'Gagal', 'Pending'];

// const data = {
//     labels,
//     datasets: [
//         {
//             label: 'Total Campaign',
//             data: [100, 200, 300],
//         },
//     ],
// };

const options = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom' as const,
            align: 'start',
        },
    },
};

const PieChart = (props: any) => {
    return (
        <Pie
            options={options}
            data={{
                labels: props.title,
                datasets: [
                    {
                        label: props.label,
                        data: props.data,
                        backgroundColor: [
                            'rgb(34, 197, 94)',
                            'rgb(54, 162, 235)',
                            'rgb(255, 99, 132)',
                        ],
                    },
                ],
            }}
        />
    );
};

export default PieChart;
