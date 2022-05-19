import React, { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import { getTodoLocalStorage, setTodoLocalStorage } from "./utils/localStorage";

const todoLocalStorage = getTodoLocalStorage();
let filterValue: string;
function App() {
    const [todoList, setTodoList] = useState<any>(todoLocalStorage || []);
    const [todoFilter, setTodoFilter] = useState<any>();
    const [todoUpdate, setTodoUpdate] = useState<any>();

    const [statusForm, setStatusForm] = useState({ status: false, action: "" });

    setTodoLocalStorage(todoList);
    //fix bug
    useEffect(() => handleFilterByStatus(filterValue), [todoList]);
    //condition show Box add or update
    //when click btn add
    const handleClickOpen = () => {
        if (statusForm.status && statusForm.action === "update") {
            setStatusForm({ status: true, action: "add" });
        } else {
            setStatusForm({ status: !statusForm.status, action: "add" });
        }
    };
    // console.log(statusForm);

    //when click btn close
    const handleClickClose = () => {
        setStatusForm({ status: false, action: "" });
    };
    //show box when click btn update in Table Component
    const handleClickBtnUpdate = () => {
        setStatusForm({ status: true, action: "update" });
    };
    /*================== Work with data =============*/
    // Add Todo
    const handleAdd = (data: { id: string; job: string; status: boolean }) => {
        const newTodoList = [...todoList, data];
        setTodoList(newTodoList);
    };
    // Remove todo
    const handleRemove = (id: string) => {
        const isRemove = window.confirm("Are you sure you want to remove");
        if (isRemove) {
            const newTodoList = todoList.filter((item: any) => item.id !== id);
            setTodoList(newTodoList);
        }
    };
    // Edit todo
    const handleEdit = (id: string) => {
        const todo = todoList.find((item: any) => item.id === id);
        setTodoUpdate(todo);
    };
    // Update todo
    const handleUpdate = (data: any) => {
        const newTodoList = todoList.map((item: any) =>
            item.id === data.id ? data : item
        );
        setTodoList(newTodoList);
        setTodoLocalStorage(newTodoList);
    };
    // Click change status
    const handleChangeStatus = (id: string) => {
        const currentTodo = todoList.find((item: any) => item.id === id);
        if (currentTodo.status === "1") {
            currentTodo.status = "0";
        } else {
            currentTodo.status = "1";
        }

        const newTodoList = todoList.map((item: any) =>
            item.id === id ? currentTodo : item
        );
        setTodoList(newTodoList);
    };
    /* =================Filter======================== */
    const handleFilterByStatus = (filterBy: string) => {
        filterValue = filterBy;
        if (filterBy === "1") {
            const newTodoList = todoList.filter(
                (todo: any) => todo.status === "1"
            );
            setTodoFilter(newTodoList);
        } else if (filterBy === "0") {
            const newTodoList = todoList.filter(
                (todo: any) => todo.status === "0"
            );
            setTodoFilter(newTodoList);
        } else {
            setTodoFilter(todoList);
        }
    };
    const handleChangeSearch = (searchValue: string) => {
        console.log(searchValue);
        if (searchValue !== "") {
            const newTodoList = todoFilter.filter((todo: any) =>
                todo.name.toLowerCase().includes(searchValue.toLowerCase())
            );
            setTodoFilter(newTodoList);
        } else {
            setTodoFilter(todoList);
        }
    };
    return (
        <div className="App">
            <div className="container">
                <Header />
                <main>
                    <div className="row">
                        {statusForm.status && (
                            <Form
                                clickClose={handleClickClose}
                                todoUpdate={todoUpdate}
                                onUpdate={handleUpdate}
                                onAdd={handleAdd}
                                action={statusForm.action}
                            />
                        )}
                        <div
                            className={
                                statusForm.status
                                    ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                                    : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            }
                        >
                            <button
                                onClick={handleClickOpen}
                                type="button"
                                className="btn btn-primary mb-2"
                            >
                                <i className="fa-solid fa-plus"></i> Thêm Công
                                Việc
                            </button>
                            <div className="row">
                                <Search />
                                <Filter
                                    handleFilterByStatus={handleFilterByStatus}
                                />
                            </div>

                            <div className="mt-4">
                                <Table
                                    data={todoFilter ? todoFilter : todoList}
                                    onRemove={handleRemove}
                                    clickBtnUpdate={handleClickBtnUpdate}
                                    onEdit={handleEdit}
                                    handleChangeStatus={handleChangeStatus}
                                    handleFilterByStatus={handleFilterByStatus}
                                    handleChangeSearch={handleChangeSearch}
                                />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}

export default App;
