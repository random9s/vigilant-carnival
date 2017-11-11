(function(w, d) {
    'use strict';

    w.FyusesOnScreen = {};

    class Fyuse {
        constructor (obj) {
            this.uid = obj.uid || '';
            this.path = obj.path || '';
            this.divID = 'fyu_'+obj.uid || '';
            this.viewer = null;
        }

        init () {

            var remID = this.uid+'_remove';
            d.getElementById(remID).addEventListener('click', function () {
                var uid = remID.slice(0,-7);
                w.FyusesOnScreen[uid].remove ();
            });
        }

        remove () {
            this.viewer.remove();
            var elem = d.getElementById(this.uid+'_container');
            elem.parentNode.removeChild(elem);
            delete w.FyusesOnScreen[this.uid];
        }

        toDiv () {
            return '<div id="'+this.uid+'_container" class="top-buffer col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">'+
                '<div id="'+this.divID+'" class="fyu_container fyu_horizontal"></div>'+
                '<div style="cursor:pointer;" id="'+this.uid+'_remove">x</div>'+
            '</div>';
        }
    };

    var fyuURL = getURL ('fyuse');
    const getFyuses = () => { return w.composeGet(fyuseURL)(null); }

    //Create base url and get request to get fyuse by uid
    var fyuBaseURL = w.getURLWithID ('fyuse');
    const getFyuseByID = id => { return w.composeGet (fyuBaseURL(id))(null); }

    d.getElementById('addnew').addEventListener('click', function () {
        var uid = d.getElementById('in-uid').value;
        d.getElementById('in-uid').value = '';
        if (w.FyusesOnScreen[uid]) return;

        const fyuReq = getFyuseByID (uid);
        const p = new Promise ((resolve, reject) => {
            fyuReq.xhr.onload = () => resolve(fyuReq.xhr);
            fyuReq.xhr.onerror = () => reject(fyuReq.xhr);
            fyuReq.send ();
        }).then ((v) => {
            const f = new Fyuse (JSON.parse(v.responseText));
            var fyuseList = d.getElementById ('fyu-list');
            fyuseList.innerHTML += f.toDiv ();
            f.init();

            w.FyusesOnScreen[f.uid]=f;
        }).catch ((e) => {
            console.log ("Error " + e);
        });
    });
})(window, document);
