import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchChart } from '../features/chart/chartSlice';
import { Loader } from '../components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const PriceHistoryChart = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { chart_loading, chart_days, chart_prices } = useSelector((store) => store.chart);

    useEffect(() => {
        dispatch(fetchChart(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${chart_days}`));
    }, []);

    if (chart_loading) {
        return (
            <div className='price-history-chart'>
                <Loader />
            </div>
        );
    }

    const chartData = chart_prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

    const options = {
        responsive: true,
    };

    const data = {
        labels: ['1', '2'],
        datasets: [
            {
                fill: true,
                label: 'Bitcoin Price Chart',
                data: ['10', '20'],
                borderColor: '#ff9332',
                backgroundColor: '#ff9332',
            },
        ],
    };

    return (
        <div className='price-history-chart'>
            <Line options={options} data={data} />
        </div>
    );
};

export default PriceHistoryChart;
