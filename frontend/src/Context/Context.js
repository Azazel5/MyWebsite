import React, { useState } from 'react'

export const BlogFullscreenEnabled = React.createContext({
    blogFullScreen: 'false',
    setBlogFullScreen: () => { }
})

const BlogFullscreenEnabledProvider = (props) => {
    const [blog, setBlog] = useState({})

    const value = {
        blogFullScreen: blog,
        setBlogFullScreen: setBlog
    }

    return (
        <BlogFullscreenEnabled.Provider value={value}>
            {props.children}
        </BlogFullscreenEnabled.Provider>
    )
}

export default BlogFullscreenEnabledProvider