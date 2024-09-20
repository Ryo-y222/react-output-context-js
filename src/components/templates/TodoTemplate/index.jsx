/**
 * 全体像
 * TodoTemplate
 *
 * @package components
 */

import { InputForm } from "../../atoms/InputForm/index.jsx";
import { AddTodo } from "../../organisms/AddTodo/index.jsx";
import { TodoList } from "../../organisms/TodoList/index.jsx";
import { useTodoContext } from "../../../contexts/TodoContext.jsx";
import styles from "./styles.module.css";

/**
 * TodoTemplate
 * @return {JSX.Element}
 * @constructor
 */

export const TodoTemplate = () => {
  const {
    addInputValue,
    searchKeyword,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  } = useTodoContext();

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Todo List</h1>
      {/*Todo追加エリア*/}
      <section className={styles.common}>
        <AddTodo
          addInputValue={addInputValue}
          onChangeTodo={onChangeAddInputValue}
          handleAddTodo={handleAddTodo}
        />
      </section>
      {/*Todo検索フォームエリア*/}
      <section className={styles.common}>
        <InputForm
          inputValue={searchKeyword}
          placeholder={"Search Keyword"}
          handleChangeValue={handleChangeSearchKeyword}
        />
      </section>
      {/*Todoリスト一覧表示*/}
      <section className={styles.common}>
        {showTodoList.length > 0 && (
          <TodoList
            todoList={showTodoList}
            handleDeleteTodo={handleDeleteTodo}
          />
        )}
      </section>
    </div>
  );
};
