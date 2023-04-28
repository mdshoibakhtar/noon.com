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
                        <div classname="sc-iAvgwm jIghwg bannerContainer bannerModuleCarousel " style={{ flex: "0 0 calc(28.5714% - 0px)", }}><div><a href="/uae-en/fashion/women-31229/clothing-16021/womens-tops/min-50-fashion-FA_03/?sort%5Bby%5D=popularity&amp;sort%5Bdir%5D=desc"><div classname="sc-kgflAQ dLheIH bannerModuleCarousel standardBanner"><div classname="lazyload-wrapper "><div classname="sc-hHLeRK jDQxLl"><img src={value.expImg} alt="/fashion/women-31229/clothing-16021/womens-tops/min-50-fashion-FA_03?sort[by]=popularity&amp;sort[dir]=desc" classname="sc-ivTmOn fRXJso" /></div></div></div></a></div></div>
                    </Link>
                })}
            </div>
        </div >
    </>
}

