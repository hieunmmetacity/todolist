import React, { useState } from "react";

type Props = {
    handleFilterByStatus: (status: string) => void;
};

const Filter = (props: Props) => {
    const [showIconClicked, setShowIconClicked] = useState("");
    const handleFilterByStatus = (status: string) => {
        props.handleFilterByStatus(status);
        if (status === "active") {
            setShowIconClicked("active");
        } else if (status == "hide") {
            setShowIconClicked("hide");
        }
    };
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="dropdown">
                <button
                    className="btn btn-success dropdown-toggle"
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
                        <span className="dropdown-item">
                            Tên A-Z
                            {showIconClicked === "" ? (
                                <i className="fa-solid fa-check ml-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li>
                        <span className="dropdown-item">
                            Tên Z-A
                            {showIconClicked === "za" ? (
                                <i className="fa-solid fa-check ml-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li>
                        <hr className="dropdown-divider" />
                    </li>
                    <li onClick={() => handleFilterByStatus("active")}>
                        <span className="dropdown-item">
                            Trạng thái: Kích hoạt
                            {showIconClicked === "active" ? (
                                <i className="fa-solid fa-check ml-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                    <li onClick={() => handleFilterByStatus("hide")}>
                        <span className="dropdown-item">
                            Trạng thái: Ẩn
                            {showIconClicked === "hide" ? (
                                <i className="fa-solid fa-check ml-4"></i>
                            ) : (
                                ""
                            )}
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Filter;
