
import fs from 'fs-extra';
import path from 'path';

export default async function handler(req, res) {
    const dataFilePath = path.join(process.cwd(), 'public', 'blogs.json');
    const data = await fs.readJSON(dataFilePath);


    if (req.method === 'POST') {


        const { title, content, image, userId } = req.body;


        const generateUniqueRandomNumber = () => {
            const min = 1;
            const max = 10000;
            const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            return randomNumber;
        }

        const uniqueId = generateUniqueRandomNumber()


        const newBlog = { id: uniqueId, title, content, userId, imageBuffer: [image], comments: [] };
        data.push(newBlog);


        await fs.writeJSON(dataFilePath, data, { encoding: 'utf-8' });

        res.status(200).json({ message: 'Blog added successfully', data });
        // });
    } else {
        res.status(400).json({ message: 'Invalid request method' });
    }
}



