import React from 'react';
import BlogPost from "./BlogPost";
import GoodItem from "./GoodItem";

function BlogPostList({blogs}) {
    return (
        <div>
            <div className="blog-list-header">
                <a className="blog-list-header-link"> Блог </a>
            </div>
            {
                blogs.map((blog) =>
                    <BlogPost post={blog}/>
                )
            }
        </div>
    );
}

export default BlogPostList;