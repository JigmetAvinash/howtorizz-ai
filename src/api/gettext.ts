



const doOCR = async () => {
  try {
    const response = await fetch("https://api.ocr.space/parse/image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        apikey: "K86422202988957", // Public free-tier key
       
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
    console.error("OCR.Space Error:");
    throw error;
  }
};

export default doOCR;


