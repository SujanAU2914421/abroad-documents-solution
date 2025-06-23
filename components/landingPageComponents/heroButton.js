import React from "react";

export default function HeroButton({ children }) {
	return (
		<div className="relative flex">
			<div className="relative h-10 bg-purple-700 flex items-center justify-center text-xs font-bold tracking-wide shadow-gray-200 shadow-xl cursor-pointer text-white rounded-md px-8">
				{children}
			</div>
		</div>
	);
}
