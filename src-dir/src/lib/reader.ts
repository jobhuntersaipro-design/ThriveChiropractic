import { createReader } from '@keystatic/core/reader'
import { createGitHubReader } from '@keystatic/core/reader/github'
import keystaticConfig from '../../keystatic.config'

const isProd = process.env.NODE_ENV === 'production'

export const reader = isProd
  ? createGitHubReader(keystaticConfig, {
      repo: 'jobhuntersaipro-design/ThriveChiropractic',
      pathPrefix: 'src-dir',
    })
  : createReader(process.cwd(), keystaticConfig)
