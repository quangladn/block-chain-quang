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
        const app = require('block-chain-quang')\n
        const user = new app.blockChain(difficulty)\n
        user.addBlock(data)\n
        console.log(user.chain)\n
    </h3>
</div>
<div>
    <h2>is vaild</h2>
    <h3>
        console.log(user.chain)\n
        console.log(use.isVaild())\n
        if data don't convert => true\n \n
        user.chain[1].data = dataConverted \n
        console.log(use.isVaild()) => false \n
    </h3> 
</div>
