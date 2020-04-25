import api from '.';

function fetcher (key, ...args) {
    return new Promise ((resolve, reject) => {
        const f = key.split('.').reduce((p, c) => (p && p[c]) || null, api);

        if (typeof f === 'function') resolve(f(...args));
        else reject('Key not valid');
    })
}

export default fetcher;