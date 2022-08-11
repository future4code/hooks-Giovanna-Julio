let toDoList = ["Buy toilette paper", "Laundry"]

toDoList.push(process.argv[2])

console.log("Task added successfully:")
console.table(toDoList)