import {
  Bell,
  Menu,
  PanelRight,
  Rocket,
  Search,
  Star,
  SunMedium,
  TimerReset,
} from 'lucide-react';
import IconButton from './ui/IconButton';
import { useAppContext } from '../context/AppContext/useAppContext';
import { useMediaQuery } from '@mui/material';

const Header = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const { toggleNavbar, toggleSidebar } = useAppContext();

  const defaultIconSize = isMobile ? 18 : 24;

  return (
    <div className="sticky top-0 z-30 flex items-center justify-between px-6 py-5 border-b-2 bg-primary">
      <div className="flex items-center gap-4">
        <div className="flex gap-0 md:gap-1">
          <div className="xl:hidden">
            <IconButton onClick={toggleNavbar}>
              <Menu size={defaultIconSize} />
            </IconButton>
          </div>
          <IconButton>
            <Rocket size={defaultIconSize} />
          </IconButton>
          <IconButton>
            <Star size={defaultIconSize} />
          </IconButton>
        </div>
        <div className="flex gap-1 text-sm">
          <div className="hidden gap-1 md:flex">
            <span className="text-black/40">Pages</span>
            <span>/</span>
          </div>
          <span>Overview</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <input
          placeholder="Search"
          className="hidden px-3 py-2 rounded-lg bg-black/5 md:block"
        />
        <div className="flex gap-0 md:gap-1">
          <div className="md:hidden">
            <IconButton>
              <Search size={defaultIconSize} />
            </IconButton>
          </div>
          <IconButton>
            <SunMedium size={defaultIconSize} />
          </IconButton>
          <IconButton>
            <TimerReset size={defaultIconSize} />
          </IconButton>
          <IconButton>
            <Bell size={defaultIconSize} />
          </IconButton>
          <IconButton onClick={toggleSidebar}>
            <PanelRight size={defaultIconSize} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
