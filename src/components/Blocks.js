import { Responsive, WidthProvider } from 'react-grid-layout';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import styles from './Blocks.module.css';

const options = {
    title: {
      text: 'My chart'
    },
    series: [{
      data: [1, 2, 3]
    }]
  }

const ResponsiveGridLayout = WidthProvider(Responsive);

const Blocks = () => {
    const layouts = [
        {i: 'a', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: 'b', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: 'c', x: 4, y: 0, w: 1, h: 2}
      ]
    return (
        <div className={styles.blocks}>
            <HighchartsReact 
                highcharts={Highcharts} 
                options={options}
            />
            <ResponsiveGridLayout className="layout" layouts={layouts}
                breakpoints={{lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0}}
                cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
                <div key="1">1</div>
                <div key="2">2</div>
                <div key="3">3</div>
            </ResponsiveGridLayout>
        </div>
    )
}

export default Blocks
