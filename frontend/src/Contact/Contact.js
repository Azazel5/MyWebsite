import { useFormik } from 'formik'
import * as Yup from 'yup'

const Contact = props => {
    const formik = useFormik({
        initialValues: {
            email: '',
            message: ''
        },
        validationSchema: Yup.object({
            email: Yup.string().email('Invalid email address').required('So I can know who\'s sending me messages ;)'),
            message: Yup.string()
                .max(500, 'Must be 500 characters or less')
                .required('Give me something to think about!')
        }),
        onSubmit: values => {
            // Send request to server 
            alert(JSON.stringify(values, null, 2));
        }
    });

    return (
        <div className="contact-me">
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

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact