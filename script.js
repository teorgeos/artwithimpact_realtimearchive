let shownIds = new Set(); // 이미 화면에 추가된 문장 ID 저장

async function pollModifiedSentences() {
  try {
    const res = await fetch('http://10.16.21.19:4000/sentences/modified');
    const sentences = await res.json();

    sentences.forEach(sentence => {
      if (!shownIds.has(sentence._id)) {
        const p = document.createElement('p');
        p.textContent = sentence.text;
        document.getElementById('output').appendChild(p);
        shownIds.add(sentence._id);
      }
    });
  } catch (err) {
    console.error('수정된 문장 불러오기 실패:', err);
  }
}

// 3초마다 반복 요청
setInterval(pollModifiedSentences, 3000);
