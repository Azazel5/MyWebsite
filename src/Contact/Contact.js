const Contact = props => {
    return (
        <div className="contact-me">
            <h1 className="portfolio-section__heading">Send me a message!</h1>
            <form className="contact-me__form">
                <label htmlFor="email">Email Address</label>
                <input id="email" name="email" type="email" size="40" />
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" rows="8" cols="50" placeholder="Enter message type...">
                </textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Contact