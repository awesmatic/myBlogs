import { useState } from 'react';
import styles from '../styles/DeleteButton.module.css';

function DeleteButton({ id, onDelete }) {
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = async () => {
        setIsDeleting(true);
        await onDelete(id);
        setIsDeleting(false);
    };

    return (
        <button
            className={styles.deleteButton}
            onClick={handleDelete}
            disabled={isDeleting}
        >
            {isDeleting ? 'Deleting...' : 'Delete'}
        </button>
    );
}





export default DeleteButton;
