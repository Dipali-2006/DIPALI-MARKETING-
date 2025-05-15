const meanings = [
  "Awesome soul", 
  "Brilliant brain", 
  "Creative wizard", 
  "Dancing king/queen", 
  "Energetic vibe", 
  "Funny friend", 
  "Great listener", 
  "Hopeful heart", 
  "Imaginative dreamer", 
  "Joyful energy", 
  "Kind spirit", 
  "Lively soul", 
  "Mystery master", 
  "Ninja-level genius", 
  "Optimistic aura", 
  "Peaceful mind", 
  "Quick thinker", 
  "Radiant smile", 
  "Super star", 
  "Talented soul", 
  "Unique spark", 
  "Vibrant vibe", 
  "Witty buddy", 
  "Xtra special", 
  "Young at heart", 
  "Zestful dreamer"
];

function generateMeaning() {
  const name = document.getElementById("name-input").value.trim();
  if (!name) return alert("Please enter your name!");

  const resultText = document.getElementById("result-text");
  const resultSection = document.getElementById("result-section");
  const inputSection = document.getElementById("input-section");

  const randomTraits = [];
  for (let i = 0; i < 3; i++) {
    randomTraits.push(meanings[Math.floor(Math.random() * meanings.length)]);
  }

  const finalText = `${name} means: ${randomTraits.join(", ")}!`;
  resultText.innerText = finalText;

  const shareLink = document.getElementById("share-link");
  const encodedMsg = encodeURIComponent(`${finalText} Find out yours at: https://yourwebsite.com`);
  shareLink.href = `https://wa.me/?text=${encodedMsg}`;

  inputSection.classList.add("hidden");
  resultSection.classList.remove("hidden");
}

function restart() {
  document.getElementById("name-input").value = "";
  document.getElementById("input-section").classList.remove("hidden");
  document.getElementById("result-section").classList.add("hidden");
}
