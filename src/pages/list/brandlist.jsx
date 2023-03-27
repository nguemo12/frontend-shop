import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import BrandTable from "../../components/datatable/brandTable"


const brandList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <BrandTable/>
      </div>
    </div>
  )
}

export default brandList