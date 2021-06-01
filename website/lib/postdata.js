import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
const highlight = require('remark-highlight.js')


const dataDir = path.join(process.cwd(), 'data');
const baseWebPath = 'https://github.com/nighthawkcoders/csa-society/edit/main/website/data/' // for connecting to web later
export const TOPICS = ["gotchas","lessons"];

/**
 * Returns the data for a specified feature,
 * 
 * @param possible strings: "gotchas"
 * @returns Post data
 */
export function getFolderData(folder) {
    const relDir = path.join(dataDir, folder);
    const webPath = baseWebPath + folder + '/';
    return fs.readdirSync(relDir).map(fileName => {
        const id = fileName.replace(/\.md$/, '');
        const relativeWebPath = webPath + fileName;
        const fullFilePath = path.join(relDir, fileName);
        const fileContent = fs.readFileSync(fullFilePath, 'utf8');
        const matterResult = matter(fileContent);
        return {
            id, relativeWebPath, fileContent, ...matterResult.data
        }
    });
}

/**
 * Returns the slugs for a specified feature
 * 
 * @param possible strings: "gotchas"
 * @returns Data slugs
 */
export function getFolderIds() {
    const paths = [];
    for(const folder of TOPICS) {
        const newPaths = fs.readdirSync(path.join(dataDir, folder)).map(fileName => {
            return {
                params: {
                    id: fileName.replace(/\.md$/, ''),
                    topic:folder
                }
            }
        });
        paths.push(...newPaths);
    }
    return paths;
}

/**
 * Get data for a single post by slug
 * 
 * @param {*string} folder strings: "gotchas"
 * @param {*string} id the slug of the data
 */
export async function getPostDataByFileName(folder, id){
    const fullPath = path.join(dataDir, folder, id+".md");
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(highlight)
        .use(html)
        .process(matterResult.content)
    const htmlContent = processedContent.toString();
    const webPath = baseWebPath + folder + "/" + id+".md"

    return {
      id,
      webPath,
      htmlContent,
      ...matterResult.data
    }
}

export function getAllPostData(){
    var postData = {};
    for(const topic of TOPICS){
        const relDir = path.join(dataDir, topic);
        const topicData = fs.readdirSync(relDir).map(fileName => {
            const id = fileName.replace(/\.md$/, '');
            const fullFilePath = path.join(relDir, fileName);
            const fileContent = fs.readFileSync(fullFilePath, 'utf8');
            const matterResult = matter(fileContent);
            return {
                id, topic, ...matterResult.data
            }
        });
        postData[topic] = topicData;
    }
    return postData;
}

export function getAllPostDataFlat(){
    var postData = [];
    for(const topic of TOPICS){
        const relDir = path.join(dataDir, topic);
        const topicData = fs.readdirSync(relDir).map(fileName => {
            const id = fileName.replace(/\.md$/, '');
            const fullFilePath = path.join(relDir, fileName);
            const fileContent = fs.readFileSync(fullFilePath, 'utf8');
            const matterResult = matter(fileContent);
            return {
                id, topic, ...matterResult.data
            }
        });
        postData.push(...topicData);
    }
    return postData;
}