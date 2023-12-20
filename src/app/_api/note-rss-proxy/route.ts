import axios from 'axios'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const url = String(searchParams.get('url'));
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';

  try {
    const response = await axios.get(proxyUrl + url, { responseType: 'text' })

    return new Response(response.data, {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
      },
    })
  } catch (error) {
    console.error(error)
    return new Response('Error', { status: 500 })
  }
}