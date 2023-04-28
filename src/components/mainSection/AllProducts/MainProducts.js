import { beautyData } from "./AllProductsMockDatas/mockDBeauty";
import { lapData } from "./AllProductsMockDatas/mockDLaptoAcc";
import { mobData } from "./AllProductsMockDatas/mockDMobAcc";
import { elecData } from "./AllProductsMockDatas/mockDelectronics";
import { fragrancesData } from "./AllProductsMockDatas/mockDfragrances";
import Products from "./Products";

function MainProducts() {
    return (
        <>
            <Products data={elecData} />
            <Products data={mobData} />
            <Products data={lapData} />
            <Products data={beautyData} />
            <Products data={fragrancesData} />
        </>
    );
}

export default MainProducts;