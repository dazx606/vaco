import { Blog } from "../../Interfaces/Interfaces";
import styles from "./Feed.module.css";
import MainBlog from '../MainBlog/MainBlog';

interface Props {
    blog: Blog | undefined;
    reLoadBlogs: () => void;
}

const Feed = ({ blog, reLoadBlogs }: Props) => {
    return (
        <div className={styles.main}>
            <h1>Blog</h1>
            <MainBlog blog={blog} reLoadBlogs={reLoadBlogs}/>
        </div>
    )
}

export default Feed;
