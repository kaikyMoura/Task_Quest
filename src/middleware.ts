import { NextRequest, NextResponse } from "next/server";

export default function middleware(request: NextRequest) {
    const token = request.cookies.get('Token')

    if (token && request.nextUrl.pathname === '/login') {
        return NextResponse.redirect(new URL('/home', request.url))
    }

    if (!token && request.nextUrl.pathname.startsWith('/home')) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    return NextResponse.next()
}