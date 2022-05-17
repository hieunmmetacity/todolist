import React, { ElementType, useState } from "react";
import { getUuid } from "../utils/uuid";

type Props = {
    click: () => void;
    onAdd: (data: any) => void;
};

const Add = (props: Props) => {
    const [status, setStatus] = useState(true);

    // close box form add
    const handleClickClose = () => {
        props.click();
    };
    //Reset form add
    const handleReset = () => {
        const formAdd: any = document.querySelector("#formAdd");
        if (formAdd) formAdd.reset();
    };
    // Send data to app
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const data = {
            id: getUuid(),
            name: e.target[0].value,
            status,
        };
        props.onAdd(data);
        const formAdd: any = document.querySelector("#formAdd");
        if (formAdd) formAdd.reset();
    };
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4 border p-4">
            <div className="panel panel-warning">
                <div className="panel-heading">
                    <h3 className="panel-title d-flex justify-content-between">
                        <div>Thêm Công Việc</div>
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

export default Add;
