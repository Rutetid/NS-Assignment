import React from 'react'

const Navbar = () => {
  return (
			<div className="flex justify-between">
				<div>
					<div className="flex items-center pt-12 pl-36 pb-5">
						<div className=" ">
							<img
								className="w-28 h-28 rounded-full  border-2"
								src="/img.jpg"
								alt=""
							/>
						</div>
						<div className="flex flex-col pl-5 ">
							<h5 className="text-md">Welcome back,</h5>
							<h1 className="text-2xl">Siddhant Ranjan</h1>
							<h1 className="text-2xl font-bold">Founder, InnovateX.com</h1>
							<div className="flex items-center">
								<div>
									<h1 className="text-sm">Startup</h1>
								</div>
								<div className="pl-3">
									<h1 className="text-sm">Since 2023</h1>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className=" pt-20 pr-28 font-bold">------------------> </div>
			</div>
		);
}

export default Navbar