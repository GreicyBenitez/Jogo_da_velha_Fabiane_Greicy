const baralho = [
    {
        none: "naruto",
        img: "https://img.quizur.com/f/img5fa431e7c40cf4.92902967.jpg?lastEdited=1604596303"
    },
    {
        none: "goku",
        img: "https://www.looper.com/img/gallery/why-gokus-marriage-has-dragon-ball-fans-scratching-their-heads/intro-1615983960.jpg"
    },
    {
        none: "luffy",
        img: "https://img.quizur.com/f/img6182d4b037c9b2.94544558.jpg?lastEdited=1635964083"
    },
    {
        none: "zoro",
        img: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg"
    },
    {
        none: "eren",
        img: "https://miro.medium.com/max/1400/1*O-HCA6NQ98zOvkN2aEMz6A.jpeg"
    },
    {
        none: "nezuko",
        img: "https://9tailedkitsune.com/wp-content/uploads/2022/01/nezuko11.jpg"
    },
    {
        none: "naruto",
        img: "https://img.quizur.com/f/img5fa431e7c40cf4.92902967.jpg?lastEdited=1604596303"
    },
    {
        none: "goku",
        img: "https://www.looper.com/img/gallery/why-gokus-marriage-has-dragon-ball-fans-scratching-their-heads/intro-1615983960.jpg"
    },
    {
        none: "luffy",
        img: "https://img.quizur.com/f/img6182d4b037c9b2.94544558.jpg?lastEdited=1635964083"
    },
    {
        none: "zoro",
        img: "https://criticalhits.com.br/wp-content/uploads/2021/11/zoro-one-piece-768x400.jpg"
    },
    {
        none: "eren",
        img: "https://miro.medium.com/max/1400/1*O-HCA6NQ98zOvkN2aEMz6A.jpeg"
    },
    {
        none: "nezuko",
        img: "https://9tailedkitsune.com/wp-content/uploads/2022/01/nezuko11.jpg"
    }
];

baralho.sort(() => {
    return 0.5 - Math.random();
});
const grade = document.querySelector("#grade");
const pontuacao = document.querySelector("#pontos");
let ponto;
let escolhidas = [];

function criarGrade() {
    ponto = 0;
    pontuacao.innerText = ponto;
    for (let i = 0; i < baralho.length; i++) {
        let carta = document.createElement("img");
        carta.id = i;
        carta.name = baralho[i].none;
        carta.src = "https://pngset.com/images/anime-logo-de-anime-person-human-outdoors-crowd-transparent-png-2487608.png";
        carta.addEventListener("click", escolherCarta);
        grade.appendChild(carta);
    }
}

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
                carta1.addEventListener("click", escolherCarta());
                carta2.addEventListener("click", escolherCarta());
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
}