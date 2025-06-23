"use client";

import React, { useEffect, useState } from "react";
import HeroButton from "../landingPageComponents/heroButton";

export default function FirstSection({ setFirstSectionRef }) {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		// get lang from <html lang="...">
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);
	}, []);

	const data = {
		en: {
			title: "Fast, Reliable Online Notary & Translation Services in Nepal",
			description:
				"Need documents notarized or translated in Nepal? Notary Nepal offers fast, reliable notary public and translation services for individuals and businesses. With over 10 years of experience, we’ve helped thousands of clients across various sectors. Whether it’s for visas, passports, citizenship, or legal documentation — we’ve got you covered.",
			buttonText: "Get a Free Quote Now",
			note: "Don’t miss this limited-time offer!",
		},
		ne: {
			title: "नेपालमा छिटो र भरपर्दो अनलाइन नोटरी र अनुवाद सेवा",
			description:
				"के तपाईंलाई नेपालमा कागजातहरू प्रमाणित वा अनुवाद गर्न आवश्यक छ? नोटरी नेपालले व्यक्तिहरू र व्यवसायहरूको लागि छिटो र भरपर्दो नोटरी पब्लिक र अनुवाद सेवा प्रदान गर्छ। १० वर्षभन्दा बढीको अनुभवसहित, हामीले विभिन्न क्षेत्रहरूमा हजारौं ग्राहकहरूलाई सहायता गरेका छौं। चाहे त्यो भिसा, राहदानी, नागरिकता, वा कानुनी कागजातहरूको लागि हो — हामी तपाईंको सेवा मा छौं।",
			buttonText: "अहिले निःशुल्क उद्धरण प्राप्त गर्नुहोस्",
			note: "यो सीमित-अवधिको अफर नछुटाउनुहोस्!",
		},
	};

	const t = data[lang]; // translation picker

	return (
		<div className="relative h-auto xl:px-32 lg:px-32 px-4 flex items-center gap-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full">
			<div className="space-y-4 xl:pr-16 lg:pr-16 pr-0">
				<div
					className="text-2xl font-semibold leading-9 tracking-wide"
					style={{ opacity: 0, transform: "translateX(10px)" }}
					ref={setFirstSectionRef}
				>
					{t.title}
				</div>
				<div
					className="max-w-2xl mx-auto text-sm leading-6 tracking-wide text-gray-600 dark:text-gray-300"
					style={{ opacity: 0, transform: "translateX(10px)" }}
					ref={setFirstSectionRef}
				>
					{t.description}
				</div>
				<div
					className="flex mt-8"
					style={{ opacity: 0, transform: "translateX(10px)" }}
					ref={setFirstSectionRef}
				>
					<HeroButton>{t.buttonText}</HeroButton>
				</div>
				<div
					className="text-sm text-gray-500 mt-2"
					style={{ opacity: 0, transform: "translateX(10px)" }}
					ref={setFirstSectionRef}
				>
					{t.note}
				</div>
			</div>
			<div
				className="relative h-96 bg-gray-100 rounded-2xl"
				style={{ opacity: 0, transform: "scale(0.9)" }}
				ref={setFirstSectionRef}
			></div>
		</div>
	);
}
