// 6. Todos (5p)

// Skapa en lista med TODOs som hämtas från: https://jsonplaceholder.typicode.com/todos
// Listan ska placeras i div-elementet med id todos på index.html

// Visa de första 10 TODOs i listan.
// För varje TODO ska följande visas:
// Titeln på TODO:n
// Om den är klar eller inte "completed" eller "not completed"
// Markera TODOs som är klara genom att visa dem med en grön textfärg.

const todos = document.getElementById("toDos");

async function getTodos() {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await response.json();

  data.todos.forEach((element) => {
    //okej först loopa genom sen skapa 10 stycken med for-loop nedan
    for (let i = 0; i < 10; i++) {
      const toDoList = document.createElement("div");
      const toDoTitle = document.createElement("h2");
      const toDoStatus = document.createElement("h3");

      //sen ge innehåll
      toDoTitle.textContent = element.title;
      toDoStatus.textContent = element.completed;

      //if completed-grejen

      if (element.completed == "true") {
        toDoStatus.textContent = "completed";
        toDoStatus.style.color = "green";
      } else {
        toDoStatus.textContent = "not completed";
        toDoStatus.style.color = "black";
      }
      //sen appenda
      toDoList.append(toDoTitle, toDoStatus);
      todos.append(toDoList);
    }
  });
}

getTodos();
