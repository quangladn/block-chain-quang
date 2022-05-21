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

<div>
    <h2>command</h2>
    start mining<br> 
    mine: 12.127ms<br> 
    end mine Block {<br> 
      prevHash: 'f5efffdbdc9d1574c48de96f9018a1b5f776b3898ff71a4a5a1598858e8c03e1',<br> 
      data: { index: 1 },<br> 
      timeStamp: 2022-05-21T01:43:57.448Z,<br> 
      hash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
      mineVar: 13<br> 
    }<br> 
    start mining<br> 
    mine: 4.395ms<br> 
    end mine Block {<br> 
      prevHash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
      data: { index: 2 },<br> 
      timeStamp: 2022-05-21T01:43:57.471Z,<br> 
      hash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
      mineVar: 22<br> 
    }<br> 
    start mining<br> 
    mine: 1.46ms<br> 
    end mine Block {<br> 
      prevHash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
      data: { index: 3 },<br> 
      timeStamp: 2022-05-21T01:43:57.482Z,<br> 
      hash: '0f0779c76f323f57ed207d14f6f7d2512a7b1a5392053fe4f909032c2578cf73',<br> 
      mineVar: 2<br> 
    }<br> 
    [<br> 
      Block {<br> 
        prevHash: '0000',<br> 
        data: { isGenesis: true },<br> 
        timeStamp: 2022-05-21T01:43:57.447Z,<br> 
        hash: 'f5efffdbdc9d1574c48de96f9018a1b5f776b3898ff71a4a5a1598858e8c03e1',<br> 
        mineVar: 0<br> 
      },<br> 
      Block {<br> 
        prevHash: 'f5efffdbdc9d1574c48de96f9018a1b5f776b3898ff71a4a5a1598858e8c03e1',<br> 
        data: { index: 1 },<br> 
        timeStamp: 2022-05-21T01:43:57.448Z,<br> 
        hash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
        mineVar: 13<br> 
      },<br> 
      Block {<br> 
        prevHash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
        data: { index: 2 },<br> 
        timeStamp: 2022-05-21T01:43:57.471Z,<br> 
        hash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
        mineVar: 22<br> 
      },<br> 
      Block {<br> 
        prevHash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
        data: { index: 3 },<br> 
        timeStamp: 2022-05-21T01:43:57.482Z,<br> 
        hash: '0f0779c76f323f57ed207d14f6f7d2512a7b1a5392053fe4f909032c2578cf73',<br> 
        mineVar: 2<br> 
      }<br> 
    ]<br> 
    chain valid:  true<br> 
    [ //data is convert<br> 
      Block {<br> 
        prevHash: '0000',<br> 
        data: { isGenesis: true },<br> 
        timeStamp: 2022-05-21T01:43:57.447Z,<br> 
        hash: 'f5efffdbdc9d1574c48de96f9018a1b5f776b3898ff71a4a5a1598858e8c03e1',<br>
        mineVar: 0<br> 
      },<br> 
      Block {<br> 
        prevHash: 'f5efffdbdc9d1574c48de96f9018a1b5f776b3898ff71a4a5a1598858e8c03e1',<br> 
        data: { index: 2 },<br> 
        timeStamp: 2022-05-21T01:43:57.448Z,<br> 
        hash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
        mineVar: 13<br> 
      },<br> 
      Block {<br> 
        prevHash: '0ce5c58bf89585625a3598c08d27a5a1d17f7fcabfed0920c15a350362831b02',<br> 
        data: { index: 2 },<br> 
        timeStamp: 2022-05-21T01:43:57.471Z,<br> 
        hash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
        mineVar: 22<br> 
      },<br> 
      Block {<br> 
        prevHash: '028f016ad3a73e07fbef2cb764564da91916536f306310ab0c0cb74e4df109a3',<br> 
        data: { index: 3 },<br> 
        timeStamp: 2022-05-21T01:43:57.482Z,<br> 
        hash: '0f0779c76f323f57ed207d14f6f7d2512a7b1a5392053fe4f909032c2578cf73',<br> 
        mineVar: 2<br> 
      }<br> 
    ]<br> 
    chain valid:  false<br> 
</div>
