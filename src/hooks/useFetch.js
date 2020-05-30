import useSWR from 'swr';
import fetcher from '../api/fetcher';


export default function useFetch (key_options, ...args) {
    // This block enables a way to accept options if required
    let key, options;
    if (typeof key_options !== 'string') {
        [key, ...args] = args;
        options = key_options;
    } else key = key_options;

    return useSWR(
        args.some(a => !a) ? null : [key, ...args], // For condicional fetching
        fetcher,
        options
    );
}