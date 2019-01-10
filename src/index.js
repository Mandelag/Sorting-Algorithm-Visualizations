import {BarChart, Bar} from 'recharts'
import Button from '@material-ui/core/Button';
import {randomize, selectionSort, bubbleSort, mergeSort} from './sorting.js'
import './index.css'

const React = require('react')
const ReactDOM = require('react-dom')

class Chart extends React.Component{
    render(){
        return(
            <BarChart width={1000} height={500} data={this.props.data}>
                <Bar dataKey="value" fill="#62DAFB" />
            </BarChart>
        )
    }
}

class App extends React.Component{
    constructor(props){
        super(props)
        let arr = new Array(50).fill({value:10})
        this.state = {
            data: arr
        }
    }

    render(){
        return(
            <div>
                <Chart data={this.state.data}/>
                <div className="button-group">
                    <Button 
                        variant="contained" 
                        color="primary" 
                        onClick={() => randomize(this, this.state.data)}>
                        Randomize
                    </Button>
                    <div className="button-row">
                        <Button
                            className="sort-button"
                            variant="contained"
                            color="default"
                            onClick={() => selectionSort(this)}>
                        Selection Sort
                        </Button>
                        <Button
                            className="sort-button"
                            variant="contained"
                            color="default"
                            onClick={() => bubbleSort(this)}
                        >
                        Bubble Sort
                        </Button>
                        <Button
                            className="sort-button"
                            variant="contained"
                            color="default"
                            onClick={() => mergeSort(this)}
                        >
                        Merge Sort
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
)