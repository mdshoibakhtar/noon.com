import React from 'react';
import { Link } from 'react-router-dom';

export function WomensFash({ data }) {
    return <>
        <div>
            <img src={data.headerImg} alt='womens fash' />
        </div>
        <div className='componentArea '>
            <div className='d-flex overflow-scroll pt-3' style={{ backgroundColor: "#dddddd", }} >
                {data.data.map((value) => {
                    return <Link key={value.id} className="px-2 text-decoration-none" style={{ width: "118px", height: "196px" }} >
                        <div className="sc-iAvgwm jIghwg bannerContainer bannerModuleCarousel " style={{ flex: "0 0 calc(28.5714% - 0px)", }}><div><div className="sc-kgflAQ dLheIH bannerModuleCarousel standardBanner"><div className="lazyload-wrapper "><div className="sc-hHLeRK jDQxLl"><img src={value.expImg} alt="/fashion/women-31229/clothing-16021/womens-tops/min-50-fashion-FA_03?sort[by]=popularity&amp;sort[dir]=desc" className="sc-ivTmOn fRXJso" /></div></div></div></div></div>
                    </Link>
                })}
            </div>
        </div >
    </>
}

