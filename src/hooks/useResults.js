import { useEffect, useState } from 'react';
import yelp from '../api/yelp';

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('')

    const searchApi = async (searchTerm) => {
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: searchTerm,
                    location: '470 76th St, Brooklyn, NY 11209'
                }
            });
            setResults(response.data.businesses);
        } catch(err) {
            setErrorMessage('Something went wrong');
            console.log(err);
        }
    };

    useEffect(() => {
        searchApi('pasta');
    }, []);

    return [searchApi, results, errorMessage];
};