import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import ImagesSlider from "./imagesSlider";

const content = {
	en: {
		tagline: "Trusted Notary Services – Fast, Secure, and Always By Your Side.",
		heading: "Authorized Notary, Translation & Certification Services In Nepal Online",
		description: "Certified professionals delivering seamless notarization—anytime, anywhere.",
		buttonText: "Checkout our services",
		buttonLink: "/services",
	},
	ne: {
		tagline: "भरपर्दो नोटरी सेवा — छिटो, सुरक्षित, र सधैं तपाईंको साथमा।",
		heading: "नेपालमा प्रमाणित नोटरी, प्रमाणीकरण, र अनुवाद सेवाहरू",
		description: "प्रमाणित पेशेवरहरूबाट सहज नोटरीकरण सेवा — जबसुकै, जहाँसुकै।",
		buttonText: "हाम्रा सेवाहरू हेर्नुहोस्",
		buttonLink: "/services",
	},
};

export default function FirstSection() {
	const OnloadAnimationElements = useRef([]);
	OnloadAnimationElements.current = [];

	const [language, setLanguage] = useState("en");

	const setRef = (el) => {
		if (el && !OnloadAnimationElements.current.includes(el)) {
			OnloadAnimationElements.current.push(el);
		}
	};

	useEffect(() => {
		if (typeof document !== "undefined") {
			const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
			if (Object.keys(content).includes(htmlLang)) {
				setLanguage(htmlLang);
			}
		}
	}, []);

	useEffect(() => {
		setTimeout(() => {
			OnloadAnimationElements.current.forEach((elem, index) => {
				const delay = index * 100;
				elem.style.transitionDelay = `${delay}ms`;
				elem.style.opacity = 1;
				elem.style.transform = "translateX(0) translateY(0) scale(1) rotate(0deg)";
			});
		}, 10);
	}, []);

	const t = content[language];

	return (
		<section
			aria-labelledby="homepage-hero-title"
			className="relative min-h-screen xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center gap-8 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full"
		>
			<article className="relative flex items-center">
				<div className="relative">
					<div className="relative flex">
						<p
							className="relative text-sm bg-purple-100 text-gray-800 p-1 transition-all duration-500 ease-out"
							style={{ transform: "translateX(30px)", opacity: 0 }}
							ref={setRef}
						>
							{t.tagline}
						</p>
					</div>
					<h1
						id="homepage-hero-title"
						className="text-3xl font-bold mt-2 leading-11 font-sans tracking-wide transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						{t.heading}
					</h1>

					<p
						className="relative mt-4 max-w-md tracking-wide transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						{t.description}
					</p>

					<div
						className="relative flex mt-8 transition-all duration-500 ease-out"
						style={{ transform: "translateX(30px)", opacity: 0 }}
						ref={setRef}
					>
						<Link
							href={t.buttonLink}
							className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
							aria-label={t.buttonText}
						>
							{t.buttonText}
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
						</Link>
					</div>
				</div>
			</article>

			<div className="relative h-[80vh]">
				<ImagesSlider />
			</div>
		</section>
	);
}
