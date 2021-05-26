import { useEffect, useState } from 'react';

import req from '../utils/request';

const useData = <T>(endpoint: string, query: object, deps: any[] = []) => {
    const [data, setData] = useState<T | null>(null);
    const [isLoading, setLoading] = useState<boolean>(true);
    const [isError, setError] = useState<boolean>(false);
  
    useEffect(() => {
      const getData = async (): Promise<void> => {
        try {
          const res = await req<T>(endpoint, query);
          setData(res);
        } catch (e) {
          setError(true);
        } finally {
          setLoading(false);
        }
      };
      getData();
    }, deps);
  
    return {
      data,
      isLoading,
      isError,
    };
  };

  export default useData;