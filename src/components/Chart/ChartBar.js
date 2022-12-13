import './css/ChartBar.css'

const ChartBar = (props) => {
    let barFillHeight = "0%"
    if (props.max > 0) {
        barFillHeight = Math.round((props.value/props.maxValue)*100 + "%")
    }
    return (
        <div className='chart-bar'>
            <div className='chart-bar-inner'>
                <div className='chart-bar-fill'>
                </div>
            </div>
            <div className='chart-bar-label'>
                {props.label}
            </div>
        </div>
    )
}

export default ChartBar