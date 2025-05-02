<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jogo da Velha</title>
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js"></script>
  <style>
    body {
      background: linear-gradient(to right, #00c6ff, #0072ff);
      color: white;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      font-family: 'Segoe UI', sans-serif;
    }
    .game-board {
      display: grid;
      grid-template-columns: repeat(3, 100px);
      gap: 10px;
    }
    .cell {
      width: 100px;
      height: 100px;
      font-size: 2rem;
      background-color: white;
      color: black;
      border-radius: 10px;
      text-align: center;
      line-height: 100px;
      cursor: pointer;
    }
    .status {
      margin-top: 20px;
      font-size: 1.5rem;
    }
    .btn-restart {
      margin-top: 15px;
    }
  </style>
</head>
<body>
  <div class="text-center">
    <h1>Jogo da Velha</h1>
    <div class="game-board mx-auto" id="board"></div>
    <div class="status" id="status">Vez do jogador X</div>
    <button class="btn btn-warning btn-restart" onclick="reiniciar()">Reiniciar</button>
  </div>

  <script>
    const board = document.getElementById("board");
    const statusText = document.getElementById("status");
    let currentPlayer = "X";
    let gameActive = true;
    const cells = Array(9).fill(null);

    function soltarConfete() {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 }
      });
    }

    function checarVitoria() {
      const combinacoes = [
        [0,1,2],[3,4,5],[6,7,8],
        [0,3,6],[1,4,7],[2,5,8],
        [0,4,8],[2,4,6]
      ];
      for (let comb of combinacoes) {
        const [a, b, c] = comb;
        if (cells[a] && cells[a] === cells[b] && cells[a] === cells[c]) {
          gameActive = false;
          statusText.textContent = `Jogador ${cells[a]} venceu!`;
          soltarConfete();
          return;
        }
      }
      if (!cells.includes(null)) {
        gameActive = false;
        statusText.textContent = "Empate!";
      }
    }

    function clicar(i) {
      if (!gameActive || cells[i]) return;
      cells[i] = currentPlayer;
      renderizar();
      checarVitoria();
      if (gameActive) {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        statusText.textContent = `Vez do jogador ${currentPlayer}`;
      }
    }

    function renderizar() {
      board.innerHTML = "";
      cells.forEach((valor, i) => {
        const cell = document.createElement("div");
        cell.className = "cell";
        cell.textContent = valor || "";
        cell.onclick = () => clicar(i);
        board.appendChild(cell);
      });
    }

    function reiniciar() {
      for (let i = 0; i < cells.length; i++) cells[i] = null;
      currentPlayer = "X";
      gameActive = true;
      statusText.textContent = `Vez do jogador ${currentPlayer}`;
      renderizar();
    }

    renderizar();
  </script>
</body>
</html>
