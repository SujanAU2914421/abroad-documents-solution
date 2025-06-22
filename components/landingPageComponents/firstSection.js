import Link from "next/link";
import React, { useEffect, useRef } from "react";
import ImagesSlider from "./imagesSlider";

export default function FirstSection() {
	const OnloadAnimationElements = useRef([]);
	OnloadAnimationElements.current = []; // Clear on every render

	const setRef = (el) => {
		if (el && !OnloadAnimationElements.current.includes(el)) {
			OnloadAnimationElements.current.push(el);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			OnloadAnimationElements.current.forEach((elem, index) => {
				const delay = index * 100; // 100ms stagger delay
				elem.style.transitionDelay = `${delay}ms`;
				elem.style.opacity = 1;
				elem.style.transform = "translateX(0) translateY(0) scale(1) rotate(0deg)";
			});
		}, 10);
	}, []);

	return (
		<div className="relative h-auto xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center gap-8 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full">
			<div className="relative flex items-center">
				<div className="relative">
					<div
						className="relative flex transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<div className="relative text-sm bg-purple-200 p-1">
							Trusted Notary Services – Fast, Secure, and Always By Your Side.
						</div>
					</div>
					<div
						className="text-4xl font-bold mt-2 leading-12 font-sans tracking-wide transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						Certified Notary, Certification, and Translation Services in Nepal
					</div>
					<div
						className="relative mt-4 transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<div className="relative max-w-md tracking-wide">
							Certified professionals delivering seamless notarization—anytime, anywhere.
						</div>
					</div>
					<div
						className="relative flex mt-4 transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<Link href="/services">
							<div className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2">
								Checkout our services
							</div>
						</Link>
					</div>
				</div>
			</div>
			{/* <div
				className="relative h-96 rounded-3xl shadow-xl duration-400 ease-out bg-[url(https://i.pinimg.com/1200x/e7/ba/3a/e7ba3a5da698c8403ae732c713a4c473.jpg)] bg-center bg-cover"
				style={{ transform: "scale(0.9)", opacity: 0 }}
				ref={setRef}
			></div> */}
			<div className="relative h-[80vh]">
				<ImagesSlider />
			</div>
		</div>
	);
}
