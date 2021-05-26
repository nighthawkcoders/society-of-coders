import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const dataDir = path.join(process.cwd(), 'data');
const basePath = '/website/data/' // for connecting to web later

/**
 * Returns the data for a specified feature,
 * 
 * @param possible strings: "gotchas"
 * @returns Post data
 */
export function getFolderData(folder) {
    const gotchasDir = path.join(dataDir, folder);
    const relPath = basePath + folder + '/';
    return fs.readdirSync(gotchasDir).map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const relativeWebPath = relPath + fileName;
        const fullFilePath = path.join(gotchasDir, fileName);
        const fileContent = fs.readFileSync(fullFilePath, 'utf8');
        const matterResult = matter(fileContent);
        return {
            id, relativeWebPath, fileContent, ...matterResult.data
        }
    });
}