import ChartBar from './ChartBar'
import './css/Chart.css'

const Chart = (props) => {
    dataPointValues = props.dataPoints.map(dataPoint=>)
    <div className="chart">
        {props.dataPoints.map((dataPoint) => <ChartBar key={dataPoint.value} value={dataPoint.value} maxValue={null} label={dataPoint.label}></ChartBar>)}
    </div>
}

export default Chart