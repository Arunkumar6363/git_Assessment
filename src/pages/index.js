import Image from "next/image";
import Pepsi from "../../public/pepsi.jpg"
import { useState } from "react";


export default function Home() {
  const [isCount,setIsCount ] = useState(0)
  return (
    <div>
    <h1 className="text-3xl pb-4">Home Page</h1>
      <button 
      className=" border border-gray-500 w-9 text-3xl "
      onClick={() => setIsCount(isCount + 1) } >+</button>
      <p className="text-2xl"> result :{isCount}</p>
      <button  className="border border-gray-500 w-9 text-3xl "
      onClick={() => setIsCount(isCount - 1)}> - </button>
    <div className="flex flex-col justify-center items-center ">
      
      <div >
        <div className=" p-4 border w-[150px] flex flex-col justify-center items-center rounded-2xl">
              <h1 className="text-xl font-[600]">Pepsi</h1>
              <Image className="w-[100px]"
                src={Pepsi}
                alt="Pepsi Image"
              />
        </div>
      </div>
    </div>
    </div>
  );
}
