import {
  BookText,
  BriefcaseBusiness,
  CircleDollarSign,
  MessageSquareWarning,
  Receipt,
  Rocket,
  ScanBarcode,
  ShoppingCart,
  UsersRound,
} from 'lucide-react';

export type MenuItem = {
  title: string;
  path: string;
  icon: unknown;
  children: SubMenuItem[] | null;
};

export type SubMenuItem = {
  title: string;
  path: string;
};

const SubMenuItems = [
  {
    title: 'Overview',
    path: '/',
  },
  {
    title: 'Product',
    path: '/',
  },
  {
    title: 'Discount',
    path: '/',
  },
  {
    title: 'Taxable Items',
    path: '/',
  },
] satisfies SubMenuItem[];

export const MenuItems = [
  {
    title: 'Overview',
    path: '/',
    icon: Rocket,
    children: SubMenuItems,
  },
  {
    title: 'Transactions',
    path: '/',
    icon: CircleDollarSign,
    children: SubMenuItems,
  },
  {
    title: 'Invoice',
    path: '/',
    icon: Receipt,
    children: SubMenuItems,
  },
  {
    title: 'Customers',
    path: '/',
    icon: UsersRound,
    children: SubMenuItems,
  },
  {
    title: 'Product Catalog',
    path: '/',
    icon: ScanBarcode,
    children: SubMenuItems,
  },
  {
    title: 'Reports',
    path: '/',
    icon: MessageSquareWarning,
    children: SubMenuItems,
  },
  {
    title: 'Checkout',
    path: '/',
    icon: ShoppingCart,
    children: SubMenuItems,
  },
  {
    title: 'Business Account',
    path: '/',
    icon: BookText,
    children: SubMenuItems,
  },
  {
    title: 'Developer Tools',
    path: '/',
    icon: BriefcaseBusiness,
    children: SubMenuItems,
  },
] satisfies MenuItem[];
