<template>
    <ul>
        <li style="float:left"><a class="active" href="#about"><span style="color:red;" class="material-icons">menu</span></a></li>
    </ul>
</template>

<style scoped>
ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: white;
    -webkit-box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    -moz-box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    box-shadow: inset 0px -4px 9px -2px rgba(133,130,133,1);
    border-bottom: 1px rgb(150,150,150) solid;
}

li {
    float: left;
}

li a {
    display: block;
    text-align: center;
    padding: 5px 8px;
    text-decoration: none;
    border-right: 1px rgb(200,200,200) solid;
}
/* Change the link color to #111 (black) on hover */
li a:hover {
}
</style>
