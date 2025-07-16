"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";

const translations = {
	en: {
		home: "Home",
		services: "Services",
		blog: "Blog",
		faqs: "FAQs",
		contactUs: "Contact Us",
		contactInfo: "Contact Info",
		phoneNumber: "+977 9826923934",
		email: "ads.doc.services@gmail.com",
	},
	ne: {
		home: "गृहपृष्ठ",
		services: "सेवाहरू",
		blog: "ब्लग",
		faqs: "प्रायः सोधिने प्रश्नहरू",
		contactUs: "सम्पर्क गर्नुहोस्",
		contactInfo: "सम्पर्क जानकारी",
		phoneNumber: "+९७७ ९८२६९२३९३४",
		email: "ads.doc.services@gmail.com",
	},
};

export default function MobileNavMenu() {
	const [language, setLanguage] = useState("en");

	useEffect(() => {
		if (typeof document !== "undefined") {
			const lang = document.documentElement.lang?.split("-")[0] || "en";
			if (Object.keys(translations).includes(lang)) {
				setLanguage(lang);
			}
		}
	}, []);

	const t = translations[language];

	return (
		<Sheet>
			<SheetTrigger asChild>
				<button className="-rotate-90 cursor-pointer">
					<svg
						width="24"
						height="24"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
					>
						<line x1="18" y1="20" x2="18" y2="10" />
						<line x1="12" y1="20" x2="12" y2="4" />
						<line x1="6" y1="20" x2="6" y2="14" />
					</svg>
				</button>
			</SheetTrigger>

			<SheetContent position="right" size="content">
				<DialogTitle></DialogTitle>
				<div className="relative w-full pt-4 overflow-y-auto pb-16">
					<div className="relative px-8">
						<div className="relative flex">
							<div
								className="relative h-28 w-28"
								style={{ background: "url(/assets/logo/logo.jpg) center / cover" }}
							></div>
						</div>
						<div className="relative pt-4 text-xl font-bold">Abroad Documents Solution</div>
						<div className="relative text-sm mt-1">Gautam Law Chamber</div>
					</div>

					<div className="relative mt-5 px-5 space-y-2">
						{[
							{ href: "/", label: t.home },
							{ href: "/services", label: t.services },
							{ href: "/blogs", label: t.blog },
							{ href: "/faqs", label: t.faqs },
							{ href: "/contact-us", label: t.contactUs },
						].map((item, i) => (
							<Link key={i} href={item.href}>
								<div className="h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
									{item.label}
								</div>
							</Link>
						))}
					</div>

					<div className="mt-8 px-8">
						<div className="text-sm font-bold">{t.contactInfo}</div>
						<div className="mt-4 text-sm space-y-2">
							<div className="flex items-center gap-2">
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
									<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
								</svg>
								<a href={`tel:${t.phoneNumber}`} className="hover:underline text-blue-600">
									{t.phoneNumber}
								</a>
							</div>
							<div className="flex items-center gap-2">
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
									<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
									<polyline points="22,6 12,13 2,6" />
								</svg>
								<a href={`mailto:${t.email}`} className="hover:underline text-blue-600">
									{t.email}
								</a>
							</div>
						</div>
					</div>
				</div>
			</SheetContent>
		</Sheet>
	);
}
