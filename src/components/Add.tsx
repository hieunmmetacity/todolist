import React, { useRef, useState } from "react";
import { getUuid } from "../utils/uuid";

type Props = {
    click: () => void;
    onAdd: (data: any) => void;
};

const Add = (props: Props) => {
    const name = useRef<any>();
    const status = useRef<any>();
    // close box form add
    const handleClickClose = () => {
        props.click();
    };
    //Reset form add
    const handleReset = () => {
        name.current.value = "";
        status.current.value = "1";
    };
    // Send data to app
    const handleClickSubmit = () => {
        const data = {
            id: getUuid(),
            name: name.current.value,
            status: status.current.value,
        };
        props.onAdd(data);
    };
    return (
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <div className="panel panel-warning border p-4">
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

export default Add;
