import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchChart } from '../features/chart/chartSlice';
import { Loader } from '../components';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

const PriceHistoryChart = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    const { chart_loading, chart_days, chart_prices } = useSelector((store) => store.chart);

    useEffect(() => {
        dispatch(fetchChart(`https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=eur&days=${chart_days}&interval=daily`));
    }, []);

    if (chart_loading) {
        return (
            <div className='price-history-chart'>
                <Loader />
            </div>
        );
    }

    const chartData = chart_prices.map((value) => ({ x: value[0], y: value[1].toFixed(2) }));

    console.log(chartData);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                display: false,
            },
        },
    };

    const data = {
        labels: chartData.map((value) => moment(value.x).format('MMM D')),
        datasets: [
            {
                fill: true,
                label: `${id.charAt(0).toUpperCase() + id.slice(1)} Price Chart`,
                data: chartData.map((value) => value.y),
                borderColor: '#ff9332',
                backgroundColor: '#111',
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
