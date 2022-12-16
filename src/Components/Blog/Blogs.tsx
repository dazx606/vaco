import React from 'react'
import { Blog } from '../../Interfaces/Interfaces'
import styles from "./Blogs.module.css";

interface Props {
  blog: Blog
  setBlog: (blog: Blog) => void
}

const Blogs = ({ blog, setBlog }: Props) => {
  const date = new Date(blog.timestamp)
  return (
    <div className={styles.main}>
      <h4 className={styles.tittle} onClick={() => setBlog(blog)}>
        {blog.title}
      </h4>
      <p className={styles.date}>{date.toISOString().split('T')[0]}</p>
    </div>

  )
}

export default Blogs;
