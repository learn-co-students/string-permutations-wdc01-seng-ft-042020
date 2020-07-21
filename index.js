function findAllPermutations(str) {
    if (str.length < 2 ) {
        return [str]
    }
    let perms = []

    for (let i = 0; i < str.length; i++) {
        let c = str[i]
        let subStr = str.slice(0, i) + str.slice(i + 1)

        for (const perm of findAllPermutations(subStr)) {
            perms.push(c + perm)
        }
    }
    return perms
}



console.log(findAllPermutations('abcde'))
