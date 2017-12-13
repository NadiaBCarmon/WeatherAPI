import axios from 'axios';



const dailyWeather = "http://api.openweathermap.org/data/2.5/weather?q="
	const tail = "&APPID=8bb2ea08f4403f80ff2bb9456cd2329d"

const fiveDayWeather = "http://api.openweathermap.org/data/2.5/forecast?q="
const fiveDayTail = "&cnt=5"

let WeatherFetcher = {
	fetchDailyWeather: function(city) {
		let url = dailyWeather + city + tail;
		return axios.get(url);
	},

	fetchFiveDayWeather: function(city) {
		let url = fiveDayWeather + city + tail + fiveDayTail;
		return axios.get(url);
	}
}

export default WeatherFetcher;