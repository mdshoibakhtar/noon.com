import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div style={{ padding: "30px" }}>

            </div>
            <nav className="sc-6dac14df-0 " id="kyaZRu1" >
                <Link to="/">
                    <div
                        data-qa="div_bottom_sheet_Home"
                        className="sc-6dac14df-1 "
                        id="fTPOtk1"
                    >
                        <span id="iconContain1">
                            <img
                                src={
                                    "https://f.nooncdn.com/s/app/com/noon/images/bottomNav/home-inactive.svg"
                                }
                                alt="Home"
                                width="22px"
                                height="22px"
                                className="sc-b51db3f-1 inyQUi"
                            />
                        </span>
                        <span className="label">Home</span>
                    </div>
                </Link>
                <Link to="/category">
                    <div
                        data-qa="div_bottom_sheet_Categories"
                        className="sc-6dac14df-1 "
                        id="fTPOtk1"
                    >
                        <span id="iconContain1">
                            <img
                                src={
                                    "https://f.nooncdn.com/s/app/com/noon/images/bottomNav/categories-v2-inactive.svg"
                                }
                                alt="Categories"
                                width="22px"
                                height="22px"
                                className="sc-b51db3f-1 inyQUi"
                            />
                        </span>
                        <span className="label">Categories</span>
                    </div>
                </Link>
                <Link>
                    <div
                        data-qa="div_bottom_sheet_Beauty deals"
                        className="sc-6dac14df-1 "
                        id="fTPOtk1"
                    >
                        <span id="iconContain1">
                            <img
                                src={
                                    "https://f.nooncdn.com/s/app/com/noon/images/bottomNav/dynamic/beauty-makeup/beauty-makeup@3x.png"
                                }
                                alt="Beauty deals"
                                width="22px"
                                height="22px"
                                className="sc-b51db3f-1 inyQUi"
                            />
                        </span>
                        <span className="label">Beauty deals</span>
                    </div>
                </Link>
                <Link>
                    <div
                        data-qa="div_bottom_sheet_My Account"
                        className="sc-6dac14df-1 "
                        id="fTPOtk1"
                    >
                        <span id="iconContain1">
                            <img
                                src={
                                    "https://f.nooncdn.com/s/app/com/noon/images/bottomNav/account-inactive.svg"
                                }
                                alt="My Account"
                                width="22px"
                                height="22px"
                                className="sc-b51db3f-1 inyQUi"
                            />
                        </span>
                        <span className="label">My Account</span>
                    </div>
                </Link>
                <Link>
                    <div
                        data-qa="div_bottom_sheet_Cart"
                        className="sc-6dac14df-1 "
                        id="fTPOtk1"
                    >
                        <span id="iconContain1">
                            <img
                                src={
                                    "https://f.nooncdn.com/s/app/com/noon/images/bottomNav/cart-inactive.svg"
                                }
                                alt="Cart"
                                width="22px"
                                height="22px"
                                className="sc-b51db3f-1 inyQUi"
                            />
                        </span>
                        <span className="label">Cart</span>
                    </div>
                </Link>
            </nav>
        </>


    );
}

export default Footer;