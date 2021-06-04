const fs = require('fs');
const { getAllPosts } = require('../lib/posts');
const { CLASSES } =  require('../lib/global');


test("Checks that all posts meet requirements in 'data' directory", () => {

    CLASSES.map((class_) => {
        const posts = getAllPosts();
        posts.map((post) => {
            //Required fields
            expect(post.title).not.toBeUndefined();
            expect(post.class === "csa" || post.class === "csp").toBeTruthy();

            // if(post.topic !== "pbl"){
            //     if(post.class === "csa"){
            //         expect(post.section >= 1 && post.section <= 10).toBeTruthy();
            //     }else if(post.class === "csp"){
            //         expect(post.section >= 1 && post.section <= 5).toBeTruthy();
            //     }
            // }


        });
    });

    // const allPostData = getAllPostData();
    // for (const key of Object.keys(allPostData)){
    //     const topicData = allPostData[key];
    //     topicData.map(() => {

    //         //Required fields
    //         expect(id).not.toBeUndefined();
    //         expect(topic).not.toBeUndefined();
    //         expect(title).not.toBeUndefined();
    //         //expect(unit).not.toBeUndefined();

    //         //Url can only contain a-z A-Z 0-9 or '-'
    //         expect(/[^A-Za-z0-9-]/.exec(id)).toBeNull();

    //         if(unit){
    //             //Collegeboard units go from 1 to 10
    //             expect(unit >= 1 && unit <= 10).toBe(true);
    //         }

    //         //Title must be at most 70 chars
    //         expect(title.length <= 70).toBeTruthy();

    //         //URL must be at most 25 chars
    //         expect(id.length <= 25).toBeTruthy();
    //     });
    // }

});