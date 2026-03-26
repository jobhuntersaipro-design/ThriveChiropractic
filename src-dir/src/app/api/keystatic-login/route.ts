import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  const { username, password } = await request.json()

  // KEYSTATIC_USERS format: "user1:pass1,user2:pass2"
  const usersEnv = process.env.KEYSTATIC_USERS || ''
  const users = usersEnv.split(',').map((entry) => {
    const [u, p] = entry.split(':')
    return { username: u?.trim(), password: p?.trim() }
  })

  const match = users.find(
    (u) => u.username === username && u.password === password
  )

  if (match) {
    const response = NextResponse.json({ success: true })
    response.cookies.set('keystatic_access', 'authorized', {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      path: '/',
      maxAge: 60 * 60 * 24 * 7, // 7 days
    })
    return response
  }

  return NextResponse.json(
    { success: false, error: 'Invalid credentials' },
    { status: 401 }
  )
}
