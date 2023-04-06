
export default function handler(req, res) {
    const blogs = require('../../../public/blogs.json');
    res.status(200).json({
        blogs
    });
}
