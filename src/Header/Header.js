import CoolPic from '../assets/images/cool_pic.jpeg'
import Sprite from '../assets/SVG/symbol-defs.svg'

const Header = props => {
    return (
        <div className="header">
            <img className="header__image" src={CoolPic} alt="This is me" />
            <div className="container">
                <h1 className="container__title">Hi, my name is Subhanga Upadhyay.</h1>
                <p>
                    I am a computer science student who loves the process of learning and getting better at things. My
                    pursuit of gaining experience in the craft of programming has allowed me the opprotunity of working
                    with many different technologies. <br />
                    Tools I currently enjoy working with:
                </p>
                <div className="container__blast-grid">
                    <div className="container__blast-grid__element">
                        React
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-react`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        Django
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-django`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">C programming
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-c`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        SCSS
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-sass`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        TensorFlow
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-tensorflow`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">Linux
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-tux`}></use></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header