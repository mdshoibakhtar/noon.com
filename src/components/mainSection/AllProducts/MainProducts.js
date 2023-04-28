import { beautyData } from "./AllProductsMockDatas/mockDBeauty";
import { healthNutData } from "./AllProductsMockDatas/mockDHealthNut";
import { lapData } from "./AllProductsMockDatas/mockDLaptoAcc";
import { mobData } from "./AllProductsMockDatas/mockDMobAcc";
import { toysData } from "./AllProductsMockDatas/mockDataToys";
import { babayMustData } from "./AllProductsMockDatas/mockDbabyMust";
import { elecData } from "./AllProductsMockDatas/mockDelectronics";
import { eyesWearData } from "./AllProductsMockDatas/mockDeyeWear";
import { fragrancesData } from "./AllProductsMockDatas/mockDfragrances";
import { furnituresData } from "./AllProductsMockDatas/mockDfurniture";
import { kitAppData } from "./AllProductsMockDatas/mockDkit&homeApp";
import { sportsData } from "./AllProductsMockDatas/mockDsports&outdoors";
import { stationaryData } from "./AllProductsMockDatas/mockDstationary&offSupp";
import { watchesData } from "./AllProductsMockDatas/mockDwatches";
import { homeAppData } from "./AllProductsMockDatas/mockHomeApp";
import { noonBrandsData } from "./AllProductsMockDatas/noonBrandsFav";
import Products from "./Products";

function MainProducts() {
    return (
        <>
            <Products data={elecData} />
            <Products data={mobData} />
            <Products data={lapData} />
            <Products data={beautyData} />
            <Products data={fragrancesData} />
            <Products data={kitAppData} />
            <Products data={homeAppData} />
            <Products data={babayMustData} />
            <Products data={toysData} />
            <Products data={sportsData} />
            <Products data={noonBrandsData} />
            <Products data={watchesData} />
            <Products data={eyesWearData} />
            <Products data={healthNutData} />
            <Products data={furnituresData} />
            <Products data={stationaryData} />
        </>
    );
}

export default MainProducts;