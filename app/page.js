"use client";
import BlogExample from "@/components/landingPageComponents/blogExample";
import DiscoverOurServices from "@/components/landingPageComponents/discoverOurServices";
import Faqs from "@/components/landingPageComponents/faqs";
import Reviews from "@/components/landingPageComponents/review";
import SendAMessage from "@/components/landingPageComponents/sendAMessage";
import Link from "next/link";
import React from "react";

export default function MainPage() {
	return (
		<div className="h-auto pb-32">
			<div className="relative h-auto xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 pt-16 flex items-center gap-8 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap-reverse *:w-full">
				<div className="relative flex items-center">
					<div className="relative">
						<div className="relative flex">
							<div className="relative text-sm bg-purple-200 p-1">
								Trusted Notary Services – Fast, Secure, and Always By Your Side.
							</div>
						</div>
						<div className="text-4xl font-bold mt-2 leading-12 font-sans tracking-wide">
							Notary, Certification, and Translation Services in Nepal
						</div>
						<div className="relative mt-4">
							<div className="relative max-w-md tracking-wide">
								Certified professionals delivering seamless notarization—anytime, anywhere.
							</div>
						</div>
						<div className="relative flex mt-4">
							<Link href="/services">
								<div
									className="relative text-sm text-white bg-purple-600 font-bold
								rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
								>
									Checkout our services
								</div>
							</Link>
						</div>
					</div>
				</div>
				<div className="relative h-96 rounded-3xl shadow-xl bg-[url(https://i.pinimg.com/1200x/e7/ba/3a/e7ba3a5da698c8403ae732c713a4c473.jpg)] bg-center bg-cover "></div>
			</div>
			<div className="relative h-auto py-16 w-full justify-center bg-gray-800 text-white my-32 xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center">
				<div className="relative w-full h-auto grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-4 grid-cols-2 gap-8">
					<div className="relative w-full">
						<div className="relative text-4xl font-bold">100 K+</div>
						<div className="relative text-xs mt-2">Documents Notarized</div>
					</div>
					<div className="relative w-full">
						<div className="relative text-4xl font-bold">500 K+</div>
						<div className="relative text-xs mt-2">Documents Translated</div>
					</div>
					<div className="relative w-full">
						<div className="relative text-4xl font-bold">100%</div>
						<div className="relative text-xs mt-2">Sucess Rate</div>
					</div>
					<div className="relative w-full">
						<div className="relative text-4xl font-bold">6 K+</div>
						<div className="relative text-xs mt-2">Court Marriage Act Translation</div>
					</div>
					<div className="relative w-full">
						<div className="relative text-4xl font-bold">3404+</div>
						<div className="relative text-xs mt-2">Reviews on Google</div>
					</div>
				</div>
			</div>
			<div className="relative h-auto xl:px-32 lg:px-32 md:px-16 sm:px-8 px-4 flex items-center gap-16 xl:*:w-1/2 lg:*:w-1/2 xl:flex-nowrap lg:flex-nowrap flex-wrap *:w-full">
				<div className="relative h-96 rounded-3xl shadow-xl bg-[url(https://i.pinimg.com/1200x/e7/ba/3a/e7ba3a5da698c8403ae732c713a4c473.jpg)] bg-center bg-cover "></div>
				<div className="relative flex items-center">
					<div className="relative">
						<div className="relative flex">
							<div className="relative text-xs bg-gray-700 text-white py-1 px-3"># About Us</div>
						</div>
						<div className="text-2xl font-bold mt-1 leading-12 tracking-wide">
							Abroad Documents Solution Nepal
						</div>
						<div className="relative mt-2">
							<div className="relative max-w-md tracking-wide text-gray-500 text-sm leading-6 [word-spacing:3px]">
								we provide professional, reliable, and efficient notarization services tailored to your
								needs. Whether you`re handling legal agreements, real estate documents, affidavits, or
								power of attorney forms, our certified notaries ensure every signature is valid and
								secure. We offer both in-office and mobile notary solutions—bringing convenience right
								to your doorstep.
							</div>
						</div>
						<div className="relative flex mt-6">
							<Link href="/about-us">
								<div
									className="relative text-sm text-white bg-purple-600 font-bold
								rounded-md shadow-xl shadow-gray-200 cursor-pointer flex items-center justify-center px-8 h-10 gap-2"
								>
									<span>Know More about Us</span>
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
											<line x1="5" y1="12" x2="19" y2="12"></line>
											<polyline points="12 5 19 12 12 19"></polyline>
										</svg>
									</span>
								</div>
							</Link>
						</div>
					</div>
				</div>
			</div>

			<div className="relative">
				<DiscoverOurServices />
			</div>

			<div className="relative">
				<Reviews />
			</div>
			<div className="relative">
				<BlogExample />
			</div>
			<div className="relative mt-8">
				<Faqs />
			</div>
			<div className="relative">
				<SendAMessage />
			</div>
		</div>
	);
}
