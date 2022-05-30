import "./portfolio.css"
import {
    RiArrowDownSLine,
    RiArrowRightSLine,
    RiFolder3Fill,
    RiMailFill,
    RiPhoneFill
} from "react-icons/ri";
function Main({ user }) {
    return (
        <section className="p-page">
            <section className="p-page__menu p-menu ">
                <header className="p-menu__header">
                    artem-rakitskiy
                </header>
                <section className="p-menu__item p-accordion">
                    <header className="p-accordion__title">
                        <RiArrowDownSLine />
                        <span>
                            personal-info
                        </span>
                    </header>

                    <div className="p-accordion__item">
                        <RiFolder3Fill />
                        <div className="acrd-item__title p-accordion__item">
                            <RiFolder3Fill />
                            <span>
                                bio
                            </span>
                        </div>
                    </div>
                </section>
                <section className="p-accordion">
                    <header className="p-accordion__header p-accordion__header_title">
                        <RiArrowDownSLine />
                        <span>
                            contacts
                        </span>
                    </header>
                    <div className="p-accordion__body">
                        <div className="p-accordion__item">
                            <RiMailFill />
                            <span>
                                {user.contacts.email}
                            </span>
                        </div>
                    </div>
                </section>
            </section>
            <section className="p-page__main p-main">
                <header className="p-page__header p-header">
                    <div className="p-header__item">
                        _hello
                    </div>
                    <div className="p-header__item p-header__item_active" >
                        _projects
                    </div>
                    <div className="p-header__item p-header__item_contact">
                        _contact-me
                    </div>
                </header>
                <div className="p-tabs">

                </div>
                <textarea className="p-text" value={user.about_me} />

            </section>

        </section>
    )
}
export default Main;