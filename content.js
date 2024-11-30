// NAVBAR
const navbar1 = `
<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">
<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="./" class="active tmenu kekanan01" style="background-image: url(https://i.ibb.co/NSTc1xH/home.png);"></a>
  <div id="myLinks">
    <a href="./game/pragmatic/" class="stay tmenu gmenu kebawah2" style="background-image: url(https://i.ibb.co/3TGbhjx/pragmatic.png)"></a>
    <a href="./game/pgsoft/" class="stay tmenu gmenu kebawah3" style="background-image: url(https://i.ibb.co/jhNn2Dz/pgsoft.png)"></a>
    <a href="./game/spadegaming/" class="stay tmenu gmenu kebawah04" style="background-image: url(https://i.ibb.co/5n4658h/spadegaming.png)"></a>
    <a href="./game/fastspin/" class="stay tmenu gmenu kebawah5" style="background-image: url(https://i.ibb.co/9pZ3MjZ/fastspin.png)"></a>
    <a href="./game/jokerslot/" class="stay tmenu gmenu kebawah6" style="background-image: url(https://i.ibb.co/wMY3n9V/joker.png)"></a>
    <a href="./game/boongo/" class="stay tmenu gmenu kebawah7" style="background-image: url(https://i.ibb.co/jykyP2C/boongo.png)"></a>
    <a href="./game/jili/" class="stay tmenu gmenu kebawah8" style="background-image: url(https://i.ibb.co/5K3Lmbj/jili.png)"></a>
    <a href="./game/playtech/" class="stay tmenu gmenu kebawah9" style="background-image: url(https://i.ibb.co/GM9ZxXX/playtech.png)"></a>
    <a href="./game/microgaming/" class="stay tmenu gmenu kebawah10" style="background-image: url(https://i.ibb.co/Stt9Sc7/microgaming.png)"></a>
    <a href="./game/habanero/" class="stay tmenu gmenu kebawah11" style="background-image: url(https://i.ibb.co/nnJfGdh/habanero.png)"></a>
    <a href="./game/cq9/" class="stay tmenu gmenu kebawah12" style="background-image: url(https://i.ibb.co/DKPmSyj/cq9.png)"></a>
    <a href="./game/playstar/" class="stay tmenu gmenu kebawah13" style="background-image: url(https://i.ibb.co/Dr89LMH/playstar.png)"></a>
    <a href="./game/yggdrasil/" class="stay tmenu gmenu kebawah14" style="background-image: url(https://i.ibb.co/fNYPtV7/yggdrasil.png)"></a>
    <a href="./game/netent/" class="stay tmenu gmenu kebawah15" style="background-image: url(https://i.ibb.co/6XGwq1S/netent.png)"></a>
    <a href="./game/skywind/" class="stay tmenu gmenu kebawah16" style="background-image: url(https://i.ibb.co/Vjs5THj/skywind.png)"></a>
    <a href="./game/toptrendgaming/" class="stay tmenu gmenu kebawah17" style="background-image: url(https://i.ibb.co/w6xqpY8/toptrendgaming.png)"></a>
    <a href="./game/nextspin/" class="stay tmenu gmenu kebawah18" style="background-image: url(https://i.ibb.co/qxgCzWs/nextspin.png)"></a>
    <a href="./game/bbin/" class="stay tmenu gmenu kebawah19" style="background-image: url(https://i.ibb.co/CbQ8zjR/bbin.png)"></a>
    <a href="./game/creativegaming/" class="stay tmenu gmenu kebawah20" style="background-image: url(https://i.ibb.co/4S9X6RN/creativegaming.png)"></a>
    <a href="./game/evoplay/" class="stay tmenu gmenu kebawah21" style="background-image: url(https://i.ibb.co/8MYZrjP/evoplay.png)"></a>
    <a href="./game/royalslotgaming/" class="stay tmenu gmenu kebawah22" style="background-image: url(https://i.ibb.co/99g25sZ/royalgaming.png)"></a>
    <a href="./game/fishing/" class="stay tmenu gmenu kebawah23" style="background-image: url(https://i.ibb.co/RD6vvWC/fishing.png)"></a>
    <a href="./game/arcade/" class="stay tmenu gmenu kebawah24" style="background-image: url(https://i.ibb.co/fpNkrWR/arcade.png)"></a>
    <a href="./game/casino/" class="stay tmenu gmenu kebawah25" style="background-image: url(https://i.ibb.co/LDwGtR2/casino.png)"></a>
  </div>
  <a href="javascript:void(0);" class="icon tmenu kekiri01" onclick="myFunction()" style="background-image: url(https://i.ibb.co/1s1DN8B/game.png);"></a>
</div>
`;

const navbar2 = `
<!-- Simulate a smartphone / tablet look -->
<div class="mobile-container">
<!-- Top Navigation Menu -->
<div class="topnav">
  <a href="../../" class="active tmenu kekanan01" style="background-image: url(https://i.ibb.co/NSTc1xH/home.png);"></a>
  <div id="myLinks">
    <a href="../pragmatic/" class="stay tmenu gmenu kebawah2" style="background-image: url(https://i.ibb.co/3TGbhjx/pragmatic.png)"></a>
    <a href="../pgsoft/" class="stay tmenu gmenu kebawah3" style="background-image: url(https://i.ibb.co/jhNn2Dz/pgsoft.png)"></a>
    <a href="../spadegaming/" class="stay tmenu gmenu kebawah4" style="background-image: url(https://i.ibb.co/5n4658h/spadegaming.png)"></a>
    <a href="../fastspin/" class="stay tmenu gmenu kebawah5" style="background-image: url(https://i.ibb.co/9pZ3MjZ/fastspin.png)"></a>
    <a href="../jokerslot/" class="stay tmenu gmenu kebawah6" style="background-image: url(https://i.ibb.co/wMY3n9V/joker.png)"></a>
    <a href="../boongo/" class="stay tmenu gmenu kebawah7" style="background-image: url(https://i.ibb.co/jykyP2C/boongo.png)"></a>
    <a href="../jili/" class="stay tmenu gmenu kebawah8" style="background-image: url(https://i.ibb.co/5K3Lmbj/jili.png)"></a>
    <a href="../playtech/" class="stay tmenu gmenu kebawah9" style="background-image: url(https://i.ibb.co/GM9ZxXX/playtech.png)"></a>
    <a href="../microgaming/" class="stay tmenu gmenu kebawah10" style="background-image: url(https://i.ibb.co/Stt9Sc7/microgaming.png)"></a>
    <a href="../habanero/" class="stay tmenu gmenu kebawah1" style="background-image: url(https://i.ibb.co/nnJfGdh/habanero.png)"></a>
    <a href="../cq9/" class="stay tmenu gmenu kebawah12" style="background-image: url(https://i.ibb.co/DKPmSyj/cq9.png)"></a>
    <a href="../playstar/" class="stay tmenu gmenu kebawah13" style="background-image: url(https://i.ibb.co/Dr89LMH/playstar.png)"></a>
    <a href="../yggdrasil/" class="stay tmenu gmenu kebawah14" style="background-image: url(https://i.ibb.co/fNYPtV7/yggdrasil.png)"></a>
    <a href="../netent/" class="stay tmenu gmenu kebawah15" style="background-image: url(https://i.ibb.co/6XGwq1S/netent.png)"></a>
    <a href="../skywind/" class="stay tmenu gmenu kebawah16" style="background-image: url(https://i.ibb.co/Vjs5THj/skywind.png)"></a>
    <a href="../toptrendgaming/" class="stay tmenu gmenu kebawah17" style="background-image: url(https://i.ibb.co/w6xqpY8/toptrendgaming.png)"></a>
    <a href="../nextspin/" class="stay tmenu gmenu kebawah18" style="background-image: url(https://i.ibb.co/qxgCzWs/nextspin.png)"></a>
    <a href="../bbin/" class="stay tmenu gmenu kebawah19" style="background-image: url(https://i.ibb.co/CbQ8zjR/bbin.png)"></a>
    <a href="../creativegaming/" class="stay tmenu gmenu kebawah20" style="background-image: url(https://i.ibb.co/4S9X6RN/creativegaming.png)"></a>
    <a href="../evoplay/" class="stay tmenu gmenu kebawah21" style="background-image: url(https://i.ibb.co/8MYZrjP/evoplay.png)"></a>
    <a href="../royalslotgaming/" class="stay tmenu gmenu kebawah22" style="background-image: url(https://i.ibb.co/99g25sZ/royalgaming.png)"></a>
    <a href="../fishing/" class="stay tmenu gmenu kebawah23" style="background-image: url(https://i.ibb.co/RD6vvWC/fishing.png)"></a>
    <a href="../arcade/" class="stay tmenu gmenu kebawah24" style="background-image: url(https://i.ibb.co/fpNkrWR/arcade.png)"></a>
    <a href="../casino/" class="stay tmenu gmenu kebawah25" style="background-image: url(https://i.ibb.co/LDwGtR2/casino.png)"></a>
  </div>
  <a href="javascript:void(0);" class="icon tmenu kekiri01" onclick="myFunction()" style="background-image: url(https://i.ibb.co/1s1DN8B/game.png);"></a>
</div>
`;

// SEARCH
const search1 = `
<div class="keatas01"><input id="searchbar" onkeyup="search_animal()" type="text" name="search" placeholder="cari nama permainan..."></div>
`;

// MENU UTAMA
const menuutama1 = `
<div class="posisimenuutama"><div class="menuutama kebawah1" style="background-image: url(https://i.ibb.co/1s1DN8B/game.png); href="javascript:void(0); onclick="myFunction()"></div></div>
`;
