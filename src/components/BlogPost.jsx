import React from 'react';

function BlogPost(props) {
    return (
        <div>
            <div>
                <p className="blog-post-item-header">
                    <a className="blog-list-header-link"> { props.post.title } </a>
                </p>
            </div>
            <div className="blog-post-item-description"> { props.post.description }</div>
            <div className="blog-post-item-date-wrapper">
                <div className="blog-post-item-date-wrapper-inner">
                    <span className="blog-post-item-date"> { props.post.publishDate }</span>
                </div>
            </div>
        </div>
    );
}

export default BlogPost;