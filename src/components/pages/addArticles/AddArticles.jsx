import React from "react";
import MainSidebar from "../../MainSidebar";
import AddArticlesMainPage from "../../articles/AddArticlesMainPage";

const AddArticles = () => {
  return (
    <div className=" flex h-screen overflow-x-hidden">
      <div className=" w-[1800px] rounded-sm overflow-hidden flex">
        <MainSidebar />
        <AddArticlesMainPage/>
      </div>
    </div>
  );
};

export default AddArticles;
