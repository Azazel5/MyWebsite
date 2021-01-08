import { useState } from 'react'
import { blogs } from '../Portfolio/projects'

const Blog = props => {
    // State variables 
    const [blogItemClicked, setBlogItemClicked] = useState({})

    // Inline styles
    const onClickChildStyles = { backgroundColor: '#ffae42' }

    // Other variables 
    const blogPosts = blogs.map(blog => (
        <div
            className="blog__container--left__child" key={blog.id}
            onClick={() => setBlogItemClicked(blog)}
            style={blog.id === blogItemClicked.id ? onClickChildStyles : null}
        >
            <h4>{blog.title}</h4>
            <div>
                <span>{blog.date}</span>
                <span>Initial content...</span>
            </div>
        </div>
    ))

    return (
        <div className="blog">
            <h1 className="portfolio-section__heading">Blog</h1>
            <div className="blog__container">
                <div className="blog__container--left">
                    {blogPosts}
                </div>
                <div className="blog__container--divider"></div>
                <div className="blog__container--right"></div>
            </div>
        </div>
    )
}

export default Blog