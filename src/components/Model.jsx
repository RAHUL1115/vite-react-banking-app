import Modal from "@mui/material/Modal";
import {useState} from "react";

export default function Model({children,open,setOpen}) {

  return (
    <Modal open={open} onClose={()=>{setOpen(false)}}>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 bg-white p-4 rounded border-transparent focus:border-transparent focus:ring-0">
        {children}
      </div>
    </Modal>
  );
}
