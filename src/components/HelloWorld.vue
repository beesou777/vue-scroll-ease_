<template>
  <div class="" style="overflow:hidden;">
    <div class="" style="height:300px"></div>
    <div class="" style="height:300px"></div>

    <div class="flex-wrapper">
        <div class="box-1" v-scroll-ease="{from:200,rotate:360}"></div>
    </div>
    <div class="" style="height:300px"></div>

     <div class="flex-wrapper">
        <div class="box-2" v-scroll-ease="{from:500,direction:'right'}"></div>
    </div>
    <div class="" style="height:300px"></div>
     <div class="flex-wrapper" style="justify-content: flex-end;">
        <div class="box-2" v-scroll-ease="{from:500,direction:'left'}"></div>
    </div>
    <div class="" style="height:300px"></div>
     <div class="flex-wrapper">
        <div class="box-3" v-scroll-ease="{from:500,direction:'right',rotate:30}"></div>
    </div>

     <div class="flex-wrapper" style="justify-content: flex-end;">
        <div class="box-4" v-scroll-ease="{from:500,direction:'left',rotate:-180,delay:300}"></div>
    </div>
    <div class="" style="height:300px"></div>
  </div>
</template>


<style scoped>
.flex-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px; /* Space between items */
  margin: 20px;
}

.box-1{
  width:300px;
  height: 300px;
  background: black;
}

.box-2{
  width:300px;
  height: 300px;
  background: red;
}

.box-3{
  width:300px;
  height: 300px;
  background: red;
}
.box-4{
  width:300px;
  height: 300px;
  background: red;
}
</style>
