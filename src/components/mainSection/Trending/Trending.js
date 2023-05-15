import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { BiRupee } from 'react-icons/bi';

import { trend } from './mockData';
import { exploreMore } from './mockDataExploreMore';
import exp from "../../assetes/images/recommended-images/express.svg"
import vac from "../../assetes/images/trendImg/t-Vac.png"
import expMore from "../../assetes/images/trendImg/expMore.png"

export const Trending = () => {
    const data = trend.data
    const expData = exploreMore.data
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
    return <React.Fragment >
        <div className="bg-lights pt-1 px-3">
            <div className="sc-iqcoie btLjaq"><div fontSize="24" className="sc-crXcEl fIdVYV"><h2 className="truncate-title-header">Trending deals in electronics</h2></div><div className="sc-fnykZs hRppEE"><Link>VIEW ALL</Link></div></div>

            <div className="mt-2">
                <Slider {...settings} className="">
                    {data.map((value) => {
                        return <Link key={value.id} className="p-2 text-decoration-none"  >
                            <div className="position-relative">
                                {value.tagBestSell && <div className="sc-d49d1b87-2 zZzub"><div className="sc-d49d1b87-3 gUpXXM"><div className="sc-d49d1b87-8 jjnRiG"><div className="sc-d49d1b87-9 bYcfpD"><div className="sc-a6eb4389-0 jykRup"><span className="sc-a6eb4389-1 cIueBQ">{value.tagBestSell}</span></div></div></div></div></div>}
                                <div>
                                    <img src={value.img} alt="spon-img" width={100 + "%"} />
                                </div>
                                <div data-qa="product-name" title="Apple iPhone 14 Pro Max 256GB Deep Purple 5G With FaceTime - Middle East Version " className="sc-d49d1b87-20 cTToVU"><span width="0"><span><span>{value.title1}</span><br /><span><span>{value.title2}</span></span></span><span style={{ position: "fixed", visibility: "hidden", top: "0px", left: "0px", }}>…</span></span></div>

                                <div className="sc-d49d1b87-21 fEhCbX">
                                    <div className="sc-d49d1b87-21 fEhCbX "><div><div className="sc-39ae41a1-0 dWGXnz d-flex"><span className="currency"><BiRupee /> </span><strong className="amount">{value.price}</strong></div><div className="sc-39ae41a1-1 jZCwfD "><span className="oldPrice"> {value.offPrice}</span><span className="discount">{value.offer} Off</span></div></div></div>
                                </div>

                                <div className="sc-d49d1b87-22 jrhyiW"><div className="sc-d49d1b87-23 bRpHBU"> </div><div className="sc-d49d1b87-24 ebqSwN"><div className="sc-d49d1b87-28 iKDGKk"><div className="sc-a68acc3-0 gBzUgj"><img src={exp} alt="noon -express" className="sc-b51db3f-1 jcBUuv" width="64px" height="16px" /></div></div><div className="sc-d49d1b87-25 gKjUiW"><div className="sc-61515602-0 czLWQH"><div color="#38AE04" className="sc-e568c3b8-0 bYtWsd"><span className="sc-e568c3b8-1 bFgxSY">4.5</span><img className="sc-b960f1b9-0 lkBoAV undefined" color="white" height="18" src={"https://f.nooncdn.com/s/app/com/noon/design-system/simpleicons/star-filled-v2.svg"} width="18" alt="express" /></div><div color="ratingDarkGreen" className="sc-61515602-1 jhgTHA"><svg width="3" height="10" viewBox="0 0 3 10" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.17635 9.26182C1.46726 7.88727 1.0309 6.63273 1.0309 4.82182C1.0309 3 1.46726 1.75636 2.17635 0.370909L1.67453 0C0.692716 1.35273 0.136353 3.06545 0.136353 4.82182C0.136353 6.57818 0.692716 8.29091 1.67453 9.64364L2.17635 9.26182Z" fill="currentColor"></path></svg><span className="sc-61515602-2 cmvYOR">265</span><svg width="3" height="10" viewBox="0 0 3 10" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}><path d="M2.17635 9.26182C1.46726 7.88727 1.0309 6.63273 1.0309 4.82182C1.0309 3 1.46726 1.75636 2.17635 0.370909L1.67453 0C0.692716 1.35273 0.136353 3.06545 0.136353 4.82182C0.136353 6.57818 0.692716 8.29091 1.67453 9.64364L2.17635 9.26182Z" fill="currentColor"></path></svg></div></div></div></div></div>
                                {value.extraUses && <div className="sc-d49d1b87-26 ja-dsFM"><div className="sc-3b791d28-0 ihCjkB"><div className="sc-3b791d28-1 cvxXHO"><div className="sc-3b791d28-2 PRrDz"><div className="sc-3b791d28-3 tkcM">{value.extraUses}</div></div></div></div></div>}
                            </div>



                        </Link>
                    })}
                </Slider>
            </div>
            <div className="pt-3 px-3" >
                <figure >
                    <img src={vac} alt="idbpng" />
                </figure>
            </div>
            <div className='pt-3 px-3' style={{ background: "#faf8a5" }}>
                <figure className='m-0'>
                    <img src={expMore} alt="idbpng" />
                </figure>
            </div>


            {/* explore More */}


            <Slider {...settings} className="px-2" style={{ background: "#faf8a5" }}>
                {expData.map((value) => {
                    return <Link key={value.id} className="p-2 text-decoration-none">
                        <div className="sc-iAvgwm jIghwg bannerContainer bannerModuleCarousel " style={{ flex: '0 0 calc(28.   5714% - 0px)', padding: "0px 7px 7px 0px" }}>
                            <div className="sc-kgflAQ dLheIH bannerModuleCarousel standardBanner">
                                <div className="lazyload-wrapper ">
                                    <div className="sc-hHLeRK jDQxLl">
                                        <img src={value.expImg} alt="fdshtf" className="sc-ivTmOn fRXJso" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Link>
                })}
            </Slider>
        </div>
    </React.Fragment>
};

