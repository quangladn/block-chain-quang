const hash = require('crypto-js/sha256')
exports.block = class Block {
    constructor (prevHash,data) {
        this.prevHash = prevHash
        this.data = data
        this.timeStamp = new Date()
        this.hash = this.calculateHash()
        this.mineVar = 0
    }
    calculateHash () {
        return hash(this.prevHash + JSON.stringify(this.data)+ this.timeStamp + this.mineVar).toString()
    }
    mine(difficulty) {
        while (!this.hash.startsWith('0'.repeat(difficulty))) {
            this.mineVar ++
            this.hash = this.calculateHash()
        }
    }
}
exports.blockChain = class BlockChain {
    constructor (difficulty) {
        const genesisBlock = new exports.block('0000',{
            isGenesis:true
        })
        this.difficulty = difficulty
        this.chain = [genesisBlock]
    }
    getLastBlock() {
        return this.chain[this.chain.length - 1]
    }
    addBlock(data) {
        const lastBlock = this.getLastBlock()
        const newBlock = new exports.block(lastBlock.hash,data)
        console.time('mine')
        console.log('start mining')
        newBlock.mine(this.difficulty)
        console.timeEnd('mine')
        console.log('end mine',newBlock)
        this.chain.push(newBlock)
    }
    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i]
            const prevBlock = this.chain[i-1]
            if(currentBlock.hash !== currentBlock.calculateHash()) {
                return false
            }
            if ( currentBlock.prevHash !== prevBlock.hash) {
                return false
            }
        }
        return true
    }
}