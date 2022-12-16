
import dataProvider from "../../Utils/Data/dataProvider";
import styles from "./Home.module.css";
import PastPosts from '../../Components/PastPosts/PastPosts';
import Feed from "../../Components/Feed/Feed";
import { useEffect, useState } from "react";
import { Blog } from "../../Interfaces/Interfaces";

const Home = () => {

    const [blogs, setBlogs] = useState<Blog[]>();
    const [blog, setBlog] = useState<Blog>();
    const getPosts = (): void => {
        dataProvider.getData()
            .then(res => {
                setBlogs(res?.response);
                setBlog(res?.response[0]);
            })
            .catch(err => {
                console.log(err);
                alert('error getting data')
            })
    }

    useEffect(() => {
        getPosts()
    }, [])


    return (
        <div className={styles.home}>
            <PastPosts blogs={blogs ? blogs : []} setBlog={setBlog}/>
            <Feed blog={blog} reLoadBlogs={getPosts}/>
        </div>
    )
}

export default Home;
