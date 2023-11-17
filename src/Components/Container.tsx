import React, { useState } from "react";
import styles from "./Container.module.css";
import ToDoAdd from "./ToDoAdd";

interface ToDoItem {
  id: string;
  text: string;
  completed: boolean;
  removido: boolean;
}

const Container = () => {
  const [listToDo, setListToDo] = useState<ToDoItem[]>([
    { id: "1", text: "fazer comida", completed: false, removido: false },
    { id: "2", text: "lavar a louça", completed: false, removido: false },
    { id: "3", text: "varrer a casa", completed: false, removido: false },
  ]);

  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleAddButtonClick = () => {
    if (inputValue.trim() === "") {
      return;
    }

    const newToDoItem: ToDoItem = {
      id: String(Date.now()),
      text: inputValue,
      completed: false,
      removido: false,
    };

    setListToDo([newToDoItem, ...listToDo]);
    setInputValue("");
  };

  const handleOnRemove = (id: string) => {
    setListToDo((blabla) =>
      blabla.map((item) =>
        item.id === id ? { ...item, removido: !item.removido } : item
      )
    );
  };

  const handleCompletionToggle = (id: string) => {
    setListToDo((prevList) =>
      prevList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  return (
    <div>
      <form>
        <h1>To Do List</h1>
        <div>
          <input
            type="text"
            placeholder="Nova Tarefa"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button type="button" onClick={handleAddButtonClick}>
            Adicionar
          </button>
        </div>
        <div>
          <ToDoAdd
            listToDo={listToDo}
            onRemove={handleOnRemove}
            onCompletionToggle={handleCompletionToggle}
          />
        </div>
      </form>
    </div>
  );
};

export default Container;
