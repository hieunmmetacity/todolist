import React from "react";

type Props = {};

const Search = (props: Props) => {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="input-group">
                <input
                    type="text"
                    name="keyword"
                    className="form-control"
                    placeholder="Nhập từ khóa..."
                />
                <span className="input-group-btn">
                    <button className="btn btn-primary" type="button">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        Tìm
                    </button>
                </span>
            </div>
        </div>
    );
};

export default Search;
