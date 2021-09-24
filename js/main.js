const links = [
  {
    label: "Week1 Notes",
    url: "week01/index.html"
  },
  {
    label: "Week2",
    url: "week02/index.html"
  }
]

let list = document.getElementById("myList");

links.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item.label;
  li.innerHTML = item.label.link(item.url);
  list.appendChild(li);
});