import './CV.css';
import {
    MdContactPage,
    MdEmail,
    MdSmartphone,
    MdLocationPin
} from "react-icons/md";
import avatar from "../../img/my-avatar.jpg";
import { FaTelegram, FaLinkedin, FaCogs } from "react-icons/fa";

function Content({ items }) {
    return (
        <div className='section__items'>
            {items.map((work, i) => {
                return (
                    <section key={i} className="content__block">
                        <header className='content__header'>
                            <h3 className='content-header__title'>
                                {work.title}
                            </h3>
                            <h4 className='content-header__subtitle'>
                                {work.subtitle}
                            </h4>
                            <div className='content-header__date'>
                                {work.date}
                            </div>
                        </header>
                        <section className='content__text'>
                            <p>
                                {work.desc.short}
                            </p>
                            <span>Responsibilities:</span>
                            <ul>

                                {work.desc.responsibilities.map((item, i) => {
                                    return <li>{item}</li>
                                })}
                            </ul>
                            <p>
                                {work.desc.full}
                            </p>

                        </section>
                    </section>
                )
            })}
        </div>

    )
}

function CV({ user }) {
    return (
        <section className="cv-page">
            <section className="cv-page__body">
                <section className="cv-profile__content">
                    <section className='cv-about__block'>
                        <header className='cv-about__header'>
                            <img className='cv-about__avatar' src={avatar} />
                            <section className='cv-about__desc'>
                                <h1 className='about-desc__title'>
                                    {user.name}
                                </h1>
                                <h3 className='about-desc__subtitle'>
                                    {user.job}
                                </h3>
                            </section>
                        </header>
                        <section className='cv-about__text'>
                            {user.about_me}
                        </section>
                    </section>
                </section>
                <section className="section work-section">
                    <header className='section__header'>
                        <div className='section__icon'>

                        </div>
                        <div className='section__title'></div>
                    </header>

                </section>
                <section className="section education-section">
                    <header className='section__header'>
                        <div className='section__icon'>

                        </div>
                        <div className='section__title'></div>
                    </header>
                    <div className='section__items'>
                        <Content items={user.work_expirence} />
                    </div>
                </section>
            </section>
            <section className="cv-page__asside">
                <section className="cv-contacts asside__block">
                    <header className="header asside-header">
                        <div className="header__icon asside-header__icon">
                            <MdContactPage />
                        </div>
                        <h2 className="header__title">
                            Contacts
                        </h2>
                    </header>
                    <section className="cv-contacts__list">
                        <div className="list__icon-item cv-contacts__item">
                            <div className="icon-item__icon cv-contacts__icon">
                                <MdEmail />
                            </div>
                            <span className="icon-item__text">
                                {user.contacts.email}
                            </span>
                        </div>
                        <div className="list__icon-item cv-contacts__item">
                            <div className="icon-item__icon cv-contacts__icon">
                                <MdSmartphone />
                            </div>
                            <span className="icon-item__text">
                                {user.contacts.phone}
                            </span>
                        </div>
                        <div className="list__icon-item cv-contacts__item">
                            <div className="icon-item__icon cv-contacts__icon">
                                <MdLocationPin />
                            </div>
                            <span className="icon-item__text">
                                {user.contacts.location}
                            </span>
                        </div>
                        <div className="list__icon-item cv-contacts__item">
                            <div className="icon-item__icon cv-contacts__icon">
                                <FaLinkedin />
                            </div>
                            <span className="icon-item__text">
                                {user.contacts.linkedin}
                            </span>
                        </div>
                        <div className="list__icon-item cv-contacts__item">
                            <div className="icon-item__icon cv-contacts__icon">
                                <FaTelegram />
                            </div>
                            <span className="icon-item__text">
                                {user.contacts.telegram}
                            </span>
                        </div>
                    </section>
                </section>
                <section className="skills asside__block">
                    <header className="header asside-header">
                        <div className="header__icon asside-header__icon">
                            <FaCogs />
                        </div>
                        <h2 className="header__title">
                            Skills
                        </h2>
                    </header>
                    <section className='skills__list'>
                        {user.skills.map((skill, i) => {
                            return (
                                <div key={i} className='skills__item'>
                                    {skill}
                                </div>
                            )
                        })}
                    </section>
                </section>
                <section className="courses asside__block">

                </section>
            </section>
        </section >
    )
}

export default CV;