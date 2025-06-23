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
	const mainContentRef = useRef();
	const transitionYRef = useRef([]);
	const [lang, setLang] = useState("en");

	const setRef = (el) => {
		if (el && !transitionYRef.current.includes(el)) {
			transitionYRef.current.push(el);
		}
	};

	useEffect(() => {
		// Detect language from <html lang> attribute or default to English
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
			{
				root: null,
				rootMargin: "0px",
				threshold: 0.7,
			}
		);

		observer.observe(mainContentRef.current);

		return () => observer.disconnect();
	}, []);

	const { hashtag, companyName, description, buttonText } = translations[lang];

	return (
		<div className="relative h-auto xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center gap-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap *:w-full">
			<div
				style={{ transform: "translateY(10px)", opacity: 0 }}
				ref={setRef}
				className="relative h-96 rounded-3xl shadow-xl bg-[url(https://i.pinimg.com/1200x/e7/ba/3a/e7ba3a5da698c8403ae732c713a4c473.jpg)] bg-center bg-cover "
			></div>
			<div className="relative flex items-center">
				<div className="relative" ref={mainContentRef}>
					<div className="relative flex" style={{ transform: "translateX(10px)", opacity: 0 }} ref={setRef}>
						<div className="relative text-xs bg-gray-700 text-white py-1 px-3">{hashtag}</div>
					</div>
					<div
						className="text-2xl font-bold mt-1 leading-12 tracking-wide"
						style={{ transform: "translateX(10px)", opacity: 0 }}
						ref={setRef}
					>
						{companyName}
					</div>
					<div className="relative mt-2" style={{ transform: "translateX(10px)", opacity: 0 }} ref={setRef}>
						<div className="relative max-w-md tracking-wide text-gray-500 text-sm leading-6 [word-spacing:3px]">
							{description}
						</div>
					</div>
					<div
						className="relative flex mt-6"
						style={{ transform: "translateX(10px)", opacity: 0 }}
						ref={setRef}
					>
						<Link href="/about-us">
							<div className="relative text-sm text-white bg-purple-600 font-bold rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2">
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
}
