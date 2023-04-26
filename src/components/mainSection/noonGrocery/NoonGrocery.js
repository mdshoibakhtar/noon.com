import React from 'react';
import Slider from 'react-slick';

import { Link } from 'react-router-dom';
import eidMub from "../../assetes/images/eidOff.png"
import { eidDta } from './mockDta';

const eidM = eidDta.data
export function NoonGrocery() {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        draggable: true,
        autoplaySpeed: 1800,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2.5,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <React.Fragment>
            <div className='componentArea' style={{ backgroundImage: `url(${eidMub})`, height: 100 + "%", width: 100 + "%", backgroundRepeat: "no-repeat", backgroundSize: "" }} >
                <div className="px-2 row"  >
                    {eidM.map((value) => {
                        return <Link key={value.id} className="p-2 text-decoration-none"  >
                            <div className="sc-iAvgwm jIghwg bannerContainer bannerModuleCarousel " style={{ flex: '0 0 calc(28.5714% - 0px)', padding: "0px 7px 7px 0px" }}><div><Link href="/uae-en/__PWA/gift-cards?page=buy"><div className="sc-kgflAQ dLheIH bannerModuleCarousel standardBanner"><div className="lazyload-wrapper "><div className="sc-hHLeRK jDQxLl"><img src={value.expImg} alt="noonpayPWA:///gift-cards?page=buy" className="sc-ivTmOn fRXJso" /></div></div></div></Link></div></div>
                        </Link>
                    })}
                </div>
            </div>

        </React.Fragment>
    );
}
