"use client";
import React, { useEffect, useRef, useState } from "react";
import DiscoverOurServices from "@/components/landingPageComponents/discoverOurServices";
import FirstSection from "@/components/about-us/firstSection";
import WhyChooseUs from "@/components/whyChooseUs";
import LimitedOffer from "@/components/landingPageComponents/limitedOffer";
import ServicesTest from "@/components/landingPageComponents/servicesSection";

const translations = {
	en: {
		pageTitle: "About Us",
		breadcrumbHome: "Home",
		breadcrumbCurrent: "About Us",
	},
	ne: {
		pageTitle: "हाम्रो बारेमा",
		breadcrumbHome: "गृहपृष्ठ",
		breadcrumbCurrent: "हाम्रो बारेमा",
	},
};

export default function Page() {
	const [lang, setLang] = useState("en");

	const firstSectionRefs = useRef([]);
	firstSectionRefs.current = [];

	const setFirstSectionRef = (el) => {
		if (el && !firstSectionRefs.current.includes(el)) {
			firstSectionRefs.current.push(el);
		}
	};

	useEffect(() => {
		// detect lang from <html lang="..."> or fallback to en
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);

		// animation timeout
		setTimeout(() => {
			firstSectionRefs.current.forEach((elem, index) => {
				const delay = index * 100; // stagger 100ms
				elem.style.transition = "all 500ms ease-out";
				elem.style.transitionDelay = `${delay}ms`;
				elem.style.opacity = 1;
				elem.style.transform = "translateX(0)";
			});
		}, 10);
	}, []);

	const t = translations[lang];

	return (
		<div className="relative tracking-wide">
			<div className="px-6 py-14 space-y-16 bg-white dark:bg-[#010104] text-gray-800 dark:text-gray-100 mt-16">
				<div className="relative">
					<div
						className="relative flex justify-center font-bold text-3xl"
						style={{ opacity: 0, transform: "translateX(10px)" }}
						ref={setFirstSectionRef}
					>
						{t.pageTitle}
					</div>
					<div
						className="relative text-sm flex justify-center"
						style={{ opacity: 0, transform: "translateX(10px)" }}
						ref={setFirstSectionRef}
					>
						<div className="flex items-center gap-2 mt-2 text-gray-700">
							<div className="relative">{t.breadcrumbHome}</div>
							<div className="relative">{">"}</div>
							<div className="relative">{t.breadcrumbCurrent}</div>
						</div>
					</div>
				</div>{" "}
				{/* first section */}
				<FirstSection setFirstSectionRef={setFirstSectionRef} />
				<WhyChooseUs />
				<LimitedOffer />
			</div>
			<ServicesTest />
		</div>
	);
}
