// /pages/api/reflection/save.js
export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();
  // ... [code omitted for brevity]
}
