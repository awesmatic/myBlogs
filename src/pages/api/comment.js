import fs from 'fs-extra';
import path from 'path';

export default async function handler(req, res) {
    const dataFilePath = path.join(process.cwd(), 'public', 'blogs.json');
    const data = await fs.readJSON(dataFilePath);
    if (req.method !== 'POST') {
        res.status(405).json({ message: 'Method Not Allowed' });
        return;
    }

    const { id, newComment } = req.body;

    const postIndex = data.findIndex((post) => post.id == id);

    data[postIndex].comments.push(newComment);

    fs.writeFileSync(dataFilePath, JSON.stringify(data));



    res.status(201).json({ comment: newComment });
}
