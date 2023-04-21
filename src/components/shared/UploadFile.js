import React from "react";

function UploadFile(props){
  return (
    <div>
        <div >
            <input type="file" {...props} className="p-2 rouned-lg mt-2 border border-gray-500 input input-white w-full bg-transparent"/>
        </div>
        <a className="text-gray-500 text-xs mt-2 ml-1 cursor-pointer hover:underline" href="#samplefiles">Click Here for Sample Files</a>
    </div>
  );
};

export default UploadFile;
