<template>
	<div>
		<ul class="bbs">
			<li v-for="n in bs">
				<div class="bbs-head">
					<div class="icon">
						<img :src="n.ico" />
					</div>
					<h2>{{n.name}}</h2>
				</div>
				<div class="bbs-main">
					<h2>{{n.txt}}</h2>
					<p>{{n.txt}}</p>
					<img class="pic1" :src="n.pic"/>
					<img :src="n.pic1"/>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				bs: [{
					name: '嘻嘻呜呜',
					ico: require('../assets/image/peopel3.jpg'),
					pic: require('../assets/image/Screenshot_2017-10-19-09-32-55-273_com.taptap_03.png'),
					pic1: require('../assets/image/Screenshot_2017-10-19-09-32-55-273_com.taptap_03-05.png'),
					txt:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus numquam doloribus consectetur sed exercitationem laudantium quod totam architecto tempora assumenda cum aliquam ab quas labore minus earum sapiente consequatur eaque?'
				}]
			}
		}

	}
</script>

<style>
	.bbs{
		margin: 0 20px 0 20px;
	}
	.bbs .bbs-head {
		overflow: hidden;
		margin: 20px 0 0 0 ;
	}
	
	.bbs .bbs-head .icon {
		width: 40px;
		height: 40px;
		border-radius: 50px;
		overflow: hidden;
		float: left;
		margin-right: 13px;
	}
	
	.bbs .bbs-head .icon img {
		width: 100%;
	}
	
	.bbs .bbs-head h2 {
		line-height: 40px;
		font-size: 16px;
		color: #4a4a4a;
	}
	.bbs-main h2{
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		
		font-size: 14px;
		line-height: 2rm;
		margin-top: 5px;
	}
	.bbs-main p{
		display: -webkit-box;
		-webkit-line-clamp: 2;
		-webkit-box-orient: vertical;
		overflow: hidden;
		text-overflow: ellipsis;
		
		font-size: 12px;
		margin-top: 10px;
		line-height: 2rm;
	}
	.bbs-main .pic2{
		float: left;
	}
	.bbs-main img{
		width: 100%;
	}
</style>