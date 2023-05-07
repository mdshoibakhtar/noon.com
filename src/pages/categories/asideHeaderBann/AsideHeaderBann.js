import React from 'react';
import bann from "../../../components/assetes/images/categoriesPageImg/mobAcces/mob-c-banner.png"
import { Link } from 'react-router-dom';
function AsideHeaderBann() {
    return (
        <div className='sc-39ccbf76-0 eObXqj'>
            <p className="sc-39ccbf76-1 lHgYk">Mobiles &amp; Accessories</p>
            <div className="sc-dc3f2d0b-0 oXGMB lHgYk"><Link><div className="sc-dc3f2d0b-1 jOrYib"><img src={bann} alt="bann" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd"></p></div></Link></div>
        </div>
    );
}

export default AsideHeaderBann;