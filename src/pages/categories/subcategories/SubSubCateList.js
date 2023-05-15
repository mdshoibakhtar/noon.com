import React, { useContext } from 'react';
import MobCategories from '../mobCategorey';

import AsideHeaderBann from '../asideHeaderBann/AsideHeaderBann';
import { Tab } from 'react-bootstrap';
import SubSubCateGrocries from './SubSubCateGrocries';
import { parentslistcomponent } from '../../../components/mainSection/myContext';
function SubSubCateList() {

    const context = useContext(parentslistcomponent)
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
    const beautyTopBrands = context.beautyData.topBrandsData

    const fragranceBanner = context.fragrance.fragranceBanner
    const womenFragrance = context.fragrance.womensFragranceData
    const menFragrance = context.fragrance.menFragranceData
    const topFragrance = context.fragrance.topBrandFragranceData

    const laptopBanner = context.laptop.laptopAccessories
    const laptop = context.laptop.laptopData
    const desktopmoniter = context.laptop.desktopMoniterData
    const computerAcce = context.laptop.computerAccessoriesData
    const compTopBrands = context.laptop.laptopTopBrands
    const eletronicBanner = context.electronic.electronicsData
    const ledTV = context.electronic.ledData

    const homeEntertainmentData = context.electronic.homeEntertainment
    const gaming = context.electronic.gameingData
    const headphoneSpeakers = context.electronic.headPhoneData
    const cameras = context.electronic.CamerasData
    const weareables = context.electronic.weareablesData
    const menHbanner = context.menFashion.menfasshionBannerHeader
    const mSpringSummer = context.menFashion.springSummerData
    const mCloathing = context.menFashion.clothingData
    const mFootweare = context.menFashion.footwereData
    const msportsEssen = context.menFashion.sportsEssentialsData
    const bagAccessories = context.menFashion.bagsAndAccessories
    const mTopBrands = context.menFashion.fashionBrandsData
    const mFooterBanner = context.menFashion.menfasshionBannerfooter

    const wmenHbanner = context.womensFashion.wmenfasshionBannerHeader
    const wSpringSummer = context.womensFashion.wspringSummerData
    const wCloathing = context.womensFashion.wclothingData
    const wFootweare = context.womensFashion.wfootwereData
    const wsportsEssen = context.womensFashion.wsportsEssentialsData
    const wagAccessories = context.womensFashion.wbagsAndAccessories
    const wTopBrands = context.womensFashion.wfashionBrandsData
    const wFooterBanner = context.womensFashion.wmenfasshionBannerfooter

    const applincessbanner = context.applincess.applianceBanner
    const appliancesSmall = context.applincess.smallAppliancesData
    const appliancesLarge = context.applincess.largeAppliancesData
    const healthcooling = context.applincess.HealthCoolingData
    const topBrandappliances = context.applincess.topBrandappliancesData
    const babyBrand = context.baby.babyBanner
    const babytransport = context.baby.babyTransportData
    const diapringData = context.baby.diapring
    const nursingFeedingD = context.baby.nursingFeeding
    const bathingSkinCareD = context.baby.bathingSkinCare
    const nursery = context.baby.nurseryData
    const babyKidD = context.baby.babyKid
    const babyBrands = context.baby.babyBrandsData

    const toysBanners = context.toys.toysBanner
    const toysBrands = context.toys.toysBrandsData
    const sportsOutdoors = context.toys.sportsAndoutdooorsplayDataS
    const indoorEntertainment = context.toys.indoorsEntertainmaintDatas
    const partyEssential = context.toys.partyEssential
    const babbyToddler = context.toys.babyTodlerToysData
    const sportsBanners = context.sports.sportsBanner
    const exerciseFitness = context.sports.exerciseFitnessDataS
    const outDoorsSportst = context.sports.outDoorsSportstDatas
    const SportsNutritions = context.sports.SportsNutritionData
    const scooterSkating = context.sports.scooterSkatingData
    const sportsBrands = context.sports.sportsBrandsData
    // sportsBanner, exerciseFitnessDataS, outDoorsSportstDatas, SportsNutrition, scooterSkatingData, sportsBrandsData

    const healthBanner = context.healthNutrition.healthNutritionbann
    const medicalSuplies = context.healthNutrition.medicalSuplies
    const selfMedication = context.healthNutrition.selfMedication
    const VitaminsAndSuplements = context.healthNutrition.VitaminsSupplements
    const familyPlanning = context.healthNutrition.familyPlaningData
    console.log(healthBanner);




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
        <Tab.Pane eventKey={beautyTopBrands.eventKey}>
            <MobCategories data={beautyTopBrands} />
        </Tab.Pane>
        <Tab.Pane eventKey={womenFragrance.eventKey}>
            <AsideHeaderBann bannerData={fragranceBanner} />
            <MobCategories data={womenFragrance} />
        </Tab.Pane>
        <Tab.Pane eventKey={menFragrance.eventKey}>
            <MobCategories data={menFragrance} />
        </Tab.Pane>
        <Tab.Pane eventKey={topFragrance.eventKey}>
            <MobCategories data={topFragrance} />
        </Tab.Pane>
        <Tab.Pane eventKey={laptopBanner.eventKey}>
            <AsideHeaderBann bannerData={laptopBanner} />
            <MobCategories data={laptop} />
        </Tab.Pane>
        <Tab.Pane eventKey={laptopBanner.eventKey}>
            <MobCategories data={desktopmoniter} />
        </Tab.Pane>
        <Tab.Pane eventKey={laptopBanner.eventKey}>
            <MobCategories data={computerAcce} />
        </Tab.Pane>
        <Tab.Pane eventKey={laptopBanner.eventKey}>
            <MobCategories data={compTopBrands} />
        </Tab.Pane>
        <Tab.Pane eventKey={eletronicBanner.eventKey}>
            <AsideHeaderBann bannerData={eletronicBanner} />
            <MobCategories data={ledTV} />
        </Tab.Pane>
        <Tab.Pane eventKey={eletronicBanner.eventKey}>
            <MobCategories data={homeEntertainmentData} />
        </Tab.Pane>
        <Tab.Pane eventKey={gaming.eventKey}>
            <MobCategories data={gaming} />
        </Tab.Pane>
        <Tab.Pane eventKey={gaming.eventKey}>
            <MobCategories data={headphoneSpeakers} />
        </Tab.Pane>
        <Tab.Pane eventKey={gaming.eventKey}>
            <MobCategories data={weareables} />
        </Tab.Pane>
        <Tab.Pane eventKey={gaming.eventKey}>
            <MobCategories data={cameras} />
        </Tab.Pane>
        <Tab.Pane eventKey={menHbanner.eventKey}>
            <AsideHeaderBann bannerData={menHbanner} />
            <MobCategories data={mSpringSummer} />
        </Tab.Pane>
        <Tab.Pane eventKey={mCloathing.eventKey}>
            <MobCategories data={mCloathing} />
        </Tab.Pane>
        <Tab.Pane eventKey={mFootweare.eventKey}>
            <MobCategories data={mFootweare} />
        </Tab.Pane>
        <Tab.Pane eventKey={msportsEssen.eventKey}>
            <MobCategories data={msportsEssen} />
        </Tab.Pane>
        <Tab.Pane eventKey={bagAccessories.eventKey}>
            <MobCategories data={bagAccessories} />
        </Tab.Pane>
        <Tab.Pane eventKey={mTopBrands.eventKey}>
            <MobCategories data={mTopBrands} />
        </Tab.Pane>
        <Tab.Pane eventKey={mFooterBanner.eventKey}>
            <AsideHeaderBann bannerData={mFooterBanner} />
        </Tab.Pane>
        <Tab.Pane eventKey={wmenHbanner.eventKey}>
            <AsideHeaderBann bannerData={wmenHbanner} />
            <MobCategories data={wSpringSummer} />
        </Tab.Pane>
        <Tab.Pane eventKey={wCloathing.eventKey}>
            <MobCategories data={wCloathing} />
        </Tab.Pane>
        <Tab.Pane eventKey={wFootweare.eventKey}>
            <MobCategories data={wFootweare} />
        </Tab.Pane>
        <Tab.Pane eventKey={wsportsEssen.eventKey}>
            <MobCategories data={wsportsEssen} />
        </Tab.Pane>
        <Tab.Pane eventKey={wagAccessories.eventKey}>
            <MobCategories data={wagAccessories} />
        </Tab.Pane>
        <Tab.Pane eventKey={wTopBrands.eventKey}>
            <MobCategories data={mTopBrands} />
        </Tab.Pane>
        <Tab.Pane eventKey={wFooterBanner.eventKey}>
            <AsideHeaderBann bannerData={wFooterBanner} />
        </Tab.Pane>

        <Tab.Pane eventKey={applincessbanner.eventKey}>
            <AsideHeaderBann bannerData={applincessbanner} />
            <MobCategories data={appliancesSmall} />
        </Tab.Pane>
        <Tab.Pane eventKey={appliancesLarge.eventKey}>
            <MobCategories data={appliancesLarge} />
        </Tab.Pane>

        <Tab.Pane eventKey={healthcooling.eventKey}>
            <MobCategories data={healthcooling} />
        </Tab.Pane>
        <Tab.Pane eventKey={topBrandappliances.eventKey}>
            <MobCategories data={topBrandappliances} />
        </Tab.Pane>

        <Tab.Pane eventKey={babyBrand.eventKey}>
            <AsideHeaderBann bannerData={babyBrand} />
            <MobCategories data={diapringData} />
        </Tab.Pane>
        <Tab.Pane eventKey={nursingFeedingD.eventKey}>
            <MobCategories data={nursingFeedingD} />
        </Tab.Pane>
        <Tab.Pane eventKey={diapringData.eventKey}>
            <MobCategories data={babytransport} />
        </Tab.Pane>


        <Tab.Pane eventKey={nursery.eventKey}>
            <MobCategories data={nursery} />
        </Tab.Pane>
        <Tab.Pane eventKey={bathingSkinCareD.eventKey}>
            <MobCategories data={bathingSkinCareD} />
        </Tab.Pane>
        <Tab.Pane eventKey={babyKidD.eventKey}>
            <MobCategories data={babyKidD} />
        </Tab.Pane>
        <Tab.Pane eventKey={babyBrands.eventKey}>
            <MobCategories data={babyBrands} />
        </Tab.Pane>
        {/*  */}
        <Tab.Pane eventKey={toysBanners.eventKey}>
            <AsideHeaderBann bannerData={toysBanners} />
            <MobCategories data={sportsOutdoors} />
        </Tab.Pane>
        <Tab.Pane eventKey={indoorEntertainment.eventKey}>
            <MobCategories data={indoorEntertainment} />
        </Tab.Pane>
        <Tab.Pane eventKey={partyEssential.eventKey}>
            <MobCategories data={partyEssential} />
        </Tab.Pane>
        <Tab.Pane eventKey={indoorEntertainment.eventKey}>
            <MobCategories data={indoorEntertainment} />
        </Tab.Pane>
        <Tab.Pane eventKey={babbyToddler.eventKey}>
            <MobCategories data={babbyToddler} />
        </Tab.Pane>
        <Tab.Pane eventKey={toysBrands.eventKey}>
            <MobCategories data={toysBrands} />
        </Tab.Pane>

        <Tab.Pane eventKey={sportsBanners.eventKey}>
            <AsideHeaderBann bannerData={sportsBanners} />
            <MobCategories data={exerciseFitness} />
        </Tab.Pane>

        <Tab.Pane eventKey={SportsNutritions.eventKey}>
            <MobCategories data={SportsNutritions} />
        </Tab.Pane>
        <Tab.Pane eventKey={outDoorsSportst.eventKey}>
            <MobCategories data={outDoorsSportst} />
        </Tab.Pane>
        <Tab.Pane eventKey={scooterSkating.eventKey}>
            <MobCategories data={scooterSkating} />
        </Tab.Pane>
        <Tab.Pane eventKey={sportsBrands.eventKey}>
            <MobCategories data={sportsBrands} />
        </Tab.Pane>



        <Tab.Pane eventKey={healthBanner.eventKey}>
            <AsideHeaderBann bannerData={healthBanner} />
            <MobCategories data={medicalSuplies}
            />
        </Tab.Pane>
        <Tab.Pane eventKey={medicalSuplies.eventKey}>
            <MobCategories data={medicalSuplies} />
        </Tab.Pane>
        <Tab.Pane eventKey={selfMedication.eventKey}>
            <MobCategories data={selfMedication} />
        </Tab.Pane>
        <Tab.Pane eventKey={VitaminsAndSuplements.eventKey}>
            <MobCategories data={VitaminsAndSuplements} />
        </Tab.Pane>
        <Tab.Pane eventKey={familyPlanning.eventKey}>
            <MobCategories data={familyPlanning} />
        </Tab.Pane>
    </>
}

export default SubSubCateList