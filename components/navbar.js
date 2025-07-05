"use client";
import React, { useEffect, useState } from "react";
import {
	NavigationMenu,
	NavigationMenuContent,
	NavigationMenuItem,
	NavigationMenuList,
	NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { DialogTitle } from "@radix-ui/react-dialog";
import { useMainContext } from "@/context/mainContects";
import Link from "next/link";
import SubNavbar from "./subNavbar";
import MobileNavMenu from "./mobileNavMenu";

const translations = {
	en: {
		home: "Home",
		aboutUs: "About Us",
		services: "Services",
		blog: "Blog",
		faqs: "FAQs",
		contactUs: "Contact Us",
		contactInfo: "Contact Info",
		dial: "dial",
		phoneNumber: "+977 9826923934",
	},
	ne: {
		home: "गृहपृष्ठ",
		aboutUs: "हाम्रो बारेमा",
		services: "सेवाहरू",
		blog: "ब्लग",
		faqs: "प्रायः सोधिने प्रश्नहरू",
		contactUs: "सम्पर्क गर्नुहोस्",
		contactInfo: "सम्पर्क जानकारी",
		dial: "फोन गर्नुहोस्",
		phoneNumber: "+977 9826923934",
	},
};

export default function Navbar() {
	const { services } = useMainContext();
	const [language, setLanguage] = useState("en");
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		if (typeof document !== "undefined") {
			const htmlLang = document.documentElement.lang?.split("-")[0] || "en";
			if (Object.keys(translations).includes(htmlLang)) {
				setLanguage(htmlLang);
			}
		}

		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const t = translations[language];

	return (
		<>
			<div className="relative xl:px-16 lg:px-16 md:px-8 px-4">
				<SubNavbar />
			</div>
			<div className={`sticky top-0 z-20 w-full h-auto xl:px-16 lg:px-16 md:px-8 px-4`}>
				<div
					className={`relative px-4 py-2 flex items-center justify-between bg-white border rounded-full text-black transition-all duration-300 ${
						scrolled ? "shadow border-gray-200 translate-y-[5px]" : "border-white"
					}`}
				>
					{/* Left company logo & name */}
					<div className="relative flex gap-4 items-center">
						<div className="relative">
							<svg
								width="30"
								height="30"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								strokeWidth="2"
								strokeLinecap="round"
								strokeLinejoin="round"
							>
								<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
								<path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
							</svg>
						</div>
						<div className="relative">
							{/* Always English */}
							<div className="relative text-[12px] font-bold">Abroad Documents Solution</div>
							<div className="relative text-[10px] mt-[1px]">Gautam Law Chamber</div>
						</div>
					</div>

					{/* Desktop menu */}
					<div className="relative xl:flex lg:flex hidden items-center gap-8 text-xs font-medium">
						<Link href="/">
							<div className="cursor-pointer">{t.home}</div>
						</Link>
						<Link href="/about-us">
							<div className="cursor-pointer">{t.aboutUs}</div>
						</Link>
						<NavigationMenu>
							<NavigationMenuList>
								<NavigationMenuItem>
									<NavigationMenuTrigger>
										<div className="cursor-pointer">{t.services}</div>
									</NavigationMenuTrigger>
									<NavigationMenuContent>
										<div className="w-[300px]">
											{services.map((service, index) => (
												<Link href={service.link} key={index}>
													<div className="py-3 duration-200 w-full hover:bg-indigo-500 hover:text-white flex items-center px-4 rounded-md cursor-pointer">
														{service.name}
													</div>
												</Link>
											))}
										</div>
									</NavigationMenuContent>
								</NavigationMenuItem>
							</NavigationMenuList>
						</NavigationMenu>
						<Link href="/blogs">
							<div className="cursor-pointer">{t.blog}</div>
						</Link>
						<Link href="/faqs">
							<div className="cursor-pointer">{t.faqs}</div>
						</Link>
						<Link href="/contact-us">
							<div className="cursor-pointer">{t.contactUs}</div>
						</Link>
					</div>

					{/* Right contact & mobile menu */}
					<div className="relative flex items-center gap-8">
						{/* Desktop phone */}
						<div className="relative xl:flex lg:flex md:flex sm:flex hidden">
							<a href="tel:+9779812818289">
								<div className="relative h-10 px-8 rounded-full space-x-1.5 bg-purple-700 hover:bg-purple-800 duration-200 text-white text-xs flex items-center justify-center">
									{/* <span className="font-bold">{t.dial}</span> */}
									<span className="font-bold tracking-wide">{t.phoneNumber}</span>
									<span className="pl-2">
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
											<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
										</svg>
									</span>
								</div>
							</a>
						</div>

						{/* Mobile hamburger */}
						<div className="relative xl:hidden lg:hidden flex">
							<MobileNavMenu />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
