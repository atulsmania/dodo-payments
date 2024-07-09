import BasicBarChart from './Bars';
import BasicLineChart from './LInes';
import BasicPie from './Pie';

const Charts = () => {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-wrap justify-between gap-6 overflow-hidden md:flex-nowrap">
        <BasicLineChart title="Revenue" />
        <BasicLineChart title="Number of Transactions" />
      </div>
      <div className="flex flex-wrap justify-between gap-6 overflow-hidden md:flex-nowrap">
        <BasicBarChart />
        <BasicPie />
      </div>
    </div>
  );
};

export default Charts;
