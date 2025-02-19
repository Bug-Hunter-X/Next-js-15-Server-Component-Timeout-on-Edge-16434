# Next.js 15 Server Component Timeout on Edge

This repository demonstrates a subtle bug in Next.js 15 related to server component timeouts at the edge.  When a server component performs a lengthy operation, exceeding the edge's response time limit, a blank page may appear instead of a proper error. This is different from typical client-side or server-side errors.  The solution involves implementing mechanisms to handle potential timeouts gracefully, potentially using retries or fallbacks.

## Bug

The `serverComponentBug.js` file contains a server component that simulates a lengthy operation. This operation will sometimes time out on the edge, resulting in the display of an empty page in the browser.