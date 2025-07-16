import { X } from "lucide-react";
import React, { useEffect, useState } from "react";

export default function HelperPopUp() {
	const [showPopup, setShowPopup] = useState(false);
	let timeoutId;

	useEffect(() => {
		const resetTimer = () => {
			clearTimeout(timeoutId);
			timeoutId = setTimeout(() => {
				setShowPopup(true);
			}, 6500); // 10 seconds of inactivity
		};

		const events = ["mousemove", "keydown", "scroll", "click", "touchstart"];

		events.forEach((event) => {
			window.addEventListener(event, resetTimer);
		});

		// Start initial timer
		resetTimer();

		return () => {
			clearTimeout(timeoutId);
			events.forEach((event) => {
				window.removeEventListener(event, resetTimer);
			});
		};
	}, []);

	if (!showPopup) return null;

	return (
		<div className="fixed top-0 left-0 h-screen w-screen z-[80] bg-gray-600/20 flex items-center justify-center">
			{/* Clicking this will hide the popup */}
			<div className="h-screen w-screen top-0 left-0 absolute" onClick={() => setShowPopup(false)}></div>

			<div className="relative h-auto w-xl py-8 px-8 bg-white rounded-xl z-[81]">
				<div className="relative">
					{/* Close (X) button */}
					<div
						className="absolute right-0 top-0 h-8 w-8 text-gray-600 hover:text-gray-800 cursor-pointer z-10 flex items-center justify-center"
						onClick={() => setShowPopup(false)}
					>
						<X />
					</div>

					<div className="relative flex justify-center flex-col items-center">
						<div className="relative text-xl">Need Help?</div>
						<div className="relative text-sm text-gray-500 mt-1">We’re here to assist you anytime.</div>
					</div>

					<div className="relative mt-6 grid gap-3">
						<div className="relative h-11 w-full cursor-pointer bg-gradient-to-tr from-green-600 to-green-500 shadow rounded-md flex justify-center items-center gap-4">
							<svg width="26" height="26" viewBox="0 0 48 48" fill="#fff">
								<path d="M24 4C12.95 4 4 12.95 4 24c0 4.19 1.13 8.12 3.1 11.49L4 44l8.91-2.94C15.88 43.9 19.81 45 24 45c11.05 0 20-8.95 20-20S35.05 4 24 4Zm.06 37c-3.68 0-7.07-1.06-9.94-2.9L8 40l1.89-6.17A16.895 16.895 0 0 1 7 24c0-9.38 7.62-17 17-17s17 7.62 17 17-7.62 17-17 17Zm8.5-12.19c-.47-.23-2.77-1.37-3.2-1.52s-.74-.23-1.06.24c-.31.47-1.22 1.51-1.49 1.82-.27.31-.55.35-1.02.12-.47-.23-1.97-.73-3.76-2.33-1.39-1.24-2.33-2.77-2.61-3.24-.27-.47-.03-.72.2-.94.2-.2.47-.55.7-.82.23-.27.31-.47.47-.78.15-.31.08-.59-.04-.82-.12-.23-1.06-2.55-1.45-3.49-.38-.9-.78-.78-1.06-.8-.27-.01-.59-.01-.9-.01s-.82.12-1.25.59c-.43.47-1.65 1.62-1.65 3.94s1.69 4.57 1.93 4.89c.23.31 3.31 5.08 8.03 7.12 1.12.48 1.99.76 2.67.97 1.12.36 2.14.31 2.95.19.9-.14 2.77-1.13 3.17-2.21.39-1.08.39-2 .27-2.2-.11-.2-.43-.31-.9-.55Z" />
							</svg>
							<div className="relative text-sm text-gray-200">Message on WhatsApp</div>
						</div>

						<div className="relative h-11 w-full cursor-pointer bg-gradient-to-tr from-purple-500 to-indigo-500 shadow rounded-md flex justify-center items-center gap-4">
							<div
								className="relative h-6 w-6"
								style={{
									background: `url(https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/2048px-Instagram_logo_2016.svg.png) center / cover`,
								}}
							></div>
							<div className="relative text-sm text-gray-200">Message on Instagram</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
