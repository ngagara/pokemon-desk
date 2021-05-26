import Url from 'url';
import getUrlWithParamsConfig from './getUrlWithParamsConfig';

export default function req(endpoint: string) {
  const uri = Url.format(getUrlWithParamsConfig(endpoint));

  return fetch(uri).then((res) => res.json());
}
