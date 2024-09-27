import React from "react";
import MainSidebar from "../../MainSidebar";
import AddCounsellorsMainPage from "../../counsellors/AddCounsellorsMainPage";

const AddCounsellors = () => {
  return (
    <div className=' flex h-screen overflow-x-hidden'>
    <div className=' w-[1800px] rounded-sm overflow-hidden flex'>
       <MainSidebar />
       <AddCounsellorsMainPage />
   </div>
</div>
  );
};

export default AddCounsellors;
