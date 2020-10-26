import React from 'react'
import "./Sidebar.css"
import SideBarRow from './SideBarRow'
import FlagIcon from '@material-ui/icons/Flag';
import PlaceIcon from '@material-ui/icons/Place';
import { useStateValue } from './StateProvider';
function Sidebar() {

  const [{user},dispatch]=useStateValue();

  return (
    <div className="sidebar">
      <SideBarRow title={user.displayName} src={user.photoURL} />
      <SideBarRow  Icon={<FlagIcon/>} title="Friends"/>
      <SideBarRow  Icon={<PlaceIcon/>} title="Places"/>
    
     
    </div>
  )
}

export default Sidebar
