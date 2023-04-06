import parse from 'html-react-parser';
import { useRouter } from 'next/router';
import { useState } from 'react';
import ReactPaginate from 'react-paginate';
import styles from '../styles/BlogList.module.css';
import SearchBar from './SearchBar';

const BlogList = ({ data }) => {
    const router = useRouter();
    const [pageNumber, setPageNumber] = useState(0);
    const [allBlogs, setAllBlogs] = useState(data)
    const itemsPerPage = 4;

    const savedRole = localStorage.getItem('role');
    const getItems = () => {
        const startIndex = pageNumber * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return allBlogs.slice(startIndex, endIndex);
    }


    const pageCount = Math.ceil(allBlogs.length / 5);

    function handleClick(id) {
        router.push(`/blog/${id}`);
    }

    const Content = (text) => {
        const maxLength = 50;
        const shortenedText = parse(text?.split(" ").slice(0, maxLength).join(" "));
        const displayText = shortenedText?.length < text.length ? shortenedText + "..." : shortenedText;
        // concatenate the ellipsis if the shortened text is shorter than the original text
        return displayText
    }

    const handleSearch = (query) => {
        const matchingPosts = allBlogs.filter((post) =>
            post.title.includes(query) || post.content.includes(query)
        );
        setAllBlogs(matchingPosts);
    };

    const handleImage = (url, base64) => {
        if (base64 && !url) {
            return base64;
        } else {
            return url
        }
    }




    return (
        <>
            <SearchBar onSearch={handleSearch} />
            <div className={styles.blogPost}>
                {getItems().map(blog => (
                    <div onClick={() => handleClick(blog.id)} className={styles.blogItem} key={blog.id}>
                        <img src={handleImage(blog.imageUrl, blog.imageBuffer)} alt="Image" ></img>
                        <h3 >{blog.title}</h3>
                        <div className={styles.blogContent} >{Content(blog.content)}</div>

                    </div>
                ))}
            </div>
            <div className={styles.pagination}>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    pageCount={Math.ceil(allBlogs.length / itemsPerPage)}
                    onPageChange={data => {
                        setPageNumber(data.selected);
                    }}
                    containerClassName={'pagination'}
                    activeClassName={'active'}
                />
            </div>
        </>
    );
}




export default BlogList;
