
import fs from 'fs-extra';
import path from 'path';


export default async function handler(req, res) {
    const {
        query: { id },
    } = req;

    const dataFilePath = path.join(process.cwd(), 'public', 'blogs.json');
    const data = await fs.readJSON(dataFilePath);

    const indexToRemove = data.findIndex(obj => obj.id == id);
    if (indexToRemove !== -1) {
        data.splice(indexToRemove, 1);
    }

    await fs.writeJSON(dataFilePath, data);

    if (!indexToRemove) {
        res.status(404).json({ message: 'Blog not found' });
    } else {
        res.status(200).json({ id: indexToRemove, message: 'Blog is deleted' });
    }
}

