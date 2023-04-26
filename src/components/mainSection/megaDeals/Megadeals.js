import mTop from "../../assetes/images/megaDealimg/dealTimer-top.png"
import { megaDeals } from "./mockData"
export const MegaDeals = () => {
    const data = megaDeals.data
    return (
        <div className="bg-mega pt-1 px-3">
            <div className="mb-2"><img src={mTop} className="fw-bolder" alt="mT" /></div>
            <div className="row">
                {data.map((value) => {
                    return <div className="col-6" key={value.id}>
                        <figure>
                            <img src={value.img} alt="mdeals" />
                        </figure>
                    </div>

                })}

            </div>
        </div>
    )
}