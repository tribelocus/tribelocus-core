// check: version 1
export async function GET(request) {
  return new Response(JSON.stringify({
    MANUS_API_KEY: process.env.MANUS_API_KEY || 'not set'
  }), {
    headers: { 'Content-Type': 'application/json' }
  });
}
