import png from '../../img/lampa.jpg';
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { MdEmail, MdLock } from "react-icons/md";
import './Signup.css';
function Signin() {
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
                <form className='form form__container'>
                    <label className='form__field input-field input-field__box' htmlFor='email'>
                        <label className='input-field__label'>
                            <MdEmail />
                        </label>
                        <input
                            className='input-field__input'
                            id='email'
                            placeholder='Email'
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
                   
                    <button className='form__button button button_primary'>
                        Login
                    </button>
                </form>
                <div className='divider divider__wrapper'>
                    <div className='divider__line' />
                    <div className='divider__title'>
                        or
                    </div>
                    <div className='divider__line' />
                </div>
                <section className='buttons buttons__col'>
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
                <footer className='forms__footer footer'>
                    <span className='footer__desc'>
                        Do you have an account?
                    </span>
                    <a className='footer__link'>
                        <strong>
                            Sign Up
                        </strong>
                    </a>
                </footer>

            </main>


        </section>
    )
}

export default Signin;