import Slider from "react-slick";
import { Link } from "react-router-dom";
import idpng from "../../assetes/images/beautyImg/beautyBImg.png"
export const Beauty = ({ data }) => {
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
        <div className=" px-3">
            <figure>
                <img src={idpng} alt="idpng" />
            </figure>
        </div>

        <Slider {...settings} className="">
            {data.map((value) => {
                return <div key={value.id} className="px-2 py-2" >
                    <Link>
                        <img src={value.img} alt="spon-img" width={100 + "%"} />
                    </Link>
                </div>
            })}
        </Slider>



    </div>
}
