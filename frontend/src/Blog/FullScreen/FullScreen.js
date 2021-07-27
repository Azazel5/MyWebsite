import './FullScreen.scss'
import DOMPurify from 'dompurify'

import Sprite from '../../Assets/SVG/symbol-defs.svg'

const FullScreen = props => {
    const { blog, clearBlogItemDoubleClickHandler } = props

    const cleanBlogContentHTML = DOMPurify.sanitize(blog.blog_content)
    const blogPosts = (
        <div className="blog-content">
            <div className="blog-content__time"><span>{blog.blog_create_date} at {blog.blog_time}</span></div>
            <h2 className="blog-content__heading">{blog.blog_title}</h2>
            <div dangerouslySetInnerHTML={{ __html: cleanBlogContentHTML }}></div>
            <button className="modal__close-button" onClick={clearBlogItemDoubleClickHandler}>
                <svg style={{ fill: 'white' }}>
                    <use xlinkHref={`${Sprite}#icon-circle-with-cross`}></use>
                </svg>
            </button>
        </div>
    )

    return (
        <div className="fullscreen">
            {blogPosts}
        </div>
    )
}

export default FullScreen