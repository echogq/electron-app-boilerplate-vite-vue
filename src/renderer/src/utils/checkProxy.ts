export function checkSystemProxy(): { httpProxy?: string; httpsProxy?: string } {
  const proxySettings = {
    httpProxy: process.env.HTTP_PROXY || process.env.http_proxy,
    httpsProxy: process.env.HTTPS_PROXY || process.env.https_proxy
  }

  console.log('Current proxy settings:', proxySettings)
  console.log('Operating System:', process.platform)

  return proxySettings
}
