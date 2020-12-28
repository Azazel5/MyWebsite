import CoolPic from '../Assets/images/cool_pic.jpeg'
// import Sprite from '../Assets/SVG/symbol-defs.svg'

const Header = props => {
    return (
        <div className="header">
            <div className="header-hero">
                <div className="container">
                    <img className="container__image" src={CoolPic} alt="This is me" />
                    <h1 className="container__title">Subhanga Upadhyay</h1>
                    <span className="container__subtitle">Don't call me clown, mustache</span>
                </div>
            </div>
        </div>
    )
}

export default Header