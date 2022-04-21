const Qname = document.getElementById("Qname");
const data = JSON.parse(sessionStorage.getItem("List"));
const name = JSON.parse(sessionStorage.getItem("Data")).title;
Qname.innerHTML = name;

const queue = document.getElementById("queue");
const list = document.createElement("ul");
console.log("1")
for (let i of data) {
    console.log(i)
    let item = document.createElement("li");
    item.innerHTML = i.username;
    list.appendChild(item);
}
console.log("3")
queue.appendChild(list);