import React, { useEffect, useState } from "react";

type Props = {
    click: () => void;
    todoUpdate: { id: string; name: string; status: string };
};

const Update = (props: Props) => {
    const [status, setStatus] = useState(true);
    const [todo, setTodo] = useState<any>(() => {
        console.log("re-render");
        return props.todoUpdate;
    });
    useEffect(() => {
        setTodo(props.todoUpdate);
    }, [props.todoUpdate.id]);
    // console.log("todoUpdate", props.todoUpdate);
    console.log("todo", todo);

    // console.log(todo);
    const handleClickClose = () => {
        props.click();
    };
    const handleReset = () => {
        const formAdd: any = document.querySelector("#formAdd");
        if (formAdd) formAdd.reset();
    };
    const handleSubmit = () => {};
    // console.log("update", todoUpdate);
    // console.log("todo", todo);

    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning border p-4">
                <div className="panel-heading">
                    <h3 className="panel-title d-flex justify-content-between">
                        <div>Cập nhật Công Việc</div>
                        <div>
                            <span
                                className="fa fa-times-circle"
                                onClick={handleClickClose}
                            ></span>
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <form onSubmit={handleSubmit} id="formAdd">
                        <div className="form-group">
                            <label>Tên :</label>
                            <input
                                type="text"
                                className="form-control"
                                name="name"
                                defaultValue={todo.name}
                            />
                        </div>
                        <label>Trạng Thái :</label>
                        <select
                            className="form-control"
                            name="status"
                            onChange={(e: any) => {
                                const status =
                                    e.target.value === 1 ? true : false;
                                setStatus(status);
                            }}
                        >
                            <option value={1}>Kích hoạt</option>
                            <option value={0}>Ẩn</option>
                        </select>
                        <br />
                        <div className="text-center">
                            <button type="submit" className="btn btn-warning">
                                <span className="fa fa-plus mr-5"></span>
                                Lưu Lại
                            </button>
                            &nbsp;
                            <button
                                type="button"
                                className="btn btn-danger"
                                onClick={handleReset}
                            >
                                <span className="fa fa-close mr-5"></span>
                                Hủy Bỏ
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Update;
