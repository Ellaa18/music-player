const right = document.getElementById("right");
const leftb = document.getElementById("leftb");
const righb = document.getElementById("rightb");
const rightc = document.getElementById("righc");
const leftc = document.getElementById("leftc");
const bar = document.getElementById("bar");
const barb = document.getElementById("barb");
const barc = document.getElementById("barc");
const ca = document.getElementById("ca");
const cb = document.getElementById("cb");
const bars = document.getElementById("bars");
const caa = document.getElementById("caa");
const cbb = document.getElementById("cbb");
const ccc = document.getElementById("ccc");

right.addEventListener("click", event => {
    ca.style.display = "none";
    cc.style.display = "none";
    cb.style.display = "block";
});
leftb.addEventListener("click", event => {
    cb.style.display = "none";
    ca.style.display = "block";
    cc.style.display = "none";
});



rightb.addEventListener("click", event => {
    ca.style.display = "none";
    cc.style.display = "block";
    cb.style.display = "none";
});
leftc.addEventListener("click", event => {
    cb.style.display = "block";
    ca.style.display = "none";
    cc.style.display = "none";
});


bar.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent document click from hiding it immediately
    bars.style.display = bars.style.display === "block" ? "none" : "block";
});

// Hide menu if clicking anywhere else
document.addEventListener("click", (event) => {
    if (!event.target.closest("#bar")) {
        bars.style.display = "none";
    }
});

barb.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent document click from hiding it immediately
    bars.style.display = bars.style.display === "block" ? "none" : "block";
});

// Hide menu if clicking anywhere else
document.addEventListener("click", (event) => {
    if (!event.target.closest("#bar")) {
        bars.style.display = "none";
    }
});


barc.addEventListener("click", (event) => {
    event.stopPropagation(); // prevent document click from hiding it immediately
    bars.style.display = bars.style.display === "block" ? "none" : "block";
});

// Hide menu if clicking anywhere else
document.addEventListener("click", (event) => {
    if (!event.target.closest("#bar")) {
        bars.style.display = "none";
    }
});





caa.addEventListener("click", event => {
    cb.style.display = "none";
    ca.style.display = "block";
    cc.style.display = "none";
});
cbb.addEventListener("click", event => {
    cb.style.display = "block";
    ca.style.display = "none";
    cc.style.display = "none";
});

ccc.addEventListener("click", event => {
    ca.style.display = "none";
    cc.style.display = "block";
    cb.style.display = "none";
});

