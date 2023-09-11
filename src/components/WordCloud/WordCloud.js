import React from 'react'
import ReactWordCloud from 'react-wordcloud2'
import { wordData } from '../../data'
import styles from './WordCloud.module.scss'


const MyWordCloud = () => {
    const colors = [
        styles['col-1'],
        styles['col-2'],
        styles['col-3'],
        styles['col-4'],
        styles['col-5'],
    ]

    const options = {
    rotations: 2,
    rotationAngles: [0, 90],
    fontSizes: [20, 60], // Define your desired font size range
    }

    const assignRandomColor = () => colors[Math.floor(Math.random() * colors.length)]
    const wordColors = words.map(word => ({
    text: word.text,
    size: word.size,
    color: assignRandomColor()
    }))

return (
    <div>
      <ReactWordCloud wordData={wordData} options={options} />
    </div>
  )
}

export default MyWordCloud
