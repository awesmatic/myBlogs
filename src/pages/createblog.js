import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';
import styles from '../styles/CreateBlogPost.module.css';
import { useRouter } from 'next/router';

const QuillEditor = dynamic(import('react-quill'), { ssr: false });

const CreateBlogPost = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [base64String, setBase64String] = useState(null);
    const [selectedImage, setSelectedImage] = useState("");


    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();

        const role = JSON.parse(localStorage.getItem('user'))

        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                content,
                image: base64String,
                userId: role.userId
            })

        };

        const response = await fetch('/api/createBlog', options);
        if (response.ok) {
            alert('Blog post created successfully!');
            router.push('/');
        } else {
            alert('Failed to create blog post');
        }
    }





    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        setSelectedImage(URL.createObjectURL(file));
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            setBase64String(reader.result);
        };
    };



    return (
        <div className={styles.container}>
            <h1>Create a new blog post</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />

                <label htmlFor="content">Content</label>
                <QuillEditor
                    value={content}
                    onChange={(value) => setContent(value)}
                />

                <div className={styles.image}>
                    <div >
                        <label htmlFor="image">Image</label>
                        <input
                            type="file"
                            id="image"
                            name="image"
                            onChange={(event) => handleFileUpload(event)}
                        />
                    </div>

                    {selectedImage && <img src={selectedImage} alt='image' />}
                </div>



                <button type="submit">Create Post</button>
            </form>
        </div>
    );
};

export default CreateBlogPost;
