// let app = document.getElementById("app")
// app.innerHTML = "<h2>host</h2>"
import("remote/addList").then(({ addList }) => {
  console.log(addList)
  let app = document.getElementById("app")
  app.innerHTML = "<h2>host</h2>"
  addList()
})
