import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Button } from "react-bootstrap";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const SingleCoinChart = ({ days, chartDays, setDay }) => {
  const selectDayToDisplay = [
    {
      label: "1 day ago",
      value: 1,
    },
    {
      label: "6 years ago",
      value: 2190,
    },
    {
      label: "14 days ago ",
      value: 14,
    },
    {
      label: "1 months ago",
      value: 30,
    },
    {
      label: "2 months ago",
      value: 60,
    },
  ];
  const options = {
    responsive: true,
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  const data = {
    labels: chartDays.map((coin) => {
      const date = new Date(coin[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} :${date.getMinutes()}PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleString();
    }),
    datasets: [
      {
        fill: true,
        label: `Price ${days} Days`,
        data: chartDays.map((value) => ({
          x: value[0],
          y: value[1].toFixed(2),
        })),
        borderColor: "rgba(93,63,211,0.75)",
        backgroundColor: "rgba(93,63,211,0.75)",
        borderWidth: 2,
      },
    ],
  };

  return (
    <div>
      <Line options={options} data={data} />
      <div>
        {selectDayToDisplay.map((day) => (
          <Button
            bsClass="custom-button"
            style={{ marginTop: 20 }}
            onClick={() => setDay(day.value)}
            key={day.value}
          >
            {day.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default SingleCoinChart;
