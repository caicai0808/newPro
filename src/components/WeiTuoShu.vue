<style scoped>
	p{font-size: 13px;}
</style>
<template>
	<div style="position: fixed;z-index: 20;height: 100%;width: 100%;padding-top: 40px;">
		
  <div style="padding:10px;background: #fff;height: 80%;overflow: scroll;">
    <p style="text-align:center;">
      <span style="font-size:20px;line-height:150%;font-family:方正小标宋简体">授 权 委 托 书	</span>
    </p>
    <div style="line-height: 22px;">
		<p>委托人ID：                       （出借金额、地区）</p>
		<p>委托人联系方式：</p>
		<p>受托人姓名：团贷网债权人委员会</p>
		<p>联系方式：</p>
		<p>现委托团贷网债权人委员会在本委托人与  团贷网有关维权事宜 一事中，作为我方的代表，代理处理维权事宜。</p>
		<p>代理人的代理事宜（包括但不限于）：</p>
		<p>1、代表委托人与政府有关部门沟通，尽量能够与专案组专人对接，能够及时了解到政府部门的工作进度， 并且及时以公开的形式（微博、公众号等）向委托人反馈；</p>
		<p>2、结合政府的工作进度以及调查的实际情况，对团贷网后续的退赔方案或者清算、重组方案， 表达自己的合理意见；</p>
		<p>3、监督政府部门在调查工作中是否存在徇私舞弊，对于有损委托人	 利益的决定表达质疑，并督促纠正；</p>
		<p>4、对于团贷网中相关责任人员的犯罪控告，代表委托人提出独立的控告观点；</p>
		<p>5、向团贷网相关联的集团、企业，以及团贷网控股股东、实际控制人、高管及其亲属的关联资产追讨其违法所得；对于需要承担无限连带责任的相关人，由受托人向其追偿直至能够归还委托人的所有本息为止；</p>
		<p>6、其他有利于委托人索要回出借款本息的行为。</p>
		<p>代理期限：</p>
		<p>从授权之日起，至委托人放弃继续追讨出借款之日止。</p>
		<p>委托人ID：          </p>
	    <p>                                   年    月    日</p>
    </div>
    <div style="text-align: center;"><mt-button @click="close()" type="primary" size="normal">关闭</mt-button></div>
  </div>
 </div>
</template>

<script>
	import Vue from 'vue'
	import { Button} from 'mint-ui'
	Vue.component(Button.name, Button)
export default {
  name: "WeiTuoShu",
  data() {
    return {
      
    };
  },methods:{
    close(){
      this.$emit('closeWeiTuo',{flag:false})
    }
  }
};
</script>
