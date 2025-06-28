import React from "react";

const Home = () => {
  return (
    <div>
      <section className="home flex items-center justify-center p-3">
        <div className='bg-no-repeat bg-[url("img2.png")] flex h-[600px] items-center justify-center mt-[15vh] w-[100vw] bg-cover rounded-2xl'>
          <div className="flex flex-col items-start  w-full p-2 gap-5">
            <h1 className="text-white text-6xl mx-[10vw] font-semibold">
              Message
            </h1>
            <h1 className="text-white text-6xl mx-[10vw] font-semibold">
              Privately
            </h1>
            <p className="text-white text-4xl mx-[10vw] text-wrap font-thin">
              Simple, reliable, private messaging and calling for free*,
              available all over the world.
            </p>
            <div className="flex gap-5 mx-[10vw]">
              <button className="bg-green-500 h-[50px] w-[120px] rounded-full hover:bg-black duration-300 ease-in hover:text-white">
                Download
              </button>
              <button className="bg-white h-[50px] w-[120px] rounded-full  hover:bg-black duration-300 ease-in hover:text-white">
                Login
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start mx-[50px] h-[600px] w-[800px] gap-5">
            <div className="relative py-4">
              <img src="chat.png" alt="" className="" />
              <img src="img6.png" alt="" className="absolute -bottom-2" />
            </div>
            <img src="img5.png" alt="" className="py-8" />
            <img src="img4.png" alt="" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
