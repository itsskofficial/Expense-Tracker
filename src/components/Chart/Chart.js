import './ChartBar'
import './css/Chart.css'

const Chart = (props) => {
    <div className="chart">
        {props.dataPoints.map(d)}
    </div>
}

export default Chart