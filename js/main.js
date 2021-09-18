const links = [
  {
    label: "Week1 Notes",
    url: "week01/index.html"
  }
]
// let data = ["Ram", "Shyam", "Sita", "Gita"];
let list = document.getElementById("myList");

links.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item.label;
  li.innerText.url = item.url;
  list.appendChild(li);
});