import React from "react";

type Props = {};

const Filter = (props: Props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                >
                    Sắp xếp
                </button>
                <ul
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenuButton1"
                >
                    <li>
                        <a className="dropdown-item" href="#">
                            Tên A-Z
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Tên Z-A
                        </a>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Trạng thái: Kích hoạt
                        </a>
                    </li>
                    <li>
                        <a className="dropdown-item" href="#">
                            Trạng thái: Ẩn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;
