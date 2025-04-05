const responses = [
  "Sometimes we breathe before we understand.",
  "You don’t have to name the feeling. Just feel it.",
  "There is value in not knowing yet."
];

export async function GET() {
  const random = responses[Math.floor(Math.random() * responses.length)];
  return new Response(JSON.stringify({ line: random }), {
    headers: { "Content-Type": "application/json" },
  });
}
