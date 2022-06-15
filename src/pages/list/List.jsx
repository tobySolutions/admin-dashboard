import "./list.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar";
import Datatable from "../../components/datatable/Datatable";


const List = () => {
  return (
    <div className='list'>
      <SideBar />

      <div className="listContainer">
        <NavBar />
        <Datatable />
      </div>
    </div>
  )
}

export default List