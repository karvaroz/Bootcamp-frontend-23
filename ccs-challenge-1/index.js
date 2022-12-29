const charaters = [{
    title: "obelisk the tormentor",
    starts: 5,
    name: "divine-beast/effect",
    image: "./img/divine-beast.PNG",
    imgsubtitle: "LED6-SP000",
    description: "Requires 3 tributes to normal summon (cannot be normal set). This card's normal summon cannot be negated. When normal summoned, spells, traps, spell/trap effects, and the effects of non-divine monsters cannot be activated",
    last: "atk/4000 def/4000",
    number: 033121,
    edition: "1° Edición",
    copyright: "1996 KAZUKI TAKAHASHI"
}, {
    title: "slifer the sky dragon",
    starts: 5,
    name: "divine-beast/effect",
    image: "./img/divine-beast2.PNG",
    imgsubtitle: "LED6-SP000",
    description: "Requires 3 tributes to normal summon (cannot be normal set). This card's normal summon cannot be negated. When normal summoned, spells, traps, spell/trap effects, and the effects of non-divine monsters cannot be activated",
    last: "atk/4000 def/4000",
    number: 033121,
    edition: "1° Edición",
    copyright: "1996 KAZUKI TAKAHASHI"
}, {
    title: "CHICA MAGA OSCURA",
    stars: 5,
    name: "CHICA MAGA OSCURA",
    image: "./img/chica.jfif",
    imgsubtitle: "LED6-SP000",
    description: "Gana 300 ATK por cada Mago Oscuro o Mago del Caos Negro en el Cementerio.",
    last: "atk/4000 def/4000",
    number: 033121,
    edition: "1° Edición",
    copyright: "1996 KAZUKI TAKAHASHI"
}]


let cards_container = document.getElementById("cards_container")
let card = ""
charaters.forEach(charater => {
    let card_info = `
            <div class="card_container">
                <div class="card_title">
                    <span>${charater.title}</span>
                </div>
                <span class="card_starts">&#9733; &#9733; &#9733; &#9733; &#9733; &#9733;</span>
                <img src=${charater.image} alt="card" class="card_img">
                <span class="card_img_msg">${charater.imgsubtitle}</span>

                <div class="card_detail">
                    <div class="card_content">
                        <p>[${charater.name}]</p>
                        <p>${charater.description} </p>

                        <div class="card_content_last">
                            ${charater.last}
                        </div>
                    </div>
                </div>
                <div class="card_footer">
                    <p>
                        <span>${charater.number} </span>
                        <span>${charater.edition} </span>
                    </p>
                    <span>&#169; ${charater.copyright} </span>
                </div>
            </div>
        `
    card += card_info
})
cards_container.innerHTML = card