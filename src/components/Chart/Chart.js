import './ChartBar'
import ChartBar from './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map((dataPoint) => <ChartBar key={ } value={dataPoint.value} maxValue={null} label={dataPoint.label}></ChartBar>)}
    </div>
}

export default Chart