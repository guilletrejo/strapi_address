const http = require("http");

const options = {
    host : "192.168.0.46",
    port : "1337",
    path: "/_health",
    method: "HEAD",
    timeout : 2000
};

const request = http.get(options, (res) => {
    console.log(`STATUS: ${res.statusCode}`);
    if (res.statusCode == 204) {
        process.exit(0);
    } else {
        process.exit(1);
    }
});

request.on('error', function(err) {
    console.error(`ERROR: ${err.message}`);
    process.exit(1);
});

request.end();
