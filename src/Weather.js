import React from "react";
import "./Weather.css";

function Weather() {
  return (
    <div className="Weather container">
      <form>
        <input
          type="search"
          placeholder="Enter a city..."
          className="search-form"
        />
        <input type="submit" value="Search" className="search-btn" />
      </form>
      <h1>New York</h1>
      <ul>
        <li>Thursday 22:00</li>
        <li>Clear</li>
      </ul>
      <div className="row">
        <div className="col col-left">
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACqUlEQVR4Xu2aTVbiQBDHq+Loc+dsXWjwBt5APMHoCYYlzPM9uYF4A3zPpyzxBOIJxBvMEQguZis73zhD2wmgPEzo6u5EO1RnG6pJ/epf1dUfCMwfZO4/eABeAcwJ+BRgLgBfBD8lBcTjSRXG4yqgqIKACoAI05WHkQzJAAT2IQj6uHPZL1qhhQFInBb/ayDEkXRiy9CRESD2ANe6RcHIHcDU8ZZ0/MDQ6Qxx4IME0cobRG4AxJ9mBV6e21LiP3J1fHEwhDtY32zidnuQx//kAkAMG0cy4l0Lqev6EqdGDXeve7qGH3lajiAe620Yw6nlMGbmAVzgTqdpZjyxslKAjHxXRv6nzQdY2yLeSCXUTMcxBuCE8zOvLSAYAfhS2WeF2jAdtAFMC96tqeQKtUM81i2MWgCSqe7v8+9PrPa6vEawsbmvM0XqARjWe4XP87oup/QJuNuJu0/SQwYw6ef/3ZNG/eofBd8OqR0jHcCw0c+9vS0KFOKDrAVVyvAkAKWK/sxrogpoAFxoeCjhnP8NsTegAYjqTw5X/iw0Iww731XclABKKX+NNFADiH61AMZnKpJuvg/OMbyS35/9qAGUqfp/6AnUs4EaQNQYZO/huRn396/CCMPrip0Corpw3c2lDoadpUEmKMADKLUC5OJob9niyCtAld/C1wD2NYD7NOgbIe6tcJl2ghYrOmFPQDkNxmPKmYDvcjgBwH5DpIxpQJB/HFxSCkxVwHdTNAFQJhUQo6+lgIkKGB+MJAC4H41Na0F8G4Tn4eisz2B9PP4GwaXegHgIkrb0J0+DacZONEgWzmvPAqkQOF+SmksHvtfk3iBwvig5nxpsr8ou1ge2l6XTCyXD6/Kq7XZX3lv1Aa44YfMdHoANvVWw9QpYhSja+OAVYENvFWxfAfv7VVChgUTbAAAAAElFTkSuQmCC"
            alt="Clear"
          />
          <p>
            21 <span class="units">°C</span>{" "}
          </p>
        </div>
        <div className="col">
          <ul>
            <li>Precipitation: 2%</li>
            <li>Humidity: 65%</li>
            <li>Wind: 0 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Weather;
