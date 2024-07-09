import { ChevronDown } from 'lucide-react';
import { CurrentMetrics } from '../../constants/metrics';
import Card from './Card';

const Metrics = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center">
        <span className="px-2 py-1 text-sm font-semibold">Today</span>
        <span>
          <ChevronDown size={16} strokeWidth={1} />
        </span>
      </div>
      <div className="grid flex-wrap justify-between grid-cols-2 gap-3 md:flex">
        {CurrentMetrics.map((metric, index) => (
          <Card key={index} metric={metric} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Metrics;
