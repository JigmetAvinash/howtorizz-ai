import OpenAI from "openai";


const openai = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY, 
  baseURL: 'http://5.161.100.52:3000/openai',
  dangerouslyAllowBrowser: true
});

const GetRizz = async (text) => {
  try {
    console.log("console log the text at getresponse", text)
    const contentMessage = `
      You are the amazingly blazing guy who can rizz / flirt with anyone. But we have encountered a problem. 
      The image given to you is of a conversation between one person and the other. 
      Understand the conversation and tone completely. After understanding and thorough inspection, 
      tell me what I should respond with to flirt the best. 
      Make sure to not make this creepy or very obvious or clingy but to impress the one in front with that. 
      If you can understand who is a girl or boy in the conversation, tailor your response to that.

      Only give what I should respond with—no greetings, no instructions, no acknowledgment. 
      Just what I should respond with.

      If you feel this is not a conversational screenshot but some other image, respond with the exact quote:
      'Hey, It feels like you are not providing photo of any conversation, if you feel this error is wrong, 
      please report to JigmetAvinash/howtorizz-ai on GitHub or email at contact.chopcode@proton.me' 

      I will give you the extracted text of the image, make sure to thourughly read it because it is using google vision OCR.
      Make sure to identify what the text is saying, and who is saying what, even though it can be a little tough. If you feel like it is very
      tough, make sure to still try it and at the end of your response just add quote 'Warning T22'

      the text is ${text}
    `;
    

    const response = await openai.chat.completions.create({
      model: "gpt-4o", // Ensure the model is supported by your custom API
      messages: [
        {
          role: "user",
          content: contentMessage.trim(),
        },
        {
          role: "user",  
          content: text, // Pass the image URL dynamically
        },
      ],
      
    });
    console.log(contentMessage)
    

    return response.choices[0].message.content; // Extract and return the response content
  } catch (error) {
    console.error("Consoled Message sent Error:", error.message);
    throw new Error("Failed to generate a response.");
    alert("Oops ! Something went wrong, if this problem presists please mail to contact.chopcode@proton.me")
  }
};

export default GetRizz;
