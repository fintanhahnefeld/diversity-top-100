import React, { useEffect, useState, useRef } from 'react'
import Chart from '../Chart'
import CompanyTable from '../CompanyTable'
import BannerScrolling from '../BannerScrolling'
import './SectionChartTable.css'
import Button from '../Utilities/Button'
import { colors } from '../../services/color'
import arrowRight, {
  ReactComponent as ArrowRight,
} from '../../assets/arrow_right.svg'

export default function SectionChartTable(props) {
  const [seconds, setSeconds] = useState(0)
  const [rotate, setRotate] = useState(false)
  const [triggered, setTriggered] = useState(false)

  const scrollTrigerElement = useRef()

  useEffect(() => {
    if (scrollTrigerElement) {
      const { offsetTop } = scrollTrigerElement.current
      if (window.scrollY > offsetTop && !triggered) {
        setRotate(true)
        setTimeout(() => {
          setRotate(false)
          setTriggered(true)
        }, 1000)
      }
    }
  })

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1)
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const currentColors = colors[seconds % 4]

  return (
    <section
      id='chart-table'
      style={{
        color: currentColors.color,
        backgroundColor: currentColors.backgroundColor,
      }}
    >
      {/* <div className='border' style={{ backgroundColor: '#3C7695' }}> */}
      <div className='border' style={{ backgroundColor: colors[4].color }}>
        <svg
          id='shred'
          fill={currentColors.backgroundColor}
          viewBox='0 0 1920 187.1'
        >
          <path d='M1920,65.1c0,40.7,0,81.3,0,122c-640,0-1280,0-1920,0c0-37.3,0-74.7,0-112c8-1.8,15.8-1,23.7,0.5c3.7,0.7,7.5,1.1,11.4,0     c4.1-1.2,8.4-1.8,12.6-2.7c1.1-0.2,2.4-0.2,3.3-0.8c5.2-3.5,11.3-3.9,17.1-5c3-0.6,5.8-1.3,8.5-2.6c6.1-3.1,12.5-4.4,19.2-4.6     c3.1-0.1,6.3-0.7,9.1-2c2.6-1.2,5.2-2,8.1-2.3c1.3-0.1,2.7-0.3,3.9-0.7c4.2-1.7,8.7-2,13.2-2.6c3.5-0.5,7-0.9,10.3-1.8     c5.6-1.6,11.1-3.4,16.5-5.4c3.3-1.2,7.4-0.9,9.5-4.6c0.3-0.4,1.2-0.5,1.8-0.7c5.5-1.9,10.9-3.9,16.4-5.7c1.7-0.6,3.6-0.7,5.4-0.8     c4.3-0.1,8.7-0.2,13-0.1c5.5,0.2,10.8,0.4,16.2,2.2c4.1,1.4,8.7,2.1,13.3,0.9c4.5-1.1,9.3,0.2,13.7-1.8c0.3-0.1,0.6,0.1,1,0.1     c5,0.6,9.8-0.3,14.7-1.8c4.3-1.3,8.7-2.1,13.3-0.9c1.4,0.4,3,0.5,4.5,0.4c4.1-0.3,8.2-1,12.4-1.2c6.8-0.3,13.5-1.1,20.1-2.8     c1.4-0.4,3-0.4,4.5-0.1c4.1,0.7,8,0.2,11.8-1c6.4-2,12.9-2.9,19.7-2.4c1.3,0.1,2.8,0.2,3.9-0.3c5.2-2.7,10.8-2.8,16.4-3.6     c3.4-0.5,6.5,0.3,9.8,1c11.4,2.4,22.5,1.8,32.1-5.9c1.2-0.9,2.4-1.8,3.7-2.6c0.7-0.5,1.4-1.1,2.2-1.1c4,0,8-1.1,11.9,0.5     c3,1.3,6.1,1.2,9.3,0.3c1.1-0.3,2.2-0.3,3.3-0.2c6,0.6,12.1,0.6,17.7-1.7c3.5-1.4,6.9-1.9,10.5-2.5c3.9-0.7,8.1-1.5,11.3-3.6     c5.1-3.4,10.5-3.5,16.1-3.3c5.8,0.3,11.6,1,17.4,1c5.3,0,10.6-0.7,15.9-1.1c3.3-0.2,6.6-0.5,10-0.7c7.5-0.4,14.9-0.7,22.4-1     c0.9,0,2.5,0.2,2.7,0.7c1.2,3.1,3.7,2.3,5.9,2.2c2.7-0.1,5.3-0.4,7.9-0.9c7.1-1.4,13.8-0.2,20.5,1.9c2.2,0.7,4.5,1.1,6.8,1.1     c6.7,0,13.3-0.3,20-0.3c4.6,0,9.3,0.4,13.9,0.4c3.8-0.1,7.6-0.8,11.4-0.8c4.9-0.1,9.9-1.6,14.7,0.9c3.5,1.8,7.2,1.8,11.2,0.9     c6.9-1.6,13.8-2.2,20.3,1.5c0.6,0.3,1.3,0.4,1.9,0.5c4.5,0.3,8.9,0.6,13.4,0.9c1,0.1,2.1,0.2,3-0.2c6.7-2.4,12.9-0.7,18.7,2.5     c5,2.8,9.9,2.8,14.7,0.2c3.4-1.9,6.6-1.9,10.1-1c1.9,0.5,3.9,0.8,5.9,1.1c3.5,0.4,6.9,0.8,9.9,3c1.4,1,3,1.2,4.7,0.8     c1.8-0.4,3.8-0.8,5.4-0.3c3.3,1,6.6,1,9.9,0.6c3.5-0.4,6.5,0.5,9.4,2.3c9.7,6.3,20.2,10.8,31.5,13.3c2.3,0.5,4.7,1.1,6.5,2.4     c1.6,1.1,3,1.3,4.6,1.2c7.3-0.1,14.7-0.2,22-0.2c2.5,0,5,0.4,7.4,0.9c9.7,2,19.4,3.1,29.1,0.1c0.8-0.2,1.9-0.6,2.4-0.3     c2,1.5,4.1,0.4,6.1,0.7c4,0.6,7.8,0.3,11.6-1.1c0.7-0.3,1.6,0.2,2.5,0.3c1.8,0.2,3.7,0.2,5.5,0.6c3.1,0.7,6.3,1,9,2.4     c3.7,1.9,7.4,2.6,11.5,2.5c2.6,0,5.3,0.5,7.9,0.8c2.1,0.3,4.2,0.7,6.4,1c2,0.3,3.9,0.7,5.9,0.8c7.7,0.7,15.3,4.9,23.3,1.2     c0.1-0.1,0.3,0,0.5,0c3.1-1.1,6.3,0.1,9.4,0.2c5.2,0.2,10.6-1,15.7,1.3c0.4,0.2,1,0.1,1.4,0.1c4-0.2,8-0.3,11.9-0.6     c4.6-0.4,9.2-0.7,13.1-3.9c1.1-0.9,2.7-1.1,4.2-1.3c3.8-0.6,7.6-1.1,11.4-1.5c2.6-0.3,5.1-0.4,7.8,0.9c2.7,1.3,6,2.2,8.5-1.1     c0.9-1.2,2.2-1.3,3.5-0.2c2.4,2.2,5.2,1.8,7.8,0.6c1.8-0.9,3.4-1.2,5.3-0.8c0.9,0.2,2.2,0.3,2.9-0.2c2.4-1.4,4.7-1,7.2-0.7     c1,0.1,2-0.1,3-0.3c3.8-0.6,7.5-1.7,11.3-1.8c7.1-0.1,13.7-2.4,20.2-4.7c8.6-2.9,16.9-5.8,26.2-5.1c1.3,0.1,2.6-0.4,3.9-0.6     c2.8-0.6,5.6-1.9,8.3-1.7c5.2,0.3,10.2,0.1,15.4-0.3c8.3-0.7,16.4,1.8,24.7,2.6c2.9,0.3,5.6,0.7,8.2-0.7c3.6-2,7.7-1.6,11.2-0.9     c3.1,0.6,6,0.9,9.2,1c6.8,0.1,13.1-1.3,19.4-3.6c1.8-0.7,4.1-0.9,5.9-0.4c4.2,1.4,8.4,1.5,12.7,2.1c6.7,1.1,13.2,0.8,19.7-1     c3.3-0.9,6.9-1.1,10.3-1.7c1.5-0.2,3.3-0.1,4.3-1c2-1.8,4.2-1.6,6.5-1.8c2.5-0.2,4.9-0.6,7.4-1c2.1-0.3,4.2-0.7,6.4-1.1     c8-1.4,16.1-2.6,24.3-2.1c0.6,0,1.3-0.4,1.9-0.4c3-0.2,6-0.4,8.9-0.5c2.7-0.1,5.6,0.6,7.9-0.3c3.6-1.4,7.1-1.3,10.8-0.8     c2.9,0.5,5.9,0.9,8.8,1.2c2.6,0.2,5.3,0.1,7.9,0.2c3.7,0.1,7.4-0.3,10.9,0.5c3.4,0.8,6.8,1.4,10.3,1.4c3.6,0,6.8,1.1,10,2.7     c7,3.5,14.2,5.4,22.1,3.2c1.2-0.3,2.6-0.1,3.9-0.1c5.3,0.4,10.6,1.1,15.9,1.2c6.7,0.1,13.3-0.1,20-0.4c1.4,0,2.8-0.7,4.3-1     c4.2-0.7,8.7-2.2,12.7-1.7c5.8,0.8,12,0.7,17.5,3.5c0.7,0.3,1.6,0.4,2.4,0.4c4.6,0,9.3-0.7,13.8,1c0.9,0.3,2,0,3-0.1     c1,0,2-0.2,2.9-0.1c6.6,0.7,13.2,1.4,19.8,2.2c1.2,0.1,2.3,0.2,3.4,0.5c5.4,1.6,10.8,3.3,16.1,5.1c9.4,3.1,18.6,7.3,28.8,7.2     c0.3,0,0.7,0.1,1,0.2c9,1.7,17.8,4.1,26.9,5.2c2.8,0.3,5.7,0.8,8.2,1.8c2.6,1.1,5.2,1.1,7.8,0.8c3.3-0.3,6.7-0.5,9.9-1.2     c2.9-0.6,5.2,0.2,7.4,1.8c5.4,3.9,11.6,5.6,18.2,5.7c5.8,0.1,11.7,0.2,17.5,0.8c2.6,0.2,5,1.5,7.5,2.4c1.5,0.5,3,1.5,4.6,1.7     c5.2,0.8,10.5,1.4,15.8,2.1c2.6,0.3,5.3,0.8,7.9,0.9c2.9,0.1,5.6,0.7,8.1,2.2c7.2,4.3,15.4,4.9,23.4,6c0.8,0.1,1.7,0,2.5-0.3     c7.6-2.8,15.2-5.7,22.8-8.4c2.6-1,5.4-1.7,8.1-2.4c1.3-0.4,2.7-0.4,3.9-0.9c2.3-1,4.5-0.8,6.8,0c3.4,1.2,6.9,2.6,10.4,3.1     c9,1.5,18.2,1.9,27.3,0.9c6-0.7,11.6,0,16.8,3.3c2.7,1.7,5.7,2.3,8.6,1.6C1907.4,64.6,1913.7,65,1920,65.1z'></path>
        </svg>
      </div>
      <div className='content'>
        <p className='cta-3 '>Lorem ipsum dolor sit amet.</p>
        <div
          ref={scrollTrigerElement}
          className='cta-1  tw-mb-12  tw-text-2xl md:tw-text-6xl'
        >
          THE WORLD IS <br />A COLOURFUL PLACE
        </div>
        {/* <div className='banner tw-text-3xl'>
          diversity = opportunity diversity = opportunity
        </div> */}
        <div className='tw-w-full'>
          <BannerScrolling
            text={'DIVERSITY = OPPORTUNITY'}
            color={currentColors.color}
            backgroundColor={currentColors.backgroundColor}
          />
        </div>
        {rotate}
        <div className='tw-w-1/2 tw-mt-12'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi ullam
            necessitatibus quam atque earum numquam incidunt similique eius
            expedita labore? Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Labore, asperiores.
          </p>
          {/* {props.company.company_name} */}
        </div>
        <div className='chart tw-w-1/2'>
          {props.company && (
            <Chart
              company={props.company}
              rotate={rotate}
              colors={currentColors}
            />
          )}
        </div>
        <div className='table tw-w-1/2'>
          <CompanyTable company={props.company} colors={currentColors} />
        </div>
      </div>
    </section>
  )
}

// props.text
// props.height
// props.width
// props.color
// props.backgroundColor
// props.fillColor
// props.symbol
