<template>
  <div class="layout">
    <Layout style="height: 100vh">

      <Header class="title"> 
        <Menu  class="title" mode="horizontal" theme="dark" active-name="1">
          <div>
            <span style="color: #007acc;text-align: center;vertical-align: middle;font-size: 20px">智能排班系统</span>
            <span style="display: inline-block;float: right;color: #007acc;margin-right: 100px;font-size: 20px">Admin</span>
          </div>

        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu active-name="1-1" theme="light" width="auto" :open-names="['1']">

            <Submenu name="1" class ="test">
              <template #title >
                <Icon type="ios-navigate" ></Icon>
                店铺管理
              </template>
              <MenuItem name="1-1" to="layout" class ="test1">店铺信息</MenuItem>
              <MenuItem name="1-2" to="addshop" class ="test1"> 添加店铺</MenuItem>
            </Submenu>

            <Submenu name="2" class ="test" >
              <template #title>
                <Icon type="ios-keypad"></Icon>
                员工管理
              </template>
              <MenuItem name="2-1" to="allstuff" class ="test1">员工信息</MenuItem>
              <MenuItem name="2-2" to="addstuff" class ="test1">添加员工</MenuItem>

            </Submenu>

            <Submenu name="3" class ="test">
              <template #title>
                <Icon type="ios-analytics"></Icon>
                排班表
              </template>
              <MenuItem name="3-1" to="weeklytable" class ="test1">周排班表</MenuItem>
              <MenuItem name="3-2" to="daylytablev2" class ="test1">日排班表</MenuItem>
              <MenuItem name="3-3" to="daylytable" class ="test1">日排班表（甘特图）</MenuItem>
            </Submenu>

            <Submenu name="4" class ="test">
              <template #title>
                <Icon type="ios-settings" ></Icon>
                规则管理
              </template>
              <MenuItem name="3-1" to="alterrule" class ="test1">修改规则</MenuItem>
              <MenuItem name="3-2" to="alterrule" class ="test1">设置</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}" class="test3">
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
            <router-view></router-view>
          </Content>
        </Layout>
      </Layout>
      
    </Layout>
  </div>
</template>

<script>

export default {
  name: "LayOut",
  data() {
    return {
      name:'dvcd'
    }


  },
  methods: {

  },
  mounted() {
    this.name=this.$route.query.name

  }
}
</script>

<style scoped>
.test{
  background-color: #183f98cc !important;
  color: #060116d4 !important;
}
.test1{
  background-color: #f5f5f6 !important;
  color: #060116d4 !important;
}
.test3{
  background-color: #ffff !important;
}
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9 ;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.title{
  background:   rgb(245, 245, 245);
}

</style>