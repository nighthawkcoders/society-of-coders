const fs = require('fs');
const { getAllPostData } = require('../lib/postdata');

test("Checks that all posts meet requirements in 'data' directory", () => {

    const allPostData = getAllPostData();
    for (const key of Object.keys(allPostData)){
        const topicData = allPostData[key];
        topicData.map(({id, topic, title, date}) => {

            //Required fields
            expect(id).not.toBeUndefined();
            expect(topic).not.toBeUndefined();
            expect(title).not.toBeUndefined();

            //Url can only contain a-z A-Z 0-9 or '-'
            expect(/[^A-Za-z0-9-]/.exec(id)).toBeNull();
        });
    }

});