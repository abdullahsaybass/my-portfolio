import React from 'react'
import theme_pattern from '../../assets/theme_pattern.svg'
import './Work.css'
import workData from '../../assets/mywork_data'
import arrowIcon from '../../assets/arrow_icon.svg'

const Work = () => {
  return (
    <div className='work'>
        <div className="work-title">
            <h1>My Latest Work</h1>
            <img src={theme_pattern} alt="theme-pattern-image"/>
        </div>
        <div className="work-container">
            <div className="work-data">
                {workData.map((work,index) =>{
                    return(
                    <img key = {index}src = {work.w_img} alt = "work-image" />
                )})}
            </div>
        </div>
        <div className="showmore">
            <p>Show More</p>
            <img src={arrowIcon} alt="arrow-icon" />
        </div>
    </div>
  )
}

export default Work