import { useContext, useRef, useState } from 'react'
import DOMPurify from 'dompurify'

import FullScreen from './FullScreen/FullScreen'
import BackgroundClickHook from '../Hooks/BackgroundClickHook/BackgroundClickHook'
import { BlogFullscreenEnabled } from '../Context/Context'
import { dateConversion } from '../Utils/js/dateConversion'

const Blog = props => {
    // State variables 
    const [blogItemClicked, setBlogItemClicked] = useState({})
    const blogFullScreenContext = useContext(BlogFullscreenEnabled)
    const blogContainerRef = useRef()

    // Props
    const { blogs, blogTabRef } = props

    // Inline styles
    const onClickChildStyles = { backgroundColor: '#ffae42' }
    const fullscreenSpanStyles = { height: '3rem', width: '3rem' }
    const blogTextHolderStyles = { width: '100%' }

    // Event handlers/Callbacks 
    const clearBlogItemState = () => {
        setBlogItemClicked({})
    }

    const blogItemDoubleClickHandler = (item) => {
        blogFullScreenContext.setBlogFullScreen(item)
    }

    const clearBlogItemDoubleClickHandler = () => {
        blogFullScreenContext.setBlogFullScreen({})
    }

    // Other variables 
    const blogPosts = blogs.map(blog => {
        return <div
            className="blog__container--left__child" key={blog.id}
            onClick={() => setBlogItemClicked(blog)}
            onDoubleClick={() => blogItemDoubleClickHandler(blog)}
            style={blog.id === blogItemClicked.id ? onClickChildStyles : null}
        >
            <h4>{blog.blog_title}</h4>
            <div>
                <span>{blog.blog_create_date}</span>
                <span>{blog.blog_preview}</span>
            </div>
        </div>
    })

    BackgroundClickHook(blogContainerRef, clearBlogItemState)

    // I'm using django-ckeditor on the backend, which is saving the blog_content as raw HTML. This
    // means I'm gonna have to render the HTML using dangerouslySetInnerHTML (similar to innerHTML in
    // normal JS). To prevent the XSS attack possibilies which the documentation alludes to, I will use
    // DOMPurify to sanitize the HTML before setting it in a div.
    const cleanBlogContentHTML = DOMPurify.sanitize(blogItemClicked.blog_content)
    let rightDivContent = null

    if (Object.keys(blogItemClicked).length > 0)
        rightDivContent = (
            <>
                <div>
                    <span>Last updated at {dateConversion(blogItemClicked.blog_time)}</span>
                    <span
                        className="fullscreen-button" style={fullscreenSpanStyles}
                        onClick={() => blogFullScreenContext.setBlogFullScreen(blogItemClicked)
                        }>
                        {/* An expand symbol for mobile phones which can't double click */}
                        <svg height="80%" version="1.1" viewBox="0 0 36 36" width="100%" fill={'white'}>
                            <path d="m 10,16 2,0 0,-4 4,0 0,-2 L 10,10 l 0,6 0,0 z"></path>
                            <path d="m 20,10 0,2 4,0 0,4 2,0 L 26,10 l -6,0 0,0 z"></path>
                            <path d="m 24,24 -4,0 0,2 L 26,26 l 0,-6 -2,0 0,4 0,0 z"></path>
                            <path d="M 12,20 10,20 10,26 l 6,0 0,-2 -4,0 0,-4 0,0 z"></path>
                        </svg>
                    </span>
                </div>
                <h3>{blogItemClicked.blog_title}</h3>
                <div
                    style={blogTextHolderStyles}
                    dangerouslySetInnerHTML={{ __html: cleanBlogContentHTML }}>
                </div>
            </>
        )

    // Simply testing for blogItemClicked isn't good enough because it is already an object i.e. {}
    // Rather, test for whether its keys are larger than 0, which is when it becomes valid

    return (
        <>
            <div className="blog" ref={blogTabRef}>
                <div className="portfolio-section__heading">
                    <h1>Blog</h1>
                    <span>(single click = load blog on right; double click (or extend button) = fullscreen mode)</span>
                </div>
                <div className="blog__container" ref={blogContainerRef}>
                    <div className="blog__container--left">{blogPosts}</div>
                    <div className="blog__container--right">
                        {rightDivContent && rightDivContent}
                    </div>
                </div>
            </div>

            {Object.keys(blogFullScreenContext.blogFullScreen).length > 0 &&
                <FullScreen
                    blog={blogFullScreenContext.blogFullScreen}
                    clearBlogItemDoubleClickHandler={clearBlogItemDoubleClickHandler}
                />}
        </>
    )
}

export default Blog