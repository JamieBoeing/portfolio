import React from 'react'
import WordCloud from 'react-wordcloud'
import { words } from '../../data'
import styles from './WordCloud.module.scss'

const WordCloud = () => {
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
      <WordCloud words={words} options={options} />
    </div>
  )
}

export default WordCloud
