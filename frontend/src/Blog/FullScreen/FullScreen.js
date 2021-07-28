import './FullScreen.scss'
import DOMPurify from 'dompurify'

import Sprite from '../../Assets/SVG/symbol-defs.svg'
import { dateConversion } from '../../Utils/js/dateConversion'

const FullScreen = props => {
    const { blog, clearBlogItemDoubleClickHandler } = props

    const cleanBlogContentHTML = DOMPurify.sanitize(blog.blog_content)
    const blogPosts = (
        <div className="blog-content">
            <div className="blog-content__time">
                <span>Last updated at {dateConversion(blog.blog_time)}
                </span>
            </div>

            <h2 className="blog-content__heading">{blog.blog_title}</h2>

            <div className="blog-content__content"
                dangerouslySetInnerHTML={{ __html: cleanBlogContentHTML }}></div>

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