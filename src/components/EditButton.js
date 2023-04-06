import styles from '../styles/EditButton.module.css';

const EditButton = ({ onClick }) => {
    return (
        <button className={styles.editButton} onClick={onClick}>
            Edit
        </button>
    );
};

export default EditButton;
