import config from '../config/index';

export default function getUrlWithParamsConfig(endnameConfig: string, query: object) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endnameConfig].uri,
    query: {
      ...query
    }
  };

  return url;
}
