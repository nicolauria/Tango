let longest_path = (task, best_path = [], best_length = 0, curr_path = [], curr_length = 0) => {

    curr_length += task.time
    curr_path += [task.id]

    if (task.dependencies === undefined) {
        if (curr_length > best_length) {
            best_length = curr_length
            best_path = curr_path
            return {
                best_length,
                best_path 
            }
        }
    }
   
    let res = {
        best_path, 
        best_length
    }
    
    task.dependencies.forEach( task1 => {
        newRes = longest_path(task1, best_path, best_length, curr_path, curr_length)
 

        if (newRes.best_length > res.best_length) {
            res = newRes
        }

    })


    return res 
}