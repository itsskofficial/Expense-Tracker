import './ChartBar'
import './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map(dataPoint= <ChartBar></Chart>)}
    </div>
}

export default Chart