
import fs from 'fs-extra';
import path from 'path';
export default async function handler(req, res) {
    const { id, title, content } = req.body;

    // Read the JSON file
    const dataFilePath = path.join(process.cwd(), 'public', 'blogs.json');
    const data = await fs.readJSON(dataFilePath);

    // Find the object to edit by ID
    const objToEdit = data.find(obj => obj.id === id);

    if (objToEdit) {
        // Modify the object's name property
        objToEdit.title = title;
        objToEdit.content = content;

        // Save the updated data back to the file
        await fs.writeJSON(dataFilePath, data, { encoding: 'utf-8' });

        res.status(200).json({ message: 'Object updated successfully.' });
    } else {
        res.status(404).json({ message: 'Object not found.' });
    }
}
