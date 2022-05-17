import React, { useState } from "react";
import "./App.css";
import Add from "./components/Add";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Search from "./components/Search";
import Table from "./components/Table";

function App() {
    const [todoList, setTodoList] = useState<any>([]);

    const [isAdd, setIsAdd] = useState(false);
    const handleClickAdd = () => {
        setIsAdd(!isAdd);
    };
    const handleClickClose = () => {
        setIsAdd(!isAdd);
    };
    // Add Todo
    const handleAdd = (data: { id: string; job: string; status: boolean }) => {
        setTodoList([...todoList, data]);
    };
    // Remove todo
    const handleRemove = (id: string) => {
        setTodoList(todoList.filter((item: any) => item.id !== id));
    };

    return (
        <div className="App">
            <div className="container">
                <Header />
                <main>
                    <div className="row">
                        {isAdd && (
                            <Add click={handleClickClose} onAdd={handleAdd} />
                        )}
                        <div
                            className={
                                isAdd
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
