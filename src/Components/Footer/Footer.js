import React from "react";
import { contactIcon, footerContent } from "./FooterUtils";

const Contact = () => {
  return (
    <div className="bg-[#000000cc]">
      <div className="max-w-layout mx-auto py-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="flex flex-col space-y-2">
            <h2 className="text-title font-semibold text-xl z-10 uppercase w-full text-white">
              KẾT NỐI VỚI CHÚNG TÔI
            </h2>
            <div className="flex gap-2 w-full justify-start">
              {contactIcon.map(({ id, icon, style, link }) => (
                <div
                  key={id}
                  className={
                    `border-transparent rounded-full p-2 bg-white cursor-pointer hover:-translate-y-1 hover:shadow-lg duration-200` +
                    "" +
                    style
                  }
                >
                  <a href={link} target="_blank">
                    {icon}
                  </a>
                </div>
              ))}
            </div>
          </div>
          {footerContent.map(({ brand, content }, index) => (
            <div key={brand + toString(index)}>
              <h3 className="uppercase font-bold text-lg mb-2 text-white">
                {brand}
              </h3>
              {content.map((item, index) => (
                <h4
                  key={index}
                  className="cursor-pointer hover:underline text-white hover:text-red-500 duration-200"
                >
                  {item}
                </h4>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
