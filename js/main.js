const links = [
    {
      label: "Week1 notes",
      url: "week1/index.html"
    }
]

let list = document.getElementById("myList");

let data = ['Ram', 'Shyam', 'Sita', 'Gita' ];
    
data.forEach((item)=>{
  let li = document.createElement("li");
  li.innerText = item;
  list.appendChild(li);
})