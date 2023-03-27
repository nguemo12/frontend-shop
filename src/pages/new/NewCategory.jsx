import "./new.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { useState} from "react";
import { endpoint } from "../../components/datatable/config";
import axios from "axios";

import { toast } from "react-toastify";


const NewCategory = ({ inputs, title }) => {
  console.log(inputs);
  console.log(title);
  

  const addContact = async (data)=>{
    console.log(data) 
     
    const response = await axios.post("http://localhost:7070/api/category",data);
    console.log(response);
    if (response.status === 200){
      toast.success(response.data);
    }else{
      toast.error("error to post");
    }
  }
  //const data ={}
  const[state, setState] = useState("");
  const handleSubmit = (e) =>{ 
    e.preventDefault();
  //   let {records, value} = e.target;
  
  //  setState({...state, [records]:value});
  //   console.log(value);
  
    //e.target.value;
   
      //console.log(data); 
      //addContact(data);  
      console.log(data);
      addContact(data)
  
} 
  //const[state, setState] = useState("");
  const handleInputChange=(e)=>{
  

   };
  
  const [file, setFile] = useState("");
  const [data,setData]=useState({
    category_name: ''
  })
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}  >
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input
                  type="file"
                  id="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{ display: "none" }}
                />
              </div>

              {/* {inputs.map((input) => (
                <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder}  onChange={handleInputChange} />
                </div>
              ))} */}
              <div className="formInput" >
                  <label>category name</label>
                  <input type="text" onChange={(e)=> (setData({...data,category_name: e.target.value}))} placeholder="name" value={data.category_name}  />
                  

                </div>

             <input type="submit" value="Add"className="btnsubmit" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCategory;
