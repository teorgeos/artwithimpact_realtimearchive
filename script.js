let index = 0;
let sentences = [];

async function fetchSentences() {
  try {
    const res = await fetch('http://localhost:4000/sentences'); // API 주소는 바꿔야 할 수 있음
    sentences = await res.json();
    showNext();
  } catch (err) {
    document.getElementById('output').textContent = '불러오기 실패';
    console.error(err);
  }
}

function showNext() {
  if (index >= sentences.length) {
    index = 0; // 다시 처음부터 반복하거나 종료할 수 있음
  }

  const sentence = sentences[index];
  document.getElementById('output').textContent = sentence.text || sentence;

  index++;
  setTimeout(showNext, 3000); // 3초마다 다음 문장
}

fetchSentences();
