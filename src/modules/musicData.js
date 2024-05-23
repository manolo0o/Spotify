const url = 'https://spotify23.p.rapidapi.com/search/?type=multi&offset=0&limit=10&numberOfTopResults=5';
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ea0daa55bamsh2ab0e032ca45e94p166e2djsne7c218f3850e',
            'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
        }
    };
let result
try {
    const response = await fetch(url, options);
    result = await response.json()
} catch (error) {
    console.error(error);
}

export const sortSongsForPopularity = () => {
    const data = result
    const sortedSongs = data.tracks
    sortedSongs.sort((a, b) => b.popularity - a.popularity)
    return sortedSongs
}
