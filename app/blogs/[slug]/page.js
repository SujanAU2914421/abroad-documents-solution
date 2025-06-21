"use client";
import SideBlogsBar from "@/components/blogs/sideBlogsBar";
import { useBlogContext } from "@/context/blogContext";
import { usePathname } from "next/navigation";
import React from "react";

export default function FlexibleBlogPage() {
	const { blogs } = useBlogContext();

	const mainPathname = usePathname();

	const pathSegments = mainPathname.split("/");
	const currentFormattedTopic = pathSegments[pathSegments.length - 1];

	const currentBlog = blogs.find((blg) => blg.formatted_topic === currentFormattedTopic);

	return (
		<div className="relative">
			{currentBlog ? (
				<div className="relative py-16">
					<div className="relative flex justify-center font-bold text-3xl">{currentBlog.topic}</div>
					<div className="relative text-sm flex justify-center">
						<div className="flex items-center gap-2 mt-2 text-gray-700">
							<div className="relative">Home</div>
							<div className="relative">{">"}</div>
							<div className="relative">Blogs</div>
							<div className="relative">{">"}</div>
							<div className="relative">{currentBlog.topic}</div>
						</div>
					</div>
				</div>
			) : (
				<div className="text-center py-16 font-bold text-xl">No blog found for this route</div>
			)}

			<div className="relative flex px-32 pb-16">
				<div className="relative w-[calc(100%-340px)] pr-8">
					{currentBlog ? (
						<div className="relative">
							<div className="relative">
								<div className="relative flex text-gray-700 items-center gap-4">
									<div className="relative flex gap-2">
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
												<rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
												<line x1="16" y1="2" x2="16" y2="6"></line>
												<line x1="8" y1="2" x2="8" y2="6"></line>
												<line x1="3" y1="10" x2="21" y2="10"></line>
											</svg>
										</span>
										<span className="relative text-sm">{currentBlog.date}</span>
									</div>
									<div className="relative flex gap-2 items-center">
										<span className="text-xs">By:</span>
										<span className="relative text-xs text-black font-bold">
											{currentBlog.publisher}
										</span>
									</div>
								</div>
								<div className="relative mt-4 h-[400px] w-full bg-gray-100"></div>
							</div>
							<div
								className="relative mt-8 text-sm text-gray-700 leading-relaxed"
								dangerouslySetInnerHTML={{ __html: currentBlog.description }}
							/>
						</div>
					) : (
						"No blog with this link"
					)}
				</div>
				<div className="relative w-[340px] pr-8">
					<SideBlogsBar />
				</div>
			</div>
		</div>
	);
}
