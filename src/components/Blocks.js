import { Responsive, WidthProvider } from 'react-grid-layout';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styles from './Blocks.module.css';
import FilterComponent from './FilterComponent'

const ResponsiveGridLayout = WidthProvider( Responsive );

const options1 = {
    title: {
        useHTML: true,
        useJSX: true,
        text: `My chart 1`,
    },
    series: [{
        type:'bar',
        data: [1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7,1,2,3,4,5,6,7]
    }],

  }

const options2 = {
    title: {
        text: 'My chart 2'
    },
    series: [{
        type:'column',
        data: [1,2,3,6,7,6,7,1,2,3,4,5,6,7,6,7,1,1,2,3]
    }]
}

const options3 = {
    title: {
        text: 'My chart 3'
    },
    series: [{
        type:'pie',
        data: [6, 5, 6]
    }]
}

const options4 = {
    title: {
        text: 'My chart 3'
    },
    series: [{
        type:'pie',
        data: [6, 5, 6, 3, 5, 6, 6, 9, 5, 8, 9]
    }]
}

const Blocks = (props) => {
    const layout1 = [
        { i: "1", x: 0, y: 0, w: 8, h: 8 },
        { i: "2", x: 4, y: 0, w: 8, h: 8 },
        { i: "3", x: 0, y: 8, w: 8, h: 8 },
        { i: "4", x: 4, y: 8, w: 8, h: 8 },
        { i: "5", x: 4, y: 8, w: 8, h: 8 },
    ]
    let chart1, chart2, chart3, chart4
 
    return (
        <div className={styles.blocks}>
            <ResponsiveGridLayout 
                className="layout" 
                layouts={layout1}   
                autoSize={true}
                allow-resize={true}
                isDraggable
                isRearrangeable
                isResizable
                onResizeStop={() => { 
                    chart1.reflow()
                    chart2.reflow()
                    chart3.reflow()
                    chart4.reflow()
                }}
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}
            >
                <div 
                    className={styles.container} 
                    key="1"
                    >
                    <HighchartsReact 
                        containerProps = {{ className: styles.chartContainer }}
                        highcharts = { Highcharts } 
                        options = { options1 }
                        callback = { chart =>  {chart1 = chart}}
                    />
                    <FilterComponent />
                </div>
                <div 
                    className={styles.container} 
                    key="2"
                    >   
                    <HighchartsReact 
                        containerProps = {{ className: styles.chartContainer }}
                        highcharts={Highcharts} 
                        options={options2}
                        callback = { chart =>  {chart2 = chart}}
                    />
                    <FilterComponent />
                </div>
                <div
                    className={styles.container} 
                    key="3"
                    >                
                    <HighchartsReact 
                        containerProps = {{ className: styles.chartContainer }}
                        highcharts={Highcharts} 
                        options={options3}
                        callback = { chart =>  {chart3 = chart}}
                    />
                    <FilterComponent />
                </div>
                <div 
                    className={styles.container} 
                    key="4"
                    >                
                    <HighchartsReact 
                        containerProps = {{ className: styles.chartContainer }}
                        highcharts={Highcharts} 
                        options={options4}
                        callback = { chart =>  {chart4 = chart}}
                    />
                    <FilterComponent />
                </div>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Blocks
