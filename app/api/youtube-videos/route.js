// Proxy route for /api/youtube-videos
export async function GET(req) {
  try {
    const res = await fetch('http://api.propertydronerealty.com/youtube-videos');
    if (!res.ok) {
      // Log the error status and text for debugging
      const errorText = await res.text();
      console.error('External API error:', res.status, errorText);
      return new Response(JSON.stringify({ error: 'Failed to fetch from external API', details: errorText }), { status: res.status });
    }
    const data = await res.json();
    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    // Log the error for debugging
    console.error('Proxy error:', error);
    return new Response(JSON.stringify({ error: 'Proxy error', details: error.message }), { status: 500 });
  }
} 