"use client";

import AboutUsDemoContent from "@/components/landingPageComponents/aboutUsDemoContent";
import BlogExample from "@/components/landingPageComponents/blogExample";
import DiscoverOurServices from "@/components/landingPageComponents/discoverOurServices";
import Faqs from "@/components/landingPageComponents/faqs";
import FirstSection from "@/components/landingPageComponents/firstSection";
import Reviews from "@/components/landingPageComponents/review";
import SendAMessage from "@/components/landingPageComponents/sendAMessage";
import ServicesTest from "@/components/landingPageComponents/servicesSection";
import StatsSection from "@/components/landingPageComponents/statsSection";
import React from "react";

export default function MainPage() {
	return (
		<div className="h-auto pb-32" id="animate">
			<div className="relative bg-[#100f3a] text-white min-h-screen">
				<FirstSection />
			</div>

			<StatsSection />

			<AboutUsDemoContent />

			<div className="relative">
				<ServicesTest />
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
