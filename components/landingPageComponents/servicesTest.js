"use client";

import { useMainContext } from "@/context/mainContects";
import React, { useEffect, useState } from "react";
import HeroButton from "./heroButton";
import Link from "next/link";

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
		<div className="relative px-32 py-16">
			<div className="flex justify-center">
				<div className="relative justify-center text-3xl font-bold">{t.title}</div>
			</div>
			<div className="h-screen mx-auto w-full border rounded-xl overflow-hidden shadow-xl flex mt-16">
				<div className="relative w-72 h-auto border-r">
					<div className="relative font-bold pt-8 pb-5 pl-8">{t.sidebar}</div>
					<div className="grid sticky top-0">
						{services.map((service, index) => (
							<div
								className={`relative cursor-pointer group flex items-center text-xs font-bold px-8 py-4 ${
									index === selectedIndex ? "bg-purple-200" : "hover:bg-purple-100 duration-200"
								}`}
								key={index}
								onClick={() => setSelectedIndex(index)}
							>
								<div
									className={`absolute left-0 w-1 bg-purple-600 duration-300 rounded-r-full h-0 ${
										index === selectedIndex ? "h-full" : " group-hover:h-full"
									}`}
								></div>
								{service.name?.[lang] || service.name}
							</div>
						))}
					</div>
				</div>

				<div className="relative h-full w-[calc(100%-18rem)] overflow-y-auto overflow-x-hidden">
					<div className="relative h-auto w-full">
						<div className="relative h-96 w-full p-8">
							<div className="relative h-full w-full rounded-lg overflow-hidden bg-gray-100">
								<div
									className="relative h-full w-full"
									style={{ background: `url(${selectedService.image}) center / cover` }}
								></div>
							</div>
						</div>
						<div className="relative px-8 pb-16">
							<div className="relative font-bold text-2xl leading-9">
								{selectedService.name?.[lang] || selectedService.name}
							</div>
							<div className="relative text-base mt-4 leading-8 text-gray-600">
								{selectedService.description?.[lang] || selectedService.description}
							</div>
							<div className="relative flex mt-8">
								<Link href={`/services/${selectedService.link}`}>
									<HeroButton>{t.button}</HeroButton>
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
