import { LineChart } from '@mui/x-charts';

const BasicLineChart = ({ title }: { title: string }) => {
  return (
    <div className="bg-[#F7F9FB] py-6 rounded-2xl w-full text-sm shadow-sm">
      <span className="px-6 font-semibold">{title}</span>
      <LineChart
        colors={['#526062']}
        xAxis={[
          {
            data: [1, 2, 3, 5, 8, 10],
            tickLabelStyle: { fill: 'black/40' },
            disableTicks: true,
          },
        ]}
        yAxis={[
          {
            tickLabelStyle: { fill: 'black/40' },
            disableTicks: true,
            disableLine: true,
          },
        ]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        grid={{ horizontal: true }}
        height={244}
      />
    </div>
  );
};

export default BasicLineChart;
