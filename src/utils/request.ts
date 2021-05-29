import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export default function req<T>(endpoint: string, query: object): Promise<T> {
  const uri = Url.format(getUrlWithParamsConfig(endpoint, query));

  return fetch(uri).then((res) => res.json());
}
