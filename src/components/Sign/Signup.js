import png from '../../img/lampa.jpg';
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import './Signup.css';
function SignUp() {
    return (
        <section className='page'>
            <header className='header'>
                <img
                    className='header__img'
                    src={png}
                />
                <div className='header__content header-content'>
                    <h1 className='header-content__title'>
                        Sign Up
                    </h1>
                    <p className='header-content__text'>
                        Lorem ipsum dolor sit amet, consectetur
                        adipiscing elit magna aliqua.
                    </p>
                </div>
            </header>

            <main className='forms'>
                <section className='buttons buttons__row'>
                    <button className='buttons__button buttons__button_google'>
                        <FaGoogle />
                    </button>
                    <button className='buttons__button buttons__button_facebook'>
                        <FaFacebook />
                    </button>
                    <button className='buttons__button buttons__button_apple'>
                        <FaApple />
                    </button>
                </section>
                <div className='divider divider__wrapper'>
                    <div className='divider__line' />
                    <div className='divider__title'>
                        or
                    </div>
                    <div className='divider__line' />
                </div>
                <form className='form form__container'>
                    <label className='form__field input-field input-field__box' htmlFor='email'>
                        <label className='input-field__label'>
                            <MdEmail />
                        </label>
                        <input
                            className='input-field__input'
                            id='email'
                            placeholder='Email ID'
                        />
                    </label>
                    <label className='form__field input-field input-field__box' htmlFor='password' >
                        <label className='input-field__label'>
                            <MdLock />
                        </label>
                        <input
                            className='input-field__input'
                            id='password' placeholder='Password'
                        />
                    </label>
                    <label className='form__field input-field input-field__box' htmlFor='name' >
                        <label
                            className='input-field__label'
                            htmlFor='name'
                        >
                            <MdEmail />
                        </label>
                        <input
                            className='input-field__input'
                            id='name' placeholder='Full name'
                        />
                    </label>
                    <label
                        className='form__field input-field input-field__box'
                        htmlFor='repeat-password'
                    >
                        <label className='input-field__label'>
                            <MdLock />
                        </label>
                        <input
                            className='input-field__input'
                            id='repeat-password' placeholder='Repeat Password'
                        />
                    </label>
                    <button className='form__button button button_primary'>Sign up</button>
                </form>

                <footer className='forms__footer footer'>
                    <span className='footer__desc'>
                        Do you have an account?
                    </span>
                    <a className='footer__link'>
                        <strong>
                            Login
                        </strong>
                    </a>
                </footer>

            </main>


        </section>
    )
}

export default SignUp