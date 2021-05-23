import config from '../config/index';

export default function getUrlWithParamsConfig(endnameConfig: string) {
  const url = {
    ...config.client.server,
    ...config.client.endpoint[endnameConfig].uri,
  };

  return url;
}
