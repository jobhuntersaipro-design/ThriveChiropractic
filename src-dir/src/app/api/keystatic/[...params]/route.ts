import { makeRouteHandler } from '@keystatic/next/route-handler'
import keystaticConfig from '../../../../../keystatic.config'

const isVercel = !!process.env.VERCEL

export const { POST, GET } = makeRouteHandler({
  config: keystaticConfig,
  ...(isVercel && {
    clientId: process.env.KEYSTATIC_GITHUB_CLIENT_ID,
    clientSecret: process.env.KEYSTATIC_GITHUB_CLIENT_SECRET,
    secret: process.env.KEYSTATIC_SECRET,
  }),
})
