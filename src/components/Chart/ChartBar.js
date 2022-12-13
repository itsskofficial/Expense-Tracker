import './css/ChartBar.css'

const ChartBar = (props) => {
    let barF
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