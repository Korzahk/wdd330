const links = [
  {
    label: "Week1 notes",
    url: "week1/index.html"
  }
]

let list = document.getElementById("myList");

links.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
});