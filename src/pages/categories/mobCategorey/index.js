import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import { Link } from 'react-router-dom';

function MobCategories({ mobAcc }) {
    return <div className="sc-39ccbf76-0 eObXqj" defaultActiveKey="first">
        <Accordion defaultctivekey="0">
            <Accordion.Item eventKey="first">
                <Accordion.Header>{mobAcc.accordianTitle}</Accordion.Header>
                <Accordion.Body>
                    <div className='sc-ab9de587-0 PHrha'>
                        <div className='sc-dc3f2d0b-0 heNSDb'>
                            {mobAcc.data.map((item) => {
                                return <Link key={item.id}><div className="sc-dc3f2d0b-1 dDGxAs"><img src={item.mobImg} alt="iPhones" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd">{item.title}</p></div></Link>
                            })}
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    </div>
}

export default MobCategories;