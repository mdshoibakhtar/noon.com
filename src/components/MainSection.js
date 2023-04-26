import { Asponsored } from "./mainSection/Asponsored/Asponsored"
import { Clearance } from "./mainSection/Clearence/Clearance"
import { clearenceData } from "./mainSection/Clearence/mockData"
import { RamdanOff } from "./mainSection/RamdanOff"
import { StaticBann } from "./mainSection/StaticBann"
import { Trending } from "./mainSection/Trending/Trending"
import { Wrapper } from "./mainSection/Wrapper"
import { Beauty } from "./mainSection/beauty/Beauty"
import { beautyD } from "./mainSection/beauty/mockData"
import { DealNoon } from "./mainSection/dealOnlyOnNoon/NoonDeals"
import { IdShop } from "./mainSection/idShop/IdShop"
import { idShop } from "./mainSection/idShop/mockData"
import { MegaDeals } from "./mainSection/megaDeals/Megadeals"
import { NoonGrocery } from "./mainSection/noonGrocery/NoonGrocery"
import { Recommended } from "./mainSection/recommendedComp/Recommended"
import { recomData } from "./mainSection/recommendedComp/mockData"
const idData = idShop.data
const beauty = beautyD.data
const recdata = recomData.data
const clearData = clearenceData.data
export const MainSection = () => {
    return (
        <main>
            <StaticBann />
            <Wrapper />
            <RamdanOff />
            <Asponsored />
            <Recommended recData={recdata} />
            <MegaDeals />
            <IdShop data={idData} />
            <Beauty data={beauty} />
            <DealNoon />
            <Trending />
            <Clearance clearData={clearData} />
            {/* <NoonGrocery /> */}
        </main>
    )
}