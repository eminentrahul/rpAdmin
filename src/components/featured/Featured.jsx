import "./featured.scss"
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownward from '@mui/icons-material/ArrowDownward';


const Featured = () => {

  const percentage = 66

  return (
    <div className="featured">
      <div className="top">
        <h1 className="title">Total Revenue</h1>
        <MoreVertIcon fontSize="small"/>
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={7}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amount">$356.00</p>
        <p className="desc">Previous transactions processing. Last payment may not be included.</p>
        <div className="summary">
          <div className="item">
            <div className="itemTitle">Target</div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small"/>
              <div className="resultAmount">$378.4k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Week</div>
            <div className="itemResult negative">
              <ArrowDownward fontSize="small"/>
              <div className="resultAmount">$47.2k</div>
            </div>
          </div>
          <div className="item">
            <div className="itemTitle">Last Month</div>
            <div className="itemResult positive">
              <ArrowUpwardIcon fontSize="small"/>
              <div className="resultAmount">$548.6k</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Featured