import React, { useEffect, useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";
import Update from "./components/Update";

function App() {
    //data
    const [todoList, setTodoList] = useState<any>([]);

    const [todoUpdate, setTodoUpdate] = useState<any>();
    //condition show Box add or update
    const [statusBox, setStatusBox] = useState({ status: false, action: "" });
    //when click btn add
    const handleClickAdd = () => {
        setStatusBox({ status: !statusBox.status, action: "add" });
    };
    //when click btn close
    const handleClickClose = () => {
        setStatusBox({ status: !statusBox, action: "" });
    };
    //show box when click btn update in Table Component
    const handleClickUpdate = () => {
        setStatusBox({ status: true, action: "update" });
    };
    /*================== Work with data =============*/
    // Add Todo
    const handleAdd = (data: { id: string; job: string; status: boolean }) => {
        setTodoList([...todoList, data]);
    };
    // Remove todo
    const handleRemove = (id: string) => {
        const isRemove = window.confirm("Are you sure you want to remove");
        if (isRemove) {
            setTodoList(todoList.filter((item: any) => item.id !== id));
        }
    };
    // Update todo
    const handleUpdate = (id: string) => {
        const todo = todoList.find((item: any) => item.id === id);
        setTodoUpdate(todo);
    };
    // useEffect(()=>{

    // },[todoUpdate])
    // console.log("app", todoUpdate);

    return (
        <div className="App">
            <div className="container">
                <Header />
                <main>
                    <div className="row">
                        {statusBox.status && statusBox.action === "add" ? (
                            <Add click={handleClickClose} onAdd={handleAdd} />
                        ) : statusBox.status &&
                          statusBox.action === "update" ? (
                            <Update
                                click={handleClickClose}
                                todoUpdate={todoUpdate}
                            />
                        ) : (
                            ""
                        )}
                        <div
                            className={
                                statusBox.status
                                    ? "col-xs-8 col-sm-8 col-md-8 col-lg-8"
                                    : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                            }
                        >
                            <button
                                onClick={handleClickAdd}
                                type="button"
                                className="btn btn-primary mb-2"
                            >
                                <i className="fa-solid fa-plus"></i> Thêm Công
                                Việc
                            </button>
                            <div className="row">
                                <Search />
                                <Filter />
                            </div>

                            <div className="mt-4">
                                <Table
                                    data={todoList}
                                    onRemove={handleRemove}
                                    click={handleClickUpdate}
                                    onUpdate={handleUpdate}
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
