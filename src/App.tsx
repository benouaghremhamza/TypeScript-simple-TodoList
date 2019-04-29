import React, { Fragment, useState } from "react";

type FormElem = React.FormEvent<HTMLFormElement>;

//Interface of how a Todo needs to be
interface ITodo {
  text: string;
  complete: boolean;
}

function App(): JSX.Element {
  //ToDo name input
  const [toDoTitle, settoDoTitle] = useState<string>("");
  //ToDo state with the type ITodo
  const [todos, setTodos] = useState<ITodo[]>([]);

  //Prevent page refresh and clear the inputs

  const handleSubmit = (e: FormElem): void => {
    e.preventDefault();
    addTodo(toDoTitle);
    settoDoTitle("");
  };

  const addTodo = (text: string): void => {
    const newTodos: ITodo[] = [...todos, { text, complete: false }];
    setTodos(newTodos);
  };

  const completeTodo = (index:number):void => {
    const changedTodos: ITodo[] = todos
    changedTodos[index].complete = !changedTodos[index].complete
    setTodos(changedTodos)

  }
 
  return (
    <Fragment>
      <div className="Form">
      <h1>Todo List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={toDoTitle}
          onChange={e => settoDoTitle(e.target.value)}
          required
        />
        <button type="submit">Add Todo</button>
      </form>
      </div>
      <section className ="todos">
        {todos.map((todo: ITodo, index: number) => (
          <div className="todo">
            <div>{todo.text}</div>
            <button type='button' onClick={() => completeTodo(index)}>
              {todo.complete ? 'Incomplete' : 'Complete'}
            </button>
          </div>
                  ))}
      </section>
    </Fragment>
  );
}

export default App;
