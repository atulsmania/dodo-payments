export enum MetricType {
  INCOME = 'income',
  EXPENSE = 'expense',
}

export type Metric = {
  title: string;
  value: string;
  percentage: string;
  type: MetricType;
};

export const CurrentMetrics = [
  {
    title: 'Revenue',
    value: '$24M',
    percentage: '+11.01%',
    type: MetricType.INCOME,
  },
  {
    title: 'Transaction',
    value: '14K',
    percentage: '-0.03%',
    type: MetricType.EXPENSE,
  },
  {
    title: 'Average transaction',
    value: '$2K',
    percentage: '+15.03%',
    type: MetricType.INCOME,
  },
  {
    title: 'Refunds',
    value: '1K',
    percentage: '+6.08%',
    type: MetricType.INCOME,
  },
] satisfies Metric[];
