<template>
  <div class="head">
    <div class="head_content auto">
      <el-image></el-image>
      <div class="search">
        <el-input placeholder="请输入任意原料，膜类，成品，定制关键字进行搜索" v-model="searchContent" class="input-with-select" @keyup.native.enter="Search" clearable>
          <el-select v-model="searchType" slot="prepend">
            <el-option
              v-for="type in Types"
              :key="type.value"
              :label="type.label"
              :value="type.value">
            </el-option>
          </el-select>
          <el-button slot="append" icon="el-icon-search">搜索</el-button>
        </el-input>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchContent: '', //搜索内容
      searchType: '', //搜索类型
      Types: [
        {
          value: '0',
          label: '全部'
        }, {
          value: '1',
          label: '原料'
        }, {
          value: '2',
          label: '膜类'
        }, {
          value: '3',
          label: '成品'
        }, {
          value: '4',
          label: '定制'
        },
        {
          value: '5',
          label: '其他'
        }
      ], //全部搜索类型
    }
  },
  methods: {
    Search() {
      
    }
  }
}
</script>

<style lang="scss">
.head {
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
}
.shadow {
  box-shadow: 0px 10px 10px -10px#D8BFD8;
}
.head_content {
  min-width: 1024px;
  width: 1024px;
  display: flex;
  justify-content: space-around;
}
.search{
  width: 550px;
}
.el-select {
  width: 90px;
}
</style>