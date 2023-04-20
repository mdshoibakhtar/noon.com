import { SlLocationPin } from "react-icons/sl"
import { AiFillCaretDown } from "react-icons/ai"
import { MapContainer } from "./MapContainer"
import { useState } from "react"
export const Location = () => {
    const [isMapShow, setIsMapShow] = useState(false)
    const locShowFc = () => {
        setIsMapShow(!isMapShow)
    }

    return (
        <div className="row">
            <div className="col p-0  ">
                <span className="fs-6 c-pointer" onClick={locShowFc}><SlLocationPin /> Deliver  To <b>Dubai  <AiFillCaretDown /></b></span>
                {isMapShow &&
                    <div className="">
                        <MapContainer />
                    </div>
                }
            </div>
        </div>
    )
}