import type { APIRoute } from "astro";
export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.json();
    const { name, email, subject, message } = data;

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Falten camps obligatoris" }),
        { status: 400 },
      );
    }

    const res = await fetch(
      "https://hook.eu1.make.com/kcnbvvip1aj7lygwrvi558y7i2aqyk23",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, subject, message }),
      },
    );

    if (!res.ok) throw new Error("Error al webhook");

    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Error enviant el correu" }), {
      status: 500,
    });
  }
};
