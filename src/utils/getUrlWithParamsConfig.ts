import config from '../config/index';

export default function getUrlWithParamsConfig(endnameConfig: string, query: any) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endnameConfig].uri,
    query: {}
  }

  const pathname = Object.keys(query).reduce((acc, val) => {

    if (acc.indexOf(`{${val}}`) !== -1) {
      const result = acc.replace(`{${val}}`, query[val])
      delete query[val]
      return result
    }

    return acc

  }, url.pathname)

  url.pathname = pathname
  url.query = {
    ...query,
  }

  return url;
}
