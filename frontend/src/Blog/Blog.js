import { useRef, useState } from 'react'
import DOMPurify from 'dompurify'

import FullScreen from './FullScreen/FullScreen'
import BackgroundClickHook from '../Hooks/BackgroundClickHook/BackgroundClickHook'

const Blog = props => {
    // State variables 
    const [blogItemClicked, setBlogItemClicked] = useState({})
    const [doubleClickedBlog, setDoubleClickedBlog] = useState({})
    const blogContainerRef = useRef()

    // Props
    const { blogs, blogTabRef } = props

    // Inline styles
    const onClickChildStyles = { backgroundColor: '#ffae42' }

    // Event handlers/Callbacks 
    const clearBlogItemState = () => {
        setBlogItemClicked({})
    }

    const blogItemDoubleClickHandler = (item) => {
        setDoubleClickedBlog(item)
    }

    const clearBlogItemDoubleClickHandler = () => {
        setDoubleClickedBlog({})
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
    const rightDivContent = (
        <>
            <div><span>{blogItemClicked.blog_create_date} at {blogItemClicked.blog_time}</span></div>
            <h3>{blogItemClicked.blog_title}</h3>
            <div dangerouslySetInnerHTML={{ __html: cleanBlogContentHTML }}></div>
        </>
    )

    // Simply testing for blogItemClicked isn't good enough because it is already an object i.e. {}
    // Rather, test for whether its keys are larger than 0, which is when it becomes valid

    return (
        <>
            <div className="blog" ref={blogTabRef}>
                <h1 className="portfolio-section__heading">Blog</h1>
                <div className="blog__container" ref={blogContainerRef}>
                    <div className="blog__container--left">{blogPosts}</div>
                    <div className="blog__container--right">
                        {Object.keys(blogItemClicked).length > 0 && rightDivContent}
                    </div>
                </div>
            </div>

            {Object.keys(doubleClickedBlog).length > 0 &&
                <FullScreen
                    blog={doubleClickedBlog}
                    clearBlogItemDoubleClickHandler={clearBlogItemDoubleClickHandler}
                />}

        </>
    )
}

export default Blog