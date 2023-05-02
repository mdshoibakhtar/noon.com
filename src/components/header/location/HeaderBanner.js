import HBann from "../../assetes/images/headerImg/headerBanner-1.gif"
export const HeadBanner = () => {
    return <div className="row pt-2 px-3 mx-1 mt-2 mb-1">
        <div className="col px-0 pt-2">
            <img src={HBann} alt="H-bann" width={100 + '%'} />
        </div>
    </div>
}