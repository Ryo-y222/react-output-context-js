/**
 * AddTodo
 *
 * @package components
 */

import { InputForm } from "../../atoms/InputForm/index.jsx";
import styles from "./style.module.css";

/**
 * AddTodo
 * @param {*}props
 * @returns
 */

export const AddTodo = (props) => {
  /* props */
  const { addInputValue, onChangeTodo, handleAddTodo } = props;

  return (
    <>
      <h2 className={styles.subTitle}>{"Add Todo"}</h2>
      <InputForm
        inputValue={addInputValue}
        placeholder={"New Todo"}
        handleChangeValue={onChangeTodo}
        handleKeyDown={handleAddTodo}
      />
    </>
  );
};
