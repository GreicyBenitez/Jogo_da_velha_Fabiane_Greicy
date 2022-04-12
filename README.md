
# Jogo da Memória
Um jogo que tem por objetivo encontrar os pares
de cada personagem, além de estimular o raciocínio lógico
do estudante de forma divertida.

## Tecnologias Utilizadas:
- **HTML:** _Estrutura do site_
- **CSS:** _Estilo do site_
- **JS:** _Função do site_
- ~~Bootstrap:~~ _Não utilizado_

### Melhorias possíveis:
1. [X] Subir no gitHub pages
2. [X] Criação do html
3. [X] Realizar testes para descobrir bugs 
4. [X] Criação do css
5. [X] Criação de funções no Javascript
6. [X] Utilização de imagens na parte do layout do site.

## Disponivel em: 
[JogodaMemoria] (https://greicybenitez.github.io/Jogo_da_velha_Fabiane_Greicy/)

## Prints da tela:
| Tela HTML/CSS|Tela JavaScript|Primeira rodada|
|--------------|---------------|---------------|
| ![tela HTML/CSS](/img/2 etapa.png) |               |               |

## Codigo principal:
```js:
function escolherCarta() {
    let carta = this;
    carta.src = baralho[carta.id].img;
    escolhidas.push(carta);

    if (escolhidas.length == 2) {
        setTimeout(() => {
            let carta1 = escolhidas[0];
            let carta2 = escolhidas[1];

            if (carta1.name == carta2.name) {
                carta1.src = "https://cdn-icons-png.flaticon.com/512/25/25404.png";
                carta2.src = "https://cdn-icons-png.flaticon.com/512/25/25404.png";
                carta1.addEventListener("click", escolherCarta);
                carta2.addEventListener("click", escolherCarta);
                ponto++;
                pontuacao.innerText = ponto;
            } else {
                carta1.src = "https://pngset.com/images/anime-logo-de-anime-person-human-outdoors-crowd-transparent-png-2487608.png";
                carta2.src = "https://pngset.com/images/anime-logo-de-anime-person-human-outdoors-crowd-transparent-png-2487608.png";

            }
            if (ponto == baralho.length / 2) {
                alert("A determinação é uma peça-chave para a conquista. Parabéns pela vitória!~(^-^)~");
                grade.innerHTML = "";
                criarGrade();
            }
            escolhidas = [];
        }, 1000);
    }

```












