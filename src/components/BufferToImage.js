import React, { useState, useEffect } from 'react';

const BufferToImage = ({ url, buffer }) => {
    const [imageSrc, setImageSrc] = useState('');
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (url) {
            setImageSrc(url)
        } else {
            const blob = new Blob([buffer], { type: 'image/png' });
            const objectUrl = URL.createObjectURL(blob);
            setImageSrc(objectUrl);
            return () => {
                URL.revokeObjectURL(objectUrl);
            }
        }
    }, [buffer]);


    const handleImageLoad = () => {
        setImageLoaded(true);
    };

    return <img src={imageSrc} onLoad={handleImageLoad} alt="Image" style={{ opacity: imageLoaded ? 1 : 0, transition: 'opacity 0.3s ease' }} />;
}

export default BufferToImage;
