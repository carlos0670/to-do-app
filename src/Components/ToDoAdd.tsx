import styles from "./Container.module.css";
interface ToDoItem {
  id: string;
  text: string;
  completed: boolean;
  removido: boolean;
}

interface Props {
  listToDo: ToDoItem[];
  onRemove: (id: string) => void;
  onCompletionToggle: (id: string) => void;
}

const ToDoAdd = ({ listToDo, onRemove, onCompletionToggle }: Props) => {
  return listToDo
    .filter((item) => !item.removido)
    .map((item) => (
      <div key={item.id}>
        <p className={item.completed ? styles.pThrough : ""}>{item.text}</p>
        <div>
          <div>
            <button type="button" onClick={() => onRemove(item.id)}>
              X
            </button>
            <button type="button" onClick={() => onCompletionToggle(item.id)}>
              OK
            </button>
          </div>
        </div>
      </div>
    ));
};
export default ToDoAdd;
