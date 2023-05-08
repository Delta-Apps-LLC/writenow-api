exports.checkHealth = async function (client) {
    const { rowCount, rows } = await client.query({
        name: 'check-health',
        text: 'SELECT count(*) from accounts',
    })
    return rowCount > 0 ? rows : undefined
}