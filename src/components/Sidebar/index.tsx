import Activities from './Activities';
import Notifications from './Notifications';
import { useAppContext } from '../../context/AppContext/useAppContext';
import { cn } from '../../lib/utils';

const Sidebar = () => {
  const { sidebarIsOpen } = useAppContext();

  return (
    <div
      className={cn(
        'flex-col gap-12 px-6 max-w-[300px] overflow-hidden border-l-[1px] left-0 top-0 max-h-screen overflow-y-auto',
        'fixed right-0 top-0 xl:sticky z-10 bg-primary h-full left-auto pt-28 xl:pt-8 overflow-y-scroll',
        {
          hidden: !sidebarIsOpen,
          flex: sidebarIsOpen,
        },
      )}
    >
      <Notifications />
      <Activities />
    </div>
  );
};

export default Sidebar;
