import { BarChart } from '@mui/x-charts';

const BasicBarChart = () => {
  return (
    <div className="bg-[#F7F9FB] py-6 rounded-2xl w-full text-sm shadow-sm">
      <span className="px-6 font-semibold">Revenue</span>
      <BarChart
        xAxis={[
          {
            colorMap: {
              type: 'ordinal',
              colors: ['#526062', '#EF8E5B', '#0B6468', '#526062'],
            },
            scaleType: 'band',
            data: ['Youtube', 'Twitter', 'Reddit', 'IndieHacker'],
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
        grid={{ horizontal: true }}
        series={[{ data: [20, 18, 25, 12] }]}
        height={244}
      />
    </div>
  );
};

export default BasicBarChart;
