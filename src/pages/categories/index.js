import React from 'react';
import Col from 'react-bootstrap/Col';
import Tab from 'react-bootstrap/Tab';
import { Link } from 'react-router-dom';
import { Aside } from '../aside/Aside';
import { asideData } from '../aside/asideMenu';
import MobCategories from './mobCategorey';
import { mobDataCate } from './mockDcategories/mobMockCategories';
import AsideHeaderBann from './asideHeaderBann/AsideHeaderBann';

export const Categories = ({ pDataCate }) => {

    return (
        <Tab.Container id="left-tabs-example" defaultactivekey="first" className="sc-fbaed8f7-1 cNGapX overflow-scroll h-100">
            <div className="sc-ca4e353a-0 gxqSyX d-flex">
                <Aside menuList={asideData} />
                <Col sm={8} className='colFlex-1'>
                    <Tab.Content>
                        <Tab.Pane eventKey="first">
                            <div className='sc-d68ddef2-2 derWoS overflow-auto' style={{ height: 100 + "vh" }}>
                                <div className='sc-39ccbf76-0 eObXqj'>
                                    <p className="sc-39ccbf76-1 lHgYk">{pDataCate.headTitle1}</p>
                                    <p className="sc-39ccbf76-1 lHgYk">{pDataCate.headTitle2}</p>
                                    <div className='sc-dc3f2d0b-0 frfUCM' >
                                        {pDataCate.data.map((item) => {
                                            return <Link className='text-decoration-none' key={item.id}><div className="sc-dc3f2d0b-1 dDGxAs" key={item.id}><img src={item.cardimg} alt="5% Unlimited Cashback" className="sc-b51db3f-1 iCVkuj" /><p className="sc-dc3f2d0b-2 cyOHYd">{item.title}</p></div></Link>
                                        })}
                                    </div>

                                </div>
                            </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <AsideHeaderBann />
                            <MobCategories mobAcc={mobDataCate} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <MobCategories mobAcc={mobDataCate} />
                        </Tab.Pane>
                        <Tab.Pane eventKey="second">
                            <MobCategories mobAcc={mobDataCate} />
                        </Tab.Pane>
                    </Tab.Content>
                </Col>
            </div>
        </Tab.Container>


    );
}

