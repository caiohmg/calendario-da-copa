function createGame(player1, hour, player2) {
  return `
    <li>
    <div class="team-container">
     <img src="./assets/Bandeiras dos países/icon=${player1}.svg" alt="Bandeira do ${player1}">
      </div>
      <strong>${hour}</strong>
      <div class="team-container">
         <img src="./assets/Bandeiras dos países/icon=${player2}.svg" alt="Bandeira da ${player2}"> 
         </div>                 
     </li>
   `
}

let delay = -0.4
function createCard(date, day, group, games) {
  delay = delay + 0.4
  return `
     <div class="card" style="animation-delay: ${delay}s">
               <h2>${date} <span>${day}</span></h2>
                <h2><span>${group}</span></h2>
                  <ul>
                   ${games} 
                 </ul>
             </div>
    `
}

document.querySelector("#cards").innerHTML =
  createCard(
    "20/11",
    "domingo",
    "Grupo A",
    createGame("qatar", "13:00", "ecuador")
  ) +
  createCard(
    "21/11",
    "segunda",
    "Grupo B",
    createGame("england", "10:00", "iran") +
      createGame("united states", "16:00", "wales")
  ) +
  createCard(
    "21/11",
    "segunda",
    "Grupo A",
    createGame("senegal", "13:00", "netherlands")
  ) +
  createCard(
    "22/11",
    "terça",
    "Grupo C",
    createGame("argentina", "07:00", "saudi arabia") +
      createGame("mexico", "13:00", "poland")
  ) +
  createCard(
    "22/11",
    "terça",
    "Grupo D",
    createGame("denmark", "10:00", "tunisia") +
      createGame("france", "16:00", "australia")
  ) +
  createCard(
    "23/11",
    "quarta",
    "Grupo F",
    createGame("morocco", "07:00", "croatia") +
      createGame("belgium", "16:00", "canada")
  ) +
  createCard(
    "23/11",
    "quarta",
    "Grupo E",
    createGame("germany", "10:00", "japan") +
      createGame("spain", "13:00", "costa rica")
  ) +
  createCard(
    "24/11",
    "quinta",
    "Grupo G",
    createGame("switzerland", "07:00", "cameroon") +
      createGame("brazil", "16:00", "serbia")
  ) +
  createCard(
    "24/11",
    "quinta",
    "Grupo H",
    createGame("uruguay", "10:00", "south korea") +
      createGame("portugal", "13:00", "ghana")
  ) +
  createCard(
    "25/11",
    "sexta",
    "Grupo B",
    createGame("wales", "07:00", "iran") +
      createGame("england", "16:00", "united states")
  ) +
  createCard(
    "25/11",
    "sexta",
    "Grupo A",
    createGame("qatar", "10:00", "senegal") +
      createGame("netherlands", "13:00", "ecuador")
  ) +
  createCard(
    "26/11",
    "sabado",
    "Grupo D",
    createGame("tunisia", "07:00", "australia") +
      createGame("france", "13:00", "denmark")
  ) +
  createCard(
    "26/11",
    "sabado",
    "Grupo C",
    createGame("poland", "10:00", "saudi arabia") +
      createGame("argentina", "16:00", "mexico")
  ) +
  createCard(
    "27/11",
    "domingo",
    "Grupo E",
    createGame("japan", "07:00", "costa rica") +
      createGame("spain", "16:00", "germany")
  ) +
  createCard(
    "27/11",
    "domingo",
    "Grupo F",
    createGame("belgium", "10:00", "morocco") +
      createGame("croatia", "13:00", "canada")
  ) +
  createCard(
    "28/11",
    "segunda",
    "Grupo G",
    createGame("cameroon", "07:00", "serbia") +
      createGame("brazil", "13:00", "switzerland")
  ) +
  createCard(
    "28/11",
    "segunda",
    "Grupo H",
    createGame("south korea", "10:00", "ghana") +
      createGame("portugal", "16:00", "uruguay")
  ) +
  createCard(
    "29/11",
    "terça",
    "Grupo A",
    createGame("ecuador", "12:00", "senegal") +
      createGame("netherlands", "12:00", "qatar")
  ) +
  createCard(
    "29/11",
    "terça",
    "Grupo B",
    createGame("iran", "16:00", "united states") +
      createGame("wales", "16:00", "england")
  ) +
  createCard(
    "30/11",
    "quarta",
    "Grupo D",
    createGame("tunisia", "12:00", "france") +
      createGame("australia", "12:00", "denmark")
  ) +
  createCard(
    "30/11",
    "quarta",
    "Grupo C",
    createGame("poland", "16:00", "argentina") +
      createGame("saudi arabia", "16:00", "mexico")
  ) +
  createCard(
    "01/12",
    "quinta",
    "Grupo F",
    createGame("croatia", "12:00", "belgium") +
      createGame("canada", "12:00", "morocco")
  ) +
  createCard(
    "01/12",
    "quinta",
    "Grupo E",
    createGame("japan", "16:00", "spain") +
      createGame("costa rica", "16:00", "germany")
  ) +
  createCard(
    "02/12",
    "sexta",
    "Grupo H",
    createGame("south korea", "12:00", "portugal") +
      createGame("ghana", "12:00", "uruguay")
  ) +
  createCard(
    "02/12",
    "sexta",
    "Grupo G",
    createGame("serbia", "16:00", "switzerland") +
      createGame("cameroon", "16:00", "brazil")
  )
