import { PieChart } from '@mui/x-charts/PieChart';

export default function BasicPie() {
  return (
    <div className="bg-[#F7F9FB] py-6 rounded-2xl w-full text-sm shadow-sm">
      <span className="px-6 font-semibold">
        % Transaction Volume by Location
      </span>
      <PieChart
        series={[
          {
            innerRadius: 60,
            outerRadius: 80,
            paddingAngle: 0,
            data: [
              { id: 0, value: 10, label: 'United States', color: '#526062' },
              { id: 1, value: 15, label: 'Canada', color: '#EF8E5B' },
              { id: 2, value: 20, label: 'Europe', color: '#0B6468' },
              { id: 3, value: 12, label: 'Other', color: '#C5FA58' },
            ],
          },
        ]}
        height={244}
      />
    </div>
  );
}
