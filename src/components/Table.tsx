import React from "react";
import Item from "./Item";

type Props = {
    data: { id: string; name: string; status: string }[];
    clickBtnUpdate: () => void;
    onRemove: (id: string) => void;
    onEdit: (id: string) => void;
    handleChangeStatus: (id: string) => void;
    handleFilterByStatus: (filterBy: any) => void;
    handleChangeSearch: (searchValue: any) => void;
};

const Table = (props: Props) => {
    const { data } = props;
    console.log(data);

    //send id todo to app
    const handleRemove = (id: string) => {
        props.onRemove(id);
    };
    // handle open box update
    const handleClickEdit = (id: string) => {
        props.onEdit(id);
        props.clickBtnUpdate();
    };
    // const handleClickUpdate = (id: string) => {
    //     props.onUpdate(id);
    //     props.click();
    // };
    const handleChangeStatus = (id: string) => {
        props.handleChangeStatus(id);
    };
    const handleFilterByStatus = (e: any) => {
        props.handleFilterByStatus(e.target.value);
    };
    const handleChangeSearch = (e: any) => {
        props.handleChangeSearch(e.target.value);
    };
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
                            onChange={handleChangeSearch}
                        />
                    </td>
                    <td>
                        <select
                            className="form-control"
                            name="filterStatus"
                            onChange={handleFilterByStatus}
                        >
                            <option value="-1">Tất Cả</option>
                            <option value="0">Ẩn</option>
                            <option value="1">Kích Hoạt</option>
                        </select>
                    </td>
                    <td></td>
                </tr>
                {data.map((item, index) => (
                    <Item
                        item={item}
                        key={index}
                        handleClickEdit={handleClickEdit}
                        handleRemove={handleRemove}
                        index={index}
                        clickChangeStatus={handleChangeStatus}
                    />
                ))}
            </tbody>
        </table>
    );
};

export default Table;
