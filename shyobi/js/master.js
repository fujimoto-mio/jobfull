/* ============================================================================================= */

/* master.js */

/* ============================================================================================= */
jQuery(function($) {

	$(function() {
		// ----- スマホ閲覧時のみ電話番号にリンク付与  START -----
		var ua = navigator.userAgent;
		if(ua.indexOf('iPhone') >= 0 || ua.indexOf('Android') >= 0) {
			$('.telno').each(function() {
				// 画像の場合、altテキストをリンクに設定
				if($(this).children("img").is("img")){
					var value = $(this).find("img").attr("alt");
				}else{
					var value = $(this).text();
				}
				var result = value.replace(/-/g,"");
				$(this).wrap("<a href='tel:" + result + "'></a>" );
			});
		}
		// ----- スマホ閲覧時のみ電話番号にリンク付与  END -----

		// ----- ハンバーガーメニューの表示切り替え  START -----
		// [class="hamburger"]の要素をクリックした時
		$('.hamburger').on('click', function() {
			// <html>に[open]クラスが付いていれば消す、なければつける
			$('html').toggleClass('open');
			// [class="hamburger"]の要素に[active]クラスが付いていれば消す、なければつける
			$(this).toggleClass('active');

			if ($(this).hasClass('active')) {
				// [class="hamburger"]の要素に[active]クラスが付いている
				// [class="globalMenuSp"]の要素に[active]クラスを付ける
				$('.globalMenuSp').addClass('active');
			} else {
				// [class="globalMenuSp"]の要素の[active]クラスを消す
				$('.globalMenuSp').removeClass('active');
			}
		});

		// [class="globalMenuSp"]の要素の<a>タグをクリックした時
		$('.globalMenuSp a[href]').on('click', function(event) {
			// [class="hamburger"]の要素をクリックさせる。↑のイベントに飛ぶ
			$('.hamburger').trigger('click');
		});
		// ----- ハンバーガーメニューの表示切り替え  END -----

		// ----- ページ内リンクの動きをつける START -----
		// ページ内リンク(<a href="#●●">)の<a>タグをクリックした時
		$('a[href^="#"]').click(function() {
			var headerHight = 100;          // ヘッダーの高さを設定
			var speed = 1000;               // スクロールの速さを設定
			var href= $(this).attr("href"); // クリックしたhrefの内容を取得
			var target = $(href == "#" || href == "" ? 'html' : href);  // リンク先を取得
			var position = target.offset().top-headerHight;         // リンク先の位置からヘッダーの高さを引いた位置を取得
			$('body,html').animate({scrollTop:position}, speed, 'swing');   // 対象のリンクへアニメーションを'swing'の動作で移動
			return false;
		});
		// ----- ページ内リンクの動きをつける END -----

	});

	/* header追従*/
	$(window).on("load scroll",function(){
		var w = $(window).width();      // ブラウザの画面幅を取得
		if (!$('body').hasClass('page-id-47')){
			if(w > 1000){                   // 幅が1000より大きいかチェック(PCの時)
				var y = $(window).scrollTop();          // ページのy軸の位置を取得
				if(y > 500){               // y軸の位置が1000より大きいかチェック(PCの時)
					// <header>の要素に[scroll]クラスを付ける
					$("header").addClass("scroll");
				}else{
					// <header>の要素の[scroll]クラスを削除
					$("header").removeClass("scroll");
				}
			}
		}
	});

	/* cv追従*/
	$(window).on("load scroll",function(){
		var w = $(window).width();      // ブラウザの画面幅を取得
		if ($("#link-faq").length){
			var target = $("#link-faq").offset().top + 300 ;
		}
		if(w < 1090){                   // 幅が1090より小さいかチェック
			var y = $(window).scrollTop();          // ページのy軸の位置を取得
			if(y > 600 && y < target){     // y軸の位置が600より大きいかチェック
				// <header>の要素に[fixed_btm]クラスを付ける
				$("#cv-fixed").addClass("fixed_btm");
			}else{
				// <header>の要素の[fixed_btm]クラスを削除
				$("#cv-fixed").removeClass("fixed_btm");
			}
		}
	});
	$(window).bind("scroll", function() {
		let scrollHeight = $(document).height();
		let scrollPosition = $(window).height() + $(window).scrollTop();
		if ( (scrollHeight - scrollPosition) / scrollHeight <= 0) {
			$("#cv-fixed").removeClass("fixed_btm");
		}
	});


	// faq
	$(function () {
		// 最初のコンテンツ以外は非表示
		$(".accordion-content").css("display", "none");

		$(".accordion-title").click(function () {
			$(this).toggleClass("open").next().slideToggle(300);
		});
	});

	//お客様の声 スライダー
	$(window).on('load', function() {
		$('.autoplay').slick({
			slidesToShow :  3,
			slidesToScroll :  1,
			autoplay :  true,
			autoplaySpeed :  4000,
			dots: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		});
	});

	//お客様の声 続きを読む
	$('.intro-voice .cover-btn').click(function(){
		if(!$('.intro-voice').hasClass('open')){
			$('.intro-voice').addClass('open');
		} else {
			$('.intro-voice').removeClass('open');
		}
		return false;
	});


	//予約フォームオプション
	if($('#booking-option-fieldset').length){
		//要素追加
		$('#action-button').prepend('<p class="back-btn">戻る</p>');
		$('#action-button').prepend('<button class="next-btn">次へ</button>');
		$('#booking-option-table .option-label.gakureki').prepend('<span class="option-ttl">ご経歴・経験に関するアンケート</span>');
		//初期表示設定
		$('.back-btn').hide(); //戻るボタン非表示
		//$('#action-button button[type="submit"]').hide(); //送信ボタン非表示
		$('#booking-option-table').hide();　　//オプション項目非表示
		
		$('#action-button button[type="submit"]').replaceWith('<p type="submit" name="reserve_action" value="validate" class="submit-btn">予約確認</p>'); //予約確認ボタンのタグ変更
		$('#action-button p[type="submit"]').hide(); //送信ボタン非表示
		$('#action-button p[type="submit"]').before('<span class="validate-txt">全ての項目にご回答ください</span>');//バリデーション
		$('.validate-txt').hide(); //バリデーション非表示

		//次へボタンの動作
		$(document).on('click', '.next-btn', function(){
			var val1 = $('#booking-sei_kana').val();
			var val2 = $('#booking-mei_kana').val();
			var val3 = $('#client-email').val();
			var val4 = $('#client-email2').val();
			var val5 = $('#client-tel').val();
			if (val1 && val2 && val3 && val4 && val5 ) {
				$('.next-btn').replaceWith('<p class="next-btn">次へ</p>'); //次へボタンのタグ変更
				$('.next-btn').hide();　//次へボタン非表示
				$('.back-btn').show();　//戻るボタン表示
				$('#booking-option-table').show();　//オプション項目表示
				$('#booking-reservation-fieldset').hide();　//予約日時非表示
				$('#booking_client-fieldset').hide();　//クライアント情報非表示
				$('#booking-message-fieldset').hide();　　//メッセージボックス非表示
				//$('#action-button button[type="submit"]').show(); //送信ボタン表示
				$('#action-button p[type="submit"]').show(); //送信ボタン表示
			} 
		});

		//戻るボタンの動作
		$(document).on('click', '.back-btn', function(){
			$('.next-btn').replaceWith('<button class="next-btn">次へ</button>'); //次へボタンのタグ変更
			$('.next-btn').show();　//次へボタン表示
			$('.back-btn').hide(); //戻るボタン非表示
			$('#booking-option-table').hide();　//オプション項目非表示
			$('#booking-reservation-fieldset').show();　//予約日時表示
			$('#booking_client-fieldset').show();　//クライアント情報非表示
			$('#booking-message-fieldset').show();　　//メッセージボックス非表示
			//$('#action-button button[type="submit"]').hide(); //送信ボタン非表示
			$('#action-button p[type="submit"]').hide(); //送信ボタン非表示
			$('.validate-txt').hide(); //バリデーション非表示
		});
		
		//送信ボタンの動作
		$(document).on('click', '.submit-btn', function(){
			var val6 = $('input:radio[name="booking[options][gakureki]"]:checked').val();
			var val7 = $('input:radio[name="booking[options][tensyoku]"]:checked').val();
			var val8 = $('input:radio[name="booking[options][keitai]"]:checked').val();
			var val9 = $('input:radio[name="booking[options][office]"]:checked').val();
			var val10 = $('input:radio[name="booking[options][it]"]:checked').val();
			var val11 = $('input:radio[name="booking[options][leader]"]:checked').val();
			var val12 = $('input:radio[name="booking[options][programming]"]:checked').val();
			if (val6 && val7 && val8 && val9 && val10 && val11 && val12 ) {
				$('#action-button p[type="submit"]').replaceWith('<button type="submit" name="reserve_action" value="validate" class="submit-btn">予約確認</button>'); //予約確認ボタンのタグ変更
				$('#booking-form form').submit();
			} else {
				$('.validate-txt').show(); //バリデーション表示
			}
		});
		
		//選択肢の動作
		$('#booking-option-table td label').click(function(){  
			$(this).parent().find('label').removeClass('checked');
			$(this).addClass('checked');
		});
			
	}

});//End