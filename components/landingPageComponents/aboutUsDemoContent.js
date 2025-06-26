import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

const translations = {
	en: {
		hashtag: "# About Us",
		companyName: "Abroad Documents Solution Nepal",
		description:
			"We provide professional, reliable, and efficient notarization services tailored to your needs. Whether you’re handling legal agreements, real estate documents, affidavits, or power of attorney forms, our certified notaries ensure every signature is valid and secure. We offer both in-office and mobile notary solutions—bringing convenience right to your doorstep.",
		buttonText: "Know More about Us",
	},
	ne: {
		hashtag: "# हाम्रो बारेमा",
		companyName: "अबरोड डकुमेन्ट्स सोलुसन नेपाल",
		description:
			"हामी तपाईंको आवश्यकताहरू अनुसार व्यावसायिक, भरपर्दो र प्रभावकारी नोटराइजेशन सेवाहरू प्रदान गर्छौं। कानूनी सम्झौताहरू, रियल इस्टेट कागजातहरू, हलफनामाहरू वा पावर अफ अटर्नी फर्महरू होस्, हाम्रा प्रमाणित नोटरीहरूले प्रत्येक हस्ताक्षर वैध र सुरक्षित हुने सुनिश्चित गर्दछन्। हामी कार्यालयमा र मोबाइल नोटरी समाधान दुवै उपलब्ध गराउँछौं—सजिलै तपाईंको ढोकामा सेवा ल्याउँदै।",
		buttonText: "हाम्रो बारेमा थप जान्नुहोस्",
	},
};

export default function AboutUsDemoContent() {
	const mainContentRef = useRef(null);
	const transitionYRef = useRef([]);
	const [lang, setLang] = useState("en");

	const setRef = (el) => {
		if (el && !transitionYRef.current.includes(el)) {
			transitionYRef.current.push(el);
		}
	};

	useEffect(() => {
		if (typeof document !== "undefined") {
			const htmlLang = document.documentElement.lang || "en";
			setLang(htmlLang.startsWith("ne") ? "ne" : "en");
		}
	}, []);

	useEffect(() => {
		if (!mainContentRef.current) return;

		const observer = new IntersectionObserver(
			([entry]) => {
				if (entry.isIntersecting) {
					transitionYRef.current.forEach((elem, index) => {
						elem.style.transition = `opacity 0.6s ease-out ${index * 100}ms, transform 0.6s ease-out ${
							index * 100
						}ms`;
						elem.style.opacity = "1";
						elem.style.transform = "translate(0, 0)";
					});
					observer.disconnect();
				}
			},
			{ rootMargin: "0px", threshold: 0.7 }
		);

		observer.observe(mainContentRef.current);

		return () => observer.disconnect();
	}, []);

	const { hashtag, companyName, description, buttonText } = translations[lang];

	return (
		<section className="relative flex flex-wrap gap-16 xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 items-center">
			{/* Image container with alt text for accessibility */}
			<div
				aria-hidden="true"
				style={{ transform: "translateY(10px)", opacity: 0 }}
				ref={setRef}
				className="relative h-96 rounded-3xl shadow-xl overflow-hidden flex-shrink-0 w-full md:w-1/2"
			>
				<Image
					src="https://i.pinimg.com/1200x/e7/ba/3a/e7ba3a5da698c8403ae732c713a4c473.jpg"
					alt="About Us background image"
					fill
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="object-cover rounded-3xl"
					priority // optional, if you want this image to load eagerly for better LCP
				/>
			</div>

			{/* Text content */}
			<article className="relative flex flex-col flex-grow max-w-md md:max-w-lg" ref={mainContentRef}>
				<div className="relative flex" style={{ transform: "translateX(10px)", opacity: 0 }} ref={setRef}>
					<p className="relative text-xs bg-gray-700 text-white py-1 px-3 inline-block rounded">{hashtag}</p>
				</div>
				<h2
					className="text-2xl font-bold mt-1 leading-12 tracking-wide"
					style={{ transform: "translateX(10px)", opacity: 0 }}
					ref={setRef}
				>
					{companyName}
				</h2>
				<p
					className="relative mt-2 max-w-md tracking-wide text-gray-500 text-sm leading-6 [word-spacing:3px]"
					style={{ transform: "translateX(10px)", opacity: 0 }}
					ref={setRef}
				>
					{description}
				</p>
				<div className="relative flex mt-6" style={{ transform: "translateX(10px)", opacity: 0 }} ref={setRef}>
					<Link
						href="/about-us"
						className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
						aria-label={buttonText}
					>
						<span>{buttonText}</span>
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
								aria-hidden="true"
								focusable="false"
							>
								<line x1="5" y1="12" x2="19" y2="12" />
								<polyline points="12 5 19 12 12 19" />
							</svg>
						</span>
					</Link>
				</div>
			</article>
		</section>
	);
}
