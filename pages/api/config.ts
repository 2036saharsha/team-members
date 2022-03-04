type OAuthConifg = {
  clientId: string;
  clientSecret: string;
  redirectUrl: string;
};

type Config = {
  oauth: OAuthConifg;
  port: number;
  baseUrl: string;
  secret: string;
};

let config: Config | null = null;

/**
 * This will resolve the config.yml
 * @returns {Config}
 */
export function getConfig(): Config {
  if (config !== null) return config;
  const { env } = process;
  config = {
    baseUrl: env['BASE_URL'],
    port: Number(env['PORT'] || 3001),
    secret: env['SVR_SECRET'],
    oauth: {
      clientId: env['OAUTH_CLIENT_ID'],
      clientSecret: env['OAUTH_CLIENT_SECRET'],
      redirectUrl: env['OAUTH_REDIRECT'],
    },
  }

  return config;
}
