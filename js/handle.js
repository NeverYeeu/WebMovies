function renderHeader() {
	return (`
	<header>
		<div class="column" class="column-header">
			<a class="header-logo">
				<img src="/img/_motchill.png" alt="" class="header-logo_img">
			</a>
			<div class="header-search">
				<input type="text" placeholder="Search: tên phim, tên tác giả,....">
				<ion-icon class="header-icon" name="search-outline"></ion-icon>
			</div>
			<div class="header-form">
				<ion-icon class="header-icon" name="log-in-outline"></ion-icon>
				<a href="#" onclick="updateBtn()" class="header-form_login">
					Đăng Nhập
				</a>
				<ion-icon class="header-icon" name="people-outline"></ion-icon>
				<a href="#" onclick="updateBtn()" class="header-form_login">
					Đăng ký
				</a>
				<ion-icon class="header-icon" name="bookmarks-outline"></ion-icon>
				<a href="#" onclick="updateBtn()" class="header-form_login">
					Bookmark
				</a>
			</div>
		</div> 
	</header>
	<nav>    
	<div class="column">
		<ul class="nav-list">
			<li><a href="#" class="nav-list_link cross">Trang chủ</a></li>
			<li class="list_nav list_nav1">
				<a href="" class="nav-list_link">Thể loại</a>
				<div class="list_link-genre">
					<div class="link-genre_wrap">
						<a href="" class="link-genre_list">Cổ trang - thần thoại</a>
						<a href="" class="link-genre_list">Võ Thần - kiếm hiệp</a>
						<a href="" class="link-genre_list">Phiêu lưu - hành động</a>
						<a href="" class="link-genre_list">Tâm lý - tình cảm</a>
						<a href="" class="link-genre_list">Hoạt hình</a>
						<a href="" class="link-genre_list">Khoa học - viễn tưởng</a>
						<a href="" class="link-genre_list">Hình sự - Chiến tranh</a>
						<a href="" class="link-genre_list">Tài liệu - Khám phá</a>
						<a href="" class="link-genre_list">Văn hóa - tâm linh</a>
						<a href="" class="link-genre_list">Hài hước</a>
					
					</div>
				</div>
			</li>
			<li class="list_nav list_nav2">
				<a href="" class="nav-list_link ">Quốc Gia</a>
				<div class="list_link-genre list_link-nation">
					<div class="link-genre_wrap">
						<a href="" class="link-genre_list">Việt nam</a>
						<a href="" class="link-genre_list">Trung quốc</a>
						<a href="" class="link-genre_list">Thái Lan</a>
						<a href="" class="link-genre_list">Hàn quốc</a>
						<a href="" class="link-genre_list">Hồng kông</a>
						
					</div>
				</div>
			</li>
			<li class="list_nav list_nav3">
				<a href="" class="nav-list_link">Phim mới</a>
				<ul class="list_link-year">
					<div class="link-year-wrap">
						<li><a href="" class="link-year_number">Phim: 2023</a></li>  
						<li><a href="" class="link-year_number">Phim: 2022</a></li>  
						<li><a href="" class="link-year_number">Phim: 2021</a></li>  
						<li><a href="" class="link-year_number">Phim: 2020</a></li>  
						<li><a href="" class="link-year_number">Phim: 2019</a></li>  
						<li><a href="" class="link-year_number">Phim: 2018</a></li>  
						<li><a href="" class="link-year_number">Phim: 2017</a></li>  
						<li><a href="" class="link-year_number">Phim: 2016</a></li>  
						<li><a href="" class="link-year_number">Phim: 2015</a></li>  
						<li><a href="" class="link-year_number">Phim: 2014</a></li>  
						
					</div>
				</ul>

			</li>
			<li><a href="" class="nav-list_link">Phim Bộ</a></li>
			<li><a href="" class="nav-list_link">Phim Lẻ</a></li>
			<li><a href="" class="nav-list_link">Phim thuyết minh</a></li>
			<li><a href="" class="nav-list_link">Phim chiếu rạp</a></li>
			<li><a href="" class="nav-list_link">tv show</a></li>
		</ul>
		</div>
	</nav>
	`)
}
function renderFooter() {
	return (`
	<div class="column">
		<div class="footer-wrap">
			<div class="footer-left">
				<li>
					<a href="/html/home.html" class="footer-left_link">xem phim online</a>
					miễn phí chất lượng cao với phụ đề tiếng việt - thuyết minh - lồng tiếng. Name: Film có nhiều thể loại phim phong phú, đặc sắc, nhiều bộ phim hay nhất - mới nhất.
				</li>
					<li>Website motphim.net với giao diện trực quan, thuận tiện, tốc độ tải nhanh, thường xuyên cập nhật các bộ phim mới hứa hẹn sẽ đem lại những trải nghiệm tốt cho người dùng.</li>
			</div>
			<ul class="footer-right">
				<li><a class="footer-right_link" href="">Quy định</a></li>
				<li><a class="footer-right_link" href="">Điều khoản chung</a></li>
				<li><a class="footer-right_link" href="#">Trang chủ</a></li>
				<li><a class="footer-right_link" href="#">Giới thiệu</a></li>
				<li><a class="footer-right_link" href="">Chính sách riêng tư</a></li>
				<li><a class="footer-right_link" href="">Facebook</a></li>
			</ul>
		</div>
	</div>
	`)
}
function renderNav() {

}
export {renderHeader, renderFooter}
function renderMovie(item){
	let {imgMovie, nameMovie, chapMovie} = item;
	return (`
	<a href="" class="movie-slide_film">
		<img src=${imgMovie} alt="">
		<div class="movie-slide_name">${nameMovie}</div>
		<div class="movie-slide_chapter">
			${chapMovie}
		</div>
	</a>
	`)
}
export {renderMovie}

function renderMovie2(item){
	let {imgMovie, nameMovie, yearMovie, chapMovie} = item;
	return (`
	<div class="update_film-link">
		<a href="" class="film-link_img">
			<img src=${imgMovie} alt="Name-film">
			<ion-icon name="play-circle-outline"></ion-icon>
		</a>
		<a href="" class="film-link_name">
			${nameMovie}
			<li class="film-link_year">
				${yearMovie}
			</li>
		</a>
		<div class="movie-slide_chapter">
			${chapMovie}
		</div>
	</div>
	`)
}export {renderMovie2}
