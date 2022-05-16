import React from "react";

type Props = {
    data: { id: string; name: string; status: string }[];
};

const Table = (props: Props) => {
    const { data } = props;

    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th className="text-center">STT</th>
                    <th className="text-center">Tên</th>
                    <th className="text-center">Trạng Thái</th>
                    <th className="text-center">Hành Động</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td></td>
                    <td>
                        <input
                            type="text"
                            className="form-control"
                            name="filterName"
                        />
                    </td>
                    <td>
                        <select className="form-control" name="filterStatus">
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {data.map((item, index) => (
                    <tr key={item.id}>
                        <td>{index + 1}</td>
                        <td>{item.name}</td>
                        <td className="text-center">
                            <span className="label label-danger">
                                {item.status ? "Kích hoạt" : "Ẩn"}
                            </span>
                        </td>
                        <td className="text-center">
                            <button type="button" className="btn btn-warning">
                                <span className="fa fa-pencil mr-5"></span>
                                Sửa
                            </button>
                            &nbsp;
                            <button type="button" className="btn btn-danger">
                                <span className="fa fa-trash mr-5"></span>
                                Xóa
                            </button>
                        </td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default Table;
