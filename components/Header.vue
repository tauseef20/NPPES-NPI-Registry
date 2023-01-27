<template>
  <div>
    <a-row class="headerRow pt-2" type="flex">
        <a-col align="middle" :span="12">NPPES NPI Registry</a-col>
        <a-col align="middle" :span="12">
        <a-row class="leftRow">
            <a-col align="middle" :span="4">NPPES</a-col>
            <a-col align="middle" :span="4">Downloads</a-col>
            <a-col align="middle"  :span="3">API</a-col>
            <a-col align="middle" :span="2">Help</a-col>
        </a-row>
        </a-col>
    </a-row>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.headerRow{
    background: #085FA1;
    height: 55px;
    color: #fff;
    /* font-weight: bold; */
    font-size: 20px;
}
.leftRow{
    font-size: 20px;
}
</style>