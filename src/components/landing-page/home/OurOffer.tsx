import { ReactNode } from "react"
import "../../../styles/landing-page.component.css"
import StickyNotes from "/images/sticky-note.webp"
import FrontEnd from "/images/design.webp"
import Backend from "/images/thinking.webp"
import { CiDatabase } from "react-icons/ci"
import { LiaLaptopCodeSolid } from "react-icons/lia"
import { FaCode } from "react-icons/fa6"

function OurOfferTop () {
    return (
        <div className="our-offer-top">
            <span>What We Offer</span>

            <div className="our-offer-top-cnt">
                <span>Why Should You Enroll In Programmimg Lab?</span>

                <div>
                    <span>
                        We are not just another online course platform. We are your pathway to a Succeccful Tech career.
                        You don't just learn but get to experience real world instances and get real-time job experience from projects and assignments.
                    </span>

                    <button>Our Courses</button>
                </div>
            </div>
        </div>
    )
}

type T_OfferBtmCnt = {
    picture: string
    label: string
    icon: ReactNode
}

function OfferBtmCnt ({ picture, label, icon }: T_OfferBtmCnt) {
    return (
        <div className="our-offer-btm-card">
            <img src={picture} alt={`${picture}_broke`} />

            <div>
                <span>{icon}</span>
                <span>{label}</span>
            </div>
        </div>
    )
}

function OurOfferBtm () {
    return (
        <div className="our-offer-btm">
            <OfferBtmCnt picture={FrontEnd} label="Frontend" icon={<FaCode />} />
            <OfferBtmCnt picture={StickyNotes} label="Data Analysis" icon={<CiDatabase />} />
            <OfferBtmCnt picture={Backend} label="Backend" icon={<LiaLaptopCodeSolid />} />
        </div>
    )
}

export function OurOffer () {
    return (
        <div className="our-offer">
            <OurOfferTop />
            <OurOfferBtm />
        </div>
    )
}