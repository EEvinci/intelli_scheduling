<template>
    <p style="margin: 10px 80px;font-size: 28px;font-weight: bold;color: #888888">排班表周试图：2023年4月</p>
    <Select v-model="model1"  @change="initTable" class="selectbox1">
        <Option v-for="item in shop" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model2"  @change="initTable" class="selectbox2">
        <Option v-for="item in position" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="model3"  @change="initTable" class="selectbox3">
        <Option v-for="item in time" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="cancelre">查看</Button>
        <Button type="primary" @click="revise">编辑</Button>
      </div>
    <div classs="">
      <div class="progressChart"></div>
      <table align="center">
        <thead style="height: 50px">
          <tr style="height: 30px">
            <th style="width: auto" width="48"></th>
            <th style="height: 30px" v-for="(item, index) in weekList" :key="index">
              <p style="font-size: 1px; color: #c0c0c1">
                {{ item.name }}
              </p>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(itemv, indexv) in claimList" :key="indexv">
            <td>
              <div class="time">{{ indexv + 1 }}</div>
              <div class="time">
                {{ itemv.startTime }}
              </div>
              <div class="time">
                {{ itemv.endTime }}
              </div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.monday),
                color: getcolort(itemv.monday)
              }">{{ itemv.monday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.tuesday),
                color: getcolort(itemv.tuesday),
              }">{{ itemv.tuesday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.wednesday),
                color: getcolort(itemv.wednesday),
              }">{{ itemv.wednesday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.thursday),
                color: getcolort(itemv.thursday),
              }">{{ itemv.thursday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.friday),
                color: getcolort(itemv.friday),
              }">{{ itemv.friday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.saturday),
                color: getcolort(itemv.saturday),
              }">{{ itemv.saturday }}</div>
            </td>
            <td>
              <div class="div" :style="{
                'background-color': getcolorb(itemv.sunday),
                color: getcolort(itemv.sunday),
              }">{{ itemv.sunday }}</div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  <script>
  export default {
    name: 'lessonIndex',
    data() {
      return {
        shop: [
          {
            value: 1,
            label: '店1排班表'
          },
          {
            value: 2,
            label: '店2排班表'
          },
          {
            value: 3,
            label: '店3排班表'
          },
          
        ],
          model1:2,
        time: [
          {
            value: 1,
            label: '4月10日-4月16日'
          },
          {
            value: 2,
            label: '4月17日-4月23日'
          },
          {
            value: 3,
            label: '4月24日-4月30日'
          },
          
        ],
        model2:1,
        position: [
          {
            value: 1,
            label: '按员工分组'
          },
          {
            value: 2,
            label: '按岗位分组'
          },
        ],
        model3:1,
        weekList: [
          { name: '周一' },
          { name: '周二' },
          { name: '周三' },
          { name: '周四' },
          { name: '周五' },
          { name: '周六' },
          { name: '周日' },
        ],
        claimList: [{
          startTime: '8:00',
          endTime: '10:00',
          monday: '沈赢杰',
          tuesday: '窦飞',  
          wednesday: '窦飞',
          thursday: '刘钘',
          friday: '黄敏',
          saturday: '徐峰，沈赢杰',
          sunday: '窦飞，吴昊',
        }, {
          startTime: '10:00',
          endTime: '12:00',
          monday: '沈赢杰，李琛',
          tuesday: '徐峰，吴昊',
          wednesday: '刘钘，窦飞',
          thursday: '徐浩，刘钘',
          friday: '窦飞，马骅',
          saturday: '开放班次',
          sunday: '李琛，徐浩',
        }
        , {
          startTime: '12:00',
          endTime: '14:00',
          monday: '李琛，窦飞，吴昊',
          tuesday: '李琛，徐峰，黄敏',
          wednesday: '吴昊， 田琦，黄敏',
          thursday: '田琦，马骅，李琛',
          friday: '沈赢杰，徐浩，李琛',
          saturday: '吴昊，黄敏，徐峰，刘钘',
          sunday: '李琛，徐浩，徐峰，吴昊',
        }, {
          startTime: '14:00',
          endTime: '16:00',
          monday: '吴昊，田琦，徐浩',
          tuesday: '李琛，徐浩，吴昊',
          wednesday: '刘钘， 田琦，马骅',
          thursday: ' 田琦，徐峰，徐浩',
          friday: ' 田琦，徐峰，徐浩',
          saturday: '徐浩，马骅，黄敏，窦飞',
          sunday: '徐峰，窦飞，吴昊，刘钘',
        }, {
          startTime: '16:00',
          endTime: '18:00',
          monday: '徐浩',
          tuesday: '开放班次',
          wednesday: '李琛',
          thursday: '黄敏',
          friday: '刘钘',
          saturday: '李琛，马骅，黄敏',
          sunday: '田琦，马骅 ，黄敏',
        }, {
          startTime: '18:00',
          endTime: '20:00',
          monday: '刘钘',
          tuesday: '沈赢杰',
          wednesday: '李琛',
          thursday: '黄敏',
          friday: '开放班次',
          saturday: '刘钘',
          sunday: '沈赢杰',
        }, {
          startTime: '20:00',
          endTime: '22:00',
          monday: '徐峰',
          tuesday: '沈赢杰',
          wednesday: '徐峰',
          thursday: '窦飞',
          friday: '开放班次',
          saturday: '徐峰',
          sunday: '沈赢杰',
        }, 
      ]
      }
    },
    components: {
  
    },
    methods: {
      
      // 返回字体样式
      textStyle(name) {
        switch (name) {
          case "沈赢杰":
            return "#01D0A6"
          case "李琛":
            return "#CC689C"
          case "窦飞":
            return "#0A2440"
          case "徐峰":
            return "#6E97E8"
          case "刘钘":
            return "#1BCB41"
          case "开放班次":
            return "#C01240"
          case "黄敏":
            return "#3FAC23"
         
        }
      },
      cancelre(){
        this.$router.push({
            path: '/weekly1'
          })
  
      },
      //字体颜色
      getcolort(name) {
        console.log(name, 123);
        let color = this.textStyle(name)
        return color
      },
      // 背景色
      getcolorb(name) {
        let color = this.backStyle(name)
        return color
      },
      // 返回背景样式
      backStyle(name) {
        switch (name) {
          case "沈赢杰":
            return "#F8F6E1"
          case "李琛":
            return "#E4DFE6"
          case "窦飞":
            return "#E0E4E7"
          case "徐峰":
            return "#E3B7E5"
          case "刘钘":
            return "#E2F5DF"
          case "开放班次":
            return "#F7E1E7"
          case "黄敏":
            return "#F7E1E7"
        }
      }
  
    },
    created() {
  
    },
  }
  </script>
  <style scoped>
  table {
    border: 1px solid #f3f3f3;
  }
  
  td {
    border: 1px solid #f3f3f3;
    width: 200px;
    height: 70px;
    font-size: 12px;
  }
  
  .time {
    color: #0d0d0e;
    text-align: center;
    font-size: 5px
  }
  
  .div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border-radius: 2px;
    height: 100%;
  }
  .selectbox1{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 50%;
    top: 39%;
    transform: translate(-50%,-50%);
  }
  .selectbox2{
    width: 150px;
    height: 300px;
    position: absolute;
    left: 25%;
    top: 39%;
    transform: translate(-50%,-50%);
  }
  .selectbox3{
    width: 300px;
    height: 300px;
    position: absolute;
    left: 75%;
    top: 39%;
    transform: translate(-50%,-50%);
  }
  .progressChart {
    width: 80%;
    height: 0px;
    border: 1px solid #aaa;
  }
  .demo-drawer-footer {
    width: 100%;
    position: marginRight;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
  }
  </style>
  