import "./datatable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Link } from "react-router-dom";
import React,{ useState, useEffect } from "react";
import axios from "axios";
import { endpoint } from "./config";
const OrderTable = () => {
 const [user, setUser]  = useState();
    useEffect(()=>{
           loadUser();
     },[])
    
  
  
  const loadUser = async ()=>{
  const response =await axios.get("http://localhost:7070/api//orders");
  if(response.status ===200) {
    setUser(response.data);

  }
  
  };
  console.log("data=>", user);
  const [data, setData] = useState({loadUser});

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            
            {/* <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            > */}
              Delete
            {/* </div> */}
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        orders
        <Link to="/orders/new" className="link">
          Add orders
        </Link>
      </div>
      {/* <DataGrid
        className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumn)}
      
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
      /> */}
    
      
      <TableContainer component={Paper} className="table">
      <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
          <TableCell className="tableCell">No.</TableCell>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">store</TableCell>
            <TableCell className="tableCell">staff</TableCell>
            <TableCell className="tableCell">Date</TableCell>
            <TableCell className="tableCell">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {user && user.map((item, index) =>{
            return(
              <TableRow key={index} >
                <TableCell scope="row">{index + 1}</TableCell>
                <TableCell>{item.customer_id}</TableCell>
                <TableCell>{item.store_id}</TableCell>
                <TableCell>{item.staff_id}</TableCell>
                <TableCell>{item.last_updated}</TableCell>
                <TableCell><button className="deleteButton">Delete</button> </TableCell>
                
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
};

export default OrderTable;
