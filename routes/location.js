var http = require('http');
var https = require('https');
var express = require('express');
var router = express.Router();
var fs = require('fs');
var os = require('os');

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date());
    next();
})

router.get('/metadata', function(req, res, next) {
    console.log('[GET /loc/metadata]');
    getCloudMetadata(function(c, z, h) {
        console.log(`CLOUD: ${c}`);
        console.log(`ZONE: ${z}`);
        console.log(`HOST: ${h}`);
        res.json({
            cloud: c,
            zone: z,
            host: h
        });
    });
});

function getCloudMetadata(callback) {
    console.log('getCloudMetadata');

    const filename = '/etc/nodeinfo/data';

    var nodeinfo = {
        cloud: "unknown",
        zone: "unknown"
    };

    fs.readFile(filename, 'utf8', function (err, data) {
        if (err) {
            console.log(`error reading ${filename}: ${err}`);
            callback('unknown', 'unknown', 'unknown');
            return;
        }

        try {
            var parsed = JSON.parse(data);
            callback(parsed.cloud, parsed.zone, parsed.hostname);
        } catch (e) {
            console.log(`exception while trying to parse JSON: ${err}`);
            callback('unknown', 'unknown', 'unknown');
        }
    });
}

module.exports = router;
