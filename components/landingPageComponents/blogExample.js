import React from "react";
import HeroButton from "./heroButton";
import Link from "next/link";

export default function BlogExample() {
	return (
		<div className="relative xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 my-16">
			<div className="relative">
				<div className="flex justify-center">
					<div className="relative text-xs bg-gray-700 text-white px-3 py-1">Our Blog</div>
				</div>
				<div className="relative font-bold text-2xl mt-4 flex justify-center">Latest Blogs & Articles</div>
			</div>
			<div className="relative flex gap-8 my-10 *:flex *:items-end *:rounded-md xl:*:w-1/2 lg:*:w-1/2 md:*:w-1/2 w-full xl:flex-nowrap lg:flex-nowrap md:flex-nowrap flex-wrap">
				<div className="relative h-[400px] bg-gray-600 p-5 group cursor-pointer">
					<div className="relative p-5 rounded bg-white w-full group-hover:bg-purple-600">
						<div className="relative">
							<div className="relative text-sm text-gray-500 duration-200 group-hover:text-white">
								January 03, 2025
							</div>
							<div className="relative text-xl font-bold duration-200 group-hover:text-white">
								Pin Card Registration in Nepal
							</div>
							<div className="relative text-xs line-clamp-4 mt-2 text-gray-600 duration-200 group-hover:text-white tracking-wide">
								In Nepal, obtaining a Permanent Account Number (PAN) card is an essential step for
								individuals and businesses to ensure compliance with tax regulations and facilitate
								smooth financial transactions. The PAN card is issued by the Inland Revenue Department
								(IRD) of Nepal, which is responsible for managing tax-related activities in the country.
								In recent years, the process of PAN registration has been made more accessible and
								convenient, with an online application system available to both residents and
								non-residents. This article explores the step-by-step process for online PAN
								registration in Nepal and provides important information about eligibility, required
								documents, and the benefits of having a PAN card.
							</div>
							<div className="relative font-bold text-sm cursor-pointer mt-4 text-gray-700 truncate flex items-center gap-2 duration-200 group-hover:text-white">
								<div>Explore: Pin Card Registration in Nepal </div>
								<div className="translate-x-0 group-hover:translate-x-1 duration-200">
									<svg
										width="17"
										height="17"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="relative h-[400px] bg-gray-600 p-5 group cursor-pointer">
					<div className="relative p-5 rounded bg-white w-full group-hover:bg-purple-600">
						<div className="relative">
							<div className="relative text-sm text-gray-500 duration-200 group-hover:text-white">
								January 03, 2025
							</div>
							<div className="relative text-xl font-bold duration-200 group-hover:text-white">
								Pin Card Registration in Nepal
							</div>
							<div className="relative text-xs line-clamp-4 mt-2 text-gray-600 duration-200 group-hover:text-white tracking-wide">
								In Nepal, obtaining a Permanent Account Number (PAN) card is an essential step for
								individuals and businesses to ensure compliance with tax regulations and facilitate
								smooth financial transactions. The PAN card is issued by the Inland Revenue Department
								(IRD) of Nepal, which is responsible for managing tax-related activities in the country.
								In recent years, the process of PAN registration has been made more accessible and
								convenient, with an online application system available to both residents and
								non-residents. This article explores the step-by-step process for online PAN
								registration in Nepal and provides important information about eligibility, required
								documents, and the benefits of having a PAN card.
							</div>
							<div className="relative font-bold text-sm cursor-pointer mt-4 text-gray-700 truncate flex items-center gap-2 duration-200 group-hover:text-white">
								<div>Explore: Pin Card Registration in Nepal </div>
								<div className="translate-x-0 group-hover:translate-x-1 duration-200">
									<svg
										width="17"
										height="17"
										viewBox="0 0 24 24"
										fill="none"
										stroke="currentColor"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									>
										<line x1="5" y1="12" x2="19" y2="12"></line>
										<polyline points="12 5 19 12 12 19"></polyline>
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="relative flex justify-center my-8">
				<Link href="/blogs">
					<HeroButton>Explore our blog</HeroButton>
				</Link>
			</div>
		</div>
	);
}
