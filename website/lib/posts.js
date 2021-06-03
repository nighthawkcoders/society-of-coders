import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import remark from 'remark';
import html from 'remark-html';
import highlight from 'remark-highlight.js';
import { CLASSES } from './global';

const DATA_DIR = path.join(path.dirname(process.cwd()), "data");
const WEB_PATH = "https://github.com/nighthawkcoders/society-of-coders/edit/main/data/"

export function getPostPaths(){
    const paths = []
    fs.readdirSync(DATA_DIR).map((directory) => {
        const subDir = path.join(DATA_DIR, directory);
        const filePaths = fs.readdirSync(subDir).map((filename) => {
            const fileContents = fs.readFileSync(path.join(subDir, filename), 'utf8');
            const matterResult = matter(fileContents)
            const class_ = matterResult.data.class.toLowerCase();
            return {
                params:{
                    id:filename.replace(/\.md$/, ''),
                    topic:directory,
                    class:class_
                }
            }
        });
        paths.push(...filePaths);
    });
    return paths;
}

export function getTopicPaths(){
    const paths = [];
    CLASSES.map(({title, topics}) => {
        title = title.toLowerCase();
        topics.map((topic) => {
            paths.push({
                params:{
                    topic,
                    class:title
                }
            });
        });
    });
    return paths;
}

export function getPostsByClassAndTopic(className, topic){
    const posts = [];
    const dirPath = path.join(DATA_DIR, topic);
    return fs.readdirSync(dirPath).map((fileName) => {
        const id = fileName.replace(/\.md$/, '');
        const fullFilePath = path.join(dirPath, fileName);
        const fileContent = fs.readFileSync(fullFilePath, 'utf8');
        const matterResult = matter(fileContent);
        const class_ = matterResult.data.class.toLowerCase();
        return {
            id, ...matterResult.data, class:class_
        }
    }).filter((post) => post.class === className);
}

export async function getPostContentByTopic(topic, id){
    const fullPath = path.join(DATA_DIR, topic, id+".md");
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)

    const processedContent = await remark()
        .use(highlight)
        .use(html)
        .process(matterResult.content)

    
    const htmlContent = processedContent.toString();
    const webPath = WEB_PATH + topic + "/" + id+".md"
    return {
        id,
        webPath,
        htmlContent,
        ...matterResult.data
      }
}