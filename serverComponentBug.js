In Next.js 15, a rather uncommon issue can arise when using server components with large datasets or complex computations.  If a server component takes too long to respond, it might trigger a timeout at the edge, which results in a blank page or a generic error message.  This behavior is unexpected, as the error isn't directly related to the code within the server component itself, but rather to the infrastructure limitations of the edge network.  The error is not directly handled by standard Next.js error boundaries.