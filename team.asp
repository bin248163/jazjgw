<!--#include file="header.asp"-->
<div class="w-100">
	<div class="banner" style="background-image: url(images/banner3_01.jpg);height: 360px;"></div>
</div>

<div class="w-1000 pc-70">
	<div class="why">
		<h1>服务团队</h1>
		<h2>team</h2>
		<a href="case.asp">
			<</a>
	</div>

	<div class="w-1000">
		<div class="team-f mb-20" id="team">
			<a href="" class="this">全部</a>
			<a href="">视频</a>
			<a href="">相册</a>
		</div>

		<div class="n-100 pb-20">
			<div class="team-c mr-20">
				<a href=""><img src="images/team1_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team2_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team3_10.jpg" alt="" /></a>
			</div>
			<div class="team-c">
				<a href=""><img src="images/team4_10.jpg" alt="" /></a>
			</div>
		</div>
		<div class="n-100 pb-20">
			<div class="team-c mr-20">
				<a href=""><img src="images/team1_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team2_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team3_10.jpg" alt="" /></a>
			</div>
			<div class="team-c">
				<a href=""><img src="images/team4_10.jpg" alt="" /></a>
			</div>
		</div>
		<div class="n-100 pb-20">
			<div class="team-c mr-20">
				<a href=""><img src="images/team1_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team2_10.jpg" alt="" /></a>
			</div>
			<div class="team-c mr-20">
				<a href=""><img src="images/team3_10.jpg" alt="" /></a>
			</div>
			<div class="team-c">
				<a href=""><img src="images/team4_10.jpg" alt="" /></a>
			</div>
		</div>
		<div class="paging">
			<a href="" class="paging1">上页</a>
			<a href="" class="paging2 this">1</a>
			<a href="" class="paging2">2</a>
			<a href="" class="paging2">3</a>
			<a href="" class="paging2">4</a>
			<a href="" class="paging1">上页</a>
		</div>
	</div>

</div>
</div>

<div class="submit-n pt-70">
	<div class="w-1000">
		<h1>10秒登记，免费获得猫眼防盗器有效解决防盗问题</h1>
		<!--#include file="form.asp"-->
	</div>

	<!--#include file="footer.asp"-->
	<script type="text/javascript">
		function curNav(num) {
			var nav = $('#nav ul li');
			nav.eq(num).addClass('this');
		}
		curNav(2);
	</script>