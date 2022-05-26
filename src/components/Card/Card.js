import "./Card.css";
import house_img from "../../img/next-gren.jpg";
import {
    MdKeyboardArrowLeft,
    MdShare,
    MdBathroom,
    MdHouse,
    MdOpenInFull,
    MdFmdGood,
    MdOutgoingMail
} from "react-icons/md";

import {
    BsBookmarkPlus,
    BsThreeDots,
    BsFillStarFill,
    BsFillTelephoneFill
} from "react-icons/bs";
import {
    RiHospitalFill,
    RiPlaneLine
} from "react-icons/ri";
import {
    FaSchool,
    FaBed
} from "react-icons/fa";


function Item({ children, title, subtitle }) {
    return (
        <div className="item item__container">
            {children}
            <div className="item__title">
                {title}
            </div>
            {subtitle ?
                <div className="item__subtitle">
                    {subtitle}
                </div> :
                null
            }

        </div>
    )
}

function Card() {
    return (
        <section className="page">
            <header className="page__header header">
                <button className="header__button icon-button icon-button__back">
                    <MdKeyboardArrowLeft />
                </button>
                <button className="header__button icon-button icon-button__share">
                    <MdShare />
                </button>
                <button className="header__button icon-button icon-button__bookmark">
                    <BsBookmarkPlus />
                </button>
                <button className="header__button icon-button icon-button__secondary icon-button__more">
                    <BsThreeDots />
                </button>
            </header>
            <section className="card">
                <header className="card__header header">
                    <div className="header__title">
                        <h2 className="header__heading">
                            Ayana Home Stay With Family
                        </h2>
                        <span className="header__subtitle">
                            Old Sukabumi No 12
                        </span>
                    </div>
                    <div className="header__aside">
                        <div className="raiting__box">
                            <BsFillStarFill />
                            4.9
                        </div>
                        <button className="icon-button icon-button__phone">
                            <BsFillTelephoneFill />
                        </button>
                    </div>
                </header>
                <section className="desc desc__container">
                    <h4 className="desc__title">
                        Introdaction
                    </h4>
                    <p className="desc__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium risus vitae scelerisque sodales. Aenean tempus hendrerit nisi id pellentesque. Phasellus bibendum neque ut urna.
                    </p>
                </section>
                <img className="card__image" src={house_img} alt="card image" />
                <section className="card__utilites">
                    <h4 className="utilites__title">
                        Utilites
                    </h4>
                    <Item
                        title="Hospital"
                        subtitle="3 Minutes"
                    >
                        <RiHospitalFill className="item__icon_secondary" />
                    </Item>
                    <Item
                        title="School"
                        subtitle="15 Minutes"
                    >
                        <FaSchool className="item__icon_secondary" />
                    </Item>
                    <Item
                        title="Airport"
                        subtitle="3 Minutes"
                    >
                        <RiPlaneLine className="item__icon_secondary" />
                    </Item>
                </section>
                <section className="desc desc__container">
                    <h4 className="desc__title">
                        Description
                    </h4>
                    <p className="desc__text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pretium risus vitae scelerisque sodales. Aenean tempus hendrerit nisi id pellentesque. Phasellus bibendum neque ut urna.
                    </p>
                </section>
                <section className="card__utilites">
                    <h4 className="utilites__title">
                        Utilites
                    </h4>
                    <Item title="2 Bedroom">
                        <FaBed className="item__icon_primary" />
                    </Item>
                    <Item title="2 Bathrooms">
                        <MdBathroom className="item__icon_primary" />
                    </Item>
                    <Item title="1200 SQFT">
                        <MdOpenInFull className="item__icon_primary" />
                    </Item>
                    <Item title="Flat">
                        <MdHouse className="item__icon_primary" />
                    </Item>
                </section>
                <section className="contacts contacts__list">
                    <h4 className="contacts__header">
                        Call Center
                    </h4>
                    <div className="contacts__buttons">
                        <button className="contact__button button button_secondary">
                            <div className="contact__icon">
                                <BsFillTelephoneFill />
                            </div>
                            <span className="contact__desc">
                                +11 22 33 44 55
                            </span>
                        </button>
                        <button className="contact__button button button_secondary">
                            <div className="contact__icon">
                                <MdOutgoingMail />
                            </div>
                            <span className="contact__desc">
                                Example@xample.com
                            </span>
                        </button>
                        <button className="contact__button button button_secondary">
                            <div className="contact__icon">
                                <MdFmdGood />
                            </div>
                            <span className="contact__desc">
                                Realstate UA No 213
                            </span>
                        </button>
                    </div>
                </section>
                <button className="card__button button button_primary">
                    Apply to buy
                </button>
            </section>
        </section>
    )
}
export default Card;