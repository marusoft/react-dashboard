import React, { Fragment } from "react";
import { DataGrid } from "@material-ui/data-grid";
import { DeleteOutline } from "@material-ui/icons";
import { userRows } from "../../userData"
import "./userList.css";

const UserList = () => {
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
            <button className="user-list-edit">Edit</button>
            <DeleteOutline className="user-list-delete" />
          </Fragment>
        );
      },
    },
  ];

 

  return (
    <div className="user-list">
      <DataGrid rows={userRows} disableSelectionOnClick columns={columns} pageSize={8} checkboxSelection />
    </div>
  );
};

export default UserList;
