// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;

function setup() {
  createCanvas(600, 400);
  campoIdade = createInput("15");
  campoFantasias = createCheckbox("Gosta de fantasia?");
  
}

function draw() {
  background("#95BEDF");
  let gostaDeFantasias =campoFantasias.checked();
  let idade = campoIdade.value();
  let recomendacao = geraRecomendacao(idade,gostaDeFantasias);
  fill(color(75,0,120));
  textAlign(CENTER, CENTER);
  textSize(38);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade,gostaDeFantasias) {
  if (idade >= 10) {
    if (idade >= 14 && idade <= 40) {
      return "O menino que descobriu o vento";
    } else {
      if (idade > 40) {
        return "sexta-feira 13";
      } else {
        if (gostaDeFantasias) {
          return "As aventuras de Pi";
        }else{
          return "Depois da Chuva";
        }
      }
    }
  } else {
    if(gostaDeFantasias){
      return "A viagem de Chihiro";
    }
    return "O feitiço do tempo";
  }
}
