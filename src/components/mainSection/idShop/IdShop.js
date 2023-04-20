import Slider from "react-slick";
import { Link } from "react-router-dom";
import idpng from "../../assetes/images/idShopImg/idShopImg.png"
import idmpng from "../../assetes/images/idShopImg/id-m-png.png"
import idbpng from "../../assetes/images/idShopImg/id-b-png.png"
export const IdShop = ({ data }) => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        draggable: true,
        autoplaySpeed: 1800,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 3.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return <div>
        <div className="pt-3 px-3">
            <figure>
                <img src={idpng} alt="idpng" />
            </figure>
        </div>

        <Slider {...settings} className="">
            {data.map((value) => {
                return <div key={value.id} className="p-2" >
                    <Link>
                        <img src={value.img} alt="spon-img" width={100 + "%"} />
                    </Link>
                </div>
            })}
        </Slider>

        <div className="pt-3 px-3">
            <figure>
                <img src={idmpng} alt="idmpng" />
            </figure>
            <figure>
                <img src={idbpng} alt="idbpng" />
            </figure>
            <div className="text-end"><span className="fs-10">Sponsored</span></div>
        </div>

    </div>
}