
import React from "react";

function Performance() {
	return (
		<div className="p-2 sm:p-4 md:p-8 bg-[#F8F9FB] min-h-screen">
			{/* Breadcrumbs */}
			<div className="flex flex-wrap items-center gap-2 text-xs text-gray-400 mb-2 sm:mb-4">
				<span>Service Providers</span>
				<span>›</span>
				<span className="text-purple-600 font-semibold">Performance</span>
			</div>
			<h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Service Providers Performance</h2>

			{/* Filters */}
			<div className="flex flex-wrap gap-2 mb-4 justify-end">
				<select className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">
					<option>Provider</option>
				</select>
				<select className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">
					<option>Last 30 days</option>
				</select>
				<button className="bg-gray-100 px-2 sm:px-3 py-2 rounded text-xs">Export</button>
			</div>

			{/* Stats */}
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
				<div className="bg-white rounded-xl p-4 flex flex-col items-start min-w-[150px]">
					<span className="text-xs text-gray-500 mb-1">Avg Rating</span>
					<span className="text-3xl font-bold">4.8</span>
				</div>
				<div className="bg-white rounded-xl p-4 flex flex-col items-start min-w-[150px]">
					<span className="text-xs text-gray-500 mb-1">Response Rate</span>
					<span className="text-3xl font-bold">95%</span>
				</div>
				<div className="bg-white rounded-xl p-4 flex flex-col items-start min-w-[150px]">
					<span className="text-xs text-gray-500 mb-1">Appointments Delivered</span>
					<span className="text-3xl font-bold">1250</span>
				</div>
			</div>

			{/* Appointments Trend */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
				{/* Appointments Over Time */}
				<div className="bg-white rounded-xl p-4 flex flex-col min-h-[300px] h-[300px] md:h-[350px]">
					<div className="font-semibold mb-2">Appointments Over Time</div>
					<div className="text-2xl font-bold">1,250</div>
					<div className="text-xs text-gray-400 mb-2">Last 30 Days <span className="text-green-600 font-semibold">▲ 20%</span></div>
					<div className="flex-1 flex items-center justify-center">
						{/* Chart Placeholder */}
						<div className="w-full h-32 sm:h-40 md:h-48 bg-purple-50 rounded-lg flex items-center justify-center text-purple-200 text-lg font-bold">Chart</div>
					</div>
				</div>
				{/* Rating Distribution */}
				<div className="bg-white rounded-xl p-4 flex flex-col min-h-[300px] h-[300px] md:h-[350px]">
					<div className="font-semibold mb-2">Rating Distribution</div>
					<div className="text-2xl font-bold">4.8</div>
					<div className="text-xs text-gray-400 mb-2">Last 30 Days <span className="text-red-600 font-semibold">▼ 20%</span></div>
					<div className="flex-1 flex items-center justify-center">
						{/* Chart Placeholder */}
						<div className="w-full h-32 sm:h-40 md:h-48 bg-purple-50 rounded-lg flex items-center justify-center text-purple-200 text-lg font-bold">Chart</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Performance;
