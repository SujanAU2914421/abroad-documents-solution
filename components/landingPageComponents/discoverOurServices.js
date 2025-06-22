import React, { useEffect, useRef } from "react";
import HeroButton from "./heroButton";
import { useMainContext } from "@/context/mainContects";
import Link from "next/link";

export default function DiscoverOurServices() {
	const { services } = useMainContext();

	const mainContentRefs = useRef([]);
	const transitionRefs = useRef([]);

	useEffect(() => {
		mainContentRefs.current.forEach((sectionRef, sectionIndex) => {
			if (!sectionRef) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						transitionRefs.current[sectionIndex]?.forEach((el, elIndex) => {
							el.style.transition = `opacity 0.6s ease-out ${elIndex * 100}ms, transform 0.6s ease-out ${
								elIndex * 100
							}ms`;
							el.style.opacity = "1";
							el.style.transform = "translate(0, 0)";
						});
						observer.disconnect();
					}
				},
				{
					root: null,
					rootMargin: "0px",
					threshold: 0.7,
				}
			);

			observer.observe(sectionRef);
		});
	}, []);

	const setTransitionRef = (el, sectionIndex) => {
		if (!transitionRefs.current[sectionIndex]) {
			transitionRefs.current[sectionIndex] = [];
		}
		if (el && !transitionRefs.current[sectionIndex].includes(el)) {
			transitionRefs.current[sectionIndex].push(el);
		}
	};

	return (
		<div className="relative mb-16 mt-32 xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4">
			<div className="flex justify-center">
				<div className="relative justify-center text-3xl font-bold">Areas of Experiences</div>
			</div>
			<div className="flex justify-center text-sm mt-2">Discover Our Services</div>
			<div className="relative grid gap-y-8">
				{services.slice(0, 4).map((service, index) => {
					const imageRef = (el) => setTransitionRef(el, index);
					const contentRef = (el) => setTransitionRef(el, index);
					const buttonRef = (el) => setTransitionRef(el, index);
					const titleRef = (el) => setTransitionRef(el, index);
					const descRef = (el) => setTransitionRef(el, index);

					const isEven = index % 2 === 0;

					const image = (
						<div
							className="relative w-full h-96 rounded-3xl shadow-xl"
							style={{
								transform: "translateY(10px)",
								opacity: 0,
								background: `url(${service.image}) center / cover`,
							}}
							ref={imageRef}
						></div>
					);

					const content = (
						<div className="relative w-full flex items-center">
							<div className="relative">
								<div
									className="text-2xl font-bold mt-1 leading-12 tracking-wide"
									style={{ transform: "translateY(10px)", opacity: 0 }}
									ref={titleRef}
								>
									{service.name}
								</div>
								<div
									className="relative mt-2"
									style={{ transform: "translateY(10px)", opacity: 0 }}
									ref={descRef}
								>
									<div className="relative max-w-md tracking-wide text-gray-500 text-sm leading-6 line-clamp-5 [word-spacing:3px]">
										{service.description}
									</div>
								</div>
								<div
									className="relative flex mt-6"
									style={{ transform: "translateY(10px)", opacity: 0 }}
									ref={buttonRef}
								>
									<Link href={service.link}>
										<div className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2">
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
					);

					return (
						<div
							key={index}
							className={`relative h-auto pt-16 flex items-center gap-y-8 gap-x-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap ${
								isEven ? "flex-wrap-reverse" : "flex-wrap"
							} *:w-full`}
							ref={(el) => (mainContentRefs.current[index] = el)}
						>
							{isEven ? (
								<>
									{content}
									{image}
								</>
							) : (
								<>
									{image}
									{content}
								</>
							)}
						</div>
					);
				})}
			</div>

			<div className="flex mt-16 justify-center">
				<HeroButton>Check all Services</HeroButton>
			</div>
		</div>
	);
}
