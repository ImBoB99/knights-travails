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

  console.log(queue[0]);

  while (queue.length > 0) {
    const [current, distance, pathArray] = queue.shift();
    console.log("Current:", current, "Distance:", distance, "PathArray:", pathArray);

    if (current === finalPosition) {
      console.log("Final path:", pathArray);
      return distance;
    }
    const [currentX, currentY] = current.split(",").map(Number);
    console.log("Current Coordinates:", currentX, currentY);

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
          console.log(`Found a valid move: ${[position, distance + 1]}`)

          const newPath = [...pathArray, position];
          queue.push([position, distance + 1, newPath]);
          visited.add(position)
        }
      }
    })

    console.table("Queue after this step:", queue);
  }

  return -1;
}

knightMoves([0,0],[7,7])
