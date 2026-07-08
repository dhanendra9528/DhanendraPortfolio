import { FaCode, FaDesktop, FaMicrochip, FaMobile, FaReact, FaRProject, FaSchool } from 'react-icons/fa6'
import profileImg from '../assets/profile1.jpeg'
import { FaProjectDiagram } from 'react-icons/fa'



export const assets = {
    profileImg,
}


export const navMenu = ['Home', 'Work', 'Skills', 'About', 'Contact']


export const skillsData = [
    {
        icon: FaMicrochip,
        title: 'Backend',
        technologies: ['Node.js', 'React.js', 'Express.js', 'MongoDB', 'Mongoose']
    },
    {
        icon: FaReact,
        title: 'Frontend',
        technologies: ['Html', 'Css', 'Tailwindcss', 'JavaScript', 'Bootstrap', 'Angular/React.js']
    },
    {
        icon: FaDesktop,
        title: 'Tools',
        technologies: ['Git', 'GitHub', 'VS Code', 'Postman', 'npm']
    },
    {
        icon: FaCode,
        title: 'Core Skills',
        technologies: ['Computer Fundamentals', 'Windows', 'Typing']
    }
]



export const projectData = [
    {
        title: 'Agency.Ai',
        description: 'AI-powered platform for modern business solutions and seamless digital experiences.',
        image: 'https://plus.unsplash.com/premium_photo-1661293879952-c5c093282801?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D',
        tech: ['React', 'Tailwindcss', 'JavaScript'],
        link: "https://agency-ai-bay.vercel.app/"
    },
    {
        title: 'News App',
        description: 'Your trusted source for real-time news and trending headlines worldwide.',
        image: 'https://plus.unsplash.com/premium_photo-1684769161054-2fa9a998dcb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'JavaScript']
    },
    {
        title: 'Collaboration',
        description: 'A real-time collaborative platform for artists and designers to co-create digital art',
        image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: ['React', 'Tailwindcss', 'JavaScript']
    },
    {
        title: 'Abmbivista',
        description: 'A mood-based interior design suggestion tool that uses AI',
        image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHByb2plY3R8ZW58MHx8MHx8fDA%3D',
        tech: [ 'Tailwindcss', 'JavaScript', 'Rest']
    }
]

export const profileData = [
    {
        icon: FaCode,
        title: 'Language',
        technologies: ['JavaScript','React.js','Next.js', 'Tailwindcss']
    },
    {
        icon: FaSchool,
        title: 'Education',
        technologies: ['Diploma in FullStack']
    },
    {
        icon: FaProjectDiagram,
        title: 'Projects',
        technologies: ['Built more than 10+']
    },
]