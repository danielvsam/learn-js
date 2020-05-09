let hit_counter = 0

const hit = async function (req, res, params) {
    hit_counter++
    console.log(hit_counter)
    res.json({
        Ok: true,
        Hits: hit_counter
    })
}

module.exports = hit