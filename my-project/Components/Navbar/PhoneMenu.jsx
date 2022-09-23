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
      <Drawer
            title="Information"
            placement="right"
            onClose={onClose}
            visible={open}
            className="text-[#02979D] font-bold"
          >
            <ul className="flex flex-col ">
              <div className="p-4 pt-10">
                <a
                  onClick={() => setOpen(false)}
                  className="text-[#02979D] text-xl"
                  href="#aboutme"
                >
                  About Me
                </a>
              </div>
              <div className="p-4 ">
                <a
                  onClick={() => setOpen(false)}
                  className="text-[#02979D] text-xl"
                  href="/cv"
                >
                  CV
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setOpen(false)}
                  className="text-[#02979D] text-xl"
                  rel="noopener noreferrer"
                  href="#projects"
                >
                  Projects
                </a>
              </div>
              <div className="p-4">
                <a
                  onClick={() => setOpen(false)}
                  className="text-[#02979D] text-xl"
                  href="#contact"
                >
                  Contact
                </a>
              </div>
           
            </ul>
          </Drawer>
    </>
  );
};

export default PhoneMenu;