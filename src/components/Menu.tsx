import { ChevronRight } from 'lucide-react';
import React from 'react';
import { type MenuItem, type SubMenuItem, MenuItems } from '../constants/menu';

export type MenuItemProps = {
  item: MenuItem;
};

type SubMenuItemProps = {
  subMenuItem: SubMenuItem;
};

const Menu = () => {
  return (
    <div className="flex flex-col text-sm">
      {MenuItems.map((item) => (
        <MenuItem key={item.title} item={item} />
      ))}
    </div>
  );
};

const MenuItem = ({ item }: MenuItemProps) => {
  const [showChildren, setShowChildren] = React.useState(false);
  const { children, icon, title } = item;
  const Icon = icon as React.FC<React.SVGProps<SVGSVGElement>>;

  const handleClick = () => {
    if (children && children.length > 0) {
      setShowChildren(!showChildren);
      return;
    }
    setShowChildren(!showChildren);
  };

  const renderSubList = children && children.length > 0 && showChildren;

  return (
    <>
      <div
        onClick={handleClick}
        className="flex gap-1 p-2 rounded-md cursor-pointer hover:bg-black/5"
      >
        <span className="w-6 text-black/20">
          <ChevronRight size={20} />
        </span>
        <span className="w-6 aspect-square">
          <Icon strokeWidth={1} />
        </span>
        <span>{title}</span>
      </div>
      {renderSubList && (
        <div className="flex flex-col gap-0">
          {children.map((item) => (
            <Submenu key={item.title} subMenuItem={item} />
          ))}
        </div>
      )}
    </>
  );
};

const Submenu = ({ subMenuItem }: SubMenuItemProps) => {
  const { title } = subMenuItem;
  return (
    <div className="py-2 pl-16">
      <span className="px-2 py-2 rounded-md cursor-pointer hover:bg-black/5">
        {title}
      </span>
    </div>
  );
};

export default Menu;
