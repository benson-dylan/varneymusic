const buttons = document.querySelectorAll(".tab-btn");
const contents = document.querySelectorAll(".tab-content");

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(b => b.classList.remove("active"));
        contents.forEach(c => c.setAttribute("hidden", ""));

        btn.classList.add("active");
        document.getElementById(btn.dataset.tab).removeAttribute("hidden");
    });
});

let currentTab = 0;
const scoreTabs = document.querySelectorAll(".score-page");
const dots = document.querySelectorAll(".page-dot");

console.log(scoreTabs.length + " " + dots.length);

function showTab(index) {
    scoreTabs[currentTab].setAttribute("hidden", "");
    dots[currentTab].classList.remove("current-page");
    currentTab = index;
    scoreTabs[currentTab].removeAttribute("hidden");
    dots[currentTab].classList.add("current-page");
}

function changeTab(direction)
{
    console.log("DIRECTION " + direction);
    const next = (currentTab + direction + scoreTabs.length) % scoreTabs.length; 
    console.log("GOING TO TAB " + next);
    showTab(next);
}

function scrollScoreLeft()
{
    changeTab(-1);
}

function scrollScoreRight()
{
    changeTab(1);
}