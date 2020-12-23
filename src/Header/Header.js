import CoolPic from '../assets/images/cool_pic.jpg'

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
                    Currently I am having a blast working with: 
                </p>
            </div>
        </div>
    )
}

export default Header