import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import StoreTable from "../../components/datatable/storeTable"


const storeList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <StoreTable/>
      </div>
    </div>
  )
}

export default storeList