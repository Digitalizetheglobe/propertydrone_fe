// Proxy route for /api/youtube-videos
export async function GET(req) {
  try {
    const res = await fetch('https://api.propertydronerealty.com/youtube-videos');
    if (!res.ok) {
      return new Response(JSON.stringify({ error: 'Failed to fetch from external API' }), { status: res.status });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: 'Proxy error', details: error.message }), { status: 500 });
  }
} 