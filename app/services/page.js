"use client";
import OurServices from "@/components/landingPageComponents/ourServices";
import ServicesTest from "@/components/landingPageComponents/servicesSection";
import React from "react";

export default function page() {
	return (
		<div className="relative my-16">
			<div className="flex justify-center px-32">
				<div className="relative justify-center text-3xl font-bold">Services</div>
			</div>
			<div className="flex justify-center mt-2">Home {">"} Services</div>
			<ServicesTest />
		</div>
	);
}
