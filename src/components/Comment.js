// Comment.js

import { useState } from 'react';
import styles from '../styles/Comment.module.css';

const Comment = ({ id, comments, setComment }) => {
    const [newComment, setNewComment] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                id, newComment
            })

        };

        const response = await fetch('/api/comment', options);
        // const response = await fetch('/api/comment', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify({ id, newComment }),
        // });
        if (response.ok) {
            setComment((prev) => [...prev, newComment])
            alert('Comment submitted successfully!');

        } else {
            alert('Error submitting comment.');
        }
        // Send newComment to backend to create a new comment
        setNewComment('');
    }

    return (
        <div className={styles.commentContainer}>
            <h2>Comments</h2>
            {comments && comments.map((comment, index) => (
                <div key={index} className={styles.comment}>
                    <p>{comment}</p>
                </div>
            ))}
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Add a comment..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className={styles.commentInput}
                />
                <button type="submit" className={styles.commentButton}>Submit</button>
            </form>
        </div>
    );
}

export default Comment;
