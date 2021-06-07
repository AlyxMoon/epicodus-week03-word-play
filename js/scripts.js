$(document).ready(function () {
  $('form').submit(function (event) {
    event.preventDefault()

    const sentence = $('textarea').val()

    const sentenceAfterSplit = sentence.split(' ');

    let bigWords = []
    sentenceAfterSplit.forEach(function (word) {
      if (word.length >= 3) {
        bigWords.push(word)
      }
    })

    // reverse
    bigWords = bigWords.reverse()

    // join
    bigWords = bigWords.join(' ')

    // display
    $('.output').text(bigWords)
  })
})