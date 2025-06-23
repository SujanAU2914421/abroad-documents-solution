"use client";

import React, { useEffect, useState } from "react";

const translations = {
	en: {
		title: "Get Your Documents Notarized or Translated Online",
		description:
			"Looking for reliable notary and translation services in Nepal? Look no further. We handle all kinds of documents — Nepali to English, English to Nepali — and provide apostille and legalization support for foreign use.",
		button: "Get a Free Quote Now",
		note: "Don’t miss this limited-time offer!",
	},
	ne: {
		title: "तपाईंका कागजात अनलाइन नोटरी वा अनुवाद गराउनुहोस्",
		description:
			"नेपालमा भरपर्दो नोटरी र अनुवाद सेवाको खोजीमा हुनुहुन्छ? अब टाढा जानु पर्दैन। हामी नेपालीदेखि अंग्रेजी र अंग्रेजीदेखि नेपाली कागजातहरू सम्भाल्छौं, साथै वैदेशिक प्रयोगका लागि एपोस्टिल र वैधिकरण सहयोग पनि दिन्छौं।",
		button: "अहिल्यै निःशुल्क मूल्यांकन पाउनुहोस्",
		note: "यो सीमित समयको अफर नछुटाउनुहोस्!",
	},
};

export default function LimitedOffer() {
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);
	}, []);

	const t = translations[lang] || translations.en;

	return (
		<div className="relative h-auto xl:px-16 lg:px-16 px-4 flex items-center gap-y-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap *:w-full">
			<div className="relative h-96 bg-gray-100 rounded-2xl"></div>
			<div className="space-y-4 xl:pl-16 lg:pl-16 pl-0">
				<div className="text-2xl font-semibold leading-9 tracking-wide">{t.title}</div>
				<div className="max-w-2xl mx-auto text-sm leading-6 tracking-wide text-gray-600 dark:text-gray-300">
					{t.description}
				</div>
				<button className="mt-4 px-6 h-10 flex items-center justify-center bg-purple-600 text-white rounded-md font-bold text-sm hover:bg-purple-700 transition-all">
					{t.button}
				</button>
				<div className="text-sm text-gray-500 mt-2">{t.note}</div>
			</div>
		</div>
	);
}
