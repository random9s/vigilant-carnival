(function(w, d) {
    'use strict';

    const updateProgress = () => {
        console.log("processing...");
    };

    const transferComplete = () => {
        console.log("loaded");
    };

    const transferFailed = () => {
        console.log("failed");
    };

    const transferCanceled = () => {
        console.log("cancel");
    };

    const get = url => {
        var req = new Request ({
            method: "GET",
            url: url,
            progState: updateProgress,
            loadState: transferComplete,
            errorState: transferFailed,
            abortState: transferCanceled
        });

        req.send();
    }

    var btn = d.getElementById("start");
    btn.addEventListener("click", function () {
        get("https://lwp.fyu.se");
        get("https://fyu.se/embed/jok2ul6cr9");
    });
}(window, document));
