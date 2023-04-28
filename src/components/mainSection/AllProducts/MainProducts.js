import { beautyData } from "./AllProductsMockDatas/mockDBeauty";
import { lapData } from "./AllProductsMockDatas/mockDLaptoAcc";
import { mobData } from "./AllProductsMockDatas/mockDMobAcc";
import { toysData } from "./AllProductsMockDatas/mockDataToys";
import { babayMustData } from "./AllProductsMockDatas/mockDbabyMust";
import { elecData } from "./AllProductsMockDatas/mockDelectronics";
import { fragrancesData } from "./AllProductsMockDatas/mockDfragrances";
import { kitAppData } from "./AllProductsMockDatas/mockDkit&homeApp";
import { homeAppData } from "./AllProductsMockDatas/mockHomeApp";
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
            {/*<Products data={fragrancesData} />
            <Products data={fragrancesData} /> */}
            {/* <Products data={fragrancesData} />
            <Products data={fragrancesData} />
            <Products data={fragrancesData} />
            <Products data={fragrancesData} /> */}
        </>
    );
}

export default MainProducts;