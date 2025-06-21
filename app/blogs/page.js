"use client";
import React from "react";
import { useBlogContext } from "@/context/blogContext";
import Link from "next/link";

export default function Page() {
	const { blogs } = useBlogContext();

	return (
		<div>
			<div className="relative py-16">
				<div className="relative flex justify-center font-bold text-3xl">Blogs</div>
				<div className="relative text-sm flex justify-center">
					<div className="flex items-center gap-2 mt-2 text-gray-700">
						<div className="relative">Home</div>
						<div className="relative">{">"}</div>
						<div className="relative">Blogs</div>
					</div>
				</div>
			</div>

			<div className="relative">
				<div className="relative px-32">
					<div className="relative flex flex-wrap mb-16 *:w-1/2">
						{blogs.map((blog, index) => (
							<div className="relative p-4" key={index}>
								<Link href={"/blogs/" + blog.formatted_topic}>
									<div className="relative h-[400px] bg-gray-200 rounded-xl border shadow-xl w-full p-5 group cursor-pointer flex items-end">
										<div className="relative bottom-0 p-5 rounded-xl bg-white w-full group-hover:bg-purple-700 duration-200">
											<div className="relative text-sm text-gray-500 group-hover:text-white">
												{new Date(blog.date).toLocaleDateString("en-US", {
													year: "numeric",
													month: "long",
													day: "2-digit",
												})}
											</div>
											<div className="relative text-xl font-bold group-hover:text-white">
												{blog.topic}
											</div>
											<div className="relative text-xs line-clamp-4 mt-2 text-gray-600 group-hover:text-white tracking-wide">
												{blog.description.replace(/<[^>]+>/g, "").slice(0, 300) + "..."}
											</div>
											<div className="relative font-bold text-sm cursor-pointer mt-4 text-gray-700 truncate flex items-center gap-2 group-hover:text-white">
												<div className="truncate">Explore: {blog.topic}</div>
												<div className="translate-x-0 group-hover:translate-x-1">
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
												</div>
											</div>
										</div>
									</div>
								</Link>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
