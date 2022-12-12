import './ChartBar'
import './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map(dataPoint => <ChartBar dataPoint.value></ChartBar>)}
    </div>
}

export default Chart