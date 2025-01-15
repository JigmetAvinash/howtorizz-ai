import "@/app/globals.css";
import { useState } from "react";
import GetRizz from "@/api/getresponse";

import doOCR from "@/api/gettext";

export default function MainRizzApp() {
	
	
	const [RizzResponse, setRizzResponse] = useState<string | null>(null);
	const [Loading, setLoading] = useState(false);
   
    
			



	

	const handleRizz = async () => {
		if (Loading == true) {
			alert("Please upload an image first!");
			return;
		}
		setLoading(true);
		setRizzResponse(null);
		try {
            setLoading(true);
            
            const text = await doOCR(); 
            
            console.log("Text extraction at final parsing to GetRizz is ", text)
			const response = await GetRizz(text); // Call GetRizz with the image preview URL
			setRizzResponse(response); // Save the response to display
		} catch{
			console.error("Error getting Rizz response:");
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
