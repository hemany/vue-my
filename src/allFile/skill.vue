<template>
<div id="myChart" :style="{width:100+'%', height: '500px'}"></div>
</template>
<script>
    export default {
      name: 'hello',
      data () {
        return {
          msg: 'Welcome to Your Vue.js App'
        }
      },
      mounted(){
        this.drawLine();
      },
      methods: {
        drawLine(){
            let myChart = this.$echarts.init(document.getElementById('myChart'))
            myChart.setOption({
                title: {},
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                legend: {
                    orient: 'vertical',
                    x: 'left',
                    data:['html5','css3','js','vue.js','node.js','vuex.js']
                },
                series: [
                    {
                        name:'技能显示',
                        type:'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '40',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                            {value:75, name:'html5'},
                            {value:65, name:'css3'},
                            {value:80, name:'js'},
                            {value:80, name:'vue.js'},
                            {value:80, name:'node.js'},
                            {value:70, name:'vuex.js'},
                            {value:80, name:'bootstrap'}
                        ]
                    }
                ]
            });
        }
      }
    }
</script>