"use client";
import React from "react";
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

export default function Navbar() {
	const { services } = useMainContext();

	return (
		<div className="sticky top-0 z-20 w-full h-auto xl:px-16 lg:px-16 md:px-8 px-4 flex items-center justify-between bg-white text-black">
			<div
				className="relative h-24 w-24"
				style={{ background: "url(/assets/logo/logo.png) center / cover" }}
			></div>
			<div className="relative xl:flex lg:flex hidden items-center gap-8 text-sm font-medium">
				<Link href="/">
					<div className="cursor-pointer">Home</div>
				</Link>
				<Link href="/about-us">
					<div className="cursor-pointer">About Us</div>
				</Link>
				<NavigationMenu>
					<NavigationMenuList>
						<NavigationMenuItem>
							<NavigationMenuTrigger>
								<div className="cursor-pointer">Services</div>
							</NavigationMenuTrigger>
							<NavigationMenuContent>
								<div className="w-[300px]">
									{services.map((service, index) => {
										return (
											<Link href={service.link} key={index}>
												<div className="py-2 duration-200 w-full hover:bg-indigo-500 hover:text-white flex items-center px-4 rounded-md cursor-pointer">
													{service.name}
												</div>
											</Link>
										);
									})}
								</div>
							</NavigationMenuContent>
						</NavigationMenuItem>
					</NavigationMenuList>
				</NavigationMenu>
				<Link href="/blogs">
					<div className="cursor-pointer">Blog</div>
				</Link>
				<Link href="/faqs">
					<div className="cursor-pointer">FAQs</div>
				</Link>
				<Link href="/contact-us">
					<div className="cursor-pointer">Contact Us</div>
				</Link>
			</div>
			<div className="relative flex items-center gap-8">
				<a href="tel:+9779812818289">
					<div className="relative h-10 px-8 rounded-full space-x-1.5 bg-purple-700 hover:bg-purple-800 duration-200 text-white text-sm flex items-center justify-center">
						<span>dial</span>
						<span className="font-bold tracking-wide">9799120122</span>
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
				<div className="relative xl:hidden lg:hidden flex">
					<Sheet>
						<SheetTrigger>
							<div className="-rotate-90 cursor-pointer">
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
									<line x1="18" y1="20" x2="18" y2="10"></line>
									<line x1="12" y1="20" x2="12" y2="4"></line>
									<line x1="6" y1="20" x2="6" y2="14"></line>
								</svg>
							</div>
						</SheetTrigger>
						<SheetContent>
							<DialogTitle></DialogTitle>
							<div className="relative w-full pt-4 overflow-y-auto pb-16">
								<div className="relative px-8">
									<div className="relative flex">
										<div
											className="relative h-28 w-28"
											style={{ background: "url(/assets/logo/logo.png) center / cover" }}
										></div>
									</div>
									<div className="relative pt-4 text-xl font-bold">
										Abroad Documents Solution Nepal
									</div>
								</div>
								<div className="relative mt-5 px-5">
									<Link href="/">
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Home
										</div>
									</Link>
									<Link href="/services">
										{" "}
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Services
										</div>
									</Link>
									<Link href="/blogs">
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Blog
										</div>
									</Link>
									<Link href="/faqs">
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Faqs
										</div>
									</Link>
									<Link href="/search">
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Search
										</div>
									</Link>
									<Link href="/contact-us">
										<div className="relative h-10 text-sm flex items-center hover:font-bold hover:bg-gray-200 px-3">
											Contact Us
										</div>
									</Link>
								</div>
								<div className="relative mt-8 px-8">
									<div className="text-sm font-bold">Contact Info</div>
									<div className="relative mt-4 text-sm *:py-2 *:items-center space-y-2">
										<div className="relative flex gap-2 items-center">
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
													<path d="M15.05 5A5 5 0 0 1 19 8.95M15.05 1A9 9 0 0 1 23 8.94m-1 7.98v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
												</svg>
											</span>
											<a href="tel:+9779812818289" className="hover:underline text-blue-600">
												+977 9812818289
											</a>
										</div>
										<div className="relative flex gap-2 items-center">
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
													<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
													<polyline points="22,6 12,13 2,6"></polyline>
												</svg>
											</span>
											<a
												href="mailto:example@gmail.com"
												className="hover:underline text-blue-600"
											>
												example@gmail.com
											</a>
										</div>
									</div>
								</div>
							</div>
						</SheetContent>
					</Sheet>
				</div>
			</div>
		</div>
	);
}
