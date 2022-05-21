<h1 style="text-align:center">packge block-chain-quang</h1>
<h3 style="text-align:center">install: npm i block-chain-quang</h3>

<div class = "box">
    <table>
        <tr>
            <td>Version</td>
            <td>License</td>
            <td>Unpacked Size</td>
            <td>Total Files</td>
        </tr>
        <tr>
            <td>1.2.5</td>
            <td>ISC</td>
            <td>1.25MB</td>
            <td>182</td>
        </tr>
    </table>
</div>

<h2 style="text-align:center">How To Use</h2>

<div>
    <h2>add block</h2>
    <h3>
        const app = require('block-chain-quang')<br> 
        const user = new app.blockChain(difficulty)<br> 
        user.addBlock(data)<br> 
        console.log(user.chain)<br> 
    </h3><br> 
</div>
<div>
    <h2>is vaild</h2><br> 
    <h3>
        console.log(user.chain) <br> 
        console.log(use.isVaild())<br> 
        if data don't convert => true<br> 
        user.chain[1].data = dataConverted<br> 
        console.log(use.isVaild()) => false<br> 
    </h3> 
</div>
