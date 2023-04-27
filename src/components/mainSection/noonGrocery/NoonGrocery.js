import React from 'react';

import { Link } from 'react-router-dom';
import eidMub from "../../assetes/images/eidOff.png"
import mashreqImg from "../../assetes/images/eidmubImg/mashreq.gif"
import { eidDta } from './mockDta';

const eidM = eidDta.data
export function NoonGrocery() {

    return (
        <React.Fragment>
            <div className='componentArea' style={{ backgroundImage: `url(${eidMub})`, backgroundRepeat: "no-repeat", backgroundSize: "contain" }} >
                <div className='d-flex overflow-scroll' style={
                    { padding: "0 0 0 180px" }
                }>
                    {eidM.map((value) => {
                        return <Link key={value.id} className="p-2 text-decoration-none"  >
                            <img src={value.expImg} alt="noonpayPWA:///gift-cards?page=buy" className="sc-ivTmOn fRXJso" />
                        </Link>
                    })}
                </div>
            </div>
            <div className="py-2" >

                <figure className="m-0">
                    <img src={mashreqImg} alt="idbpng" />
                </figure>

            </div>
        </React.Fragment >
    );
}
