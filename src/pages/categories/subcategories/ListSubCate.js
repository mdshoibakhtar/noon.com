import React, { useState } from 'react';
import { Col, Tab } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { parentslistcomponent } from '../../../components/mainSection/myContext';

import SubSubCateList from './SubSubCateList';
import { mobDataCate } from '../mockDcategories/mobMockCategories';
import { mobAcceDataCate } from '../mockDcategories/mobAccessMockCategories';
import { topBrandsCate } from '../mockDcategories/topbrandsMockCate';
import { homeKitBann, mobBannData, beautyBannner, fragranceBanner } from '../asideHeaderBann/bannerMockDmobileAcce';
import { homeKitDataCate } from '../mockDcategories/homeKitMock';
import { homeFurnitureDataCate } from '../mockDcategories/homeFurnitureMock';
import { homeToolsDataCate } from '../mockDcategories/homeToolsMock';
import { homeDecorDataCate } from '../mockDcategories/homeDecorMock';
import { bathingBedingDataCate } from '../mockDcategories/homeBathBed';
import { groceryDataCate } from '../mockDcategories/grocriesMock';
import { beautyMakupDataCate, skinCareData, hairCareData, personalCareData, topBrandsData } from '../mockDcategories/mackeupMock';
import { womensFragranceData, menFragranceData } from '../mockDcategories/fragnanceMockData';




function ListSubCate({ pDataCate }) {
    const [mobileData] = useState({ mobBannData, mobDataCate, mobAcceDataCate, topBrandsCate })
    const [homeKitchen] = useState({ homeKitBann, homeKitDataCate, homeFurnitureDataCate, homeToolsDataCate, homeDecorDataCate, bathingBedingDataCate })
    const [groceryData] = useState({ groceryDataCate })
    const [beautyData] = useState({ beautyBannner, beautyMakupDataCate, skinCareData, hairCareData, personalCareData, topBrandsData })
    const [fragrance] = useState({ fragranceBanner, womensFragranceData, menFragranceData, })
    return <>

        <parentslistcomponent.Provider value={{ mobileData, homeKitchen, groceryDataCate, beautyData, fragrance }}>
            <Col sm={7} className='colFlex-1' style={{ height: 92 + "vh", overflowY: "scroll" }}>
                <Tab.Content>
                    <Tab.Pane eventKey={pDataCate.keyEvent} >
                        <div className='sc-d68ddef2-2 derWoS overflow-auto active' style={{ height: 100 + "vh" }}>
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
                    {<SubSubCateList
                        data={{ mobileData, homeKitchen, groceryData, beautyData, fragrance }}
                    />}


                </Tab.Content>
            </Col>
        </parentslistcomponent.Provider>
    </>;
}

export default ListSubCate;