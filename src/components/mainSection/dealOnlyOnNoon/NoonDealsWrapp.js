import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";
import w1 from "../../assetes/images/dealNoonsWrap/wrap-0.gif"
import w2 from "../../assetes/images/dealNoonsWrap/wrap-1.gif"
import w3 from "../../assetes/images/dealNoonsWrap/wrap-2.gif"
import w4 from "../../assetes/images/dealNoonsWrap/wrap-3.gif"
import { Link } from "react-router-dom";
export const NoonDealsWrap = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 1500,
        autoplay: true,
        draggable: true,
    };
    return (
        <div>
            <Slider {...settings}>
                <div>
                    <Link>
                        <img src={w1} alt="1st" width={100 + "%"} height={100 + '%'} />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src={w2} alt="1st" width={100 + "%"} height={100 + '%'} />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src={w3} alt="1st" width={100 + "%"} height={100 + '%'} />
                    </Link>
                </div>
                <div>
                    <Link>
                        <img src={w4} alt="1st" width={100 + "%"} height={100 + '%'} />
                    </Link>
                </div>
            </Slider>
        </div>
    )
}