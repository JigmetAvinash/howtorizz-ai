import axios from "axios";

async function getBase64FromUrl(url) {
  const response = await axios.get(url, { responseType: "arraybuffer" });
  const buffer = Buffer.from(response.data, "binary").toString("base64");
  return buffer;
}

const doOCR = async (MainImgURLfromCloudinary) => {
  try {
    const response = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: "K86422202988957", // Public free-tier key
        base64image: `data:image/jpeg;base64,${await getBase64FromUrl("https://res.cloudinary.com/dkcqhzrpa/image/upload/v1736870854/on0u0nzztmojlfqao3c7.jpg")}`,
        isOverlayRequired: false,
        language: "eng",
      }),
    });

    const data = await response.json();
    if (data.ParsedResults?.[0]?.ParsedText) {
      return data.ParsedResults[0].ParsedText;
    } else {
      throw new Error("No text detected");
    }
  } catch (error) {
    console.error("OCR.Space Error:", error.message);
    throw error;
  }
};

export default doOCR;


