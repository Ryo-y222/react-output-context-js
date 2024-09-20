/**
 * useTodo
 *
 * @package hooks
 */

import { useState, useMemo } from "react";
import { INIT_TODO_LIST, INIT_UNIQUE_ID } from "../constants/data";

/**
 * useTodo
 */

export const useTodo = () => {
  /* TodoList */
  const [originTodoList, setOriginTodoList] = useState(INIT_TODO_LIST);
  /* add input title */
  const [addInputValue, setAddInputValue] = useState("");
  /*todo採番id */
  const [uniqueId, setUniqueId] = useState(INIT_UNIQUE_ID);
  /*　検索キーワード */
  const [searchKeyword, setSearchKeyword] = useState("");
  /* 表示用TodoList */
  const showTodoList = useMemo(() => {
    return originTodoList.filter((todo) => {
      const regexp = new RegExp("^" + searchKeyword, "i");
      return todo.title.match(regexp);
    });
  }, [originTodoList, searchKeyword]);

  /* actions */
  /**
   *  addInputValueの変更処理
   *  @param {*}e
   */
  const onChangeAddInputValue = (e) => setAddInputValue(e.target.value);

  /**
   * Todo新規登録処理
   * @param {*}e
   */
  const handleAddTodo = (e) => {
    if (e.key === "Enter" && addInputValue !== "") {
      const nextUniqueId = uniqueId + 1;

      const newTodoList = [
        ...originTodoList,
        {
          id: nextUniqueId,
          title: addInputValue,
        },
      ];
      setOriginTodoList(newTodoList);

      // 採番IDを更新
      setUniqueId(nextUniqueId);
      //　todo入力後、入力値をリセット
      setAddInputValue("");
    }
  };

  /**
   * Todo削除処理
   * @param {number} targetId
   * @param {string} targetTitle
   */
  const handleDeleteTodo = (targetId, targetTitle) => {
    if (window.confirm(`${targetTitle}のtodoを削除しますか？`)) {
      const newTodoList = originTodoList.filter((todo) => todo.id === targetId);
      setOriginTodoList(newTodoList);
    }
  };

  /**
   * 検索キーワード更新処理
   * @param {*}e
   */
  const handleChangeSearchKeyword = (e) => setSearchKeyword(e.target.value);

  return {
    addInputValue,
    searchKeyword,
    showTodoList,
    onChangeAddInputValue,
    handleAddTodo,
    handleDeleteTodo,
    handleChangeSearchKeyword,
  };
};
