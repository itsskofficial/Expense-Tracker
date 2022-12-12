import './ChartBar'
import './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} max={}></ChartBar>)}
    </div>
}

export default Chart