import Profile_Image5 from '../assets/Male07.png';
import Profile_Image4 from '../assets/Male11.png';
import Profile_Image3 from '../assets/Female05.png';
import Profile_Image2 from '../assets/3D08.png';
import Profile_Image1 from '../assets/3D05.png';

export type Activity = {
  title: string;
  time: string;
  img: string;
};

export const CurrentActivities = [
  {
    title: 'Discount details updated',
    time: 'Just Now',
    img: Profile_Image1,
  },
  {
    title: 'Aman added a new product',
    time: '5 minutes ago',
    img: Profile_Image2,
  },
  {
    title: 'Refunds cleared',
    time: '12 hours ago',
    img: Profile_Image3,
  },
  {
    title: 'Tax report download complete',
    time: 'Today, 11:59 AM',
    img: Profile_Image4,
  },
  {
    title: 'Product details updated',
    time: 'Today, 11:59 AM',
    img: Profile_Image5,
  },
] satisfies Activity[];
