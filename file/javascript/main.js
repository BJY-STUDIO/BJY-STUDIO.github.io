! function() {
    "use strict";

    function e() {
        c.classList.remove("disabled"), n.classList.remove("disabled"), l.scrollLeft <= 0 && c.classList.add("disabled"), l.scrollLeft + l.clientWidth + 5 >= l.scrollWidth && n.classList.add("disabled")
    }

    function t(e) {
        l.scrollLeft += e
    }
    var n = document.querySelector(".scrollindicator.scrollindicator--right"),
        c = document.querySelector(".scrollindicator.scrollindicator--left"),
        l = document.querySelector(".docs-navigation"),
        i = 40;
    l.addEventListener("scroll", e), e(), n.addEventListener("click", t.bind(null, i)), n.addEventListener("tap", t.bind(null, i)), c.addEventListener("click", t.bind(null, -i)), c.addEventListener("tap", t.bind(null, -i))
}(),
function() {
    "use strict";
    var e = document.querySelector(".download-button-container");
    e && e.addEventListener("click", function() {
        ga("send", {
            hitType: "event",
            eventCategory: "click",
            eventAction: "mdl-download"
        })
    })
}(),
function() {
    "use strict";
    var e = document.querySelectorAll('[href=""]');
    Array.prototype.forEach.call(e, function(e) {
        e.addEventListener("click", function(e) {
            e.preventDefault()
        })
    })
}();