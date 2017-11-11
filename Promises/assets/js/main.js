(function(w, d) {
    'use strict';

    var resourceMap = {
    };

    const getURL = resource => {
        var url = resourceMap[resource];
        console.assert(url.length != 0, 'entity mapping not found');
        return url;
    }
    w.getURL = getURL;

    const getURLWithID = resource => id => { return getURL(resource) + '/' + id; }
    w.getURLWithID = getURLWithID;

    //Function to compose a new request
    const composeReq = x => y => z => { return new Request ({ method: x, url: y, data: z }); }

    //Function to compose a specific request
    const composeGet = composeReq('GET');
    w.composeGet = composeGet;

    const composePost = composeReq('POST');
    w.composePost = composePost;

    const composePut = composeReq('PUT');
    w.composePut = composePut;

    const composePatch = composeReq('PATCH');
    w.composePatch = composePatch;

    const composeDelete = composeReq('DELETE');
    w.composeDelete = composeDelete;
}(window, document));
