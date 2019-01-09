var request = new XMLHttpRequest();

request.open('GET', 'https://api.instagram.com/v1/users/self/media/recent/?access_token=5bfcbdc76b514847b359f709f2f84c94', true);

request.onload = function () {
    // var data = JSON.parse(this.response);

    console.log(this.response);
}

request.send();

// var feed = new Instafeed({
//     get: 'user',
//     userId: 'prakhar625',
//     clientId: '5bfcbdc76b514847b359f709f2f84c94'
// });
// feed.run();