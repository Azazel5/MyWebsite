import CoolPic from '../Assets/images/cool_pic.jpeg'
import Sprite from '../Assets/SVG/symbol-defs.svg'

const Header = props => {
    return (
        <div className="header">
            <div className="container">
                <img className="container__image" src={CoolPic} alt="This is me" />
                <h1 className="container__title">Hi, my name is Subhanga Upadhyay.</h1>
                <p>
                    I am a computer science student who loves the process of learning and getting better at things. My
                    pursuit of gaining experience in the craft of programming has allowed me the opprotunity of working
                    with many different technologies. <br />
                    Tools I currently enjoy working with:
                </p>
                <div className="container__blast-grid">
                    <div className="container__blast-grid__element">
                        <span>React</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-react`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        <span>Django</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-django`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        <span>C programming</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-c`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        <span>SCSS</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-sass`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        <span>TensorFlow</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-tensorflow`}></use></svg>
                    </div>

                    <div className="container__blast-grid__element">
                        <span>Linux</span>
                        <svg className="svg-icon"><use xlinkHref={`${Sprite}#icon-tux`}></use></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header