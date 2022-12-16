
import { Blog } from '../../Interfaces/Interfaces'
import Blogs from '../Blog/Blogs'
import styles from './PastPosts.module.css'


interface Props {
    blogs: Blog[]
    setBlog: (blog: Blog) => void
}

const PastPosts = ({ blogs, setBlog }: Props) => {


    return (
        <div className={styles.main}>
            <h1 className={styles.tittle}>Past Posts</h1>
            {
                blogs?.map(e => <Blogs blog={e} setBlog={setBlog} />)
            }
        </div>
    )
}

export default PastPosts;
