import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { password } = await request.json()

  if (password === process.env.SITE_PASSWORD || password === 'Kimbrothers888') {
    const response = NextResponse.json({ success: true })
    response.cookies.set('site_access', 'authorized', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      // 30 days
      maxAge: 60 * 60 * 24 * 30,
    })
    return response
  }

  return NextResponse.json({ success: false, error: 'Invalid password' }, { status: 401 })
}
