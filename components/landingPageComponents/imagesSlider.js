"use client";
import React from "react";

export default function ImagesSlider() {
	const images1 = [
		"https://i.pinimg.com/736x/30/6c/fe/306cfea3a555f3ff26876b2d55d6325a.jpg",
		"https://i.pinimg.com/1200x/4d/e4/52/4de4523f2f28d4b0f9f9816fdf1dbf4e.jpg",
		"https://i.pinimg.com/736x/cc/b2/95/ccb295f2c0bc827027cda15d6ff3d839.jpg",
		"https://i.pinimg.com/736x/94/af/14/94af1407681d9ff3716aa7c70d41f223.jpg",
		"https://i.pinimg.com/1200x/f1/3b/af/f13baf38e91fc1a06877e7c3739e9322.jpg",
		"https://i.pinimg.com/736x/07/20/c7/0720c70b151eb743021edb3acdbf87f1.jpg",
		"https://i.pinimg.com/736x/a3/18/fd/a318fd8ea1fa54909abaf1e6cb95be1b.jpg",
		"https://i.pinimg.com/736x/85/5b/ee/855beebe768e0c8b3def936494927469.jpg",
		"https://i.pinimg.com/736x/ae/45/8e/ae458e585cf4d90bd482bb5fd5a295b3.jpg",
		"https://i.pinimg.com/736x/06/91/6c/06916cdd5f5569dd82503b90ca52ff12.jpg",
	];

	const images2 = [
		"https://i.pinimg.com/736x/30/6c/fe/306cfea3a555f3ff26876b2d55d6325a.jpg",
		"https://i.pinimg.com/1200x/4d/e4/52/4de4523f2f28d4b0f9f9816fdf1dbf4e.jpg",
		"https://i.pinimg.com/736x/cc/b2/95/ccb295f2c0bc827027cda15d6ff3d839.jpg",
		"https://i.pinimg.com/736x/94/af/14/94af1407681d9ff3716aa7c70d41f223.jpg",
		"https://i.pinimg.com/1200x/f1/3b/af/f13baf38e91fc1a06877e7c3739e9322.jpg",
		"https://i.pinimg.com/736x/07/20/c7/0720c70b151eb743021edb3acdbf87f1.jpg",
		"https://i.pinimg.com/736x/a3/18/fd/a318fd8ea1fa54909abaf1e6cb95be1b.jpg",
		"https://i.pinimg.com/736x/85/5b/ee/855beebe768e0c8b3def936494927469.jpg",
		"https://i.pinimg.com/736x/ae/45/8e/ae458e585cf4d90bd482bb5fd5a295b3.jpg",
		"https://i.pinimg.com/736x/06/91/6c/06916cdd5f5569dd82503b90ca52ff12.jpg",
	];

	const duplicatedImages1 = [...images1, ...images1];
	const duplicatedImages2 = [...images2, ...images2];

	return (
		<div className="relative h-[500px] w-full justify-center overflow-hidden flex gap-4">
			{/* One Column */}
			<div className="relative w-48 h-full flex items-center">
				<div className="relative h-full w-full my-auto overflow-hidden">
					<div className="absolute top-0 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent"></div>
					<div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
					<div className="absolute w-full animate-slide-up-first space-y-4">
						{duplicatedImages1.map((img, index) => (
							<div
								key={index}
								className="w-full h-48 rounded-xl bg-center bg-cover shadow-md"
								style={{ backgroundImage: `url(${img})` }}
							></div>
						))}
					</div>
				</div>
			</div>

			{/* Second Column (staggered scroll) */}
			<div className="relative w-48 h-full flex items-center">
				<div className="relative h-[90%] w-full overflow-hidden">
					<div className="absolute top-0 z-10 h-40 w-full bg-gradient-to-b from-white to-transparent"></div>
					<div className="absolute bottom-0 z-10 h-40 w-full bg-gradient-to-t from-white to-transparent"></div>
					<div className="absolute w-full animate-slide-up-second space-y-4">
						{duplicatedImages2.map((img, index) => (
							<div
								key={index}
								className="w-full h-48 rounded-xl bg-center bg-cover shadow-md"
								style={{ backgroundImage: `url(${img})` }}
							></div>
						))}
					</div>
				</div>
			</div>

			{/* Custom animation styles */}
			<style jsx>{`
				@keyframes slideUp {
					0% {
						transform: translateY(0%);
					}
					100% {
						transform: translateY(-50%);
					}
				}
				.animate-slide-up-first {
					animation: slideUp 60s linear infinite;
				}
				.animate-slide-up-second {
					animation: slideUp 100s linear infinite;
				}
			`}</style>
		</div>
	);
}
