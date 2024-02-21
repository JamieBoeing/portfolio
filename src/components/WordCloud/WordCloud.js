import React from 'react';
import ReactWordCloud from 'react-wordcloud2';
import { wordData } from '../../data';
import styles from './WordCloud.module.scss';

const MyWordCloud = () => {
  const colors = [
    'hsl(225, 19%, 37%)',
    '#572387',
    '#60b4c4',
    '#e37d4e',
    '#1a3d5c',
  ];

  const options = {
    rotations: 2,
    rotationAngles: [0, 90],
    fontSizes: [20, 60],
  };

  const assignRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

  if (!wordData[0] || !wordData[0].words) {
    return null;
  }

  const wordsWithRandomProperties = wordData[0].words.map((word) => ({
    text: word,
    size: Math.floor(Math.random() * 40) + 20,
    color: assignRandomColor(),
    rotation: Math.random() * 90,
  }));

  return (
    <div className={styles.myWordCloudComponent}>
      <ReactWordCloud
        words={wordsWithRandomProperties}
        options={options}
        width={800}
        height={400}
      />
    </div>
  );
};

export default MyWordCloud;
