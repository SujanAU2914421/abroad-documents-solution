import Faqs from "@/components/landingPageComponents/faqs";
import React from "react";

export default function page() {
	return (
		<div>
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Frequently Asked Questions</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">FAQs</div>
					</div>
				</div>
			</div>
			<Faqs />
		</div>
	);
}
