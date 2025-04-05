export default function handler(req, res) {
  res.status(200).json({
    MANUS_API_KEY: process.env.MANUS_API_KEY || 'not set'
  });
}
