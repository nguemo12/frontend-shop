import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import StockTable from "../../components/datatable/stockTable"


const stockList = () => {
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <StockTable/>
      </div>
    </div>
  )
}

export default stockList