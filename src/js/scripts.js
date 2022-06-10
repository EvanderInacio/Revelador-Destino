
// ========== PARALLAX ========== //
function castParallax() {
  let opThresh = 350
  let opFactor = 750

  addEventListener('scroll', function (event) {
    let top = this.pageYOffset

    let layers = document.getElementsByClassName('parallax')
    let layer, speed, yPos
    for (let i = 0; i < layers.length; i++) {
      layer = layers[i]
      speed = layer.getAttribute('data-speed')
      const yPos = -((top * speed) / 100)
      layer.setAttribute(
        'style',
        'transform: translate3d(0px, ' + yPos + 'px, 0px)'
      )
    }
  })
}

document.body.onload = castParallax()



//  ========== CIRCLE ANIMATION ========== //
const input = document.querySelector('input')
let timeout = null

input.addEventListener('keydown', e => {
  circle.classList.add('grande-circle')
  clearInterval(timeout)
  timeout = setInterval(() => {
    circle.classList.remove('grande-circle')
  }, 500)
})



// ========== PERGUNTAS/RESPOSTAS  ========== //
const answerElement = document.querySelector('.answer')
const inputElement = document.querySelector('input')
const button = document.querySelector('.button')


const answers = [
  'Cacildis, brilhantis.',
  'Repensar você deve, jovem padawan.',
  'Acho que vai dar bom!',
  'Quem sabe na próxima..',
  'O não você já tem.',
  'Não seja o toquinha verde.',
  'Continue nessa vibe.',
  'Hoje não deu, amanhã vai dar, confia.',
  'Sai desse computador criatura, vai viver!',
  'Ih mané, meteu essa mesmo?',
  'O miserável é um gênio.',
  'Acertô miserávi.',
  'Um dia da caça, o outro é do caçador, não?',
  'Isso parece promissor, confia.',
  'Eles estão deixando a gente sonhar.',
  'Lorem ipsum dolor, sit amet.',
  'Expectrum patronum..',
  'Sonhar não custa nada..',
  'Nada do que foi será, do jeito que já foi um dia.',
  'A métrica dos outros não cabe em nós..',
  'Já fez um push na branch principal hoje?',
  'Mais vale um bug na mão do que dois bug fixes crashando.',
  'Ajaiôôôóôô...',
  'Faz sentido isso..',
  'Sei não, mas já bebeu água hoje?',
  'Legal, may the odds ever be in your favor.',
  'Pior do que isso, só o coração gelado da(o) cremosa(o)',
  'Em todos esses anos nessa indústria vital, é a primeira vez que isso me acontece.',
  'Parece bão.',
  'Sai daí doido.',
  'Pressinto que isso vai dar ruim.',
  'Não entendi, seja mais claro',
  'Sim!',
  'Talvez?',
  'Não sou capaz de opinar',
  'Com certeza!',
  'Se concentre, pergunte novamente',
  'Não sou obrigado a responder',
  'Certeza!',
  'Não tenho tanta certeza.',
  'É decididamente assim.',
  'Não conte com isso.',
  'Sem dúvidas!',
  'Pergunte novamente mais tarde.',
  'Sim, definitivamente!',
  'Minha resposta é não.',
  'Você pode contar com isso.',
  'Melhor não te dizer agora.',
  'A meu ver, sim.',
  'Minhas fontes dizem não.',
  'Provavelmente.',
  'Não é possível prever agora.',
  'Perspectiva boa.',
  'As perspectivas não são tão boas.',
  'Sim.',
  'Concentre-se e pergunte novamente.',
  'Sinais apontam que sim.'
]


function Question() {
  const inputValor = inputElement.value

  if (inputValor.length > 0) {
    const answer = answers[Math.floor(Math.random() * answers.length)]
    answerElement.innerHTML = answer
    divElement.classList.add('answer')
  } else {
    answerElement.innerHTML = 'Digite algo, por favor.'
    divElement.classList.add('answer')
  } 
  
}

button.addEventListener('click', Question)

