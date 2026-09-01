import { NextResponse, type NextRequest } from "next/server";

const REALM = 'Basic realm="Smile Dentist", charset="UTF-8"';

// Length-independent comparison so a wrong guess cannot be timed.
function safeEqual(a: string, b: string) {
  const encoder = new TextEncoder();
  const aBytes = encoder.encode(a);
  const bBytes = encoder.encode(b);
  let diff = aBytes.length ^ bBytes.length;
  for (let i = 0; i < Math.max(aBytes.length, bBytes.length); i++) {
    diff |= (aBytes[i] ?? 0) ^ (bBytes[i] ?? 0);
  }
  return diff === 0;
}

export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV !== "production") return NextResponse.next();

  const user = process.env.UNAME;
  const password = process.env.PASSWORD;
  if (!user || !password) return NextResponse.next();

  const header = request.headers.get("authorization");
  if (header?.startsWith("Basic ")) {
    try {
      const decoded = atob(header.slice(6));
      const separator = decoded.indexOf(":");
      if (
        separator !== -1 &&
        safeEqual(decoded.slice(0, separator), user) &&
        safeEqual(decoded.slice(separator + 1), password)
      ) {
        return NextResponse.next();
      }
    } catch {
      // Malformed credentials fall through to the challenge below.
    }
  }

  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": REALM,
      "Cache-Control": "no-store",
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
