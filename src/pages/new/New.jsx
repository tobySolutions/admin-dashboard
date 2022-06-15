import "./new.scss";
import SideBar from "../../components/sidebar/SideBar";
import NavBar from "../../components/navbar/NavBar"; 
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined"
import { useState } from "react";

const New = ({ inputs, title }) => {
  const [file, setFile] = useState("");
  
  return (
    <div className='new'>
      <SideBar />
      <div className="newContainer">
        <NavBar />
        <div className="top">
          <h1>{title}</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src={file ? URL.createObjectURL(file) : "https://upload.wikimedia.org/wikipedia/commons/0/0a/No-image-available.png"} alt="" />
          </div>

          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">Image: <DriveFolderUploadOutlinedIcon className="icon" /></label>
                <input
                  type="file"
                  id="file" 
                  onChange={(e) => setFile(e.target.files[0])}
                  style={{display: "none"}}/>
              </div>

              {inputs.map((input) => {
                return( <div className="formInput" key={input.id}>
                  <label>{input.label}</label>
                  <input type={input.type} placeholder={input.placeholder }/>
                </div>
                )
              })}
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New;