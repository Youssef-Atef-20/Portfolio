export default async function middleware(request) {
  const accept = request.headers.get('accept') || '';
  if (accept.includes('text/markdown')) {
    const url = new URL(request.url);
    if (url.pathname === '/' || url.pathname === '/index.html' || url.pathname === '') {
      return fetch(new URL('/api/index', request.url));
    }
  }
}

export const config = {
  matcher: ['/', '/index.html'],
};

