import "@/app/globals.css";
import { useState } from "react";
import GetRizz from "@/api/getresponse";
import axios from "axios";
import doOCR from "@/api/gettext";

export default function MainRizzApp() {
	const [Image, setImage] = useState<File | null>(null);
	const [Preview, setPreview] = useState<string | null>(null);
	const [RizzResponse, setRizzResponse] = useState<string | null>(null);
	const [Loading, setLoading] = useState(false);
    const [ImgUploaded, setImgUploaded] = useState(false)
    const [MainImgURLfromCloudinary, setMainImgURLfromCloudinary] =
			useState<string>("");



	const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
		const file = e.target.files?.[0];
        const formData = new FormData();
		if (file) {
			setImage(file);
			setPreview(URL.createObjectURL(file));
            try {
                formData.append("file", file);
                formData.append("upload_preset", "first-preset");
                const response = await axios.post(
									"https://api.cloudinary.com/v1_1/dkcqhzrpa/image/upload",
									formData
								);
                 const imageUrl = response.data.secure_url; // URL of the uploaded image
                 console.log(imageUrl)
                 setMainImgURLfromCloudinary(imageUrl);           
                return imageUrl;
            }catch (error){
                console.error(error)
            }
		}
	};

	const handleRizz = async () => {
		if (Loading == true) {
			alert("Please upload an image first!");
			return;
		}
		setLoading(true);
		setRizzResponse(null);
		try {
            setLoading(true);
            console.log("Image URL Check just before parsing", MainImgURLfromCloudinary)
            const text = await doOCR(MainImgURLfromCloudinary); 
            console.log("Log 2 Imp", MainImgURLfromCloudinary);
            console.log("Text extraction at final parsing to GetRizz is ", text)
			const response = await GetRizz(text); // Call GetRizz with the image preview URL
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
