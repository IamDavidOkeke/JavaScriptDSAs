const Bfs = function(graph, root){
    var nodesdist = {}
    for(var i = 0; i < graph.length; i++){
        nodesdist[i] = Infinity
    }
    
    
    nodesdist[root] = 0;
    var current;
    var queue = [root]

    while(queue.length != 0){
        current = queue.shift()

        var connectionArray  = graph[current] 
        var neighbours = []
        var neighIndex = connectionArray.indexOf(1)
        while(neighIndex != -1){
            neighbours.push(neighIndex)
            neighIndex = connectionArray.indexOf(1, neighIndex + 1 )
        }
        for (var j = 0; j < neighbours.length; j++){
            console.log (neighbours[current], current)
            if (nodesdist[neighbours[j]] == Infinity){
                nodesdist[neighbours[j]] = nodesdist[current] + 1
                queue.push(neighbours[j])
            }
        }

                 
    }
    return nodesdist
}

module.exports = Bfs