import { Bug, Radio, Sparkles, UserRoundPlus } from 'lucide-react';
import {
  type Notification,
  NotificationType,
  CurrentNotifications,
} from '../../../constants/notifications';
import { cn } from '../../../lib/utils';

type NotificationProps = {
  notification: Notification;
  index: number;
};

const Notification = ({ notification, index }: NotificationProps) => {
  const { title, time, type } = notification;

  const Icon = {
    [NotificationType.BUG]: Bug,
    [NotificationType.FEATURE]: Sparkles,
    [NotificationType.NEW_JOIN]: UserRoundPlus,
    [NotificationType.BROADCAST]: Radio,
  }[type];

  return (
    <div className="flex gap-4">
      <span
        className={cn('p-2 bg-[#E3F5FF] rounded-lg', {
          'bg-[#E5ECF6]': index % 2 === 0,
        })}
      >
        <Icon size={24} strokeWidth={1} />
      </span>
      <div className="flex flex-col">
        <span title={title} className="text-sm line-clamp-1">
          {title}
        </span>
        <span className="text-sm text-black/40">{time}</span>
      </div>
    </div>
  );
};

const Notifications = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-sm font-semibold">Notifications</h1>
      <div className="flex flex-col gap-4">
        {CurrentNotifications.map((notification, index) => (
          <Notification key={index} index={index} notification={notification} />
        ))}
      </div>
    </div>
  );
};

export default Notifications;
