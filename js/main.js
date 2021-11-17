const links = [
  { label: "Week 1 Questions", url: "week01/index.html" },
  { label: "Week 2 Notes / Questions", url: "week02/notesAndQuestions.html" },
  { label: "Week 3", url: "week03/index.html" },
  { label: "Week 4", url: "week04/index.html" },
  { label: "Week 5", url: "week05/index.html" },
  { label: "Week 6 Todo List", url: "week06/To-Do.html" },
  { label: "Week 7", url: "week07/index.html" },
  { label: "Week 8 Notes", url: "week08/notes.html" },
  { label: "Week 9 Notes", url: "week09/notes.html" },

  { label: "Block 2 Challenge: Online Aural Intonation Training", url: "Block2Challenge/index.html" }
]

let list = document.getElementById("myList");

links.forEach((item) => {
  let li = document.createElement("li");
  li.innerText = item.label;
  li.innerHTML = item.label.link(item.url);
  list.appendChild(li);
});