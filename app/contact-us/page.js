"use client";
import SendAMessage from "@/components/landingPageComponents/sendAMessage";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const translations = {
	en: {
		pageTitle: "Contact Us",
		breadcrumbHome: "Home",
		breadcrumbCurrent: "Contact Us",
		contactTitle1: "Contact Us",
		contactDesc1: "Anamanagar 29, Kathmandu, Nepal",
		contactTitle2: "Call/Text/Viber/WhatsApp",
		contactDesc2: "+977 982-6923934",
		contactTitle3: "Email Us Today",
		contactDesc3: "company@gmail.com",
	},
	ne: {
		pageTitle: "सम्पर्क गर्नुहोस्",
		breadcrumbHome: "गृहपृष्ठ",
		breadcrumbCurrent: "सम्पर्क गर्नुहोस्",
		contactTitle1: "सम्पर्क गर्नुहोस्",
		contactDesc1: "अनामनगर २९, काठमाडौं, नेपाल",
		contactTitle2: "फोन/टेक्स्ट/भाइबर/व्हाट्सएप",
		contactDesc2: "+९७७ ९८२-६९२३९३४",
		contactTitle3: "हामीलाई इमेल गर्नुहोस्",
		contactDesc3: "company@gmail.com",
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
		<div className="relative">
			<div className="relative py-16 mt-16">
				<div className="relative flex justify-center font-bold text-3xl">{t.pageTitle}</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<Link href="/">
							<div className="relative">{t.breadcrumbHome}</div>
						</Link>
						<div className="relative">{">"}</div>
						<div className="relative">{t.breadcrumbCurrent}</div>
					</div>
				</div>
			</div>
			<div className="relative flex justify-center gap-8 flex-wrap">
				<div className="relative h-auto w-auto flex p-5 rounded-md shadow-xl border gap-5">
					<div className="relative text-gray-700">
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
							<circle cx="12" cy="10" r="3"></circle>
						</svg>
					</div>
					<div className="relative grid gap-2">
						<div className="font-bold">{t.contactTitle1}</div>
						<div className="text-xs text-gray-800 hover:underline">{t.contactDesc1}</div>
					</div>
				</div>
				<div className="relative h-auto w-auto flex p-5 rounded-md shadow-xl border gap-5">
					<div className="relative text-gray-700">
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
						</svg>
					</div>
					<div className="relative grid gap-2">
						<div className="font-bold">{t.contactTitle2}</div>
						<div className="text-xs text-gray-800 hover:underline">{t.contactDesc2}</div>
					</div>
				</div>
				<div className="relative h-auto w-auto flex p-5 rounded-md shadow-xl border gap-5">
					<div className="relative text-gray-700">
						<svg
							width="28"
							height="28"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
					</div>
					<div className="relative grid gap-2">
						<div className="font-bold">{t.contactTitle3}</div>
						<div className="text-xs text-gray-800 hover:underline">{t.contactDesc3}</div>
					</div>
				</div>
			</div>
			<div className="relative">
				<SendAMessage />
			</div>
		</div>
	);
}
