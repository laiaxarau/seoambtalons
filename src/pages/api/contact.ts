import type { APIRoute } from "astro";
import { Resend } from "resend";
import { siteConfig } from "src/config/site";

const resend = new Resend(import.meta.env.RESEND_API_KEY);
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();

    const { name, email, subject, message } = data;

    // Validació bàsica
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Falten camps obligatoris" }),
        { status: 400 },
      );
    }

    console.log("RESEND_API_KEY:", import.meta.env.RESEND_API_KEY);

    await resend.emails.send({
      from: "Contacte Web <onboarding@resend.dev>", // després pots posar el teu domini
      to: [siteConfig.author.email], // on vols rebre els correus
      subject: subject || "Nou missatge de contacte",
      //   reply_to: siteConfig.author.email, // perquè puguis respondre directament al remitent
      html: `
        <h2>Nou missatge de contacte</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Missatge:</strong></p>
        <p>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error enviant el correu" }), {
      status: 500,
    });
  }
};
