import React, { useEffect, useRef } from "react";
import { getUuid } from "../utils/uuid";

type Props = {
    clickClose: () => void;
    onAdd: (data: any) => void;
    todoUpdate: { id: string; name: string; status: string };
    onUpdate: (data: any) => void;
    action: string;
};

const Form = (props: Props) => {
    const name = useRef<any>();
    const status = useRef<any>();
    useEffect(() => {
        if (props.action === "add") {
            name.current.value = "";
            status.current.value = "1";
        }
    }, [props.action]);
    useEffect(() => {
        if (props.action === "update") {
            name.current.value = props.todoUpdate.name;
            status.current.value = props.todoUpdate.status;
        }
    }, [props.todoUpdate]);

    // close box form add
    const handleClickClose = () => {
        props.clickClose();
    };
    //Reset form add
    const handleReset = () => {
        name.current.value = "";
        status.current.value = "1";
    };
    // Send data to app
    const handleClickSubmit = () => {
        if (props.action === "add") {
            const data = {
                id: getUuid(),
                name: name.current.value,
                status: status.current.value,
            };
            props.onAdd(data);
            handleReset();
        } else {
            const data = {
                id: props.todoUpdate.id,
                name: name.current.value,
                status: status.current.value,
            };
            props.onUpdate(data);
        }
    };
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning border p-4">
                <div className="panel-heading">
                    <h3 className="panel-title d-flex justify-content-between">
                        <div>
                            {props.action === "add"
                                ? "Thêm công việc"
                                : "Cập nhật công việc"}
                        </div>
                        <div>
                            <span
                                className="fa fa-times-circle"
                                onClick={handleClickClose}
                            ></span>
                        </div>
                    </h3>
                </div>
                <div className="panel-body">
                    <div className="form-group">
                        <label>Tên :</label>
                        <input
                            type="text"
                            className="form-control"
                            ref={name}
                        />
                    </div>
                    <label>Trạng Thái :</label>
                    <select className="form-control" ref={status}>
                        <option value={1}>Kích hoạt</option>
                        <option value={0}>Ẩn</option>
                    </select>
                    <br />
                    <div className="text-center">
                        <button
                            className="btn btn-warning"
                            onClick={handleClickSubmit}
                        >
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
                </div>
            </div>
        </div>
    );
};

export default Form;
