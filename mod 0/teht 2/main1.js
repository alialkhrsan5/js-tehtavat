for (let i = 1; i <= 5; i++) {
  const sade = Number(prompt(`(${i}/5) Anna ympyrän säde:`));

  if (sade < 0) {
    document.getElementById("output").textContent += `\n(${i}/5) Pinta-alaa ei määritetty, koska säde oli negatiivinen.`;
  } else if (sade === 0) {
    document.getElementById("output").textContent += `\n(${i}/5) Tiedät itsekin vastauksen  (pinta-ala on 0).`;
  } else if (Number.isNaN(sade)) {
    document.getElementById("output").textContent += `\n(${i}/5) Virhe: et antanut numeroa.`;
  } else {
    const pintaala = Math.PI * sade * sade;
    document.getElementById("output").textContent += `\n(${i}/5) Ympyrän pinta-ala on ${pintaala.toFixed(2)}`;
  }
}
