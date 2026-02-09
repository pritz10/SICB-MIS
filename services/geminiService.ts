
import { GoogleGenAI } from "@google/genai";

// This is a template for adding AI-powered MIS insights
export const getSkillInsights = async (region: string = "Sikkim") => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Provide a brief analysis of skill development trends in ${region}, India, focusing on DDU-GKY, ITIs, and tourism-related skilling. Mention specific challenges of mountainous terrain and local opportunities.`,
      config: {
        thinkingConfig: { thinkingBudget: 0 }
      }
    });
    return response.text;
  } catch (error) {
    console.error("Error fetching AI insights:", error);
    return "Insights are currently unavailable for the Sikkim region.";
  }
};
