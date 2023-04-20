import Slider from "react-slick";
import { AsponsoredData } from "./mockData";
import { Link } from "react-router-dom";
export const Asponsored = () => {
    const data = AsponsoredData.data
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        draggable: true,
        autoplaySpeed: 1800,
        rows: 2,
        responsive: [

            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4.5,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <Slider {...settings} className="">
            {data.map((value) => {
                return <div key={value.id} className="p-2" >
                    <Link>
                        <img src={value.sponImg} alt="spon-img" width={100 + "%"} />
                    </Link>
                </div>
            })}
        </Slider>
    );
}