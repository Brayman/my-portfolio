import './CV.css';
import {
    MdContactPage,
    MdEmail,
    MdSmartphone,
    MdLocationPin,
    MdOutlineHistoryEdu
} from "react-icons/md";
import avatar from "../../img/my-avatar.jpg";
import {
    FaTelegram,
    FaLinkedin,
    FaCogs,
    FaBriefcase,
    FaUserGraduate
} from "react-icons/fa";
function Header({ title, subtitle, date }) {
    return (
        <header className='content__header'>
            <h3 className='content-header__title'>
                {title}
            </h3>
            <h4 className='content-header__subtitle'>
                {subtitle}
            </h4>
            <div className='content-header__date'>
                {date}
            </div>
        </header>
    )
}

function Content({ items }) {
    if (!Array.isArray(items)) {
        return (
            <section className="content__block">
                <Header {...items} />
            </section>
        )
    } else return (
        <div className='section__items'>
            {items.map((work, i) => {
                return (
                    <section key={i} className="content__block">
                        <Header {...work} />
                        <section className='content__text'>
                            <p>
                                {work.desc.short}
                            </p>
                            <span>Responsibilities:</span>
                            <ul>

                                {work.desc.responsibilities.map((item, i) => {
                                    return <li key={i}>{item}</li>
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
                            <FaBriefcase />
                        </div>
                        <h2 className='section__title'>
                            Work Expirence
                        </h2>
                    </header>
                    <div className='section__items'>
                        <Content items={user.work_expirence} />
                    </div>
                </section>
                <section className="section education-section">
                    <header className='section__header'>
                        <div className='section__icon'>
                            <FaUserGraduate />
                        </div>
                        <h2 className='section__title'>
                            Eeducation
                        </h2>
                    </header>
                    <div className='section__items'>
                        <Content items={user.education} />
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
                    <section className="asside__list cv-contacts__list">
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
                    <section className='asside__list skills__list'>
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
                    <header className="header asside-header">
                        <div className="header__icon asside-header__icon">
                            <MdOutlineHistoryEdu />
                        </div>
                        <h2 className="header__title">
                            Courses
                        </h2>
                    </header>
                    <section className='asside__list'>
                        {user.courses.map(course => {
                            return (
                                <section key={course.title} className='course'>
                                    <header className='course__title'>
                                        {course.title}
                                    </header>
                                    <div className='course__subtitle'>
                                        <div className='course__company'>
                                            {course.subtitle}
                                        </div>
                                        <div className='course__date'>
                                            {course.date}
                                        </div>
                                    </div>
                                </section>
                            )
                        })}
                    </section>
                </section>
            </section>
        </section >
    )
}

export default CV;