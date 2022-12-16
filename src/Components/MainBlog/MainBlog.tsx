import { NavLink } from "react-router-dom";
import { Blog } from "../../Interfaces/Interfaces";
import styles from './MainBlog.module.css'
import dataProvider from '../../Utils/Data/dataProvider';

interface Props {
    blog: Blog | undefined
    reLoadBlogs: () => void
}

const MainBlog = ({ blog, reLoadBlogs }: Props) => {

    let date = new Date(blog ? blog?.timestamp : '')

    const deleteBlog = (id: string): void => {
        dataProvider.deleteBlog(id)
            .then(res => { reLoadBlogs(); alert('Deleted') })
            .catch(err => { console.log(err); alert('Error') })
    }
    return (
        <>
            {
                blog ?
                    <div>
                        <h3>{blog.title}</h3>
                        <h4>{date.toISOString().split('T')[0]}</h4>
                        <p>{blog.text}</p>
                        <div>
                            <NavLink to="/Edit">
                                <button className={styles.button}  >
                                    Edit
                                </button>
                            </NavLink>
                            <button className={styles.buttonRed} onClick={() => deleteBlog(blog.id)} >
                                Delete
                            </button>
                        </div>

                    </div>
                    :
                    <h2>Select a post</h2>
            }
        </>
    )
}

export default MainBlog;
