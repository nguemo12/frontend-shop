import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import StaffsTable from "../../components/datatable/staffsTable"


const staffList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <StaffsTable/>
      </div>
    </div>
  )
}

export default staffList