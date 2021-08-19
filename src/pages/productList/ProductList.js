import React, { Fragment, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { productRows } from "../../userData";
import "./productLIst.css";

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "product",
      headerName: "Product",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="product-list-item">
            <img
              src={params.row.img}
              alt="avatar"
              className="product-list-img"
            />
            {params.row.name}
          </div>
        );
      },
    },

    { field: "stock", headerName: "Stock", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "price", headerName: "Price", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/product/${params.row.id}`}>
              <button className="product-list-edit">Edit</button>
            </Link>
            <DeleteOutline
              className="product-list-delete"
              onClick={() => handleDelete(params.row.id)}
            />
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className="product-list">
      <DataGrid
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
};

export default ProductList;
