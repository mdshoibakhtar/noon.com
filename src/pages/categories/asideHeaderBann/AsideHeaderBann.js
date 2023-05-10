import React from 'react';

import { Link } from 'react-router-dom';
function AsideHeaderBann({ bannerData }) {
    // console.log(bannerData.wrapperImg);
    return (
        <div className='sc-39ccbf76-0 eObXqj'>
            <p className="sc-39ccbf76-1 lHgYk">{bannerData.htitle}</p>
            <div className="sc-dc3f2d0b-0 oXGMB lHgYk"><Link><div className="sc-dc3f2d0b-1 jOrYib"><img src={bannerData.wrapperImg} alt="bann" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd"></p></div></Link>
            </div>
        </div>
    );
}

export default AsideHeaderBann;