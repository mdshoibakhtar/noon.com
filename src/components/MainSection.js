import { Asponsored } from "./mainSection/Asponsored/Asponsored"
import { RamdanOff } from "./mainSection/RamdanOff"
import { StaticBann } from "./mainSection/StaticBann"
import { Wrapper } from "./mainSection/Wrapper"
import { Beauty } from "./mainSection/beauty/Beauty"
import { beautyD } from "./mainSection/beauty/mockData"
import { DealNoon } from "./mainSection/dealOnlyOnNoon/NoonDeals"
import { IdShop } from "./mainSection/idShop/IdShop"
import { idShop } from "./mainSection/idShop/mockData"
import { MegaDeals } from "./mainSection/megaDeals/Megadeals"
import { Recommended } from "./mainSection/recommendedComp/Recommended"
const idData = idShop.data
const beauty = beautyD.data
export const MainSection = () => {
    return (
        <main>
            <StaticBann />
            <Wrapper />
            <RamdanOff />
            <Asponsored />
            <Recommended />
            <MegaDeals />
            <IdShop data={idData} />
            <Beauty data={beauty} />
            <DealNoon />
        </main>
    )
}