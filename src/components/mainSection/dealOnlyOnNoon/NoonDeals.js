import { noonDeals } from "./mockData"
import gif from "../../assetes/images/noonDimg/noonDealsImg.gif"
export const DealNoon = () => {
    const data = noonDeals.data
    return (
        <div className="bg-fi pt-1 px-3">
            <div className="mb-2"><img src={gif} className="fw-bolder" alt="mT" /></div>
            <div className="row">
                {data.map((value) => {
                    return <div className="col-6">
                        <figure>
                            <img src={value.img} alt="mdeals" />
                        </figure>
                    </div>

                })}

            </div>
        </div>
    )
}