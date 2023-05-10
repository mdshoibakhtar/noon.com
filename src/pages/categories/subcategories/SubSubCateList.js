import React, { useContext } from 'react';
import MobCategories from '../mobCategorey';

import AsideHeaderBann from '../asideHeaderBann/AsideHeaderBann';
import { Tab } from 'react-bootstrap';
import SubSubCateGrocries from './SubSubCateGrocries';
import { parentslistcomponent } from '../../../components/mainSection/myContext';
function SubSubCateList() {

    const context = useContext(parentslistcomponent)
    // console.log(context);
    const mobileBanner = context.mobileData.mobBannData
    const smartPhone = context.mobileData.mobDataCate
    const mobileAccesories = context.mobileData.mobAcceDataCate
    const topBrands = context.mobileData.topBrandsCate
    const homeKitchenBanner = context.homeKitchen.homeKitBann
    const homeKitchenDining = context.homeKitchen.homeKitDataCate
    const homefurniture = context.homeKitchen.homeFurnitureDataCate
    const homeTools = context.homeKitchen.homeToolsDataCate
    const homeDecoration = context.homeKitchen.homeDecorDataCate
    const bathingBeding = context.homeKitchen.bathingBedingDataCate
    const grocery = context.groceryDataCate
    const beautyBanner = context.beautyData.beautyBannner
    const makeupData = context.beautyData.beautyMakupDataCate
    const skinCare = context.beautyData.skinCareData
    const hairCare = context.beautyData.hairCareData
    const personalCare = context.beautyData.personalCareData
    console.log(hairCare);

    return <>
        <Tab.Pane eventKey={smartPhone.eventKey}>
            <AsideHeaderBann bannerData={mobileBanner} />
            <MobCategories data={smartPhone} />
        </Tab.Pane>
        <Tab.Pane eventKey={mobileAccesories.eventKey}>
            <MobCategories data={mobileAccesories} />
        </Tab.Pane>
        <Tab.Pane eventKey={topBrands.eventKey}>
            <MobCategories data={topBrands} />
        </Tab.Pane>
        <Tab.Pane eventKey={homeKitchenDining.eventKey}>
            <AsideHeaderBann bannerData={homeKitchenBanner} />
            <MobCategories data={homeKitchenDining} />
        </Tab.Pane>
        <Tab.Pane eventKey={homeKitchenDining.eventKey}>
            <MobCategories data={homefurniture} />
        </Tab.Pane>
        <Tab.Pane eventKey={homeKitchenDining.eventKey}>
            <MobCategories data={homeTools} />
        </Tab.Pane>
        <Tab.Pane eventKey={homeKitchenDining.eventKey}>
            <MobCategories data={homeDecoration} />
        </Tab.Pane>
        <Tab.Pane eventKey={homeKitchenDining.eventKey}>
            <MobCategories data={bathingBeding} />
        </Tab.Pane>
        <Tab.Pane eventKey={grocery.eventKey}>
            <SubSubCateGrocries groceryData={grocery} />
        </Tab.Pane>
        <Tab.Pane eventKey={beautyBanner.eventKey}>
            <AsideHeaderBann bannerData={beautyBanner} />
            <MobCategories data={makeupData} />
        </Tab.Pane>
        <Tab.Pane eventKey={skinCare.eventKey}>
            <MobCategories data={skinCare} />
        </Tab.Pane>
        <Tab.Pane eventKey={hairCare.eventKey}>
            <MobCategories data={hairCare} />
        </Tab.Pane>
        <Tab.Pane eventKey={personalCare.eventKey}>
            <MobCategories data={personalCare} />
        </Tab.Pane>
    </>
}

export default SubSubCateList