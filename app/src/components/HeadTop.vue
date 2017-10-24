<template>
	<div>
		<div class="header">
			<div class="header-left"></div>
			<div class="header-mian">
				<h2>{{$store.state.tails}}</h2>
			</div>
			<div class="header-right">
				<img src="../assets/image/ic_search.png" />
			</div>
		</div>

	</div>
</template>
<script>
</script>
<style>
	img {
		display: block
	}
	
	.header {
		width: 100%;
		height: 44px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		background: #14b9c8;
	}
	
	.header-left {
		width: 30px;
		height: 30px;
		background: url(../assets/image/toux.jpg) no-repeat;
		background-size:30px 30px; 
		border-radius: 50px;
		border: 2px solid #fff;
		margin-left: 10px;
	}
	
	.header-mian h2 {
		color: #fff;
		text-align: center;
	}
	
	.header-right {
		float: right;
		margin-right: 10px;
	}
	
	.header-right img {
		width: 28px;
		height: 28px;
	}
</style>