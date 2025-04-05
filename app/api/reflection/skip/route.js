export async function POST() {
  console.log("[SKIP] User opted out of reflection.");
  return new Response(null, { status: 204 });
}
