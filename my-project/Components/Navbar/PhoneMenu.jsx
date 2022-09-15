import { Button, Drawer } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import { MenuOutlined } from "@ant-design/icons";


const PhoneMenu = () => {
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(()=>true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button type="primary" className='ml-3 mt-3' style={{ background: "orange", borderColor: "orange"}} onClick={()=>{console.log("Clicked!") ; showDrawer()}}>
        <MenuOutlined/>
      </Button>
      <Drawer getContainer={false} title="Basic Drawer" placement="left" onClose={onClose} visible={open}>
        
        <p>About Me</p>
        <p>CV</p>
        <p>Projects</p>
        <p>Contact Me</p>
      </Drawer>
    </>
  );
};

export default PhoneMenu;