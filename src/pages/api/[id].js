
import path from 'path';

export default function handler(req, res) {
  const {
    query: { id },
  } = req;

  const blogs = require('../../../public/blogs.json');

  const blog = blogs.find((p) => p.id === parseInt(id, 10));

  if (!blog) {
    res.status(404).json({ message: 'Blog not found' });
  } else {
    res.status(200).json(blog);
  }
}
