import React from "react";
import photo from "../assets/icons/image-product-desktop.jpg";
import photos from "../assets/icons/image-product-mobile.jpg";
import { ShoppingCart } from "lucide-react";

export const Cards = () => {
  return (
    <div
      className=" flex-col lg:flex-row max-lg:h-[42rem] max-sm:w-[80%] max-sm:h-[35rem]
      flex justify-center shadow-2xl mt-40 rounded-2xl max-md:rounded-3xl
       bg-white h-[600px] w-[40%]
        m-auto">
      {/* image */}

      <div className=" ">
        <img
          className="h-[100%] max-lg:hidden   w-[900px] 
          rounded-l-2xl  "
          src={photo}
        />
        <img
          className="max-lg:h-[300px] max-sm:h-[200px] xl:hidden max-sm:w-[100%]  lg:hidden 2xl:hidden max-lg:rounded-none  max-lg:rounded-t-2xl"
          src={photos}
        />
      </div>

      {/*details  */}

      <div className="ml-9 max-lg:ml-6 max-lg:mt-6 mt-9">
        <p
          className="font-montserrat md:tracking-[10px]
        max-sm:tracking-[2px] text-[#6C7289]  tracking-[5px]">
          PERFUME
        </p>
        <h1
          className="text-5xl max-sm:text-3xl max-lg:text-4xl 
          max-lg:mt-2 font-fraunces mt-[27px] max-sm:mt-2
         leading-[45px]  ">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p
          className="text-[14px] max-lg:mt-3 text-[#6C7289] 
        max-lg:w-[18.2rem] max-lg:leading-6 leading-[30px] max-sm:w-[250px] max-sm:text-[12px]
         mt-10 w-[69%] font-montserrat">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <p className="mt-10 max-lg:mt-5 ">
          <span className="font-fraunces max-sm:text-[25px] text-5xl text-[#52AD8C] max-lg:text-[2.2rem]">
            $ 149.99
          </span>
          <span className="ml-4 text-xs line-through text-[#6C7289]">
            $169.99
          </span>
        </p>
        <button
          className="flex max-lg:mt-5 max-lg:mb-14 w-[300px] rounded-md mt-8 bg-green-900 m-auto ml-2
            text-white p-4 justify-center text-[#52AD8C] max-sm:w-10/12"
          type="button">
          <span className="mr-3">
            <ShoppingCart />
          </span>
          Add to Cart
        </button>
      </div>
    </div>
    // </div>
  );
};
