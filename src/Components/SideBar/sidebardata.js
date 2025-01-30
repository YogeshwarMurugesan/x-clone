import { FaHome } from "react-icons/fa";
import { IoMdNotifications } from "react-icons/io";
import { FaUser } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";


const sidebardata = [
    {
        title: 'Home',
        icon: <FaHome />,
        path: '/'
    },
    {
        title: 'Notification',
        icon: <IoMdNotifications />,
        path: '/notification'
    },
    {
        title: 'Profiles',
        icon: <FaUser />,
        path: '/profile'
    },
    {
        title: 'More Options',
        icon: <BsThreeDots />,
        path: '/settings'   
    }
]

export default sidebardata;