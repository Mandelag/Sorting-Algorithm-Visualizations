import {BarChart, Bar} from 'recharts'
import Button from '@material-ui/core/Button';
import {randomize, selectionSort, bubbleSort, mergeSort} from './sorting.js'
import './index.css'

const React = require('react')
const ReactDOM = require('react-dom')

class Chart extends React.Component{
    render(){
        return(
            <BarChart width={750} height={150} data={this.props.data}>
                <Bar dataKey="value" fill="#62DAFB" />
            </BarChart>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}

        this.randomizeCharts = this.randomizeCharts.bind(this)
    }

    componentDidMount() {
        this.randomizeCharts()
    }

    randomizeCharts() {
        let arr = []
        const random = randomize(50)
        random.map((n) => {
            arr.push({value: n})
        })
        this.setState({
            selectionData: arr,
            insertionData: arr,
            bubbleData: arr,
            mergeData: arr
        })
    }

    sortStep() {

    }

    render(){

        return(
            <div>
                <div className="chart-row">
                    <Chart data={this.state.selectionData}/>
                    <h1>Selection Sort</h1>
                </div>
                <div className="chart-row">
                    <Chart data={this.state.insertionData}/>
                    <h1>Insertion Sort</h1>
                </div>
                <div className="chart-row">
                    <Chart data={this.state.bubbleData}/>
                    <h1>Bubble Sort</h1>
                </div>
                <div className="chart-row">
                    <Chart data={this.state.mergeData}/>
                    <h1>Merge Sort</h1>
                </div>
                <div className="button-row">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={this.randomizeCharts}>
                        Randomize
                    </Button>  
                    <Button 
                        variant="contained" 
                        color="default" 
                        onClick={this.sortStep}>
                        Next step
                    </Button>  
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)