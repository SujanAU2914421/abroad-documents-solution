import SendAMessage from "@/components/landingPageComponents/sendAMessage";
import React from "react";

export default function page() {
	return (
		<div className="relative">
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Contact Us</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Contact Us</div>
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
						<div className="font-bold">Contact Us</div>
						<div className="text-xs text-gray-800">Anamanagar 29, Kathmandu, Nepal</div>
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
						<div className="font-bold">Call/Text/Viber/WhatsApp</div>
						<div className="text-xs text-gray-800">+977 9765979296</div>
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
						<div className="font-bold">Email Us Today</div>
						<div className="text-xs text-gray-800">company@gmail.com</div>
					</div>
				</div>
			</div>
			<div className="relative">
				<SendAMessage />
			</div>
		</div>
	);
}
