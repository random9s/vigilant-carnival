class Response {
    constructor (obj) {
        this.statusCode = obj.statusCode || 200;
        this.headers = obj.headers || {};
        this.body = obj.body || null;
        this.contentLength = obj.contentLength || 0;
    }
};

class Request {
    constructor (obj) {
        this.method = obj.method || 'GET';
        this.url = obj.url || console.assert (obj.url, "url needed to create a request");
        //Headers that will be set and headers that will be retrieved
        this.reqHeaders = obj.reqHeaders || null;
        this.respHeaders = obj.respHeaders || null;
        this.headers = {};
        //Holds POST/PUT data
        this.data = obj.data || null;
        //Usually used to update the HTML/CSS view for each state
        this.progressStateFn = obj.progState || function () {};
        this.loadedStateFn = obj.loadState || function () {};
        this.errorStateFn = obj.errorState || function () {};
        this.abortStateFn = obj.abortState || function () {};
        //User methods for success error
        this.success = obj.success || function (v) {console.log(v)};
        this.error = obj.error || function (e) {console.log(e)};

        //Define and create XHRHttpRequest
        const xhr = new XMLHttpRequest();
        //Get response headers when appropriate
        xhr.onreadystatechange = () => {
            if (this.readyState == this.HEADERS_RECEIVED && this.respHeaders) {
                for (var k in this.respHeaders)
                    this.headers[k] = xhr.getResponseHeader (k);

                this.headers["content-length"] = xhr.getResponseHeader ("content-length") || 0;
            }
        };

        //Set request headers
        if (this.reqHeaders)
            for (var k in this.reqHeaders)
                xhr.setRequestHeader (k, this.reqHeaders[k]);

        //Set state functions, if necessary
        if (this.progressStateFn) xhr.addEventListener("progress", this.progressStateFn);
        if (this.loadedStateFn) xhr.addEventListener("load", this.loadedStateFn);
        if (this.errorStateFn) xhr.addEventListener("error", this.errorStateFn);
        if (this.abortStateFn) xhr.addEventListener("abort", this.abortStateFn);

        this.xhr = xhr;
        return this;
    }

    updateViewOnProgress (progFn) {
        this.xhr.addEventListener("progress", progFn);
    }

    updateViewOnLoad (loadFn) {
        this.xhr.addEventListener("load", loadFn);
    }

    updateViewOnError (errFn) {
        this.xhr.addEventListener("error", errFn);
    }

    updateViewOnAbort (abortFn) {
        this.xhr.addEventListener("abort", abortFn);
    }

    send () {
        this.xhr.open (this.method, this.url);
        this.xhr.send ();
    }
};
