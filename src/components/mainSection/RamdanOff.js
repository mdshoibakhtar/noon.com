import r1 from "../assetes/images/ramdan-offers.png"
export const RamdanOff = () => {
    return (
        <div className="pt-1 px-3">
            <img src={r1} alt="ram-off" width={100 + "%"} />
            <div className="text-end"><span className="fs-10">Sponsored</span></div>
        </div>
    )
}