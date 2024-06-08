import { motion } from "framer-motion";

// eslint-disable-next-line react/prop-types
const Shimmer = ({ is }) => {
  const shimmer = (
    <motion.div
      initial={{ opacity: 0.5, scaleX: 0, translateX: "-100%" }}
      animate={{ opacity: 1, scaleX: 1, translateX: "100%" }}
      transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent"
    />
  );

  return (
    <>
      {is ? (
        <div className="h-[100%]  flex flex-col lg:flex-row lg:gap-10 lg:items-center  w-full relative overflow-hidden rounded-lg">
          <div className="lg:w-[60%] lg:p-8 relative mb-4 overflow-hidden rounded-lg flex flex-col lg:flex-row-reverse justify-center items-center gap-5 lg:gap-10 ">
            {shimmer}
            <div className="bg-gray-200 h-[260px] lg:h-[300px] w-full lg:w-[60%]"></div>
            <div className="flex lg:flex-col justify-center gap-6 my-2">
              {[...Array(3)].map((_, index) => (
                <div
                  key={index}
                  className="w-fit relative overflow-hidden rounded-lg "
                >
                  {shimmer}
                  <div className="bg-gray-200 h-[100px] w-[60px] "></div>
                </div>
              ))}
            </div>
          </div>

          <div className="h-[20vh] flex flex-col justify-between lg:w-[30%] gap-2">
            {[...Array(2)].map((_, index) => (
              <div
                key={index}
                className="w-full relative mb-4 overflow-hidden rounded-lg"
              >
                {shimmer}
                <div className="bg-gray-200 h-[15px]"></div>
              </div>
            ))}
            <div className="w-full relative mb-4 overflow-hidden rounded-lg">
              {shimmer}
              <div className="bg-gray-200 h-[40px]"></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col  w-full relative overflow-hidden rounded-lg">
          {[...Array(1)].map((_, index) => (
            <div
              key={index}
              className="w-full relative mb-4 overflow-hidden rounded-lg "
            >
              {shimmer}
              <div className="bg-gray-200 h-[300px] flex flex-col justify-end p-4">
                <div
                  key={index}
                  className="w-fit mb-4 overflow-hidden rounded-full absolute top-2 left-4"
                >
                  {shimmer}
                  <div className="bg-[#e0e0e082] size-[35px]"></div>
                </div>
                <div>
                  <div
                    key={index}
                    className="w-fit absolute mb-4 overflow-hidden rounded-full bottom-[75px] right-4"
                  >
                    {shimmer}
                    <div className="bg-[#e0e0e082] size-[35px]"></div>
                  </div>
                  <div
                    key={index}
                    className="w-fit absolute mb-4 overflow-hidden rounded-lg bottom-20 left-4"
                  >
                    {shimmer}
                    <div className="bg-[#e0e0e082] w-[45px] h-[25px]"></div>
                  </div>
                </div>
                {[...Array(2)].map((_, index) => (
                  <div
                    key={index}
                    className="w-full relative mb-4 overflow-hidden rounded-lg"
                  >
                    {shimmer}
                    <div className="bg-[#e0e0e082] h-[13px]"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Shimmer;
