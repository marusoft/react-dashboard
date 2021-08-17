import React, { Fragment, useState } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { Link } from "react-router-dom";
import { userRows } from "../../userData";
import "./userList.css";

const UserList = () => {

  const [data, setdata] = useState(userRows);

  const handleDelete = (id) => {
    setdata(data.filter((item) => item.id !== id))
  }

  const columns = [
    { field: "id", headerName: "ID", width: 90 },
    {
      field: "user",
      headerName: "User",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="user-list-user">
            <img
              src={params.row.avatar}
              alt="avatar" className="user-list-img"
            />
            {params.row.username}
          </div>
        );
      },
    },

    { field: "email", headerName: "Email", width: 200 },
    { field: "status", headerName: "Status", width: 120 },
    { field: "transactions", headerName: "Transaction", width: 150 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <Fragment>
            <Link to={`/user/${params.row.id}`}><button className="user-list-edit">Edit</button></Link>
            <DeleteOutline className="user-list-delete" onClick={() => handleDelete(params.row.id)} />
          </Fragment>
        );
      },
    },
  ];

 

  return (
    <div className="user-list">
      <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
    </div>
  );
};

export default UserList;
