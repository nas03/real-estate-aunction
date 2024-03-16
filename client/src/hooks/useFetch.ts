import { useEffect, useState } from 'react';
import { AxiosRequestConfig } from 'axios';
import axios from 'axios';
const useFetch = (
	url: string,
	options?: AxiosRequestConfig<any> | undefined
) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState<any>(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		(async () => {
			try {
				setLoading(true);
				const response = await axios.get(url, options);
				setData(response.data);
			} catch (error) {
				setError(error);
			} finally {
				setLoading(false);
			}
		})();
	}, [url, options]);
	return { data, error, loading };
};
