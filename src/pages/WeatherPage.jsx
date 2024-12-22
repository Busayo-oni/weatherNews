import Weather from '../components/weather';
import News from '../components/news';

function WeatherPage() {
  return (
    <div className='flex lg:flex-row flex-col gap-6 '>
      <Weather />
      <News />
    </div>
  );
}

export default WeatherPage;