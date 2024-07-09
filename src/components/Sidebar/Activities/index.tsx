import {
  type Activity,
  CurrentActivities,
} from '../../../constants/activities';

type ActivityProps = {
  activity: Activity;
};

const Activity = ({ activity }: ActivityProps) => {
  const { title, time, img } = activity;

  return (
    <div className="flex gap-4">
      <img className="w-10 rounded-full aspect-square" src={img} alt="avatar" />
      <div className="flex flex-col">
        <span title={title} className="text-sm line-clamp-1">
          {title}
        </span>
        <span className="text-sm text-black/40">{time}</span>
      </div>
    </div>
  );
};

const Activities = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-sm font-semibold">Activities</h1>
      <div className="flex flex-col gap-4">
        {CurrentActivities.map((activity, index) => (
          <Activity key={index} activity={activity} />
        ))}
      </div>
    </div>
  );
};

export default Activities;
