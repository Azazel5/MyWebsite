import CoolPic from '../Assets/images/cool_pic.jpeg'

const Header = props => {
    return (
        <header className="header">
            <div className="header-hero">
                <div className="container">
                    <img className="container__image" src={CoolPic} alt="This is me" />
                    <h1 className="container__title">Subhanga Upadhyay</h1>
                    <span className="container__subtitle">Lorem Ipsum? Dolor Sit Amet!</span>
                </div>
            </div>
        </header>
    )
}

export default Header