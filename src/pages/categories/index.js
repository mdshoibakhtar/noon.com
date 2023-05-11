import React from 'react';
import Tab from 'react-bootstrap/Tab';
import { Aside } from '../aside/Aside';
import { menuData } from '../aside/asideMenu';
import { pDataCate } from './pMockCategoriesData';
import ListSubCate from './subcategories/ListSubCate';


export const Categories = () => {

    return (
        <Tab.Container id="left-tabs-example" defaultactivekey="first" className="sc-fbaed8f7-1 cNGapX overflow-scroll">
            <div className="sc-ca4e353a-0 gxqSyX d-flex vh-100">
                <Aside asideMenu={menuData} />
                <ListSubCate pDataCate={pDataCate} />
            </div>
        </Tab.Container>


    );
}

