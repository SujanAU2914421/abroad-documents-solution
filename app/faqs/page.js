"use client";

import Faqs from "@/components/landingPageComponents/faqs";
import React, { useEffect, useState } from "react";

const translations = {
	en: {
		title: "Frequently Asked Questions",
		home: "Home",
		faqs: "FAQs",
	},
	ne: {
		title: "प्राय: सोधिने प्रश्नहरू",
		home: "गृहपृष्ठ",
		faqs: "प्रश्नहरू",
	},
};

export default function Page() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);
	}, []);

	const t = translations[lang] || translations.en;

	return (
		<div>
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">{t.title}</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">{t.home}</div>
						<div className="relative">{">"}</div>
						<div className="relative">{t.faqs}</div>
					</div>
				</div>
			</div>
			<Faqs />
		</div>
	);
}
