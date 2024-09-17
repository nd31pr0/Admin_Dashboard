import './Report.css'
import { iconsImgs } from '../../utils/images';
import {reportData} from '../../data/data';

function Report() {
  return (
    <div className='grid-one-item grid-common grid-c3'>
        <div className='grid-c-title'>
            <h3 className='grid-c-title-text'>Report</h3>
            <button className='grid-c-title-icon'>
                <img src={iconsImgs.plus}/>
            </button>
        </div>
        <div className='grid-c-content'>
            <div className='grid-chart'>
                <div className='chart-vert-value'>
                    <span>100</span>
                    <span>75</span>
                    <span>50</span>
                    <span>25</span>
                    <span>0</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Report