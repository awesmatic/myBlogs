// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { useRouter } from 'next/router';
import styles from '../../styles/Blog.module.css'
import DeleteButton from '../../components/Delete';
import EditButton from '../../components/EditButton';
import { useState } from 'react';
import EditBlogModal from '../../components/EditBlogModal';
import Comment from '../../components/Comment';
import Parser from 'html-react-parser';

function Post({ post }) {
    const router = useRouter();
    const [isEditing, setIsEditing] = useState(false);
    const [blog, setBlog] = useState(post)
    const [comment, setComment] = useState(post.comments);
    const user = JSON.parse(localStorage.getItem('user'));



    // Render a loading state if the post data is not available yet
    if (router.isFallback) {
        return <div>Loading...</div>;
    }

    const handleDeleteItem = async (itemId) => {
        // Make a DELETE request to your API endpoint to delete the item
        const response = await fetch(`/api/delete/${itemId}`, {
            method: 'DELETE',
        });


        // If the delete was successful, call the onDeleteItem function to update the state
        if (response.ok) {
            alert('deleted')
            router.push('/');
        }
    };

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleSaveClick = async (updatedPost) => {
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id: updatedPost.id, title: updatedPost.title, content: updatedPost.content
            })

        };

        const response = await fetch('/api/edit', options);
        if (response.ok) {
            const updatedBlog = {
                ...blog,
                title: updatedPost.title,
                content: updatedPost.content
            };
            setBlog(updatedBlog);
            alert("edited the changes");

        } else {
            alert("failed to edited changes");
        }
        setIsEditing(false);
    };

    const handleClose = () => {
        setIsEditing(false);
    };

    const showButton = (data) => {
        if (data.role === 'Admin') return true;
        else if (data.role === 'Author' && data.userId == blog.userId) return true
        else if (data.role === 'Reader') return false
    }








    const handleImage = () => {
        if (blog.imageBuffer && !blog.imageUrl) {
            return blog.imageBuffer;
        } else {
            return blog.imageUrl
        }
    }


    // Render the blog data
    return (
        <>
            <div className={styles.buttons}>
                {showButton(user) && <EditButton onClick={handleEditClick} />}
                {showButton(user) && <DeleteButton id={blog.id} onDelete={handleDeleteItem} />}

            </div>
            {isEditing && (
                <EditBlogModal post={blog} onSave={handleSaveClick} onClose={handleClose} />
            )}

            <div className={styles.blog}>
                <h1>{blog.title}</h1>
                <div className={styles.container}>
                    <div className={styles.details}>
                        <img src={handleImage()} />
                        <h3>{Parser(blog.content)}</h3>
                    </div>
                    <div className={styles.comments}>
                        <Comment id={blog.id} comments={comment} setComment={setComment} />
                    </div>
                </div>



            </div>

        </>
    );
}

export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/${params.id}`);
    const post = await res.json();
    return { props: { post } };
}

export default Post;

