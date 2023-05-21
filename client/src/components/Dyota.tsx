import { motion } from "framer-motion";
import { useEffect, useState } from "react";


const motionDivs = [
  {
    initial: { transform: "translate(-100%, -100%)" },
    animate: { transform: "translate(0%, 0%)" },
    exit: { transform: "translate(-100%, -100%)" },
    className: "bg-[#3BD188]",
  },
  {
    initial: { transform: "translate(100%, -100%)" },
    animate: { transform: "translate(0%, 0%)" },
    exit: { transform: "translate(100%, -100%)" },
    className: "bg-black",
  },
  {
    initial: { transform: "translate(-100%, 100%)" },
    animate: { transform: "translate(0%, 0%)" },
    exit: { transform: "translate(-100%, 100%)" },
    className: "bg-black",
  },
  {
    initial: { transform: "translate(100%, 100%)" },
    animate: { transform: "translate(0%, 0%)" },
    exit: { transform: "translate(100%, 100%)" },
    className: "bg-[#3BD188]",
  },
];


const getData = async () => {
  try {
    let url = `https://fakestoreapi.com/products`
    let res = await fetch(url)
    // console.log(res)
    let data = await res.json()
    // console.log(data)
    return data
  }
  catch (err) {
    console.log(err)
  }

}

export const Dyota = () => {
  const [isLoading, setLoading] = useState(true);
  const [productData, setProductData] = useState<any[]>([]);
  const [filter, setFilter] = useState(productData);

  function Filter(price: string) {
    if (price === "low") {
      const updated = productData.sort((a, b) => a.price - b.price);
      setProductData([...updated]);
    }
    if (price === "high") {
      const updated = productData.sort((a, b) => b.price - a.price);
      setProductData([...updated]);
    }
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
        const data = await getData();
        setProductData(data);
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
      }
    };

    fetchData();
  }, []);



  return (
    <div className="h-full">

      {
        isLoading ? (
          <div className="relative h-[100svh]">
            <div className="flex items-center justify-center h-[92vh] absolute w-full">
              <div className="grid grid-cols-2 ">
                {motionDivs.map((motionDiv, index) => (
                  <motion.div
                    key={index}
                    initial={motionDiv.initial}
                    animate={motionDiv.animate}
                    exit={motionDiv.exit}
                    transition={{
                      duration: 3,
                      ease: "easeInOut",
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className={`w-[10vw] h-[10vw] ${motionDiv.className}`}
                  ></motion.div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center h-[92vh] absolute w-full">
              <motion.div
                initial={{ opacity: "100%" }}
                animate={{ opacity: "0%" }}
                exit={{ opacity: "100%" }}
                transition={{
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
                className="w-[15vw] h-[15vw] flex items-center justify-center border-2 border-black rounded-full"
              >
                <p className="text-2xl font-bold ">Welcome</p>
              </motion.div>
            </div>
          </div>
        )
          : (
            <div className="h-full">
              <div className=''>
                <img src="https://img.freepik.com/free-psd/fashion-banner-design-template_23-2149072746.jpg?w=1060&t=st=1660568902~exp=1660569502~hmac=39e55eeccd764da667826fb179a83442ba0935b0213d5880f0c72f2199c3d3c1" alt="banner" className="m-auto w-[100%] h-[80svh]" />
              </div>
              <div className='flex gap-4 m-auto justify-center items-center mt-10 mb-10'>
                <button className='px-4 py-1 bg-[#3BD188] text-black font-semibold text-lg hover:bg-black hover:text-[#3BD188]' onClick={() => Filter("low")}>Low To High</button>
                <button className='px-4 py-1 hover:bg-[#3BD188] hover:text-black font-semibold text-lg bg-black text-[#3BD188]' onClick={() => Filter("high")}>High To Low</button>
              </div>


              <div 
              className=" w-[100%] h-auto py-16 px-20  m-auto gap-5  overflow-hidden md:grid md:grid-cols-2 md:gap-10  md:m-auto  md:justify-center md:overflow-visible lg:grid-cols-3 "
              >
                {productData?.map((el: any , i:any) => (
                  <motion.div
                    key={el.id}
                    className="px-8 py-8 shadow-lg shadow-green-500/50 hover:shadow-lg hover:shadow-green-800/80 font-medium rounded-xl cursor-pointer"
                    initial={{ opacity: 0, translateY: -100 }}
                    whileInView={{ opacity: 1, translateY: -60 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                  >
                    <img src={el.image} alt={el.title} className="h-60 w-60 m-auto"/>
                    <p className="text-lg font-semibold mt-2">Price: <span className="text-green-500 text-[1.2vw] font-normal ml-5"> ${el.price}</span></p>
                    <p className="text-lg font-semibold">Rating: <span className=" text-[1.2vw] font-normal ml-2">{el.rating.rate}</span></p>
                    <p className="text-lg font-semibold">Category: <span className=" text-[1.2vw] font-normal">{el.category}</span></p>
                    <p className="text-lg font-semibold h-12" > <span className=" text-[1.2vw] font-normal">Title: {el.title}</span></p>
                    <div className="flex items-center justify-center mt-6 bg-[#3BD188] text-black font-semibold text-lg hover:bg-black hover:text-[#3BD188] rounded-2xl">
                      <button className="px-4 py-2 ">Show Details</button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

          )
      }



    </div>
  );
};
