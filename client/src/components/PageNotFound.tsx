import pagenotfound from "../assets/image/pagenotfound.png"
import page404 from "../assets/image/page404.gif"
export const PageNotFound = () => {
    return (
      <div className="text-3xl font-serif font-bold h-[90svh] text-center flex justify-center items-center m-auto ">
       <img src={page404} alt="page-not-found"/>
      </div>
    )
  }