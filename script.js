
function showMeaning() {
  const name = document.getElementById("nameInput").value.trim();
  const result = document.getElementById("result");

  if (!name) {
    result.textContent = "Please enter a name!";
    return;
  }

  // Simple fun meaning generator
  const meanings = {
    A: "Adventurous",
    B: "Brilliant",
    C: "Creative",
    D: "Determined",
    E: "Energetic",
    F: "Friendly",
    G: "Generous",
    H: "Happy",
    I: "Intelligent",
    J: "Joyful",
    K: "Kind-hearted",
    L: "Loyal",
    M: "Magical",
    N: "Noble",
    O: "Optimistic",
    P: "Passionate",
    Q: "Quick-witted",
    R: "Radiant",
    S: "Sweet",
    T: "Talented",
    U: "Unique",
    V: "Vibrant",
    W: "Wise",
    X: "Xtraordinary",
    Y: "Youthful",
    Z: "Zesty"
  };

  let description = "";
  for (let char of name.toUpperCase()) {
    if (meanings[char]) {
      description += `<strong>${char}</strong>: ${meanings[char]}<br>`;
    }
  }

  result.innerHTML = `<p>Your name reflects:</p><p>${description}</p>`;
}
