import "../../../styles/landing-page.component.css"
import { FaPython, FaHtml5, FaCss3Alt, FaReact, FaNodeJs } from "react-icons/fa6"
import { SiTailwindcss, SiExpress, SiDjango, SiFastapi } from "react-icons/si"
import { RiNextjsFill } from "react-icons/ri"
import { ReactNode } from "react"

const ICONS = [
    {
        icon: <FaPython />,
        label: "Python"
    },
    {
        icon: <FaHtml5 />,
        label: "HTML"
    },
    {
        icon: <FaCss3Alt />,
        label: "CSS"
    },
    {
        icon: <FaReact />,
        label: "React"
    },
    {
        icon: <FaNodeJs />,
        label: "NodeJS"
    },
    {
        icon: <SiTailwindcss />,
        label: "Tailwind"
    },
    {
        icon: <SiExpress />,
        label: "Express"
    },
    {
        icon: <RiNextjsFill />,
        label: "NextJS"
    },
    {
        icon: <SiDjango />,
        label: "Django"
    },
    {
        icon: <SiFastapi />,
        label: "FastApi"
    }
]

type CarouselItemType = {
    icon: ReactNode
    label: string
}

function CarouselItem ({ icon, label }: CarouselItemType) {
    return (
        <div className="language-slide-carousel-item">
            <span>{icon}</span>
            <span>{label}</span>
        </div>
    )
}

export function LanguageSlide () {
    return (
        <div className="languange-slide">
            <div>Programs</div>

            <div className="language-slide-carousel">
                <div className="language-slide-carousel-inner">
                    {
                        [...ICONS, ...ICONS].map((item, index) => (
                            <CarouselItem key={index} icon={item.icon} label={item.label} />
                        ))
                    }                    
                </div>
            </div>
        </div>
    )
}