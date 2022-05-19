import React from "react";

type Props = {};

const Item = ({
    item,
    handleClickEdit,
    handleRemove,
    index,
    clickChangeStatus,
}: any) => {
    const handleChangeStatus = (id: string) => {
        clickChangeStatus(id);
    };
    return (
        <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.name}</td>
            <td className="text-center">
                <div onClick={() => handleChangeStatus(item.id)}>
                    {item.status === "1" ? (
                        <button className="btn btn-primary text-light py-1 px-4">
                            Kích hoạt
                        </button>
                    ) : (
                        <button className="btn btn-danger text-light py-1 px-4">
                            Ẩn
                        </button>
                    )}
                </div>
            </td>
            <td className="text-center">
                <button
                    type="button"
                    className="btn btn-warning"
                    onClick={() => handleClickEdit(item.id)}
                >
                    <span className="fa fa-pencil mr-5"></span>
                    Sửa
                </button>
                &nbsp;
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => handleRemove(item.id)}
                >
                    <span className="fa fa-trash mr-5"></span>
                    Xóa
                </button>
            </td>
        </tr>
    );
};

export default Item;
