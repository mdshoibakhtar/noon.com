import React from 'react';
import { Col, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function SubSubCateGrocries({ groceryData }) {
    return <>
        <Col sm={7} className='colFlex-1' style={{ height: 92 + "vh", overflowY: "scroll" }}>
            <Tab.Content>
                {/* <h2>grocery</h2> */}
                <div className='sc-d68ddef2-2 derWoS'>
                    <div className='sc-39ccbf76-0 eObXqj'>
                        <div className='sc-dc3f2d0b-0 oXGMB'>
                            <Link><div className="sc-dc3f2d0b-1 jOrYib lHgYk"><img src={groceryData.bannerImg} alt="groceryBanner" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd"></p></div></Link>
                        </div>
                        <p className="sc-39ccbf76-1 lHgYk">{groceryData.accordianTitle}</p>
                        <div className="sc-dc3f2d0b-0 frfUCM">
                            {groceryData.data.map((item) => {
                                return <Link key={item.id} className='text-decoration-none'><div className="sc-dc3f2d0b-1 dDGxAs">
                                    <img src={item.mobImg} alt="Fresh Produce" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd">{item.title}</p></div></Link>
                            })}
                        </div>
                    </div>
                </div>
            </Tab.Content>
        </Col>



    </>
}

export default SubSubCateGrocries;