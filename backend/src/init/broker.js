const mosca= require('mosca')

const broker = new mosca.Server({
    port: 9000
})

broker.on('clientConnected', (client)=>{
    console.log("new client " + client.id)
})

broker.on('published', (package) => {
    console.log('Se recibe el paquete en topico',package.topic, " mensaje ", package.payload.toString())
})

broker.on('ready', () => {
    console.log('Mosca broker is ready! on port ', 9000)
})
