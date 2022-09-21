import { MdOutlineDashboard } from 'react-icons/md';
import {
  AiOutlineUsergroupDelete,
  AiOutlineLock,
  AiOutlineMessage,
} from 'react-icons/ai';
import { IoMdNotificationsOutline } from 'react-icons/io';
export const links = [
  {
    name: 'Dashboard',
    icon: <MdOutlineDashboard />,
    href: '/dashboard',
  },
  {
    name: 'Client',
    icon: <AiOutlineUsergroupDelete />,
    href: '/client',
  },
  {
    name: 'Notification',
    icon: <IoMdNotificationsOutline />,
    href: '/notification',
  },
  {
    name: 'Security',
    icon: <AiOutlineLock />,
    href: '/security',
  },
  {
    name: 'Message',
    icon: <AiOutlineMessage />,
    href: '/message',
  },
];
