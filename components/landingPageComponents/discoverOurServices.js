import React from "react";
import HeroButton from "./heroButton";
import { useMainContext } from "@/context/mainContects";
import Link from "next/link";

export default function DiscoverOurServices() {
	const { services } = useMainContext();

	return (
		<div className="relative my-16 xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4">
			<div className="flex justify-center">
				<div className="relative justify-center bg-gray-800 text-white text-sm px-3 py-1">
					Discover Our Services
				</div>
			</div>
			<div className="flex justify-center mt-2">
				<div className="relative justify-center text-3xl font-bold">Areas of Experiences</div>
			</div>
			<div className="relative grid mt-16 gap-y-8">
				{services.slice(0, 4).map((service, index) => {
					if (index % 2)
						return (
							<div
								key={index}
								className="relative h-auto pt-16 flex items-center gap-y-8 gap-x-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap *:w-full"
							>
								<div
									className={`relative h-96 rounded-3xl shadow-xl`}
									style={{ background: `url(${service.image}) center / cover` }}
								></div>
								<div className="relative flex items-center">
									<div className="relative">
										<div className="text-2xl font-bold mt-1 leading-12 tracking-wide">
											{service.name}
										</div>
										<div className="relative mt-2">
											<div className="relative max-w-md tracking-wide text-gray-500 text-sm leading-6 line-clamp-5 [word-spacing:3px]">
												{service.description}
											</div>
										</div>
										<div className="relative flex mt-6">
											<Link href={service.link}>
												<div
													className="relative text-sm text-white bg-purple-600 font-bold
								rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
												>
													<span>Read In Detail</span>
													<span>
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
													</span>
												</div>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					else {
						return (
							<div
								key={index}
								className="relative h-auto pt-16 flex items-center gap-y-8 gap-x-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full"
							>
								<div className="relative w-1/2 flex items-center">
									<div className="relative">
										<div className="text-2xl font-bold mt-1 leading-12 tracking-wide">
											{service.name}
										</div>
										<div className="relative mt-2">
											<div className="relative max-w-md tracking-wide text-gray-500 text-sm leading-6 line-clamp-5 [word-spacing:3px]">
												{service.description}
											</div>
										</div>
										<div className="relative flex mt-6">
											<Link href="/about-us">
												<div
													className="relative text-sm text-white bg-purple-600 font-bold
								rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
												>
													<span>Read In Detail</span>
													<span>
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
													</span>
												</div>
											</Link>
										</div>
									</div>
								</div>
								<div
									className={`relative w-1/2 h-96 rounded-3xl shadow-xl`}
									style={{ background: `url(${service.image}) center / cover` }}
								></div>
							</div>
						);
					}
				})}
			</div>

			<div className="flex mt-16 justify-center">
				<HeroButton>Check all Services</HeroButton>
			</div>
		</div>
	);
}
