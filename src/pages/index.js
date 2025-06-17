import { useState } from "react";


export default function Home() {
  const [count , setCount ] = useState(0)
  return (
    <div className=" flex flex-col gap-4 justify-center items-center">
      <h1 className="text-4xl">Home Page</h1>
      <button 
      className=" border border-gray-500 w-9 text-3xl "
      onClick={() => setCount(count + 1) } >+</button>
      <p className="text-2xl"> result :{count}</p>
      <button  className="border border-gray-500 w-9 text-3xl "
      onClick={() => setCount(count - 1)}> - </button>
    </div>
  );
}
