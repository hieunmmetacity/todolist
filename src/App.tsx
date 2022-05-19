import React, { useEffect, useState } from "react";
import "./App.css";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import { getTodoLocalStorage, setTodoLocalStorage } from "./utils/localStorage";

console.log("render");

function App() {
    const todoLocalStorage = getTodoLocalStorage();
    const [todoList, setTodoList] = useState<any>(todoLocalStorage || []);

    const [todoUpdate, setTodoUpdate] = useState<any>();

    const [statusForm, setStatusForm] = useState({ status: false, action: "" });

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
        const todoListInLocalStorage = getTodoLocalStorage();
        const newTodoList = [...todoListInLocalStorage, data];
        setTodoList(newTodoList);
        setTodoLocalStorage(newTodoList);
    };
    // Remove todo
    const handleRemove = (id: string) => {
        const todoListInLocalStorage = getTodoLocalStorage();
        const isRemove = window.confirm("Are you sure you want to remove");
        if (isRemove) {
            const newTodoList = todoListInLocalStorage.filter(
                (item: any) => item.id !== id
            );
            setTodoList(newTodoList);
            setTodoLocalStorage(newTodoList);
        }
    };
    // Edit todo
    const handleEdit = (id: string) => {
        const todoListInLocalStorage = getTodoLocalStorage();
        const todo = todoListInLocalStorage.find((item: any) => item.id === id);
        setTodoUpdate(todo);
    };
    // Update todo
    const handleUpdate = (data: any) => {
        const todoListInLocalStorage = getTodoLocalStorage();
        const newTodoList = todoListInLocalStorage.map((item: any) =>
            item.id === data.id ? data : item
        );
        setTodoList(newTodoList);
        setTodoLocalStorage(newTodoList);
    };
    // Click change status
    const handleChangeStatus = (id: string) => {
        const todoListInLocalStorage = getTodoLocalStorage();
        const currentTodo = todoListInLocalStorage.find(
            (item: any) => item.id === id
        );
        if (currentTodo.status === "1") {
            currentTodo.status = "0";
        } else {
            currentTodo.status = "1";
        }

        const newTodoList = todoListInLocalStorage.map((item: any) =>
            item.id === id ? currentTodo : item
        );
        setTodoList(newTodoList);
        setTodoLocalStorage(newTodoList);
    };
    /* =================Filter======================== */
    const handleFilterByStatus = (filterBy: string) => {
        const todoListInLocalStorage = getTodoLocalStorage();

        if (filterBy === "1") {
            const newTodoList = todoListInLocalStorage.filter(
                (todo: any) => todo.status === "1"
            );
            setTodoList(newTodoList);
        } else if (filterBy === "0") {
            const newTodoList = todoListInLocalStorage.filter(
                (todo: any) => todo.status === "0"
            );
            setTodoList(newTodoList);
        } else {
            const todoListInLocalStorage = getTodoLocalStorage();
            setTodoList(todoListInLocalStorage);
            // setTodoList(getTodoLocalStorage());
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
                                    data={todoList}
                                    onRemove={handleRemove}
                                    clickBtnUpdate={handleClickBtnUpdate}
                                    onEdit={handleEdit}
                                    handleChangeStatus={handleChangeStatus}
                                    handleFilterByStatus={handleFilterByStatus}
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
