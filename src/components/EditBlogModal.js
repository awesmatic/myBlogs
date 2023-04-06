import { useState } from 'react';
import Modal from 'react-modal';
import styles from '../styles/EditBlogModal.module.css';

Modal.setAppElement('#__next');

const EditBlogModal = ({ post, onSave, onClose }) => {
    const [title, setTitle] = useState(post.title);
    const [content, setContent] = useState(post.content);

    const handleTitleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleContentChange = (event) => {
        setContent(event.target.value);
    };

    const handleSaveClick = () => {
        onSave({ ...post, title, content });
    };

    return (
        <Modal isOpen={true} onRequestClose={onClose} className={styles.modal}>
            <h2>Edit Blog</h2>
            <form>
                <label>
                    Title:
                    <input type="text" value={title} onChange={handleTitleChange} />
                </label>
                <label>
                    Content:
                    <textarea value={content} onChange={handleContentChange} />
                </label>
            </form>
            <div className={styles.buttons}>
                <button className={styles.saveButton} onClick={handleSaveClick}>
                    Save
                </button>
                <button className={styles.cancelButton} onClick={onClose}>
                    Cancel
                </button>
            </div>
        </Modal>
    );
};

export default EditBlogModal;
