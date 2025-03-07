function knightMoves(startingVertex, finalVertex) {

  let knightPosition = startingVertex.join(",");
  let finalPosition = finalVertex.join(",");

  const visited = new Set();
  const queue = [];

  const rowBounds = 8;
  const columnBounds = 8;

  // push first position and the distance counter
  queue.push([knightPosition, 0, [knightPosition]]);
  visited.add(knightPosition);

  while (queue.length > 0) {
    const [current, distance, pathArray] = queue.shift();

    if (current === finalPosition) {
      console.log(`You made it in ${distance} moves! Here's your path:`)
      console.log(pathArray.map(pos => `[${pos}]`).join(' -> '));
      return;
    }
    const [currentX, currentY] = current.split(",").map(Number);

    const knightMoves = [
      [currentX + 1, currentY + 2],
      [currentX + 2, currentY + 1],
      [currentX + 2, currentY - 1],
      [currentX + 1, currentY - 2],
      [currentX - 1, currentY - 2],
      [currentX - 2, currentY - 1],
      [currentX - 2, currentY + 1],
      [currentX - 1, currentY + 2],
    ];

    // add only valid moves to the queue
    knightMoves.forEach(move => {
      const [x, y] = move;

      if ((x >= 0 && x < rowBounds) && (y >= 0 && y < columnBounds)) {
        const position = `${x},${y}`
        if (!visited.has(position)) {

          const newPath = [...pathArray, position];
          queue.push([position, distance + 1, newPath]);
          visited.add(position)
        }
      }
    })
  }

  return -1;
}

knightMoves([3,3],[4,3])
