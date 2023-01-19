import Home from "../pages/Home";
import Experiences from "../pages/Experiences"
import AboutMe from "../pages/AboutMe"
import CV from "../pages/CV"
import Github from "../pages/Github";
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

export const routes = [
    {id: 1, titleEsp: "Inicio", titleEn: "Home", path: "/", element: Home},
    {id: 2, titleEsp: "Sobre mi", titleEn: "About me", path: "/AboutMe", element: AboutMe},
    {id: 3, titleEsp: "CV", titleEn: "CV", path: "/CV", element: CV},
    {id: 4, titleEsp: "Experiencias", titleEn: "Experiences", path: "/Experiences", element: Experiences},
    {id: 5, titleEsp: "Github", titleEn: "Github", path: "/Github", element: Github},
];

export const contact = [
    {id: 1, title: "Gmail", path: "/", element: <MailOutlineIcon/>},
    {id: 2, title: "Instagram", path: "/", element: <InstagramIcon/>},
    {id: 2, title: "Github", path: "/", element: <GitHubIcon/>},
]