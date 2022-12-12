import './ChartBar'
import ChartBar from './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map((dataPoint) => <ChartBar value={dataPoint.value} maxValue={null}></ChartBar>)}
    </div>
}

export default Chart