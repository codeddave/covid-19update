import React, { Component } from "react";
import { Cards, CountryPicker, Chart, Video } from "./components";
import styles from "./App.module.css";
import { fetchData } from "./api";
import Logo from "./image/covid198.png";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const fetchedData = await fetchData();

    this.setState({
      data: fetchedData,
    });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({
      data: fetchedData,
      country: country,
    });
  };
  render() {
    const { data, country } = this.state;

    return (
      <div className={styles.App}>
        <img src={Logo} className={styles.image} alt="covid19" />
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange} />
        <Chart data={data} country={country} />
        <Video />
      </div>
    );
  }
}

export default App;
