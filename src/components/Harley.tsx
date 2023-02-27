import React from "react";

const Harley = () => {
  return (
    <div>
      <nav className="bg-slate-900 py-6 flex justify-between  ">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9CENTd0pkovd6bLA8AOBxzBdx3EyaC-uiMQ&usqp=CAU"
          alt="LOGO"
          className="h-20 rounded-full mx-11 my-4"
        />
        <ul className="flex space-x-11 text-white justify-end mx-10 my-8 ">
          <li className="cursor-pointer ">Home</li>
          <li className="cursor-pointer">About</li>
          <li className="cursor-pointer">Contact us</li>
          <li className="cursor-pointer">Products</li>
          <li className="cursor-pointer">Details</li>
        </ul>
      </nav>
      <div className="bg-orange-100 py-20 h-2/3 flex">
        <div className="w-2/3 ">
          <h1 className="text-4xl mx-10">Best Bikes in the City</h1>
          <p className="py-6 w-3/5 mx-10">
            Harley-Davidson, Inc. is an American motorcycle manufacturer
            headquartered in Milwaukee, Wisconsin, United States. Founded in
            1903, it is one of two major American motorcycle manufacturers to
            survive the Great Depression along with its historical rival, Indian
            Motorcycles.
          </p>

          <button className="bg-violet-700 px-4 py-2 text-2xl text-white mx-8 rounded-3xl hover:bg-white hover:text-black hover:border-2  hover:border-black">
            Buy Now
          </button>
          <button className="bg-violet-700 px-4 py-2 text-2xl text-white mx-8 rounded-3xl hover:bg-white hover:text-black hover:border-2  hover:border-black ">
            Contact Us
          </button>
        </div>
        <div>
          <img
            className="h-80 rounded-2xl"
            src="https://d2bywgumb0o70j.cloudfront.net/2022/03/06/807b3d3e948fa6babf924f4de46ee6e3_b1df3f6074e536cd.png"
            alt="bike"
          />
          <p>
            2022 Harley-Davidson® Sportster® S White Sand Pearl |
            Harley-Davidson® Of Manila
          </p>
        </div>
      </div>
    </div>
  );
};

export default Harley;
