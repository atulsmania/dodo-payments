import { ArrowDownLeft, ArrowUpRight } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Metric, MetricType } from '../../../constants/metrics';

type CardProps = {
  metric: Metric;
  index: number;
};

const Card = ({ metric, index }: CardProps) => {
  const { percentage, title, value, type } = metric;
  const ArrowIcon = {
    [MetricType.INCOME]: ArrowUpRight,
    [MetricType.EXPENSE]: ArrowDownLeft,
  }[type];

  const color = index % 2 === 0 ? 'bg-[#F9FEF0]' : 'bg-[#DBE6F2]';
  return (
    <div
      className={cn(
        'flex flex-col md:min-w-52 gap-2 p-6 rounded-2xl shadow-sm',
        color,
      )}
    >
      <span className="text-xs md:text-sm semibold">{title}</span>
      <div className="flex justify-between">
        <span className="text-xl font-semibold md:text-2xl">{value}</span>
        <div className="flex items-center gap-1">
          <span className="text-xs text-black/40">{percentage}</span>
          <ArrowIcon size={16} strokeWidth={1} />
        </div>
      </div>
    </div>
  );
};

export default Card;
