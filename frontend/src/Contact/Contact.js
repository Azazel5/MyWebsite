import { useFormik } from 'formik'
import * as Yup from 'yup'

// A function which takes the formik generated JSON from the contact me form
// and posts it over to the /contact/ endpoint, which is processed by the backend.
// Django sends the email from the person (after validating it) and sends a success/error 
// response back

const sendEmail = async (values) => {
    try {
        let response = await fetch('http://localhost:8000/contact/', {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(values, null, 2)
        })

        response = await response.json()
        alert(response['message'])
    }

    // If the request itself didn't go through
    catch (error) {
        alert(error)
    }
}

const Contact = props => {
    const { contactTabRef } = props
    const formik = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('What\'s your email?'),
            message: Yup.string()
                .max(500, 'Must be 500 characters or less')
                .required('Give me something to think about!')
        }),
        onSubmit: values => {
            // Send request to server and reset the isSubmitting variable which undisabled the button

            setTimeout(() => {
                sendEmail(values)
                formik.setSubmitting(false)
            }, 1000)
        }
    });

    return (
        <div className="contact-me" ref={contactTabRef}>
            <h1 className="portfolio-section__heading">Send me a message!</h1>

            <div className="contact-me__box">
                <form className="contact-me__form" onSubmit={formik.handleSubmit}>
                    <label htmlFor="email">Email Address</label>
                    <input
                        id="email" name="email" type="email" placeholder="john@doe.com"
                        {...formik.getFieldProps('email')} autoComplete="off"
                    />
                    {formik.touched.email && formik.errors.email ? (
                        <div className="contact-me__form--errors">{formik.errors.email}</div>
                    ) : null}

                    <label htmlFor="message">Message</label>
                    <textarea
                        id="message" name="message" placeholder="Enter message type..."
                        {...formik.getFieldProps('message')}></textarea>
                    {formik.touched.message && formik.errors.message ? (
                        <div className="contact-me__form--errors">{formik.errors.message}</div>
                    ) : null}

                    <button type="submit" disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact