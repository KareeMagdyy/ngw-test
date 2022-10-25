import { useContext } from "react";
import { QuizContext } from "../../helpers/Contexts";
import { Doughnut } from "react-chartjs-2";

function DoughnutChart() {
  const { rankState } = useContext(QuizContext);

  const dataLabels = [...new Set(rankState?.sortedScores)];
  const data = {
    labels: dataLabels.splice(1, dataLabels.length - 1),
    datasets: [
      {
        label: "Your Contribution",
        data: rankState?.eachScoreCount,
        backgroundColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(255, 205, 86, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(229, 29, 116, 1)",
          "rgba(120, 181, 23, 1)",
        ],
      },
    ],
  };

  const options = {
    title: {
      display: true,
      text: "Doughnut Chart",
    },
  };

  return <Doughnut data={data} options={options} />;
}

export default DoughnutChart;
