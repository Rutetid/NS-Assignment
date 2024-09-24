import React from "react";

const BoxwIcon = ({ gradient, heading, desc ,children}) => {
	return (
		<div
			className={
				"w-[340px] h-[88px] bg-gradient-to-r from-gray-500 to-[#f9c1ca] rounded-xl mr-3 shadow-md"
			}
		>
			<div className="flex items-center">
				<div className="flex flex-col pt-2 pl-4 pr- text-white">
					<div className="pb-2 pt-2">
						<h1 className="text-xs font-extralight">{heading}</h1>
					</div>

					<div className="text-[10px] ">{desc}</div>
				</div>
				<div className="flex justify-end">
					<div className="border border-3 border-white mt-5  text-[10px] py-2 pl-1  text-white font-bold rounded-md w-[80px] mr-2 ">
						Apply now
					</div>
				</div>
			</div>
		</div>
	);
};

export default BoxwIcon;