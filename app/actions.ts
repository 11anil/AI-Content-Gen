"use server";

import { db } from "@/utils/db";
import { AIOutput } from "@/utils/schema";
import { chatSession } from "@/utils/AiModal";
import moment from "moment";

/**
 * Server Action to securely generate content from Gemini on the server.
 * @param prompt The complete user and template prompt.
 */
export async function generateAIContentAction(prompt: string) {
  try {
    const result = await chatSession.sendMessage(prompt);
    const textOutput = result?.response?.text ? result.response.text() : String(result?.text || "");
    return { success: true, text: textOutput };
  } catch (error: any) {
    console.error("AI Generation Server Action Error:", error);
    throw new Error(error?.message || "AI Generation failed");
  }
}

/**
 * Server Action to securely save generated content in the database on the server.
 */
export async function saveInDbAction({
  formData,
  slug,
  aiResp,
  email,
}: {
  formData: string;
  slug: string;
  aiResp: string;
  email: string;
}) {
  try {
    await db.insert(AIOutput).values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiResp,
      createdBy: email,
      createdAt: moment().format("DD/MM/yyyy"),
    });
    return { success: true };
  } catch (dbError: any) {
    console.error("Database Save Server Action Error:", dbError);
    throw new Error(dbError?.message || "Failed to save to database");
  }
}
