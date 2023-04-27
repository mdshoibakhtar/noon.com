import { WomensFash } from "./fashion/WomensFash";
import { womenFashs } from "./fashion/fashMockDatas/mockData";
import { kidsFashion } from "./fashion/fashMockDatas/mockDataKids";
import { menFashion } from "./fashion/fashMockDatas/mockDataMeans";
import btrans from "../../assetes/images/baby-trans.png";
import MainProducts from "../AllProducts/MainProducts";


export function WomensOffMain() {
    return (
        <>
            <WomensFash data={womenFashs} />
            <WomensFash data={menFashion} />
            <WomensFash data={kidsFashion} />
            <div className="pt-3 px-3" >
                <figure >
                    <img src={btrans} alt="idbpng" />
                </figure>
            </div>
            <MainProducts />
        </>
    );
}

