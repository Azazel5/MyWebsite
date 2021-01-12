import { useRef, useState } from 'react'
import BackgroundClickHook from '../Hooks/BackgroundClickHook/BackgroundClickHook'

const Blog = props => {
    // State variables 
    const [blogItemClicked, setBlogItemClicked] = useState({})
    const blogContainerRef = useRef()

    // Props
    const { blogs } = props

    // Inline styles
    const onClickChildStyles = { backgroundColor: '#ffae42' }

    // Event handlers/Callbacks 
    const clearBlogItemState = () => {
        setBlogItemClicked({})
    }

    // Other variables 
    const blogPosts = blogs.map(blog => (
        <div
            className="blog__container--left__child" key={blog.id}
            onClick={() => setBlogItemClicked(blog)}
            style={blog.id === blogItemClicked.id ? onClickChildStyles : null}
        >
            <h4>{blog.blog_title}</h4>
            <div>
                <span>{blog.blog_create_date}</span>
                <span>Initial content...</span>
            </div>
        </div>
    ))

    BackgroundClickHook(blogContainerRef, clearBlogItemState)

    const rightDivContent = (
        <>
            <div><span>{blogItemClicked.blog_create_date} at {blogItemClicked.blog_time}</span></div>
            <h3>{blogItemClicked.blog_title}</h3>
            <div>{blogItemClicked.blog_content}</div>
        </>
    )

    // Simply testing for blogItemClicked isn't good enough because it is already an object i.e. {}
    // Rather, test for whether its keys are larger than 0, which is when it becomes valid

    return (
        <div className="blog">
            <h1 className="portfolio-section__heading">Blog</h1>
            <div className="blog__container" ref={blogContainerRef}>
                <div className="blog__container--left">{blogPosts}</div>
                {/* <div className="blog__container--divider">
                     <div className="blog__container--divider__child"></div> 
                </div> */}

                <div className="blog__container--right">
                    {Object.keys(blogItemClicked).length > 0 && rightDivContent}
                </div>
            </div>
        </div>
    )
}

export default Blog