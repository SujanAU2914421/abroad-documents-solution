"use client";

import { useMainContext } from "@/context/mainContects";
import React, { useEffect, useState } from "react";
import HeroButton from "./heroButton";
import Link from "next/link";
import Image from "next/image";

const translations = {
	en: {
		title: "Areas of Experiences",
		sidebar: "Services",
		button: "Read In Detail",
	},
	ne: {
		title: "अनुभवका क्षेत्रहरू",
		sidebar: "सेवाहरू",
		button: "विस्तृत जानकारी पढ्नुहोस्",
	},
};

export default function ServicesTest() {
	const { services } = useMainContext();
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [lang, setLang] = useState("en");

	useEffect(() => {
		const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
		setLang(htmlLang);
	}, []);

	const selectedService = services[selectedIndex];
	const t = translations[lang] || translations.en;

	return (
		<section className="relative px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 py-16">
			<header className="flex justify-center mb-10">
				<h2 className="text-3xl font-bold text-center">{t.title}</h2>
			</header>

			<div className="h-screen mx-auto w-full border rounded-xl overflow-hidden shadow-xl flex flex-col md:flex-row">
				<aside className="w-full md:w-96 border-r bg-white">
					<h3 className="font-bold pt-8 pb-5 pl-8 text-lg">{t.sidebar}</h3>
					<nav className="grid sticky top-0">
						{services.map((service, index) => (
							<button
								type="button"
								className={`relative text-left cursor-pointer group flex items-center text-sm font-semibold px-8 py-4 w-full ${
									index === selectedIndex ? "bg-purple-200" : "hover:bg-purple-100 duration-200"
								}`}
								key={index}
								onClick={() => setSelectedIndex(index)}
								aria-current={index === selectedIndex ? "true" : "false"}
							>
								<span
									className={`absolute left-0 w-1 bg-purple-600 duration-300 rounded-r-full h-0 ${
										index === selectedIndex ? "h-full" : "group-hover:h-full"
									}`}
								></span>
								{service.name?.[lang] || service.name}
							</button>
						))}
					</nav>
				</aside>

				<article className="h-full w-full overflow-y-auto overflow-x-hidden bg-white">
					<div className="p-8">
						<div className="w-full h-96 rounded-lg overflow-hidden bg-gray-100 relative mb-8">
							<Image
								src={selectedService.image}
								alt={selectedService.name?.[lang] || "Service image"}
								fill
								sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								className="object-cover rounded-lg"
							/>
						</div>

						<h3 className="font-bold text-2xl leading-9 mb-4">
							{selectedService.name?.[lang] || selectedService.name}
						</h3>

						<p className="text-base leading-8 text-gray-600 mb-6">
							{selectedService.description?.[lang] || selectedService.description}
						</p>

						<Link
							href={`${selectedService.link}`}
							className="inline-block"
							aria-label={`Read more about ${selectedService.name?.[lang] || selectedService.name}`}
						>
							<HeroButton>
								{t.button}

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
							</HeroButton>
						</Link>
					</div>
				</article>
			</div>
		</section>
	);
}
