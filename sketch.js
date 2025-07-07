let suhuData;
let suhu = [29.30, 32.15, 26.94, 27.76, 33.33, 31.20, 33.29, 29.20, 33.29, 30.55, 34.89, 32.14, 27.60, 30.37, 32.69, 33.17, 31.52, 27.79, 31.52, 31.29, 26.11, 25.51, 27.75, 32.89, 28.36, 34.96, 29.51, 27.82, 34.50, 33.61, 34.46];

function setup() {
  createCanvas(900, 600);
  background(255);
  textAlign(CENTER, BOTTOM);
  textSize(12);

  let barWidth = width / suhu.length;
  let x = 0;

  for (let i = 0; i < suhu.length; i++) {
    let val = suhu[i];
    
    // Pemetaan tinggi grafik
    let h = map(val, 29, 36, height, 0);

    // Pemetaan warna batang
    let col = map(val, 29, 31, 255, 50);
    fill(col);
    noStroke();
    rect(x, h, barWidth - 5, height - h);
    
    // Label suhu
    fill(0);
    text(nf(val, 1, 2), x + barWidth / 2, h - 5);

    stroke(0);
    strokeWeight(2);
    noFill();
    vertex(x + barWidth / 2, h);

    x += barWidth;
  }

  endShape();
}
