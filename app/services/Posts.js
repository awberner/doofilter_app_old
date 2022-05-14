
export const getPosts = (offset, limit) => new Promise(async (resolve) => {
        const posts = {
            "offset": 5,
            "posts": [{
                "avatar": "486325679423861b1b9aa2d10b",
                "certification": "DIVEMASTER",
                "comments": false,
                "confirmed": true,
                "firstname": "Philippe",
                "hasLiked": false,
                "imgURL": "4863256794238626a4824ba2e2",
                "lastname": "Ocean",
                "likes": [],
                "owner_uid": "4863256794238",
                "post": 12574,
                "purl": "philippe.jarlet",
                "userself": false,
            }, {
                "avatar": "486325679423861b1b9aa2d10b",
                "certification": "DIVEMASTER",
                "comments": false,
                "confirmed": true,
                "firstname": "Philippe",
                "hasLiked": false,
                "imgURL": "486325679423862661f3756d40",
                "lastname": "Ocean",
                "likes": [],
                "owner_uid": "4863256794238",
                "post": 12561,
                "purl": "philippe.jarlet",
                "userself": false,
            },
            {
                "avatar": "486325679423861b1b9aa2d10b",
                "certification": "DIVEMASTER",
                "comments": false,
                "confirmed": true,
                "firstname": "Philippe",
                "hasLiked": false,
                "imgURL": "486325679423862651cafe3177",
                "lastname": "Ocean",
                "likes": [],
                "owner_uid": "4863256794238",
                "post": 12559,
                "purl": "philippe.jarlet",
                "userself": false,
            }, {
                "avatar": "486325679423861b1b9aa2d10b",
                "certification": "DIVEMASTER",
                "comments": false,
                "confirmed": true,
                "firstname": "Philippe",
                "hasLiked": false,
                "imgURL": "486325679423862651cadaf373",
                "lastname": "Ocean",
                "likes": [],
                "owner_uid": "4863256794238",
                "post": 12560,
                "purl": "philippe.jarlet",
                "userself": false,
            }, {
                "avatar": "486325679423861b1b9aa2d10b",
                "certification": "DIVEMASTER",
                "comments": false,
                "confirmed": true,
                "firstname": "Philippe",
                "hasLiked": false,
                "imgURL": "4863256794238626276e0b01e9",
                "lastname": "Ocean",
                "likes": [],
                "owner_uid": "4863256794238",
                "post": 12558,
                "purl": "philippe.jarlet",
                "userself": false,
            }],
        };
        resolve(posts);

});


export const getPostsByUserId = (user, offset, limit) => new Promise(async (resolve) => {

    const posts = {
        "offset": 9,
        "posts": [
            {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "4863256794238626a4824ba2e2",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12574,
            "purl": "John Doo",
        },{
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "486325679423862661f3756d40",
            "lastname": "Ocean",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12561,
            "purl": "John Doo",
        }, {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "486325679423862651cafe3177",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12559,
            "purl": "John Doo",
        }, {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "486325679423862651cadaf373",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12560,
            "purl": "John Doo",
        }, {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "4863256794238626276e0b01e9",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12558,
            "purl": "John Doo",
        }, {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "486325679423862580744d8d6c",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12573,
            "purl": "John Doo",
        }, {
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "48632567942386257b159cf8bc",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12550,
            "purl": "John Doo",
        },{
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "48632567942386255263ea490e",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12542,
            "purl": "John Doo",
        },{
            "avatar": "486325679423861b1b9aa2d10b",
            "certification": "DIVEMASTER",
            "confirmed": true,
            "firstname": "John",
            "hasLiked": false,
            "imgURL": "48632567942386255263c43e25",
            "lastname": "Doo",
            "likes": [],
            "owner_uid": "4863256794238",
            "post": 12543,
            "purl": "John Doo",
        }]
    };
    resolve(posts);

});
