
  tidyOrCount = (words, count) => {
    const noOfWords = words.split(' ');
    if (count) return noOfWords.length;
    return noOfWords.slice(0, 50).join(' ') + '...';
  };
