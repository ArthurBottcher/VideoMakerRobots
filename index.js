
const robots = {
    input : require('./robots/input.js'),
    text: require('./robots/text.js'),
    state:  require('./robots/state.js'),
    images: require('./robots/images.js')
}

async function start(){
    
    robots.input()
    await robots.text()
    await robots.images()

    const content = robots.state.load()
    console.dir(content, { depth: null })
    
    
}

start()