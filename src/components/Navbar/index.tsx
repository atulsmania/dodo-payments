import { CircleUserRound, FileText, Headset, Link } from 'lucide-react';
import Menu from '../Menu';
import { PropsWithChildren } from 'react';
import BusinessLogo from '../../assets/Frame.png';
import { useAppContext } from '../../context/AppContext/useAppContext';
import { cn } from '../../lib/utils';

type PageLinkProps = {
  icon: React.FC<React.SVGProps<SVGSVGElement>>;
} & PropsWithChildren;

const PageLink = ({ children, icon }: PageLinkProps) => {
  const Icon = icon as React.FC<React.SVGProps<SVGSVGElement>>;

  return (
    <div className="flex items-center gap-1 p-2 pl-4 text-sm rounded-md cursor-pointer hover:bg-black/5">
      <span className="w-6 text-black/20">
        <Link size={18} />
      </span>
      <span className="w-6 aspect-square">
        <Icon strokeWidth={1} />
      </span>
      <span>{children}</span>
    </div>
  );
};

const PinnedTabs = () => {
  return (
    <div className="flex flex-col gap-2 text-sm">
      <div className="flex gap-2 text-sm">
        <span className="px-4 py-2 text-black/40">Favorites</span>
        <span className="px-4 py-2 cursor-pointer text-black/20">Recently</span>
      </div>
      <div className="px-4 space-y-2">
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-black/20" />
          <span>Get Started</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="w-2 h-2 rounded-full bg-black/20" />
          <span>Transactions</span>
        </div>
      </div>
    </div>
  );
};

const Pages = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex flex-col items-start">
      <span className="px-4 py-2 text-black/40">Pages</span>
      {children}
    </div>
  );
};

const Navbar = () => {
  const { navbarIsOpen } = useAppContext();

  return (
    <div
      className={cn(
        'flex-col gap-6 px-4 xl:pt-8 min-w-[250px] border-r-[1px] left-0 top-0 max-h-screen overflow-y-auto',
        'fixed xl:sticky left-0 top-0 z-20 bg-primary h-full overflow-y-scroll pt-28',
        {
          hidden: !navbarIsOpen,
          flex: navbarIsOpen,
        },
      )}
    >
      <div className="flex items-center gap-2 px-2">
        <CircleUserRound strokeWidth={1} />
        <a href="/">
          <h1 className="text-sm">SuperStars AI</h1>
        </a>
      </div>
      <PinnedTabs />
      <div className="flex-1">
        <Pages>
          <Menu />
        </Pages>
      </div>

      <Pages>
        <PageLink icon={FileText}>Documentation</PageLink>
        <PageLink icon={Headset}>Help Center</PageLink>
      </Pages>
      <div className="sticky bottom-0 w-full px-4 py-2 bg-primary border-t-[1px]">
        <img src={BusinessLogo} alt="dodo Payments Logo" />
      </div>
    </div>
  );
};

export default Navbar;
