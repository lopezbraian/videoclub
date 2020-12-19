import React from 'react'

const style = {
  title: {
    margin: '0',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  content: {
    margin: '0',
    fontSize: '1.3rem',
    fontWeight: '300'
  }
}
export const InfoItem = ({ title, content }) => {
  function translate (word) {
    let wordTranslated = ''
    switch (word) {
      case 'Acting':
        wordTranslated = 'Actuando'
        break
      case 'Directing':
        wordTranslated = 'Dirigiendo'
        break
      default:
        wordTranslated = word
        break
    }
    return wordTranslated
  }
  return (
    <div style={{ marginBottom: '10px' }}>
      <p style={style.title}>{title}</p>
      <p style={style.content}>{translate(content)}</p>
    </div>
  )
}
