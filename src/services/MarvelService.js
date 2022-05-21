class MarvelService {
  _apiBase = 'https://gateway.marvel.com:443/v1/public/';
  _apiKey = 'apikey=c0a1c183b3dfe1f6c3c9f8d9ce055acc';
  getResurce = async url => {
    let res = await fetch(url);

    if (!res.ok) {
      throw new Error(`Could not fench ${url}, status: ${res.status}`);
    }
    return await res.json();
  };
  getAllCharacters = () => {
    return this.getResurce(
      `${this._apiBase}characters?limit=9&offset=210&${this._apiKey}`
    );
  };

  getAllCharacter = id => {
    return this.getResurce(`${this._apiBase}characters/${id}?${this._apiKey}`);
  };
}

export default MarvelService;
