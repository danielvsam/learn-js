let hit_counter = 0

const count = async function(req, res, params) {
    res.json({
        Ok: true,
        Hits: hit_counter
    })
}

module.exports = count