import "./List.css";
import avatar from "../../img/my-avatar.jpg";
import nextGreen from "../../img/next-gren.jpg";
import {
    RiBuilding4Fill,
    RiCommunityFill,
    RiBuildingFill,
    RiBuilding2Fill
} from "react-icons/ri";
import { MdFmdGood } from "react-icons/md";
import {
    BsThreeDots,
    BsFillStarFill
} from "react-icons/bs";

function Tag({ icon, children }) {
    return (
        <div className="feature">
            <div className="feature__icon">
                {icon}
            </div>
            <div className="feature__name">
                {children}
            </div>
        </div>
    )
}
function Archive(params) {
    return (
        <section>
            <img className="card__image_large" />
            <section className="card__features features__row">
                <Tag icon={<RiBuilding4Fill />}>Condo</Tag>
                <Tag icon={<RiCommunityFill />}>Resort</Tag>
                <Tag icon={<RiBuildingFill />}>Office</Tag>
                <Tag icon={<RiBuilding2Fill />}>Urban</Tag>
            </section>
        </section>
    )
}
function CardPreview({ type, rating, name, desc, price, img }) {

    return (
        <section className="card-preview__container">
            <img className="card-preview__image_small" src={img} />
            <div className="card-preview__options">
                <div className="card-preview__item">
                    {type}
                </div>
                <div className="card-preview__option">
                    <BsThreeDots />
                </div>
            </div>
            <header className="card-preview__header">
                <h4 className="card-preview__title">
                    {name}
                </h4>
                <div className="card-preview__subtitle">
                    {desc}
                </div>
            </header>
            <div className="card-preview__content">
                <div className="card-preview__price">
                    ${price}
                </div>
                <div className="card-preview__raiting raiting__box">
                    <BsFillStarFill />
                    {rating}
                </div>
            </div>
        </section>
    )
}
function List() {
    const data = {
        type: "Apartment",
        rating: 4.9,
        name: "Next Green home",
        img: nextGreen,
        price: 50500,
        desc: "Apartments in ecologically clean area in Batumi"
    }
    return (
        <section className="page">
            <header className="header page__header">
                <label className="input-field input-field__box serch__field" htmlFor="search">
                    <label className="input-field__label">
                        <MdFmdGood />
                    </label>
                    <input className="input-field__input" />
                </label>
                <img
                    className="avatar avatar__header_mini"
                    src={avatar}
                />
            </header>
            <section className="content__container">
                <CardPreview {...data} />
                <CardPreview {...data} />
                <CardPreview {...data} />
                <CardPreview {...data} />
                <CardPreview {...data} />
                <CardPreview {...data} />
            </section>
        </section>
    )
}

export default List