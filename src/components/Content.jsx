import React from "react";

const Content = () => {
  return (
    <div>
      {/* privacy section */}
      <section className="privacy h-[800px] flex flex-col  justify-center items-center">
        <div className=" h-[200px] w-full flex items-center justify-center">
          <img src="pr1.png" alt="" />
        </div>
        <div className=" h-[200px] w-full flex items-center justify-center">
          <h1 className="text-black  text-6xl  font-thin text-center">
            With private messaging and calling, you can be yourself, speak
            freely and feel close to the most important people in your life no
            matter where they are.
          </h1>
        </div>
        <div className=" h-[300px] w-full flex items-center justify-center">
          <img src="pr2.png" alt="" />
        </div>
      </section>
      {/* video call section */}
      <section className="video-call h-[600px] flex">
        <div className=" h-[600px] w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-7xl  px-6 py-3 font-thin w-[600px]">
            Never miss a moment with voice and video calls
          </h1>
          <p className="text-2xl px-6 py-3 font-thin  w-[600px]">
            From a group call to classmates to a quick call with mom, feel like
            you’re in the same room with voice and video calls.
          </p>
          <a
            href="#"
            className="px-6 py-3 font-thin text-2xl w-[600px] underline"
          >
            Learn more
          </a>
        </div>
        <div className=" h-[600px] w-[50%] relative">
          <img src="video.png" alt="" className="absolute left-20" />
        </div>
      </section>
      {/* voice section */}
      <section className="voice h-[600px] bg-[#111B21] flex">
        <div className=" h-[600px] w-[50%] relative">
          <img src="voice.png" alt="" className="absolute right-35" />
        </div>
        <div className=" h-[600px] w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-7xl  px-6 py-3 font-normal text-white w-[600px]">
            Speak
          </h1>
          <h1 className="text-7xl  px-6 py-3 font-normal text-green-500 w-[600px]">
            Freely
          </h1>
          <p className="text-2xl px-6 py-3 font-thin text-white w-[600px]">
            With end-to-end encryption on WhatsApp, your personal messages and
            calls are secured with a lock. Only you and the person you're
            talking to can read or listen to them, and no one else, not even
            WhatsApp
          </p>
          <a
            href="#"
            className="px-6 py-3 font-thin text-2xl w-[600px] underline text-white"
          >
            Learn more
          </a>
        </div>
      </section>
      {/* group meassage */}
      <section className="voice h-[600px]  flex">
        <div className=" h-[600px] w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-7xl  px-6 py-3 font-normal w-[600px]">
            Keep in touch
          </h1>
          <h1 className="text-7xl  px-6 py-3 font-normal  w-[600px]">
            with your groups
          </h1>
          <p className="text-2xl px-6 py-3 font-thin  w-[600px]">
            Whether it's planning an outing with friends or simply staying on
            top of your family chats, group conversations should feel
            effortless.
          </p>
          <a
            href="#"
            className="px-6 py-3 font-thin text-2xl w-[600px] underline "
          >
            Learn more
          </a>
        </div>
        <div className=" h-[600px] w-[50%] relative">
          <img src="private2.png" alt="" className="absolute left-20" />
          <img
            src="private.png"
            alt=""
            className="absolute left-15  top-25 h-[400px]"
          />
        </div>
      </section>
      {/* sticker */}
      <section className="sticker h-[700px]  flex">
        <div className=" h-[600px] w-[50%] relative">
          <img src="stickers2.png" alt="" className="absolute right-35" />
          <img
            src="stickers.png"
            alt=""
            className="absolute right-35 h-[300px] top-50"
          />
        </div>
        <div className=" h-[600px] w-[50%] flex flex-col justify-center items-center">
          <h1 className="text-7xl  px-6 py-3 font-normal  w-[600px]">
            Say what
          </h1>
          <h1 className="text-7xl  px-6 py-3 font-normal  w-[600px]">
            you feel
          </h1>
          <p className="text-2xl px-6 py-3 font-thin  w-[600px]">
            Express yourself without words. Use stickers and GIFs or share
            everyday moments on Status. Record a voice message for a quick hello
            or a longer story.
          </p>
          <a
            href="#"
            className="px-6 py-3 font-thin text-2xl w-[600px] underline "
          >
            Learn more
          </a>
        </div>
      </section>
      {/* buisness */}
      <section className="buisness h-[600px] flex ">
        <div className=" h-[600px] w-[50%] flex flex-col justify-center items-center rounded-bl-[40px] bg-[#FCF5EB]">
          <h1 className="text-7xl  px-6 py-3 font-thin w-[600px]">Transform</h1>
          <h1 className="text-7xl  px-6 py-3 font-thin w-[600px]">
            your business
          </h1>
          <p className="text-2xl px-6 py-3 font-thin  w-[600px]">
            WhatsApp Business helps you reach your customers globally to deliver
            compelling experiences at scale. Showcase your products and
            services, increase sales, and build relationships all with WhatsApp.{" "}
          </p>
          <a
            href="#"
            className="px-6 py-3 font-thin text-2xl w-[600px] underline"
          >
            Learn more
          </a>
        </div>
        <div className=" h-[600px] w-[50%] relative  rounded-br-[40px] bg-[#FCF5EB]">
          <img src="buisness.png" alt="" className="absolute left-20 bottom-[0.2px]" />
        </div>
      </section>
    </div>
  );
};

export default Content;
