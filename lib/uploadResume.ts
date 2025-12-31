import { createBrowserSupabase } from "@/lib/supabaseClient";
const supabase = createBrowserSupabase();
export async function uploadResume(file: File) {
  const ext = file.name.split(".").pop();
  const fileName = `${crypto.randomUUID()}.${ext}`;

  const { error } = await supabase.storage
    .from("resumes")
    .upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    });

  if (error) throw error;

  const { data } = supabase.storage
    .from("resumes")
    .getPublicUrl(fileName);

  return data.publicUrl;
}
