import "@/app/globals.css";
import { useState } from "react";
import GetRizz from "@/api/getresponse";

export default function MainRizzApp() {
	const [Image, setImage] = useState<File | null>(null);
	const [Preview, setPreview] = useState<string | null>(null);
	const [RizzResponse, setRizzResponse] = useState<string | null>(null);
	const [Loading, setLoading] = useState(false);

	const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
		if (file) {
			setImage(file);
			setPreview(URL.createObjectURL(file));
		}
	};

	const handleRizz = async () => {
		if (!Preview) {
			alert("Please upload an image first!");
			return;
		}
		setLoading(true);
		setRizzResponse(null);
		try {
			const response = await GetRizz(Preview); // Call GetRizz with the image preview URL
			setRizzResponse(response); // Save the response to display
		} catch (error) {
			console.error("Error getting Rizz response:", error.message);
			alert("Failed to generate a response. Please try again later.");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="bg-black grid grid-rows-[0px_2fr_5px] items-center justify-center h-screen w-screen p-4 pb-2 gap-6 sm:p-20">
			<h1 className="text-8xl">Rizz App</h1>
			<div className="flex items-center justify-center h-auto">
				<div className="border border-gray-300 bg-white p-4 rounded-lg shadow-md font-serif">
					<h1 className="text-lg font-bold mb-4 text-center text-black">
						Upload Screenshot of your chat with them!
					</h1>
					<input
						type="file"
						accept="image/*"
						onChange={handleImageChange}
						className="block w-full text-sm text-gray-500 
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100"
					/>
					{Preview && (
						<div className="mt-4">
							<p className="text-sm text-gray-600 mb-2">Image Preview:</p>
							<img
								src={Preview}
								alt="Selected"
								className="w-32 h-32 object-cover rounded-md border border-gray-300"
							/>
						</div>
					)}
					<button
						className="pt-1 pb-1 rounded-sm bg-gray-700 pl-2 pr-2 mt-2 text-white hover:bg-gray-800"
						onClick={handleRizz}
						disabled={Loading}
					>
						{Loading ? "Loading..." : "HelpMeRizz"}
					</button>
					{RizzResponse && (
						<div className="mt-4 bg-gray-100 p-4 rounded-md text-black">
							<p className="font-bold">Your Rizz Response:</p>
							<p>{RizzResponse}</p>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
