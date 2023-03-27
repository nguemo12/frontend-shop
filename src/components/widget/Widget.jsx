import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import React,{ useState, useEffect } from "react";
import axios from "axios";
const Widget = ({ type }) => { 
  //temporary
const [count, setCount]  = useState();
  useEffect(()=>{
         loadUser();
   },[])
const loadUser = async ()=>{
const response = await axios.get("http://localhost:7070/api/customercount");
if(response.status ===200) {
  setCount(response.data[0].customerCount);
};

};
console.log("count=>",count);
const [countproduct, setCountproduct]  = useState();
  useEffect(()=>{
         loadproduct();
   },[])
const loadproduct = async ()=>{
const response =await axios.get("http://localhost:7070/api/eventsCount");
if(response.status ===200) {
  setCountproduct(response.data[0].productCount);
};
};
console.log("countproduct=>",countproduct);
const [countorder, setCountorder]  = useState();
  useEffect(()=>{
         loadorder();
   },[])
const loadorder = async ()=>{
const response =await axios.get("http://localhost:7070/api/countorders");
if(response.status ===200) {
  setCountorder(response.data[0].orderCount);
};
};
console.log("countorders=>",countorder);
const [countstores, setCountstores]  = useState();
  useEffect(()=>{
         loadstores();
   },[])
const loadstores = async ()=>{
const response =await axios.get("http://localhost:7070/api/storescount");
if(response.status ===200) {
  setCountstores(response.data[0].storeCount);
};
};
console.log("countstores=>",countstores);

  let data;
  
  const diff = 20;

  

  switch (type) {
   
    case "customers":
      data = {
        title: "CUSTOMERS",
        isMoney: false,
        link: "See all customers",
        number:count,
        
        icon: (
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "order":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        number:countorder,
        
        icon: (
          <ShoppingCartOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(218, 165, 32, 0.2)",
              color: "goldenrod",
            }}
          />
        ),
      };
      break;
    case "products":
      data = {
        title: "PRODUCTS",
        isMoney: true,
        link: "View all products",
        number: countproduct,
        
        icon: (
          <MonetizationOnOutlinedIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "stores":
      data = {
        title: "STORES",
        isMoney: true,
        link: "See details",
        number:countstores,
        icon: (
          <AccountBalanceWalletOutlinedIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }


  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney }{data.number} 
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
