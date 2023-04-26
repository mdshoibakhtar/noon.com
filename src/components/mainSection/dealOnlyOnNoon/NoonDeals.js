import { noonDeals } from "./mockData"
import gif from "../../assetes/images/noonDimg/noonDealsImg.gif"
import staticsImg from "../../assetes/images/noonDimg/deals-wrapper.png"
import React from "react"
import { NoonDealsWrap } from "./NoonDealsWrapp"
export const DealNoon = () => {
    const data = noonDeals.data
    return (
        <React.Fragment>
            <div className="bg-fi pt-1 px-3">
                <div className="mb-2"><img src={gif} className="fw-bolder" alt="mT" /></div>
                <div className="row">
                    {data.map((value) => {
                        return <div className="col-6" key={value.id}>
                            <figure>
                                <img src={value.img} alt="mdeals" />
                            </figure>
                        </div>

                    })}

                </div>

            </div>
            <div className="pt-3 px-3" style={{ background: "rgb(235, 235, 235)" }} >

                <figure className="m-0">
                    <img src={staticsImg} alt="idbpng" />
                </figure>
                <div className="text-end" style={{ bottom: "0px", padding: "0px 4px", color: 'rgb(56, 59, 66)', backgroundCcolor: 'transparent;font-size: 0.8rem' }}><span className="fs-10">Sponsored</span></div>
            </div>

            <NoonDealsWrap />
        </React.Fragment>
    )
}