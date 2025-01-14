import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, 
  baseURL: "https://xggsokc0oko08csowos0wowo.a.selfhosted.hackclub.com",
  dangerouslyAllowBrowser: true
});

const GetRizz = async (imageURL) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini", // Ensure the model is supported by your custom API
      messages: [
        {
          role: "user",
          content: "You are the amazingly blazing guy who can rizz / flirt with anyone. But we have encountered a problem, The image given to you is of a conversation between one person and the other. Understand the conversation and tone completely. After understanding and thorough inspection, Tell what I should respond with to flirt the best. Make sure to not make this creepy or very obvious or clingy but to impress the one in front with that. If you can understand who is a girl or boy in the conversation and tailor your response to that. Only give what I should respond with, no greetings, no instructions, no acknowledgment. Just what I should respond with. And if you feel this is not a conversational screenshot but some other image, respond with exact quote 'Hey, It feels like you are not providing photo of any conversation, if you feel this error is wrong, please report to JigmetAvinash/howtorizz-ai on github or email at contact.chopcode@proton.me'",
        },
        {
          type: "image_url",
          image_url: imageURL, // Pass the image URL dynamically
        },
      ],
    });

    return response.choices[0].message.content; // Extract and return the response content
  } catch (error) {
    console.error("Consoled Message sent Error:", error.message);
    throw new Error("Failed to generate a response.");
    alert("Oops ! Something went wrong, if this problem presists please mail to contact.chopcode@proton.me")
  }
};

export default GetRizz;
