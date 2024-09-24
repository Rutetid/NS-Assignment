import React from "react";
import Navbar from "./Navbar";
import Box from "./Box";
import Icon from "./BoxwIcon"

const Homepage = () => {
	return (
		<div className="text-black min-h-screen font-poppins text-xs ">
			<Navbar />
			<div className=" flex flex-col">
				<div className=" flex row-span-3 ">
					<div className="w-[500px] pr-[56px] ml-36 ">
						<div className="bg-[linear-gradient(135deg,_#f2f2f2,_#d9d9d9)] flex flex-col mt-8 rounded-xl mr-10 border-3 shadow-md h-[268px]">
							<div className=" flex items-center bg-white mt-6 mx-7 mb-4 rounded-md">
								<div className="bg-orange-500 m-2 rounded-md pt-2 pb-1 pl-2 w-1/2 shadow-sm">
									<h1 className="text-sm text-white  ">Total</h1>
									<h1 className="font-bold text-white text-base">$10,00,000</h1>
								</div>
								<div className="flex items-center border border-gray-200  m-2 rounded-md p-1 pt-2 w-1/2 shadow-sm">
									<div className="">
										<h1 className="text-sm">Invested</h1>
										<h1 className="font-bold text-base">$4,50,000</h1>
									</div>

									<div className="pl-10">45%</div>
								</div>
							</div>
							<div className="flex justify-between px-7 pb-2">
								<h1 className="text-base">Employees </h1>
								<h1 className="text-sm text-gray-500">See all</h1>
							</div>
							<div className="flex justify-around px-4 pb-5 mt-2">
								<div>
									<img
										className="h-16 w-16 rounded-full"
										src="/img.jpg"
										alt=""
									/>
									<div className="text-xs text-center pt-[10px]"> Alfredo</div>
								</div>
								<div>
									<img
										className="h-16 w-16 rounded-full"
										src="/img.jpg"
										alt=""
									/>
									<div className="text-xs text-center pt-[10px]"> Claudia </div>
								</div>
								<div>
									<img
										className="h-16 w-16 rounded-full"
										src="/img.jpg"
										alt=""
									/>
									<div className="text-xs text-center pt-[10px]"> Cahaya</div>
								</div>
								<div className="text-xs">
									<img
										className="h-16 w-16 rounded-full"
										src="/img.jpg"
										alt=""
									/>
									<div className="text-center pt-[10px]"> Mariana</div>
								</div>
								<div className="text-xs">
									<img
										className="h-16 w-16 rounded-full"
										src="/img.jpg"
										alt=""
									/>
									<div className="text-center pt-[10px] "> Olivia</div>
								</div>
							</div>
						</div>
					</div>
					<div className="pt-5 mr-16 w-[20%] ">
						<h1 className="text-2xl pb-4">Second Tranche</h1>
						<div className="w-[340px] h-[88px] bg-gradient-to-r from-blue-800 to-purple-400  rounded-xl mr-3 shadow-md">
							<div className="flex items-center">
								<div className="flex flex-col pt-2 pl-4 pr- text-white">
									<div className="pb-2 pt-2">
										<h1 className="text-xs font-extralight">
											Apply for Second form
										</h1>
									</div>

									<div className="text-xs ">
										Fill all the required elements of the form.
									</div>
								</div>
								<div className="flex justify-end">
									<div className="border border-3 border-white mt-5  text-[10px] py-2 pl-1  text-white font-bold rounded-md w-[80px] mr-2 ">
										Apply now
									</div>
								</div>
							</div>
						</div>

						<h1 className="text-2xl pt-8 pb-4">Post Seed Fund</h1>

						<Box
							heading="Apply for third form"
							desc="Once you are eligible for this form, it will be activated."
						/>
					</div>
					<div className="pt-5">
						<h1 className="text-2xl pb-4">Queries</h1>
						<div
							className={
								"w-[340px] h-[88px] bg-gradient-to-r from-blue-500 to-pink-500 rounded-xl mr-3 shadow-md"
							}
						>
							<div className="flex items-center">
								<div className="flex flex-col pt-2 pl-4 pr- text-white">
									<div className="pb-2 pt-2">
										<h1 className="text-xs font-extralight">
											Query Regarding Employee
										</h1>
									</div>

									<div className="text-[10px] ">
										How many employees do you have employed in september 2024
									</div>
								</div>
								<div className="flex justify-end">
									<div className="border border-3 border-white mt-5  text-[10px] py-2 pl-1  text-white font-bold rounded-md w-[80px] mr-2 ">
										Apply now
									</div>
								</div>
							</div>
						</div>
						<h1 className="text-2xl pt-8 pb-4">Greviance Redressal</h1>
						<div
							className={
								"w-[340px] h-[88px] bg-gradient-to-r from-blue-600 via-green-600 to-green-500 rounded-xl mr-3 shadow-md"
							}
						>
							<div className="flex items-center">
								<div className="flex flex-col pt-2 pl-4 pr- text-white">
									<div className="pb-2 pt-2">
										<h1 className="text-xs font-extralight">
											Enter your Grievance
										</h1>
									</div>

									<div className="text-[10px] ">
										Write details about the issue , we will get back to you!
									</div>
								</div>
								<div className="flex justify-end">
									<div className="border border-3 border-white mt-5  text-[10px] py-2 pl-1  text-white font-bold rounded-md w-[80px] mr-2 ">
										Apply now
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="flex row-span-3 justify-left ml-36 pl-1 mt-8">
					<div>
						<h1 className="text-xl pb-8">Upload Your Bills</h1>

						<div
							className={
								"w-[340px] h-[88px] bg-gradient-to-r from-blue-800 to-purple-400 rounded-xl mr-3 shadow-md"
							}
						>
							<div className="flex items-center">
								<div className="flex flex-col pt-2 pl-4 pr- text-white">
									<div className="pb-2 pt-2">
										<h1 className="text-xs font-extralight">Add new Bills</h1>
									</div>

									<div className="text-[10px] ">
										Keep the track of the bills and ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ ‎ investments
									</div>
								</div>
								<div className="flex justify-end">
									<div className="border border-3 border-white mt-5  text-[10px] py-2 pl-1  text-white font-bold rounded-md w-[80px] mr-2 ">
										Apply now
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="ml-40 pl-2 mt-12">
						<h1 className="text-2xl">MPR</h1>
						<h1 className="mt-5 border-2 border-black rounded-2xl px-3 py-1 text-sm">
							UPLOAD MPR
						</h1>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Homepage;
