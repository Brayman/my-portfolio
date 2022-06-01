import grafx from "../../../img/grafx.png";
function Card({data}) {
    return (
        <section className="p-gallary__card p-card ">
            <img className="p-card__preview" src={grafx}/>
            <div className="p-card__desc">
                {data.desc.short}
            </div>
            <button className="p-button p-card__button">
                view_project
            </button>
        </section>
    )
}
export default Card;