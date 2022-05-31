import "./portfolio.css"
import {
    RiArrowDownSLine,
    RiArrowRightSLine,
    RiFolder3Fill,
    RiMailFill,
    RiPhoneFill
} from "react-icons/ri";
import Accordion, { Item } from "./Accordion/Accordion";
function Main({ user }) {
    return (
        <section className="p-page">
            <section className="p-page__menu p-menu ">
                <header className="p-menu__header">
                    artem-rakitskiy
                </header>
                <Accordion prev>
                    personal-info
                    <Item>
                        <Accordion>
                            <>
                                <RiFolder3Fill />
                                <span>bio</span>
                            </>
                            <Item>
                                about_me
                            </Item>
                        </Accordion>
                    </Item>
                    <Item>
                        <Accordion>
                            <>
                                <RiFolder3Fill />
                                <span>education</span>
                            </>
                            <Item>
                                about_me
                            </Item>
                        </Accordion>
                    </Item>

                </Accordion>
                <Accordion prev>
                    contacts
                    <Item>
                        <>
                            <RiPhoneFill />
                            {user.contacts.phone}
                        </>
                    </Item>
                </Accordion>
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