export async function POST(request) {
  const body = await request.json();

  if (!body.consented) {
    return new Response("Consent required", { status: 400 });
  }

  // Example: extract felt/why and simulate saving
  const { felt, why } = body;

  console.log("[SAVE]", { felt, why });

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
}
