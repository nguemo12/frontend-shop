import "./table.scss";
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
const List = () => {
  const [user, setUser]  = useState();
  useEffect(()=>{
         loadUser();
   },[])
  


const loadUser = async ()=>{
const response =await axios.get("http://localhost:7070/api/events");
if(response.status ===200) {
  setUser(response.data);

}

};
console.log("data=>", user);
const [data, seTableCellata] = useState({loadUser});

const handleDelete = (id) => {
  seTableCellata(data.filter((item) => item.id !== id));
};

const actionColumn = [
  {
    field: "action",
    headerName: "Action",
    widTableCell: 200,
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
    
    </div>
    
   
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidTableCell: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
        <TableCell className="tableCell">No.</TableCell>
          <TableCell className="tableCell">Name</TableCell>
          
          <TableCell className="tableCell">price</TableCell>
          
          <TableCell className="tableCell">Date</TableCell>
       
        </TableRow>
      </TableHead>
      <TableBody>
        {user && user.map((item, index) =>{
          return(
            <TableRow key={index} >
              <TableCell scope="row">{index + 1}</TableCell>
              <TableCell>{item.product_name}</TableCell>
              
              <TableCell>{item.list_price}</TableCell>
              
              <TableCell>{item.last_updated}</TableCell>
             
              
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  </TableContainer>
  </div>
);
};



export default List;
