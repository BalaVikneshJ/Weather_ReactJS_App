import { Accordion,
     AccordionItem, 
     AccordionItemButton, 
     AccordionItemHeading, 
     AccordionItemPanel } from 'react-accessible-accordion'
import './forcast.css'
const Forecast = ({data})=>{

    const Week_days = ['Monday','Tuesday','Wednesday','Thurday','Friday','Saturday','Sunday']

    
    const dateInWeek = new Date().getDate()
    const forecastDays=Week_days.slice(dateInWeek,Week_days.length).concat(Week_days.slice(0,dateInWeek));
    
    return (
        <div>
    <label className='title'>daily</label>
    <Accordion allowZeroExpanded>
        {data.list.splice(0,7).map((item,index)=>(
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className='daily-item'>
                            <img src={`icons/${item.weather[0].icon}.png`} alt='weather' className='icon-small'/>
                            <label className='day'>{forecastDays[index]}</label>
                            <label className='description'>{item.weather[0].description}</label>
                            <label className='min-max'>{Math.round(item.main.temp_min)}°C / {" "}{Math.round(item.main.temp_max)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className='daily-details-grid'>
                        <div className='daily-details-grid-item'>
                            <label>Pressure</label>
                            <label>{item.main.pressure} hPa</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Humidity</label>
                            <label>{item.main.humidity} %</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Clouds</label>
                            <label>{item.clouds.all} %</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Wind Speed :</label>
                            <label>{item.wind.speed} m/s</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Sea level :</label>
                            <label>{item.main.sea_level} m</label>
                        </div>
                        <div className='daily-details-grid-item'>
                            <label>Feels Like :</label>
                            <label>{Math.round(item.main.feels_like)} °C </label>
                        </div>
                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    </div>
    )
} 
export default Forecast
