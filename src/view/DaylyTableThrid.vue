/* eslint-disable */
<template>
  
  <p class="title1" style="margin: 0px 50px;font-size: 28px;font-weight: bold;color: #888888">营业时间：10AM~10PM</p>
  <p class="title2" style="margin: 0px 50px;font-size: 28px;font-weight: bold;color: #888888">店面面积：200㎡</p>
  <div class="demo-drawer-footer">
      <Button style="margin-right: 8px" @click="serach">查看</Button>
      <Button type="primary" @click="revise">编辑</Button>
    </div>
  
  <Select v-model="model1"  @change="initTable" class="selectbox1">
      <Option v-for="item in shop"  :key="item.value" :label="item.label" :value="item.value"> </Option> 
    </Select>
    <Select v-model="model2"  @change="initTable" class="selectbox2">
      <Option v-for="item in position" :value="item.value" :key="item.value">{{ item.label }}</Option>
    </Select>
    
    
  <div id="app">
    <!-- Echarts 图表 -->
    <div ref="progressChart" class="progressChart"></div>
  </div>
  
</template>

<script>
import * as echarts from 'echarts'
export default {
  name: 'App',
  data() {
    return {
      shop: [
        {
          value: 0,
          label: '店1排班表'
        },
        {
          value: 1,
          label: '店2排班表'
        },
        {
          value: 2,
          label: '店3排班表'
        },
      ],
      model1:1,
      position: [
        {
          value: 0,
          label: '按员工分组'
        },
        {
          value: 1,
          label: '按岗位分组'
        },
      ],model2:0,
      type: [
        {
          value: 0,
          label: '按日查看'
        },
        {
          value: 1,
          label: '按周查看'
        },
        
      ],
      model3:0,
    }
  },
  mounted() {
    this.initChart()
  },serach(){
      this.$router.push({
          path: '/dayly2'
        })

    },
  methods: {
    /* 初始化图表 */
    serach(){
      this.$router.push({
          path: '/weeklytable'
        })

    },
    initChart() {
      const progressChart = echarts.init(this.$refs.progressChart)
      const startTimeData = ['2023-04-16 9:00:00', '2023-04-16 10:00:00', '2023-04-16 12:00:00', '2023-04-16 14:00:00', '2023-04-16 16:00:00', '2023-04-16 18:00:00', '2023-04-16 20:00:00']
      const endTimeData = ['2023-04-16 10:00:00', '2023-04-16 12:00:00', '2023-04-16 14:00:00', '2023-04-16 16:00:00', '2023-04-16 18:00:00', '2023-04-16 20:00:00', '2023-04-16 23:00:00']

      const option = {
        // 鼠标移入提示工具
        tooltip: {
          trigger: 'axis',
          formatter(params) {
            if (params[1].data && params[0].data) {
              return `<div>开始时间：${params[1].data}</div>` + `<div>结束时间：${params[0].data}</div>`
            } else {
              return ''
            }
          },
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          containLabel: true,
          show: false,
          right: 140,
          left: 40,
          bottom: 40,
          top: 20,
          backgroundColor: '#fff'
        },
        legend: {
          // 图例组件
          data:[
            {                   
		        name: '持续时间',
		          itemStyle:{
                color: '#000'
            }
	      }
        ],
          align: 'auto',
          top: 'bottom'
        },
        color: ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'purple'], // 自定义调色盘的颜色
        xAxis: {
          type: 'time',
          position: 'top', // x 轴位置
          axisTick: {
            // 隐藏刻度
            show: false
          },
          axisLine: {
            // 隐藏轴线
            show: false
          },
          splitLine: {
            // 显示网格线
            show: true
          }
        },
        yAxis: {
          inverse: true, // y 轴数据翻转，该操作是为了保证项目一放在最上面，项目七在最下面
          axisTick: {
            // 隐藏刻度
            show: false
          },
          axisLine: {
            // 隐藏轴线
            show: false
          },
          data: ['准备工作：吴昊', '李琛，徐浩','李琛，徐浩，徐峰，吴昊', '徐峰，窦飞，吴昊，刘钘', '田琦，马骅 ，黄敏', '沈赢杰', '收尾工作：沈赢杰']
        },
        series: [
          {
            label: {
              show: true,
              position: 'right',
               color: '#999',
             formatter: params => {
               console.log(params.value)
                const findIndex = endTimeData.findIndex(item => item === params.value)
                const startTime = startTimeData[findIndex]
                return `开始时间：${startTime}\n\n结束时间：${params.value}`
              } // 格式化 label
                 },
            name: '持续时间',
            type: 'bar',
            stack: 'duration',
            colorBy: 'data',
            itemStyle: {
              // color: '#007acc',
              borderColor: '#fff',
              borderWidth: 1
            },
            zlevel: -1,
            data: endTimeData // 结束时间
          },
          {
            name: '持续时间',
            type: 'bar',
            stack: 'duration', // 堆叠标识符，同个类目轴上系列配置相同的 stack 值可以堆叠放置
            itemStyle: {
              color: '#fff'
            },
            zlevel: -1, // zlevel 大的 Canvas 会放在 zlevel 小的 Canvas 的上面
            z: 9, // z值小的图形会被z值大的图形覆盖，z相比zlevel优先级更低，而且不会创建新的 Canvas
            data: startTimeData // 开始时间
          }
        ]
      }
      progressChart.setOption(option)
      // 浏览器窗口大小变化，图表大小自适应
      window.addEventListener('resize', () => {
        progressChart.resize()
      })
    }
  }
}

</script>

<style scoped>
#app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}
.progressChart {
  width: 75%;
  height: 570px;
  position: absolute;
  top: 30%;
  border: 1px solid #aaa;
}
.selectbox1{
  width: 300px;
  height: 300px;
  height: 300px;
  position: absolute;
  left: 50%;
  top: 32%;
  transform: translate(-50%,-50%);
  
}
.selectbox2{
  width: 150px;
  height: 300px;
  position: absolute;
  left: 68%;
  top: 32%;
  transform: translate(-50%,-50%);
}
.demo-drawer-footer {
  width: 100%;
  position: marginRight;
  border-top: 1px solid #e8e8e8;
  padding: 0px 65px;
  text-align: right;
  background: #fff;
}
</style>
