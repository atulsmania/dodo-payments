export enum NotificationType {
  BUG = 'bug',
  FEATURE = 'feature',
  NEW_JOIN = 'new_join',
  BROADCAST = 'broadcast',
}

export type Notification = {
  title: string;
  time: string;
  type: NotificationType;
};

export const CurrentNotifications = [
  {
    title: 'You have an issue that needs to be fixed.',
    time: 'Just Now',
    type: NotificationType.BUG,
  },
  {
    title: 'New team member joined',
    time: '5 minutes ago',
    type: NotificationType.NEW_JOIN,
  },
  {
    title: 'New product feature available',
    time: '12 hours ago',
    type: NotificationType.FEATURE,
  },
  {
    title: 'Andi Lane subscribed to you',
    time: 'Today, 11:59 AM',
    type: NotificationType.BROADCAST,
  },
] satisfies Notification[];
