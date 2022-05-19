export const setTodoLocalStorage = (data: any) => {
    localStorage.setItem("todoList", JSON.stringify(data));
};
export const getTodoLocalStorage = () => {
    return JSON.parse(localStorage.getItem("todoList") as string);
};
