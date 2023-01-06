import React, {useEffect, useState} from "react";
import CatalogMenu from "../components/CatalogMenu";
import BlogPostList from "../components/BlogPostList";
import "../styles/App.css"
import {useFetching} from "../hooks/useFetching";
import ServiceNetwork from "../service/ServiceNetwork";
import ServicePosts from "../service/posts/ServicePosts";

function Main(props) {
    const [posts, setPosts] = useState([])
    const [fetchPosts] = useFetching( async () => {
        let serviceNetwork = new ServiceNetwork()
        let servicePosts = new ServicePosts(serviceNetwork)
        const postsResponse = await servicePosts.getPosts()

        setPosts(postsResponse.data)
    })

    useEffect( () => {
        fetchPosts()
    }, [])

    return (
        <div className="main-content-wrapper wrapper">
            <div className="main-content-wrapper-row">
                <div className="left-side-bar-wrapper">
                    <CatalogMenu categories={props.catalogItems}/>
                    <BlogPostList blogs={posts} />
                </div>
                <div className="main-content-wrapper-right-side">
                    <div className="main-page-image-wrapper">
                        <img className="main-page-image" src="https://static.insales-cdn.com/files/1/7746/7413314/original/head.jpg"/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;