document.getElementById("submit").addEventListener('click', () => {
    addItem();
});
function addItem() {
    let comment = document.getElementById("comment").value;
    window.localStorage.setItem(1, comment);
    console.log(window.localStorage.getItem(1));
}
// let comments = window.localStorage.getItem;