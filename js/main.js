$(function () {
	$('#logout_button').click(function () {
		$('#logoutvalue').val('1');
		$('#logout').submit();
		return false;
	});
	$('#logout_button_2').click(function () {
		$('#logoutvalue').val('1');
		$('#logout').submit();
		return false;
	});
	$('.selection__dra__date__content__flex').hide();

	// アカデミーページのドロップダウンメニュー
	$('.academy__help__question__text').click(function () {
		$(this).siblings('.academy__help__answer').slideToggle();
		$(this).find('.academy__help__question__none').toggle();
	});
	$('.academy__curriculum__list__sub__question__text').click(function () {
		$(this).siblings('.academy__curriculum__list__sub__answer').slideToggle();
		$(this).find('.academy__curriculum__list__sub__none').toggle();
	});
	$('.academy__curriculum__list__main__que__text').click(function () {
		$(this).siblings('.academy__curriculum__list__main__answer').slideToggle();
		$(this).find('.academy__curriculum__list__main__none').toggle();
	});
	$('.academy__pdcapast__right__top__que__text').click(function () {
		$(this).siblings('.academy__pdcapast__right__top__answer').slideToggle();
		$(this).find('.academy__pdcapast__right__top__none').toggle();
	});
	$('.academy__student__list__main__que__text').click(function () {
		$(this).siblings('.academy__student__list__main__answer').slideToggle();
		$(this).find('.academy__student__list__main__none').toggle();
	});
	$('.academy__student__list__sub__question__text').click(function () {
		$(this).siblings('.academy__student__list__sub__answer').slideToggle();
		$(this).find('.academy__student__list__sub__none').toggle();
	});
	$('.academy__student__pdcapast__right__top__que__text').click(function () {
		$(this).siblings('.academy__student__pdcapast__right__top__answer').slideToggle();
		$(this).find('.academy__student__pdcapast__right__top__none').toggle();
	});

	$('.academy__student__pdcamonth__modal').click(function () {
		$('.selection__dra__pdca').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__pdca__top__cross').click(function () {
		$('.selection__dra__pdca').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__pdca__bottom__input').on('click', function () {
		if ($('.selection__dra__pdca__content__one__flex input').val() === '') {
			$('.selection__dra__pdca__content__one__flex input').addClass('false');
			$('.selection__dra__pdca__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__pdca__content__one__flex input').removeClass('false');
			$('.selection__dra__pdca__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__pdca__content__three textarea').val() === '') {
			$('.selection__dra__pdca__content__three textarea').addClass('false');
			$('.selection__dra__pdca__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__pdca__content__three textarea').removeClass('false');
			$('.selection__dra__pdca__content__three').find('.error').removeClass('false');
		}
	});

	// 求人管理ページのドロップダウンメニュー
	$('.jobs__list__sub__question').click(function () {
		$(this).siblings('.jobs__list__sub__answer').slideToggle();
		$(this).find('.jobs__list__sub__none').toggle();
	});
	$('.jobs__list__main__que').click(function () {
		$(this).siblings('.jobs__list__main__answer').slideToggle();
		$(this).find('.jobs__list__main__none').toggle();
	});

	// 求人管理ページのドロップダウンメニュー
	$('.jobz__list__sub__question__text').click(function () {
		$(this).siblings('.jobz__list__sub__answer').slideToggle();
		$(this).find('.jobz__list__sub__none').toggle();
	});
	$('.jobz__list__main__que__text').click(function () {
		$(this).siblings('.jobz__list__main__answer').slideToggle();
		$(this).find('.jobz__list__main__none').toggle();
	});

	// 求人管理ページのドロップダウンメニュー
	$('.jobz__list__sub__question__text').click(function () {
		$(this).siblings('.jobz__favorite__sub__answer').slideToggle();
		$(this).find('.jobz__list__favorite__none').toggle();
	});
	$('.jobz__list__sub__questions__text').click(function () {
		$(this).siblings('.jobz__list__sub__questions__answer').slideToggle();
		$(this).find('.jobz__list__sub__none').toggle();
	});
	$('.jobz__favorite__sub__question__text').click(function () {
		$(this).siblings('.jobz__favorite__sub__answer').slideToggle();
		$(this).find('.jobz__favorite__sub__none').toggle();
	});
	$('.jobz__favorite__sub__questions__text').click(function () {
		$(this).siblings('.jobz__favorite__sub__questions__answer').slideToggle();
		$(this).find('.jobz__favorite__sub__none').toggle();
	});
	$('.jobz__favorite__main__que__text').click(function () {
		$(this).siblings('.jobz__favorite__main__answer').slideToggle();
		$(this).find('.jobz__favorite__main__none').toggle();
	});

	// 求職者管理ページのドロップダウンメニュー
	$('.seeker__list__sub__question__text').click(function () {
		$(this).siblings('.seeker__list__sub__answer').slideToggle();
		$(this).find('.seeker__list__sub__none').toggle();
	});
	$('.seeker__list__main__que__text').click(function () {
		$(this).siblings('.seeker__list__main__answer').slideToggle();
		$(this).find('.seeker__list__main__none').toggle();
	});
	$('.seeker__list__sub__questions__text').click(function () {
		$(this).siblings('.seeker__list__sub__answer').slideToggle();
		$(this).find('.seeker__list__sub__none').toggle();
	});

	// 選考管理ページのドロップダウンメニュー
	$('.selection__list__sub__question__text').click(function () {
		$(this).siblings('.selection__list__sub__answer').slideToggle();
		$(this).find('.selection__list__sub__none').toggle();
	});
	$('.selection__list__main__que__text').click(function () {
		$(this).siblings('.selection__list__main__answer').slideToggle();
		$(this).find('.selection__list__main__none').toggle();
	});

	// 過去のPDCAページのタブ
	$('.jobs__details__left__center__tab li').click(function () {
		$('.jobs__details__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobs__details__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobs__details__left__center__contents li').eq(index).addClass('show');
	});

	// 過去のPDCAページのタブ
	$('.jobfull__details__left__center__tab li').click(function () {
		$('.jobfull__details__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobfull__details__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobfull__details__left__center__contents li').eq(index).addClass('show');
	});

	// 今月のPDCAページのタブ
	$('.academy__pcdamonth__right__tabs__tab li').click(function () {
		$('.academy__pcdamonth__right__tabs__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.academy__pcdamonth__right__tabs__contents .show').removeClass('show');
		const index = $(this).index();
		$('.academy__pcdamonth__right__tabs__contents li').eq(index).addClass('show');
	});

	// 受講生一覧の今月のPDCAページのタブ
	$('.academy__student__pdcamonth__right__tabs__tab li').click(function () {
		$('.academy__student__pdcamonth__right__tabs__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.academy__student__pdcamonth__right__tabs__contents .show').removeClass('show');
		const index = $(this).index();
		$('.academy__student__pdcamonth__right__tabs__contents li').eq(index).addClass('show');
	});

	// 受講生一覧の過去のPDCAページのタブ
	$('.academy__student__pdcapast__right__tabs__tab li').click(function () {
		$('.academy__student__pdcapast__right__tabs__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.academy__student__pdcapast__right__tabs__contents .show').removeClass('show');
		const index = $(this).index();
		$('.academy__student__pdcapast__right__tabs__contents li').eq(index).addClass('show');
	});

	// 求人管理ページのタブ
	$('.jobs__details__left__cen__tab li').click(function () {
		$('.jobs__details__left__cen__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobs__details__left__cen__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobs__details__left__cen__contents li').eq(index).addClass('show');
	});

	// 求人管理ページのタブ
	$('.jobs__create__left__center__tab li').click(function () {
		$('.jobs__create__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobs__create__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobs__create__left__center__contents li').eq(index).addClass('show');
	});
	// 求人管理ページのタブ
	$('.jobs__details__left__cen__tab li').click(function () {
		$('.jobs__details__left__cen__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobs__details__left__cen__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobs__details__left__cen__contents li').eq(index).addClass('show');
	});

	// 求人管理ページのタブ
	$('.jobz__details__left__center__tab li').click(function () {
		$('.jobz__details__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.jobz__details__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.jobz__details__left__center__contents li').eq(index).addClass('show');
	});

	// 求職者管理ページのタブ 人材紹介会社
	$('.seeker__information__left__center__tab li').click(function () {
		$('.seeker__information__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.seeker__information__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.seeker__information__left__center__contents li').eq(index).addClass('show');
	});

	// 求職者管理ページのタブ　じょぶふる
	$('.jobfull__seeker__information__left__center__tab li').click(function () {
		$('.jobfull__seeker__information__left__center__tab .active').removeClass('active');
		$(this).addClass('active');
		$('.seeker__information__left__center__contents .show').removeClass('show');
		const index = $(this).index();
		$('.seeker__information__left__center__contents li').eq(index).addClass('show');
	});


	// 選考管理ページのタブ
	$('.selection__flex__left__bottom__box__tab li').click(function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').removeClass('show');
		const index = $(this).index();
		$('.selection__flex__left__bottom__box__contents li').eq(index).addClass('show');
	});
	$('.selection__flex__left__bottom__boxs__tab li').click(function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').removeClass('show');
		const index = $(this).index();
		$('.selection__flex__left__bottom__boxs__contents li').eq(index).addClass('show');
	});

	// 設定ページのタブ
	$('.setting__contact__tab li').click(function () {
		$('.active').removeClass('active');
		$(this).addClass('active');
		$('.show').removeClass('show');
		let index = $(this).index();
		$('.setting__contact__contents li').eq(index).addClass('show');
	});

	// 選考詳細ページのタブ
	$('.selection__flex__left__bottom__boxz__step li').click(function () {
		$('.current').removeClass('current');
		$(this).addClass('current');
		$('.show').removeClass('show');
		let current = $(this).index();
		$('.selection__flex__left__bottom__boxz__contents li').eq(current).addClass('show');
	});

	// 選考詳細ページのタブ
	$('.selection__jobs__left__bottom__boxz__step li').click(function () {
		$('.current').removeClass('current');
		$(this).addClass('current');
		$('.show').removeClass('show');
		let current = $(this).index();
		$('.selection__jobs__left__bottom__boxz__contents li').eq(current).addClass('show');
	});

	// 選考詳細ページのタブ
	$('.selection__jobz__left__bottom__boxz__step li').click(function () {
		$('.current').removeClass('current');
		$(this).addClass('current');
		$('.show').removeClass('show');
		let current = $(this).index();
		$('.selection__jobz__left__bottom__boxz__contents li').eq(current).addClass('show');
	});


	//$('.jobs__details__right__status__tabs li').click(function() {
	//  $('.current').removeClass('current');
	//  $('.button').removeClass('button');
	//  $(this).addClass('current');
	//  $('.jobs__details__right__status__contents').find('.show').removeClass('show');
	//  let cur = $(this).index();
	//  $('.jobs__details__right__status__contents li').eq(cur).addClass('show');
	//  $('.jobs__details__right__ull li').eq(cur).addClass('button');
	//});

	//$('.jobfull__details__right__status__tabs li').click(function() {
	//    $('.current').removeClass('current');
	//    $('.button').removeClass('button');
	//    $(this).addClass('current');
	//    $('.jobs__details__right__status__contents').find('.show').removeClass('show');
	//    let cur = $(this).index();
	//    $('.jobs__details__right__status__contents li').eq(cur).addClass('show');
	//    $('.jobs__details__right__ull li').eq(cur).addClass('button');
	//});

	$('.jobfull__list__tabs li').click(function () {
		$('.select').removeClass('select');
		$(this).addClass('select');
		$('.show').removeClass('show');
		let cur = $(this).index();
		$('.jobfull__list__contents li').eq(cur).addClass('show');
	});


	// 選考詳細ページのモダールの表示・非表示
	$('.selection__flex__left__bottom__boxzz__content__flex a').click(function () {
		if ($(this).hasClass('selected')) {
			$('.selection__drawer').addClass('active');
			$('.selection__back').toggle();
		}
	});

	$('.selection__drawer__flex__cross').click(function () {
		if ($('.selection__dra__company').hasClass('show') || $('.selection__dra__one').hasClass('show') || $('.selection__dra__confirm').hasClass('show')) {
			$('.selection__drawer').removeClass('active');
		} else {
			$('.selection__back').hide();
			$('.jobz__back').hide();
			$('.selection__drawer').removeClass('active');
		}
	});

	$('.selection__jobz__left__bottom__boxzz__content__flex a').click(function () {
		if ($(this).hasClass('selected')) {
			$('.selection__drawer').addClass('active');
			$('.selection__back').toggle();
		}
	});
	$('.selection__jobs__left__bottom__boxzz__content__flex a').click(function () {
		if ($(this).hasClass('selected')) {
			$('.selection__drawer').addClass('active');
			$('.selection__back').toggle();
		}
	});
	// var navs = $('.selection__drawer');
	// $('.selection__back').click(function() {
	//   if(navs.hasClass('active')) {
	//     $('.selection__drawer').removeClass('active');
	//     $('.selection__back').hide();
	//   }
	// });

	// 求人検索ページのドロップダウンメニュー
	$('.drop__menu').click(function () {
		$(this).find('.drop__menu__select').slideToggle(200);
		$(this).toggleClass('active');
	});

	// 求人検索ページのドロップダウンメニュー
	$('.jobz__list__sub__title').click(function () {
		$(this).siblings('.jobz__list__sub__box').slideToggle();
		$(this).find('h2').toggleClass('active');
	});

	// 求人一覧ページのドロップダウンメニュー
	$('.jobs__list__sub__title').click(function () {
		$(this).siblings('.jobs__list__sub__box').slideToggle();
		$(this).find('h2').toggleClass('active');
	});



	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.one__select__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.one__drawer').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.one__drawer__cross').click(function () {
		$('.jobz__back').hide();
		$('.one__drawer').removeClass('active');
	});
	$('.one__drawer__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.one__drawer').removeClass('active');
	});
	var nav = $('.one__drawer');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.one__drawer').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.one__drawer__contents__left__content li').click(function () {
		$('.one__drawer__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.one__drawer__contents__right__content__form li').removeClass('show');
		let inde = $(this).index();
		$('.one__drawer__contents__right__content__form li').eq(inde).addClass('show');
		$('.one__drawer__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.one__checkbox__i').click(function () {
		if ($(this).parent().parent().parent().find('.one__drawer__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.one__drawer__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.one__checkbox__all').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.one__checkbox__all').prop('checked', false);
		}
		if ($('.one__drawer__contents__right__content__block__content :checked').length > 0) {
			let index = $(this).parent().parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.one__drawer__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			let indexs = $(this).parent().parent().parent().parent().index();
			$('.one__select__flex__ul li').eq(indexs).addClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check').eq(index).addClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check').eq(index).removeClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.one__drawer__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.one__select__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.one__checkbox__all').click(function () {
		$(this).parent().parent().parent().find("input[class='one__checkbox__i']").prop('checked', this.checked);
		if ($('.one__drawer__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.one__drawer__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.one__select__flex__ul li').eq(indexs).addClass('show');
			$('.one__select__flex__content__check').addClass('show');
			$('.one__select__flex__content__check input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.one__select__flex__content__check').removeClass('show');
			$('.one__select__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.one__select__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.one__drawer__bottom a').click(function () {
		$('.one__drawer').find('.one__drawer__contents__right').find('input').prop('checked', false);
		$('.one__drawer').find('.one__drawer__contents__left__content li').removeClass('show');
		$('.one__select').find('.one__select__flex__contents').removeClass('show');
		$('.one__select').find('.one__select__flex__content__check input').prop('checked', false);
		$('.one__select').find('.one__select__flex__content__check').removeClass('show');
		$('.one__select').find('.one__select__flex__ul li').removeClass('show');
	});

	$('.three__drawers__contents__left__content li').on('click', function () {
		$(this).addClass('.three__drawers__contents__left__content__check');
		$(this).addClass('.three__drawers__contents__left__content__check');
	});

	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.one__select__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			let number = $(this).parent().index();
			$('.one__drawer__contents__right__content__form li').eq(indexs).find('.one__drawer__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.one__select__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.one__drawer__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.one__select__flex__content__check :checked').length == $(this).parent().parent().find('.one__select__flex__content__check').length)) {
				let all = $(this).parent().parent().parent().parent().index();
				$('.one__drawer__contents__right__content__form li').eq(all).find('.one__drawer__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});

	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.two__select__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.two__drawer').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.two__drawer__cross').click(function () {
		$('.jobz__back').hide();
		$('.two__drawer').removeClass('active');
	});
	$('.two__drawer__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.two__drawer').removeClass('active');
	});
	nav = $('.two__drawer');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.two__drawer').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.two__drawer__contents__left__content li').click(function () {
		$('.two__drawer__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.two__drawer__contents__right__content__form li').removeClass('show');
		inde = $(this).index();
		$('.two__drawer__contents__right__content__form li').eq(inde).addClass('show');
		$('.two__drawer__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.two__checkbox__i').click(function () {
		if ($(this).parent().parent().parent().find('.two__drawer__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.two__drawer__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.two__checkbox__all').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.two__checkbox__all').prop('checked', false);
		}
		if ($('.two__drawer__contents__right__content__block__content :checked').length > 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.two__drawer__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.two__select__flex__ul li').eq(indexs).addClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check').eq(index).addClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check').eq(index).removeClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.two__drawer__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.two__select__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.two__checkbox__all').click(function () {
		$(this).parent().parent().parent().find("input[class='two__checkbox__i']").prop('checked', this.checked);
		if ($('.two__drawer__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.two__drawer__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.two__select__flex__ul li').eq(indexs).addClass('show');
			$('.two__select__flex__content__check').addClass('show');
			$('.two__select__flex__content__check input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.two__select__flex__content__check').removeClass('show');
			$('.two__select__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.two__select__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.two__drawer__bottom a').click(function () {
		$('.two__drawer').find('.two__drawer__contents__right').find('input').prop('checked', false);
		$('.two__drawer').find('.two__drawer__contents__left__content li').removeClass('show');
		$('.two__select').find('.two__select__flex__contents').removeClass('show');
		$('.two__select').find('.two__select__flex__content__check input').prop('checked', false);
		$('.two__select').find('.two__select__flex__content__check').removeClass('show');
		$('.two__select').find('.two__select__flex__ul li').removeClass('show');
	});

	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.two__select__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			number = $(this).parent().index();
			$('.two__drawer__contents__right__content__form li').eq(indexs).find('.two__drawer__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.two__select__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.two__drawer__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.two__select__flex__content__check :checked').length == $(this).parent().parent().find('.two__select__flex__content__check').length)) {
				all = $(this).parent().parent().parent().parent().index();
				$('.two__drawer__contents__right__content__form li').eq(all).find('.two__drawer__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});

	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.three__select__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.three__drawer').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.three__drawer__cross').click(function () {
		$('.jobz__back').hide();
		$('.three__drawer').removeClass('active');
	});
	$('.three__drawer__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.three__drawer').removeClass('active');
	});
	nav = $('.three__drawer');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.three__drawer').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.three__drawer__contents__left__content li').click(function () {
		$('.three__drawer__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.three__drawer__contents__right__content__form li').removeClass('show');
		inde = $(this).index();
		$('.three__drawer__contents__right__content__form li').eq(inde).addClass('show');
		$('.three__drawer__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.three__checkbox__i').click(function () {
		if ($(this).parent().parent().parent().find('.three__drawer__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.two__drawer__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.three__checkbox__all').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.two__checkbox__all').prop('checked', false);
		}
		if ($('.three__drawer__contents__right__content__block__content :checked').length > 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.three__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.three__drawer__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.three__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.three__select__flex__ul li').eq(indexs).addClass('show');
			$('.three__select__flex__ul li').eq(indexs).find('.three__select__flex__content__check').eq(index).addClass('show');
			$('.three__select__flex__ul li').eq(indexs).find('.three__select__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.three__select__flex__ul li').eq(indexs).find('.three__select__flex__content__check').eq(index).removeClass('show');
			$('.three__select__flex__ul li').eq(indexs).find('.three__select__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.three__drawer__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.three__select__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.three__checkbox__all').click(function () {
		$(this).parent().parent().parent().find("input[class='three__checkbox__i']").prop('checked', this.checked);
		if ($('.three__drawer__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.three__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.three__drawer__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.three__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.three__select__flex__ul li').eq(indexs).addClass('show');
			$('.three__select__flex__content__check').addClass('show');
			$('.three__select__flex__ul li').eq(indexs).find('input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.three__select__flex__content__check').removeClass('show');
			$('.three__select__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.three__select__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.three__drawer__bottom a').click(function () {
		$('.three__drawer').find('.three__drawer__contents__right').find('input').prop('checked', false);
		$('.three__drawer').find('.three__drawer__contents__left__content li').removeClass('show');
		$('.three__select').find('.three__select__flex__contents').removeClass('show');
		$('.three__select').find('.three__select__flex__content__check input').prop('checked', false);
		$('.three__select').find('.three__select__flex__content__check').removeClass('show');
		$('.three__select').find('.three__select__flex__ul li').removeClass('show');
	});

	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.three__select__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			number = $(this).parent().index();
			$('.three__drawer__contents__right__content__form li').eq(indexs).find('.three__drawer__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.three__select__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.three__drawer__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.three__select__flex__content__check :checked').length == $(this).parent().parent().find('.three__select__flex__content__check').length)) {
				all = $(this).parent().parent().parent().parent().index();
				$('.three__drawer__contents__right__content__form li').eq(all).find('.three__drawer__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.createjob').click(function () {
		if ($('.one__drawer__contents__right__content__block__content :checked').length > 0) {
			let index = $(this).parent().parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.one__drawer__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.one__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			$('.createjob').prop('checked', false);
			$(this).prop('checked', true);
			index = $(this).parent().index();
			let indexs = $(this).parent().parent().parent().parent().index();
			$('.one__select__flex__ul li').removeClass('show');
			$('.one__drawer__contents__left__content li').removeClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check input').prop('checked', false);
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check').removeClass('show');
			$('.one__select__flex__content__check').find('input').prop('checked', false);
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check').eq(index).addClass('show');
			$('.one__select__flex__ul li').eq(indexs).addClass('show');
			$('.one__drawer__contents__left__content li').eq(indexs).addClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check').eq(index).removeClass('show');
			$('.one__select__flex__ul li').eq(indexs).find('.one__select__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.one__drawer__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.one__select__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.createindustry').click(function () {
		if ($('.two__drawer__contents__right__content__block__content :checked').length > 0) {
			let index = $(this).parent().parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).addClass('show');
		} else if ($('.two__drawer__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.two__drawer__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			$('.createindustry').prop('checked', false);
			$(this).prop('checked', true);
			index = $(this).parent().index();
			let indexs = $(this).parent().parent().parent().parent().index();
			$('.two__select__flex__ul li').removeClass('show');
			$('.two__drawer__contents__left__content li').removeClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check input').prop('checked', false);
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check').removeClass('show');
			$('.two__select__flex__content__check').find('input').prop('checked', false);
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check').eq(index).addClass('show');
			$('.two__select__flex__ul li').eq(indexs).addClass('show');
			$('.two__drawer__contents__left__content li').eq(indexs).addClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check').eq(index).removeClass('show');
			$('.two__select__flex__ul li').eq(indexs).find('.two__select__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.two__drawer__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.two__select__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$(".custom-select").each(function () {
		var classes = $(this).attr("class"),
			id = $(this).attr("id"),
			name = $(this).attr("name");
		var template = '<div class="' + classes + '">';
		template += '<span class="custom-select-trigger">' + $(this).attr("placeholder") + '</span>';
		template += '<div class="custom-options">';
		$(this).find("option").each(function () {
			template += '<span class="custom-option ' + $(this).attr("class") + '" data-value="' + $(this).attr("value") + '">' + $(this).html() + '</span>';
		});
		template += '</div></div>';
		$(this).wrap('<div class="custom-select-wrapper"></div>');
		$(this).hide();
		$(this).after(template);
	});
	$(".custom-option:first-of-type").hover(function () {
		$(this).parents(".custom-options").addClass("option-hover");
	}, function () {
		$(this).parents(".custom-options").removeClass("option-hover");
	});
	$(".custom-select-trigger").on("click", function () {
		if ($(this).parent().hasClass('not')) {

		} else {
			$('html').one('click', function () {
				$(".custom-select").removeClass("opened");
			});
			$(this).parents(".custom-select").toggleClass("opened");
			event.stopPropagation();
		}
	});
	$(".custom-option").on("click", function () {
		$(this).parents(".custom-select-wrapper").find("select").val($(this).data("value"));
		//   $(this).parents(".custom-select-wrapper").addClass('change');
		$(this).parents(".custom-options").find(".custom-option").removeClass("selection");
		$(this).addClass("selection");
		$(this).parents(".custom-select").removeClass("opened");
		$(this).parents(".custom-select").find(".custom-select-trigger").text($(this).text());
		$(this).parents(".custom-select").find(".custom-select-trigger").addClass('change');
	});

	$('td[data-href]').addClass('clickable')
		.click(function (e) {
			if (!$(e.target).is('a')) {
				window.location = $(e.target).closest('td').data('href');
			};
		});
	$('tr[data-href]').addClass('clickable')
		.click(function (e) {
			if (!$(e.target).is('a')) {
				window.location = $(e.target).closest('tr').data('href');
			};
		});

	// ダッシュボードのヘッダーのドロワー表示・非表示
	$('.dashboard__header__right__right li').hover(
		function () {
			$(this).find('.dashboard__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.dashboard__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);

	// じょぶふる企業用のヘッダーのドロワー表示・非表示
	$('.jobfull__header__right__right li').hover(
		function () {
			$(this).find('.jobfull__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.jobfull__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);

	// いくじょぶ企業用のヘッダーのドロワー表示・非表示
	$('.ikujob__header__right__right li').hover(
		function () {
			$(this).find('.ikujob__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.ikujob__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);

	// 人材紹介管理のヘッダーのドロワー表示・非表示
	$('.company__header__right__right li').hover(
		function () {
			$(this).find('.company__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.company__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);

	// アカデミー生のヘッダーのドロワー表示・非表示
	$('.course__header__right__right li').hover(
		function () {
			$(this).find('.course__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.course__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);
	$('.course__header__right__right li').hover(
		function () {
			$(this).find('.course__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.course__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);

	// TCA用のヘッダーのドロワー表示・非表示
	$('.tca__header__right__right li').hover(
		function () {
			$(this).find('.tca__header__right__right__drawer').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.tca__header__right__right__drawer').stop(false, false).fadeOut(300);
		}
	);
	$('.tca__header__right__right li').hover(
		function () {
			$(this).find('.tca__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.tca__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);

	// ダッシュボードのヘッダーのサブメニューの表示・非表示
	$('.dashboard__header__right__left li').hover(
		function () {
			$(this).find('.dashboard__header__right__left__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.dashboard__header__right__left__sub').stop(false, false).fadeOut(300);
		}
	);
	$('.dashboard__header__right__right li').hover(
		function () {
			$(this).find('.dashboard__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.dashboard__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);
	$('.jobfull__header__right__left li').hover(
		function () {
			$(this).find('.jobfull__header__right__left__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.jobfull__header__right__left__sub').stop(false, false).fadeOut(300);
		}
	);
	$('.jobfull__header__right__right li').hover(
		function () {
			$(this).find('.jobfull__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.jobfull__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);

	// 人材紹介管理のヘッダーのサブメニューの表示・非表示
	$('.company__header__right__right li').hover(
		function () {
			$(this).find('.company__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.company__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);

	$('.ikujob__header__right__right li').hover(
		function () {
			$(this).find('.ikujob__header__right__right__sub').stop(false, false).fadeIn(300);
		},
		function () {
			$(this).find('.ikujob__header__right__right__sub').stop(false, false).fadeOut(300);
		}
	);

	$('.jobz__list__main__content__bottom__right__star').on('click', function () {
		if ($(this).text() === '保存') {
			$(this).addClass('favorite');
			$(this).text('保存を外す');
		} else {
			$(this).text('保存');
			$(this).removeClass('favorite');
		}
	});

	$('.jobz__details__right__top a:first-child').on('click', function () {
		if ($(this).text() === 'お気に入りに保存') {
			$(this).addClass('favorite');
			$(this).text('保存を外す');
		} else {
			$(this).text('お気に入りに保存');
			$(this).removeClass('favorite');
		}
	});

	//$('.jobs__details__right__status__contents__stop').on('click', function () {
	//    if ($(this).text() === '募集停止') {
	//      $(this).addClass('stop');
	//      $(this).text('停止解除');
	//    } else {
	//      $(this).text('募集停止');
	//      $(this).removeClass('stop');
	//    }
	//});

	$('.academy__student__result__right__content__open').on('click', function () {
		if ($(this).text() === '開示する') {
			$(this).addClass('stop');
			$(this).text('開示済み');
		}
	});

	// チャットのtextarea自動で行追加
	var $textarea = $('#textarea');
	var lineHeight = parseInt($textarea.css('lineHeight'));
	$textarea.on('input', function (e) {
		var lines = ($(this).val() + '\n').match(/\n/g).length;
		$(this).height(lineHeight * lines);
	});
	// 新規求人作成のテキスト入力欄
	var $textarea = $('.textarea');
	var lineHeight = parseInt($textarea.css('lineHeight'));
	$textarea.on('input', function (e) {
		var lines = ($(this).val() + '\n').match(/\n/g).length;
		$(this).height(lineHeight * lines);
	});

	// 質問を追加する
	$(document).on('click', '.jobs__create__left__center__contents__content__tass__a', function () {
		var $element_cnt = $('.jobs__create__left__center__contents__content__tass').length;
		var $question_contents =
			`
			<table class="jobs__create__left__center__contents__content__tass show">
			  <tr>
				  <th class="question__title" rowspan="2"><p>質問${$element_cnt + 1}</p>
					  <input name="questions[${$element_cnt}][id]" type="hidden" value="">
				  </th>
				  <th>Q.質問</th>
				  <td><textarea name="questions[${$element_cnt}][question]" rows="1" class="textarea"></textarea></td>
					<th class="question__delete" rowspan="2">&#10005;</th>
			  </tr>
			  <tr>
				  <th>A.回答</th>
				  <td><textarea name="questions[${$element_cnt}][answer]" rows="1" class="textarea"></textarea></td>
			  </tr>
		  </table>
		`;
		$('.jobs__create__left__center__contents__content__right').before($question_contents);
	});

	$(document).on('click', '.question__delete', function () {
		$(this).parent().parent().parent().remove();
		$('.jobs__create__left__center__contents__content__tass').each(function (i, element) {
			console.log();

			$(element).children('tbody').children('tr').children('.question__title').children('p').text('質問' + (i + 1));
			$(element).children('tbody').children('tr').children('.question__title').children('input').attr('name', 'questions[' + i + '][id]');
			$(element).children('tbody').children('tr').children('.question__title').children('input').val(i + 1);

			$(element).children('tbody').children('tr:first').children('td').children('textarea').attr('name', 'questions[' + i + '][question]');

			$(element).children('tbody').children('tr:last').children('td').children('textarea').attr('name', 'questions[' + i + '][answer]');
		});
	});

	$('.jobfull__details__left__center__contents__rights a').click(function () {
		$('.jobfull__details__left__center__contents__tables').find('.shows').next('.jobfull__details__left__center__contents__table').addClass('shows');
	});


	$('.seeker__registration__content__rights a').click(function () {
		$('.seeker__registration__content').find('.show').next('.seeker__registration__content__blockss').addClass('show');
	});

	$('.seeker__jobz__content__rights a').click(function () {
		$('.seeker__jobz__content').find('.show').next('.seeker__jobz__content__blockss').addClass('show');
	});

	$('.jobs__create__left__center__contents__content__ta__flex__a').click(function () {
		$('.jobs__create__left__center__contents__content__ta__flex__input').show();
	});

	// カリキュラムを追加する
	$('.jobfull_curriculum_lesson_plus a').click(function () {
		$('.jobfull_curriculum_1').find('.shows').next('.jobfull_curriculum_lesson').addClass('shows');
	});

	// 設問を追加する
	$('.jobfull_curriculum_form_plus a').click(function () {
		$('.jobfull_curriculum_2').find('.shows').next('.jobfull_curriculum_form').addClass('shows');
	});

	// 月間スケジュールのカレンダー変更
	$('.dashboard__company__top__left__arrow__prev').click(function () {
		let prev = $('.dashboard__company__top__left__flex__left__month').find('p.show').index();
		$('.dashboard__company__top__left__flex__left__month p').removeClass('show');
		$('.dashboard__company__top__left__content').removeClass('show');
		$('.dashboard__company__top__left__flex__left__month p').eq(prev - 1).addClass('show');
		$('.dashboard__company__top__left__content').eq(prev - 1).addClass('show');
	});

	$('.dashboard__company__top__left__arrow__next').click(function () {
		let next = $('.dashboard__company__top__left__flex__left__month').find('p.show').index();
		$('.dashboard__company__top__left__flex__left__month p').removeClass('show');
		$('.dashboard__company__top__left__content').removeClass('show');
		$('.dashboard__company__top__left__flex__left__month p').eq(next + 1).addClass('show');
		$('.dashboard__company__top__left__content').eq(next + 1).addClass('show');
	});

	// 月間スケジュールのカレンダー変更
	$('.company__company__top__left__arrow__prev').click(function () {
		let prev = $('.company__company__top__left__flex__left__month').find('p.show').index();
		$('.company__company__top__left__flex__left__month p').removeClass('show');
		$('.company__company__top__left__content').removeClass('show');
		$('.company__company__top__left__flex__left__month p').eq(prev - 1).addClass('show');
		$('.company__company__top__left__content').eq(prev - 1).addClass('show');
	});

	$('.company__company__top__left__arrow__next').click(function () {
		let next = $('.company__company__top__left__flex__left__month').find('p.show').index();
		$('.company__company__top__left__flex__left__month p').removeClass('show');
		$('.company__company__top__left__content').removeClass('show');
		$('.company__company__top__left__flex__left__month p').eq(next + 1).addClass('show');
		$('.company__company__top__left__content').eq(next + 1).addClass('show');
	});

	// 日毎スケジュールの予定変更
	$('.dashboard__company__top__right__arrow__prev').click(function () {
		let prevs = $('.dashboard__company__top__right__flex__left__day').find('p.show').index();
		$('.dashboard__company__top__right__flex__left__day p').removeClass('show');
		$('.dashboard__company__top__right__content').removeClass('show');
		$('.dashboard__company__top__right__flex__left__day p').eq(prevs - 1).addClass('show');
		$('.dashboard__company__top__right__content').eq(prevs - 1).addClass('show');
	});

	$('.dashboard__company__top__right__arrow__next').click(function () {
		let nexts = $('.dashboard__company__top__right__flex__left__day').find('p.show').index();
		$('.dashboard__company__top__right__flex__left__day p').removeClass('show');
		$('.dashboard__company__top__right__content').removeClass('show');
		$('.dashboard__company__top__right__flex__left__day p').eq(nexts + 1).addClass('show');
		$('.dashboard__company__top__right__content').eq(nexts + 1).addClass('show');
	});

	// 日毎スケジュールの予定変更
	$('.company__company__top__right__arrow__prev').click(function () {
		let prevs = $('.company__company__top__right__flex__left__day').find('p.show').index();
		$('.company__company__top__right__flex__left__day p').removeClass('show');
		$('.company__company__top__right__content').removeClass('show');
		$('.company__company__top__right__flex__left__day p').eq(prevs - 1).addClass('show');
		$('.company__company__top__right__content').eq(prevs - 1).addClass('show');
	});

	$('.company__company__top__right__arrow__next').click(function () {
		let nexts = $('.company__company__top__right__flex__left__day').find('p.show').index();
		$('.company__company__top__right__flex__left__day p').removeClass('show');
		$('.company__company__top__right__content').removeClass('show');
		$('.company__company__top__right__flex__left__day p').eq(nexts + 1).addClass('show');
		$('.company__company__top__right__content').eq(nexts + 1).addClass('show');
	});

	$(".seeker__registration__content__blocks__right__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__registration__content__blocks__right__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	$(".seeker__registration__content__blocks__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__registration__content__blocks__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	$(".selection__dra__nine__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__nine__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	//   求人詳細ページ
	$(".jobs__details__right__form__bottom__left__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".jobs__details__right__form__bottom__left__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	$('.seeker__information__left__center__contents__content__table__flex__a').hide();
	$(".seeker__information__left__center__contents__content__table__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__information__left__center__contents__content__table__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.seeker__information__left__center__contents__content__table__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.seeker__information__left__center__contents__content__table__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__one__content__flex__right__a').hide();
	$(".selection__dra__one__content__flex__right__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__one__content__flex__right__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__one__content__flex__right__a').show();
		} else {

		}
	});

	$('.selection__dra__eight__three__flex__a').hide();
	$(".selection__dra__eight__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__eight__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__eight__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__eight__three__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__nine__three__flex__a').hide();
	$(".selection__dra__nine__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__nine__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__nine__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__nine__three__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__ten__three__flex__a').hide();
	$(".selection__dra__ten__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__ten__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__ten__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__ten__three__flex__a').show();
		} else {

		}
	});

	$('.seeker__registration__content__blocks__flex__a').hide();
	$(".seeker__registration__content__blocks__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__registration__content__blocks__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.seeker__registration__content__blocks__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.seeker__registration__content__blocks__flex__a').show();
		} else {

		}
	});

	$('.seeker__jobz__content__blocks__flex__a').hide();
	$(".seeker__jobz__content__blocks__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__jobz__content__blocks__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.seeker__jobz__content__blocks__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.seeker__jobz__content__blocks__flex__a').show();
		} else {

		}
	});

	$('.seeker__ses__content__blocks__flex__a').hide();
	$(".seeker__ses__content__blocks__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".seeker__ses__content__blocks__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.seeker__ses__content__blocks__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.seeker__ses__content__blocks__flex__a').show();
		} else {

		}
	});

	$('.seeker__information__left__center__contents__content__table__flex i').click(function () {
		$(this).siblings('.seeker__information__left__center__contents__content__table__apps').find('label').show();
		$(this).siblings('.seeker__information__left__center__contents__content__table__apps').find('.seeker__information__left__center__contents__content__table__flex__a').hide();
		$(this).parent('.seeker__information__left__center__contents__content__table__flex').find('.seeker__information__left__center__contents__content__table__apps').find('label').removeClass('changed');
		$(this).parent('.seeker__information__left__center__contents__content__table__flex').find(".seeker__information__left__center__contents__content__table__apps").find('.filename').empty();
		$(this).parent('.seeker__information__left__center__contents__content__table__flex').find(".seeker__information__left__center__contents__content__table__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.seeker__information__left__center__contents__content__table__flex').find(".seeker__information__left__center__contents__content__table__apps").find('.filename').remove();
	});

	$('.selection__dra__one__content__flex__right i').click(function () {
		$(this).siblings('.selection__dra__one__content__flex__right__apps').find('label').show();
		$(this).siblings('.selection__dra__one__content__flex__right__apps').find('.selection__dra__one__content__flex__right__a').hide();
		$(this).parent('.selection__dra__one__content__flex__right').find('.selection__dra__one__content__flex__right__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__one__content__flex__right').find(".selection__dra__one__content__flex__right__apps").find('.filename').empty();
		$(this).parent('.selection__dra__one__content__flex__right').find(".selection__dra__one__content__flex__right__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__one__content__flex__right').find(".selection__dra__one__content__flex__right__apps").find('.filename').remove();
	});

	$('.seeker__registration__content__blocks__flex i').click(function () {
		$(this).siblings('.seeker__registration__content__blocks__apps').find('label').show();
		$(this).siblings('.seeker__registration__content__blocks__apps').find('.seeker__registration__content__blocks__flex__a').hide();
		$(this).parent('.seeker__registration__content__blocks__flex').find('.seeker__registration__content__blocks__apps').find('label').removeClass('changed');
		$(this).parent('.seeker__registration__content__blocks__flex').find(".seeker__registration__content__blocks__apps").find('.filename').empty();
		$(this).parent('.seeker__registration__content__blocks__flex').find(".seeker__registration__content__blocks__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.seeker__registration__content__blocks__flex').find(".seeker__registration__content__blocks__apps").find('.filename').remove();
	});

	$('.seeker__jobz__content__blocks__flex i').click(function () {
		$(this).siblings('.seeker__jobz__content__blocks__apps').find('label').show();
		$(this).siblings('.seeker__jobz__content__blocks__apps').find('.seeker__jobz__content__blocks__flex__a').hide();
		$(this).parent('.seeker__jobz__content__blocks__flex').find('.seeker__jobz__content__blocks__apps').find('label').removeClass('changed');
		$(this).parent('.seeker__jobz__content__blocks__flex').find(".seeker__jobz__content__blocks__apps").find('.filename').empty();
		$(this).parent('.seeker__jobz__content__blocks__flex').find(".seeker__jobz__content__blocks__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.seeker__jobz__content__blocks__flex').find(".seeker__jobz__content__blocks__apps").find('.filename').remove();
	});

	$('.seeker__ses__content__blocks__flex i').click(function () {
		$(this).siblings('.seeker__ses__content__blocks__apps').find('label').show();
		$(this).siblings('.seeker__ses__content__blocks__apps').find('.seeker__ses__content__blocks__flex__a').hide();
		$(this).parent('.seeker__ses__content__blocks__flex').find('.seeker__ses__content__blocks__apps').find('label').removeClass('changed');
		$(this).parent('.seeker__ses__content__blocks__flex').find(".seeker__ses__content__blocks__apps").find('.filename').empty();
		$(this).parent('.seeker__ses__content__blocks__flex').find(".seeker__ses__content__blocks__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.seeker__ses__content__blocks__flex').find(".seeker__ses__content__blocks__apps").find('.filename').remove();
	});

	$('.selection__dra__eight__three__flex i').click(function () {
		$(this).siblings('.selection__dra__eight__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__eight__three__flex__apps').find('.selection__dra__eight__three__flex__a').hide();
		$(this).parent('.selection__dra__eight__three__flex').find('.selection__dra__eight__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__eight__three__flex').find(".selection__dra__eight__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__eight__three__flex').find(".selection__dra__eight__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__eight__three__flex').find(".selection__dra__eight__three__flex__apps").find('.filename').remove();
	});

	$('.selection__dra__nine__three__flex i').click(function () {
		$(this).siblings('.selection__dra__nine__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__nine__three__flex__apps').find('.selection__dra__nine__three__flex__a').hide();
		$(this).parent('.selection__dra__nine__three__flex').find('.selection__dra__nine__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__nine__three__flex').find(".selection__dra__nine__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__nine__three__flex').find(".selection__dra__nine__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__nine__three__flex').find(".selection__dra__nine__three__flex__apps").find('.filename').remove();
	});

	$('.selection__dra__ten__three__flex i').click(function () {
		$(this).siblings('.selection__dra__ten__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__ten__three__flex__apps').find('.selection__dra__ten__three__flex__a').hide();
		$(this).parent('.selection__dra__ten__three__flex').find('.selection__dra__ten__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__ten__three__flex').find(".selection__dra__ten__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__ten__three__flex').find(".selection__dra__ten__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__ten__three__flex').find(".selection__dra__ten__three__flex__apps").find('.filename').remove();
	});

	$(".jobs__create__left__top__right__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".jobs__create__left__top__right__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	//   エントリーフォーム
	$(".selection__dra__one__content__flex__right__apps__app__one").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps__one").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});
	$(".selection__dra__one__content__flex__right__apps__app__two").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps__two").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});
	$(".selection__dra__one__content__flex__right__apps__app__three").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps__three").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});
	$(".selection__dra__one__content__flex__right__apps__app__four").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps__four").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});
	$(".selection__dra__one__content__flex__right__apps__app__five").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__one__content__flex__right__apps__five").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
	});

	$('.setting__contact__contact__top__menus').click(function () {
		$(this).find('.setting__contact__contact__top__menus__text').slideToggle();
	});

	//チャット　TCA
	$('.academy__student__tca__icons').click(function () {
		if ($('.academy__student__tca__icons__one').hasClass('show')) {
			$(this).find('.academy__student__tca__icons__one').removeClass('show');
			$(this).find('.academy__student__tca__icons__two').addClass('show');
			$('.academy__student__tca__chats').fadeIn(180);
			$('.academy__student__tca__chats').addClass('show');
		} else {
			$(this).find('.academy__student__tca__icons__two').removeClass('show');
			$(this).find('.academy__student__tca__icons__one').addClass('show');
			$('.academy__student__tca__chats').fadeOut(180);
			$('.academy__student__tca__chats').removeClass('show');
		}
	});

	//チャット　SES
	$('.academy__student__study__icons').click(function () {
		if ($('.academy__student__study__icons__one').hasClass('show')) {
			$(this).find('.academy__student__study__icons__one').removeClass('show');
			$(this).find('.academy__student__study__icons__two').addClass('show');
			$('.academy__student__study__chat').fadeIn(180);
			$('.academy__student__study__chat').addClass('show');
		} else {
			$(this).find('.academy__student__study__icons__two').removeClass('show');
			$(this).find('.academy__student__study__icons__one').addClass('show');
			$('.academy__student__study__chat').fadeOut(180);
			$('.academy__student__study__chat').removeClass('show');
		}
	});

	//チャット　いくじょぶ生
	$('.academy__student__ikujob__icons').click(function () {
		if ($('.academy__student__study__icons__one').hasClass('show')) {
			$(this).find('.academy__student__study__icons__one').removeClass('show');
			$(this).find('.academy__student__study__icons__two').addClass('show');
			$('.academy__student__study__chat').fadeIn(180);
			$('.academy__student__study__chat').addClass('show');
		} else {
			$(this).find('.academy__student__study__icons__two').removeClass('show');
			$(this).find('.academy__student__study__icons__one').addClass('show');
			$('.academy__student__study__chat').fadeOut(180);
			$('.academy__student__study__chat').removeClass('show');
		}
	});

	//チャット　じょぶふる
	$('.academy__student__jobfull__icons').click(function () {
		if ($('.academy__student__study__icons__one').hasClass('show')) {
			$(this).find('.academy__student__study__icons__one').removeClass('show');
			$(this).find('.academy__student__study__icons__two').addClass('show');
			$('.academy__student__study__chat').fadeIn(180);
			$('.academy__student__study__chat').addClass('show');
		} else {
			$(this).find('.academy__student__study__icons__two').removeClass('show');
			$(this).find('.academy__student__study__icons__one').addClass('show');
			$('.academy__student__study__chat').fadeOut(180);
			$('.academy__student__study__chat').removeClass('show');
		}
	});

	// 公開日の処理
	$('input[name="startdate"]:radio').change(function () {
		var radioval = $(this).val();
		if (radioval == 2) {
			$('.jobs__create__left__top__left__flex__da').show();
		} else {
			$('.jobs__create__left__top__left__flex__da').hide();
		}
	});
	// 公開終了日の処理
	$('input[name="enddate"]:radio').change(function () {
		var radioval = $(this).val();
		if (radioval == 2) {
			$('.jobs__create__left__top__left__flex__date').show();
		} else {
			$('.jobs__create__left__top__left__flex__date').hide();
		}
	});

	// $('.jobs__create__left__center__contents__content__ta__flexs').hide();
	// $("#input").keydown(function() {
	//     if( event.keyCode == 13 ) {
	//         $('.jobs__create__left__center__contents__content__ta__flexs').find('.output').html($('#input')[0].value);
	//         $('.jobs__create__left__center__contents__content__ta__flexs').show();
	//         $('.jobs__create__left__center__contents__content__ta__flex__input').val('');
	//     }
	//   });

	$('.jobs__create__left__center__contents__content__ta__flexs').hide();
	$("#input").keydown(function () {
		if (event.keyCode == 13) {
			$('.shows').find('.output').html($('#input')[0].value);
			$('.shows').show();
			$('.shows').addClass('active');
			$('.jobs__create__left__center__contents__content__ta td').find('.shows').next('.jobs__create__left__center__contents__content__ta__flexs').addClass('shows');
			$('.shows').first().removeClass('shows');
			$('.jobs__create__left__center__contents__content__ta__flex__input').val('');
		}
	});
	$('.jobs__create__left__center__contents__content__ta__flexs').click(function () {
		if (!($(this).find('input').prop('checked'))) {
			$(this).removeClass('active');
		} else {
			$(this).addClass('active');
		}
	});


	/////選考詳細//////
	// エントリーフォームの送信確認
	$('.selection__dra__one__bottom__input').on('click', function () {
		// if($('.selection__dra__one__content__textone').val() === '' || $('.selection__dra__one__content__texttwo').val() === '' || (!$('input[name=selectionOne]').is(':checked')) || (!$('input[name=selectionTwo]').is(':checked')) || (!$('input[name=selectionThree]').is(':checked')) || (!$('input[name=selectionFour]').is(':checked')) || (!$('input[name=selectionFive]').is(':checked'))) {
		if ($('.selection__dra__one__content__textone').val() === '') {
			$('.selection__dra__one__content__textone').addClass('false');
			$('.selection__dra__one__content__textone').siblings('.error').addClass('false');
		} else {
			$('.selection__dra__one__content__textone').removeClass('false');
			$('.selection__dra__one__content__textone').siblings('.error').removeClass('false');
		}
		if ($('.selection__dra__one__content__texttwo').val() === '') {
			$('.selection__dra__one__content__texttwo').addClass('false');
			$('.selection__dra__one__content__texttwo').siblings('.error').addClass('false');
		} else {
			$('.selection__dra__one__content__texttwo').removeClass('false');
			$('.selection__dra__one__content__texttwo').siblings('.error').removeClass('false');
		}
		if (!$('input[name=selectionOne]').is(':checked')) {
			$('.selectionOne').addClass('false');
			$('.selectionOne').find('.error').addClass('false');
		} else {
			$('.selectionOne').removeClass('false');
			$('.selectionOne').find('.error').removeClass('false');
			if (!$('input[name=selectionOne]').first().is(':checked')) {
				if (!($('.selectionOne').find('.selection__dra__one__content__flex__right__apps').find('label').hasClass('changed'))) {
					$('.selectionOne').last().addClass('fals');
					$('.selectionOne').find('.erro').addClass('fals');
				} else {
					$('.selectionOne').last().removeClass('fals');
					$('.selectionOne').find('.erro').removeClass('fals');
				}
			} else {
				$('.selectionOne').last().removeClass('fals');
				$('.selectionOne').find('.erro').removeClass('fals');
			}
		}
		if (!$('input[name=selectionTwo]').is(':checked')) {
			$('.selectionTwo').addClass('false');
			$('.selectionTwo').find('.error').addClass('false');
		} else {
			$('.selectionTwo').removeClass('false');
			$('.selectionTwo').find('.error').removeClass('false');
			if (!$('input[name=selectionTwo]').first().is(':checked')) {
				if (!($('.selectionTwo').find('.selection__dra__one__content__flex__right__apps').find('label').hasClass('changed'))) {
					$('.selectionTwo').last().addClass('fals');
					$('.selectionTwo').find('.erro').addClass('fals');
				} else {
					$('.selectionTwo').last().removeClass('fals');
					$('.selectionTwo').find('.erro').removeClass('fals');
				}
			} else {
				$('.selectionTwo').last().removeClass('fals');
				$('.selectionTwo').find('.erro').removeClass('fals');
			}
		}
		if (!$('input[name=selectionThree]').is(':checked')) {
			$('.selectionThree').addClass('false');
			$('.selectionThree').find('.error').addClass('false');
		} else {
			$('.selectionThree').removeClass('false');
			$('.selectionThree').find('.error').removeClass('false');
			if (!$('input[name=selectionThree]').first().is(':checked')) {
				if (!($('.selectionThree').find('.selection__dra__one__content__flex__right__apps').find('label').hasClass('changed'))) {
					$('.selectionThree').last().addClass('fals');
					$('.selectionThree').find('.erro').addClass('fals');
				} else {
					$('.selectionThree').last().removeClass('fals');
					$('.selectionThree').find('.erro').removeClass('fals');
				}
			} else {
				$('.selectionThree').last().removeClass('fals');
				$('.selectionThree').find('.erro').removeClass('fals');
			}
		}
		if (!$('input[name=selectionFour]').is(':checked')) {
			$('.selectionFour').addClass('false');
			$('.selectionFour').find('.error').addClass('false');
		} else {
			$('.selectionFour').removeClass('false');
			$('.selectionFour').find('.error').removeClass('false');
			if (!$('input[name=selectionFour]').first().is(':checked')) {
				if (!($('.selectionFour').find('.selection__dra__one__content__flex__right__apps').find('label').hasClass('changed'))) {
					$('.selectionFour').last().addClass('fals');
					$('.selectionFour').find('.erro').addClass('fals');
				} else {
					$('.selectionFour').last().removeClass('fals');
					$('.selectionFour').find('.erro').removeClass('fals');
				}
			} else {
				$('.selectionFour').last().removeClass('fals');
				$('.selectionFour').find('.erro').removeClass('fals');
			}
		}
		if (!$('input[name=selectionFive]').is(':checked')) {
			$('.selectionFive').addClass('false');
			$('.selectionFive').find('.error').addClass('false');
		} else {
			$('.selectionFive').removeClass('false');
			$('.selectionFive').find('.error').removeClass('false');
			if (!$('input[name=selectionFive]').first().is(':checked')) {
				if (!($('.selectionFive').find('.selection__dra__one__content__flex__right__apps').find('label').hasClass('changed'))) {
					$('.selectionFive').last().addClass('fals');
					$('.selectionFive').find('.erro').addClass('fals');
				} else {
					$('.selectionFive').last().removeClass('fals');
					$('.selectionFive').find('.erro').removeClass('fals');
				}
			} else {
				$('.selectionFive').last().removeClass('fals');
				$('.selectionFive').find('.erro').removeClass('fals');
			}
		}
		// return false;
		// }
	});

	//   辞退申請
	$('.selection__dra__two__bottom__input').on('click', function () {
		if ($('.selection__dra__two__content textarea').val() === '') {
			$('.selection__dra__two__content textarea').addClass('false');
			$('.selection__dra__two__content').find('.error').addClass('false');
		} else {
			$('.selection__dra__two__content textarea').removeClass('false');
			$('.selection__dra__two__content').find('.error').removeClass('false');
		}
	});

	// 意思確認
	$('.selection__dra__three__bottom__input').on('click', function () {
		if (!$('.selection__dra__three__content__flex').find('input[name=threeOne]').is(':checked')) {
			$('.selection__dra__three__content').first().find('.error').addClass('false');
		} else {
			$('.selection__dra__three__content').first().find('.error').removeClass('false');
		}
		if ($('.selection__dra__three__con').hasClass('show')) {
			if ($('.selection__dra__three__content textarea').val() === '') {
				$('.selection__dra__three__content textarea').addClass('false');
				$('.selection__dra__three__con').find('.error').addClass('false');
			} else {
				$('.selection__dra__three__content textarea').removeClass('false');
				$('.selection__dra__three__con').find('.error').removeClass('false');
			}
		}
	});

	// 内定承諾意思確認
	$('.selection__dra__offer__bottom__input').on('click', function () {
		if (!$('.selection__dra__offer__one').find('input[name=offerOne]').is(':checked')) {
			$('.selection__dra__offer__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__offer__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offer__con').hasClass('show')) {
			if ($('.selection__dra__offer__content textarea').val() === '') {
				$('.selection__dra__offer__content textarea').addClass('false');
				$('.selection__dra__offer__con').find('.error').addClass('false');
			} else {
				$('.selection__dra__offer__content textarea').removeClass('false');
				$('.selection__dra__offer__con').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__offer__co').hasClass('show')) {
			if ($('.selection__dra__offer__co__flex__left input').val() === '') {
				$('.selection__dra__offer__co').find('.error').addClass('false');
			} else {
				$('.selection__dra__offer__co').find('.error').removeClass('false');
			}
		}
	});

	// 選考書類 確認結果を送る
	$('.selection__dra__job__bottom__input').on('click', function () {
		if (!$('.selection__dra__job__content__flex').find('input[name=jobOne]').is(':checked')) {
			$('.selection__dra__job__content').first().find('.error').addClass('false');
		} else {
			$('.selection__dra__job__content').first().find('.error').removeClass('false');
		}
		if ($('.selection__dra__job__con').hasClass('show')) {
			if ($('.selection__dra__job__content textarea').val() === '') {
				$('.selection__dra__job__content textarea').addClass('false');
				$('.selection__dra__job__con').find('.error').addClass('false');
			} else {
				$('.selection__dra__job__content textarea').removeClass('false');
				$('.selection__dra__job__con').find('.error').removeClass('false');
			}
		}
	});


	// 二次面接の詳細
	$('.selection__dra__fives__bottom__input').on('click', function () {
		// if($('.selection__dra__five__con').hasClass('show')) {
		if ($('.selection__dra__fives__four input').val() === '') {
			$('.selection__dra__fives__four input').addClass('false');
			$('.selection__dra__fives__four').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__four input').removeClass('false');
			$('.selection__dra__fives__four').find('.error').removeClass('false');
		}
		if (!$('.selection__dra__fives__content__flex').find('input[name=fivesThree]').is(':checked')) {
			$('.selection__dra__fives__five').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__five').find('.error').removeClass('false');
		}
		if ($('.selection__dra__fives__six').hasClass('show')) {
			if ($('.selection__dra__fives__six input').val() === '') {
				$('.selection__dra__fives__six input').addClass('false');
				$('.selection__dra__fives__six').find('.error').addClass('false');
			} else {
				$('.selection__dra__fives__six input').removeClass('false');
				$('.selection__dra__fives__six').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__fives__seven textarea').val() === '') {
			$('.selection__dra__fives__seven textarea').addClass('false');
			$('.selection__dra__fives__seven').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__seven textarea').removeClass('false');
			$('.selection__dra__fives__seven').find('.error').removeClass('false');
		}
		if ($('.selection__dra__fives__eight input').val() === '') {
			$('.selection__dra__fives__eight input').addClass('false');
			$('.selection__dra__fives__eight').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__eight input').removeClass('false');
			$('.selection__dra__fives__eight').find('.error').removeClass('false');
		}
		if ($('.selection__dra__fives__nine input').first().val() === '') {
			$('.selection__dra__fives__nine input').first().addClass('false');
		} else {
			$('.selection__dra__fives__nine input').first().removeClass('false');
			$('.selection__dra__fives__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__fives__nine input').last().val() === '') {
			$('.selection__dra__fives__nine input').last().addClass('false');
			$('.selection__dra__fives__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__nine input').last().removeClass('false');
		}
		if ((!$('.selection__dra__fives__nine input').first().val() === '') && (!$('.selection__dra__fives__nine input').last().val() === '')) {
			$('.selection__dra__fives__nine').find('.error').removeClass('false');
		}
	});

	$('.selection__dra__fives__nine__flex__add').click(function () {
		if ($('.selection__dra__fives__nine input').first().val() === '') {
			$('.selection__dra__fives__nine input').first().addClass('false');
		} else {
			$('.selection__dra__fives__nine input').first().removeClass('false');
			$('.selection__dra__fives__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__fives__nine input').last().val() === '') {
			$('.selection__dra__fives__nine input').last().addClass('false');
			$('.selection__dra__fives__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__nine input').last().removeClass('false');
		}
		if ($('.selection__dra__fives__nine input').first().val() === '' && $('.selection__dra__fives__nine input').last().val() === '') {
			$('.selection__dra__fives__nine input').first().addClass('false');
			$('.selection__dra__fives__nine input').last().addClass('false');
			$('.selection__dra__fives__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__fives__nine').find('.error').removeClass('false');
			var date = new Date($('.selection__dra__fives__nine__flex__left__one').val());
			var day = date.getDate();
			var textarea = $('.selection__dra__fives__nine textarea');
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var dateOne = ([year, month, day].join('/'));
			var dateTwo = ($(".selection__dra__fives__nine__flex__left__two").val());
			var dateAll = dateOne + ' ' + dateTwo + '\n';
			textarea.val(textarea.val() + dateAll);
			$('.selection__dra__date__content').find('.shows').find('label').html(dateAll);
			$('.selection__dra__date__content').find('.shows').show();
			$('.selection__dra__date__content').find('.shows').addClass('active');
			$('.selection__dra__date__content').find('.shows').next('.selection__dra__date__content__flex').addClass('shows');
			$('.selection__dra__date__content').find('.shows').first().removeClass('shows');
		}
	});

	// 二次面接の選考結果
	$('.selection__dra__second__bottom__input').on('click', function () {
		if (!$('.selection__dra__second__content__flex').find('input[name=secondOne]').is(':checked')) {
			$('.selection__dra__second__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__second__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__second__two textarea').val() === '') {
			$('.selection__dra__second__two textarea').addClass('false');
			$('.selection__dra__second__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__second__two textarea').removeClass('false');
			$('.selection__dra__second__two').find('.error').removeClass('false');
		}
	});

	$('.selection__dra__second__content__flex').click(function () {
		if ($('.selection__dra__second__content__flex').find('input[name=secondOne]').first().is(':checked')) {
			$('.selection__dra__second__three').addClass('show');
		} else {
			$('.selection__dra__second__three').removeClass('show');
		}
	});

	// 最終面接の詳細
	$('.selection__dra__seconds__bottom__input').on('click', function () {
		// if($('.selection__dra__five__con').hasClass('show')) {
		if ($('.selection__dra__seconds__four input').val() === '') {
			$('.selection__dra__seconds__four input').addClass('false');
			$('.selection__dra__seconds__four').find('.error').addClass('false');
		} else {
			$('.selection__dra__seconds__four input').removeClass('false');
			$('.selection__dra__seconds__four').find('.error').removeClass('false');
		}


		if ($('.selection__dra__seconds__six').hasClass('show')) {
			if ($('.selection__dra__seconds__six input').val() === '') {
				$('.selection__dra__seconds__six input').addClass('false');
				$('.selection__dra__seconds__six').find('.error').addClass('false');
			} else {
				$('.selection__dra__seconds__six input').removeClass('false');
				$('.selection__dra__seconds__six').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__seconds__seven textarea').val() === '') {
			$('.selection__dra__seconds__seven textarea').addClass('false');
			$('.selection__dra__seconds__seven').find('.error').addClass('false');
		} else {
			$('.selection__dra__seconds__seven textarea').removeClass('false');
			$('.selection__dra__seconds__seven').find('.error').removeClass('false');
		}
		if ($('.selection__dra__seconds__eight input').val() === '') {
			$('.selection__dra__seconds__eight input').addClass('false');
			$('.selection__dra__seconds__eight').find('.error').addClass('false');
		} else {
			$('.selection__dra__seconds__eight input').removeClass('false');
			$('.selection__dra__seconds__eight').find('.error').removeClass('false');
		}
		if ($('.selection__dra__seconds__nine input').first().val() === '') {
			$('.selection__dra__seconds__nine input').first().addClass('false');
		} else {
			$('.selection__dra__seconds__nine input').first().removeClass('false');
			$('.selection__dra__seconds__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__seconds__nine input').last().val() === '') {
			$('.selection__dra__seconds__nine input').last().addClass('false');
			$('.selection__dra__seconds__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__seconds__nine input').last().removeClass('false');
		}
		if ((!$('.selection__dra__seconds__nine input').first().val() === '') && (!$('.selection__dra__fives__nine input').last().val() === '')) {
			$('.selection__dra__seconds__nine').find('.error').removeClass('false');
		}
	});

	// 最終面接の選考結果
	$('.selection__dra__seven__bottom__input').on('click', function () {
		if (!$('.selection__dra__seven__content__flex').find('input[name=sevenOne]').is(':checked')) {
			$('.selection__dra__seven__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__seven__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__seven__two textarea').val() === '') {
			$('.selection__dra__seven__two textarea').addClass('false');
			$('.selection__dra__seven__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__seven__two textarea').removeClass('false');
			$('.selection__dra__seven__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__seven__three').hasClass('show')) {
			if (!$('.selection__dra__seven__content__flex').find('input[name=sevenTwo]').is(':checked')) {
				$('.selection__dra__seven__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__three').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__seven__contents__one').hasClass('show')) {
			if ($('.selection__dra__seven__four input').val() === '') {
				$('.selection__dra__seven__four input').addClass('false');
				$('.selection__dra__seven__four').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__four input').removeClass('false');
				$('.selection__dra__seven__four').find('.error').removeClass('false');
			}
			if (!$('.selection__dra__seven__content__flex').find('input[name=sevenThree]').is(':checked')) {
				$('.selection__dra__seven__five').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__five').find('.error').removeClass('false');
			}
			if ($('.selection__dra__seven__six').hasClass('show')) {
				if ($('.selection__dra__seven__six input').val() === '') {
					$('.selection__dra__seven__six input').addClass('false');
					$('.selection__dra__seven__six').find('.error').addClass('false');
				} else {
					$('.selection__dra__seven__six input').removeClass('false');
					$('.selection__dra__seven__six').find('.error').removeClass('false');
				}
			}
			if ($('.selection__dra__seven__seven textarea').val() === '') {
				$('.selection__dra__seven__seven textarea').addClass('false');
				$('.selection__dra__seven__seven').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__seven textarea').removeClass('false');
				$('.selection__dra__seven__seven').find('.error').removeClass('false');
			}
			if ($('.selection__dra__seven__eight input').val() === '') {
				$('.selection__dra__seven__eight input').addClass('false');
				$('.selection__dra__seven__eight').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__eight input').removeClass('false');
				$('.selection__dra__seven__eight').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__seven__contents__two').hasClass('show')) {
			if ($('.selection__dra__seven__nine input').val() === '') {
				$('.selection__dra__seven__nine input').addClass('false');
				$('.selection__dra__seven__nine').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__nine input').removeClass('false');
				$('.selection__dra__seven__nine').find('.error').removeClass('false');
			}
			if ($('.selection__dra__seven__ten input').val() === '') {
				$('.selection__dra__seven__ten input').addClass('false');
				$('.selection__dra__seven__ten').find('.error').addClass('false');
			} else {
				$('.selection__dra__seven__ten input').removeClass('false');
				$('.selection__dra__seven__ten').find('.error').removeClass('false');
			}
		}
	});

	// オファー面談の詳細
	$('.selection__dra__offerr__bottom__input').on('click', function () {
		if ($('.selection__dra__offerr__four input').val() === '') {
			$('.selection__dra__offerr__four input').addClass('false');
			$('.selection__dra__offerr__four').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__four input').removeClass('false');
			$('.selection__dra__offerr__four').find('.error').removeClass('false');
		}
		if (!$('.selection__dra__offerr__content__flex').find('input[name=offerrThree]').is(':checked')) {
			$('.selection__dra__offerr__five').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__five').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__six').hasClass('show')) {
			if ($('.selection__dra__offerr__six input').val() === '') {
				$('.selection__dra__offerr__six input').addClass('false');
				$('.selection__dra__offerr__six').find('.error').addClass('false');
			} else {
				$('.selection__dra__offerr__six input').removeClass('false');
				$('.selection__dra__offerr__six').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__offerr__seven textarea').val() === '') {
			$('.selection__dra__offerr__seven textarea').addClass('false');
			$('.selection__dra__offerr__seven').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__seven textarea').removeClass('false');
			$('.selection__dra__offerr__seven').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__eight input').val() === '') {
			$('.selection__dra__offerr__eight input').addClass('false');
			$('.selection__dra__offerr__eight').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__eight input').removeClass('false');
			$('.selection__dra__offerr__eight').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').first().val() === '') {
			$('.selection__dra__offerr__nine input').first().addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').first().removeClass('false');
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').last().val() === '') {
			$('.selection__dra__offerr__nine input').last().addClass('false');
			$('.selection__dra__offerr__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').last().removeClass('false');
		}
		if ((!$('.selection__dra__offerr__nine input').first().val() === '') && (!$('.selection__dra__offerr__nine input').last().val() === '')) {
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
		}
	});

	$('.selection__dra__offerr__nine__flex__add').click(function () {
		if ($('.selection__dra__offerr__nine input').first().val() === '') {
			$('.selection__dra__offerr__nine input').first().addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').first().removeClass('false');
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').last().val() === '') {
			$('.selection__dra__offerr__nine input').last().addClass('false');
			$('.selection__dra__offerr__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').last().removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').first().val() === '' && $('.selection__dra__offerr__nine input').last().val() === '') {
			$('.selection__dra__offerr__nine input').first().addClass('false');
			$('.selection__dra__offerr__nine input').last().addClass('false');
			$('.selection__dra__offerr__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
			var date = new Date($('.selection__dra__offerr__nine__flex__left__one').val());
			var day = date.getDate();
			var textarea = $('.selection__dra__offerr__nine textarea');
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var dateOne = ([year, month, day].join('/'));
			var dateTwo = ($(".selection__dra__offerr__nine__flex__left__two").val());
			var dateAll = dateOne + ' ' + dateTwo + '\n';
			textarea.val(textarea.val() + dateAll);
		}
	});

	$('.selection__dra__offerr__content__flex').on('click', function () {
		if ($('input[name=offerrThree]').first().is(':checked')) {
			$('.selection__dra__offerr__six').addClass('show');
		} else {
			$('.selection__dra__offerr__six').removeClass('show');
		}
	});


	//リンク
	$('.selection__link__offerr').click(function () {
		$('.selection__drass__offerr').addClass('show');
		$('.selection__dra__offerr').addClass('show');
		$('.selection__back').show();
	});


	//×
	$('.selection__dra__offerr__top__cross').click(function () {
		$('.selection__drass__offerr').removeClass('show');
		$('.selection__dra__offerr').removeClass('show');
		$('.selection__back').hide();
	});


	// 入社条件
	$('.selection__dra__company__bottom__input').on('click', function () {
		if ($('.selection__dra__company__one input').val() === '') {
			$('.selection__dra__company__one input').addClass('false');
			$('.selection__dra__company__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__company__one input').removeClass('false');
			$('.selection__dra__company__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__company__two input').val() === '') {
			$('.selection__dra__company__two input').addClass('false');
			$('.selection__dra__company__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__company__two input').removeClass('false');
			$('.selection__dra__company__two').find('.error').removeClass('false');
		}
	});

	// 入社条件の確定
	$('.selection__dra__confirm__bottom__input').on('click', function () {
		if ($('.selection__dra__confirm__one input').val() === '') {
			$('.selection__dra__confirm__one input').addClass('false');
			$('.selection__dra__confirm__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__confirm__one input').removeClass('false');
			$('.selection__dra__confirm__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__confirm__two input').first().val() === '') {
			$('.selection__dra__confirm__two input').first().addClass('false');
		} else {
			$('.selection__dra__confirm__two input').first().removeClass('false');
			$('.selection__dra__confirm__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__confirm__two input').last().val() === '') {
			$('.selection__dra__confirm__two input').last().addClass('false');
			$('.selection__dra__confirm__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__confirm__two input').last().removeClass('false');
		}
		if ((!$('.selection__dra__confirm__two input').first().val() === '') && (!$('.selection__dra__offerr__nine input').last().val() === '')) {
			$('.selection__dra__confirm__two').find('.error').removeClass('false');
		}

	});

	$('.selection__links__confirm').click(function () {
		$('.selection__dra__confirm').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__confirm__top__cross').click(function () {
		$('.selection__dra__confirm').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__confirm__three__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});



	// 返金申請
	$('.selection__dra__ten__bottom__input').on('click', function () {
		if ($('.selection__dra__ten__one input').val() === '') {
			$('.selection__dra__ten__one input').addClass('false');
			$('.selection__dra__ten__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__ten__one input').removeClass('false');
			$('.selection__dra__ten__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__ten__two input').val() === '') {
			$('.selection__dra__ten__two input').addClass('false');
			$('.selection__dra__ten__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__ten__two input').removeClass('false');
			$('.selection__dra__ten__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__ten__three input').val() === '') {
			$('.selection__dra__ten__three input').addClass('false');
			$('.selection__dra__ten__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__ten__three input').removeClass('false');
			$('.selection__dra__ten__three').find('.error').removeClass('false');
		}

	});

	//リンク
	$('.selection__link__seven').click(function () {
		$('.selection__drass__ten').addClass('show');
		$('.selection__dra__ten').addClass('show');
		$('.selection__back').show();
	});

	// 返金申請結果を送る
	$('.selection__dra__jobs__bottom__input').on('click', function () {
		if ($('.selection__dra__confirm__one input').val() === '') {
			$('.selection__dra__confirm__one input').addClass('false');
			$('.selection__dra__confirm__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__confirm__one input').removeClass('false');
			$('.selection__dra__confirm__one').find('.error').removeClass('false');
		}
	});

	//リンク
	$('.selection__link__ten').click(function () {
		$('.selection__dra__confirm').addClass('show');
		$('.selection__dra__confirm__top').addClass('show');
		$('.selection__back').show();
	});


	//フォームの背景//
	$('.selection__link__one, .selection__flex__left__bottom__boxz__content__center__content__button a, .seeker__information__button　seeker__information__button__entry').click(function () {
		$('.selection__dra').addClass('show');
		$('.selection__dra__one').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__two').click(function () {
		$('.selection__dra__two').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__date').click(function () {
		$('.selection__dra__date').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__date__fix').click(function () {
		$('.selection__dra__date__fix').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__links__day').click(function () {
		$('.selection__dra__day').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__three').click(function () {
		$('.selection__dra__three').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__lin__one').click(function () {
		$('.selection__dra__job').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__lin__two').click(function () {
		$('.selection__dra__jobs').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__offer').click(function () {
		$('.selection__dra__offer').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__link__offerr').click(function () {
		$('.selection__dra__offerr').addClass('show');
		$('.selection__back').toggle();
	});

	$('.jobz__details__right__top__four').click(function () {
		$('.jobz__details__dras').addClass('show');
		$('.jobz__details__dra__four').addClass('show');
		$('.jobz__details__back').toggle();
	});

	$('.academy__student__pdcamonth__link__goal').click(function () {
		$('.academy__student__pdcamonth__dras').addClass('show');
		$('.academy__student__pdcamonth__dra__goal').addClass('show');
		$('.academy__student__pdcamonth__back').toggle();
	});
	$('.academy__student__pdcamonth__link__one').click(function () {
		$('.academy__student__pdcamonth__dras').addClass('show');
		$('.academy__student__pdcamonth__dra__one').addClass('show');
		$('.academy__student__pdcamonth__back').toggle();
	});
	$('.academy__student__pdcamonth__link__two').click(function () {
		$('.academy__student__pdcamonth__dras').addClass('show');
		$('.academy__student__pdcamonth__dra__two').addClass('show');
		$('.academy__student__pdcamonth__back').toggle();
	});
	$('.academy__student__pdcamonth__link__three').click(function () {
		$('.academy__student__pdcamonth__dras').addClass('show');
		$('.academy__student__pdcamonth__dra__three').addClass('show');
		$('.academy__student__pdcamonth__back').toggle();
	});
	$('.academy__student__pdcamonth__link__four').click(function () {
		$('.academy__student__pdcamonth__dras').addClass('show');
		$('.academy__student__pdcamonth__dra__four').addClass('show');
		$('.academy__student__pdcamonth__back').toggle();
	});

	$('.selection__links__two').click(function () {
		$('.selection__drass').addClass('show');
		$('.selection__dra__five').addClass('show');
		$('.selection__back').toggle();
	});

	//二次面接詳細
	$('.selection__links__fives').click(function () {
		$('.selection__drass__fives').addClass('show');
		$('.selection__dra__fives').addClass('show');
		$('.selection__back').toggle();
	});
	//最終面接詳細
	$('.selection__links__seconds').click(function () {
		$('.selection__drass__seconds').addClass('show');
		$('.selection__dra__seconds').addClass('show');
		$('.selection__back').toggle();
	});

	//オファー面談詳細
	$('.selection__link__offerr').click(function () {
		$('.selection__drass__offerr').addClass('show');
		$('.selection__dra__offerr').addClass('show');
		$('.selection__back').toggle();
	});

	//内定承諾意思確認
	$('.selection__link__offer').click(function () {
		$('.selection__dra__offer').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__links__second').click(function () {
		$('.selection__drassss__second').addClass('show');
		$('.selection__dra__second').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__links__four').click(function () {
		$('.selection__drassss').addClass('show');
		$('.selection__dra__seven').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__links__five').click(function () {
		$('.selection__dra__eight').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__links__six').click(function () {
		$('.selection__dra__nine').addClass('show');
		$('.selection__back').toggle();
	});


	$('.academy__student__info__id__bottom__a').click(function () {
		$('.academy__student__info__dra').addClass('show');
		$('.academy__student__info__back').toggle();
	});

	$('.course__info__id__bottom__a').click(function () {
		$('.course__info__dra').addClass('show');
		$('.course__info__back').toggle();
	});

	$('.selection__dra__three__content__flex').on('click', function () {
		if ($('input[name=threeOne]').last().is(':checked')) {
			$('.selection__dra__three__con').addClass('show');
		} else {
			$('.selection__dra__three__con').removeClass('show');
		}
	});

	$('.selection__dra__job__content__flex').on('click', function () {
		if ($('input[name=jobOne]').last().is(':checked')) {
			$('.selection__dra__job__con').addClass('show');
		} else {
			$('.selection__dra__job__con').removeClass('show');
		}
	});

	$('.selection__dra__jobs__content__flex').on('click', function () {
		if ($('input[name=jobsOne]').last().is(':checked')) {
			$('.selection__dra__jobs__con').addClass('show');
		} else {
			$('.selection__dra__jobs__con').removeClass('show');
		}
	});

	$('.selection__dra__offer__content__flex').on('click', function () {
		if (!$('input[name=offerOne]').first().is(':checked')) {
			$('.selection__dra__offer__con').addClass('show');
		} else {
			$('.selection__dra__offer__con').removeClass('show');
		}
		if (!$('input[name=offerOne]').last().is(':checked')) {
			$('.selection__dra__offer__co').addClass('show');
		} else {
			$('.selection__dra__offer__co').removeClass('show');
		}
		if (!$('input[name=offerOne]').is(':checked')) {
			$('.selection__dra__offer__con').removeClass('show');
			$('.selection__dra__offer__co').removeClass('show');
		}
	});

	$('.selection__dra__four__content__flex').on('click', function () {
		if ($('input[name=fourOne]').first().is(':checked')) {
			$('.selection__dra__four__con').addClass('show');
			$('.selection__dras').addClass('active');
			$('.selection__dra__four').addClass('active');
		} else {
			$('.selection__dra__four__con').removeClass('show');
			$('.selection__dras').removeClass('active');
			$('.selection__dra__four').removeClass('active');
		}
		if ($('input[name=fourThree]').first().is(':checked')) {
			$('.selection__dra__four__six').addClass('show');
		} else {
			$('.selection__dra__four__six').removeClass('show');
		}
	});

	$('.selection__dra__fives__content__flex').on('click', function () {
		if ($('input[name=fivesThree]').first().is(':checked')) {
			$('.selection__dra__fives__six').addClass('show');
		} else {
			$('.selection__dra__fives__six').removeClass('show');
		}
	});


	$('.selection__dra__seven__content__flex').on('click', function () {
		if ($('input[name=sevenOne]').first().is(':checked')) {
			$('.selection__dra__seven__three').addClass('show');
		} else {
			$('.selection__dra__seven__three').removeClass('show');
		}
		if ($('input[name=sevenTwo]').first().is(':checked')) {
			$('.selection__dra__seven__contents__one').addClass('show');
		} else {
			$('.selection__dra__seven__contents__one').removeClass('show');
		}
		if ($('input[name=sevenTwo]').last().is(':checked')) {
			$('.selection__dra__seven__contents__two').addClass('show');
		} else {
			$('.selection__dra__seven__contents__two').removeClass('show');
		}
		if ($('input[name=sevenTwo]').is(':checked')) {
			$('.selection__drassss').addClass('active');
			$('.selection__dra__seven').addClass('active');
		} else {
			$('.selection__drassss').removeClass('active');
			$('.selection__dra__seven').removeClass('active');
		}
		if ($('input[name=sevenThree]').first().is(':checked')) {
			$('.selection__dra__seven__six').addClass('show');
		} else {
			$('.selection__dra__seven__six').removeClass('show');
		}
		if (!$('input[name=sevenOne]').first().is(':checked')) {
			$('.selection__dra__seven__three').removeClass('show');
			$('.selection__dra__seven__contents__one').removeClass('show');
			$('.selection__dra__seven__contents__two').removeClass('show');
			$('.selection__drassss').removeClass('active');
			$('.selection__dra__seven').removeClass('active');
		}
	});

	$('.selection__dra__one__top__cross').click(function () {
		$('.selection__dra').removeClass('show');
		$('.selection__dra__one').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__two__top__cross').click(function () {
		$('.selection__dra__two').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__date__top__cross').click(function () {
		$('.selection__dra__date').removeClass('show');
		$('.selection__back').hide();
	});


	$('.selection__dra__day__top__cross').click(function () {
		$('.selection__dra__day').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__three__top__cross').click(function () {
		$('.selection__dra__three').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__job__top__cross').click(function () {
		$('.selection__dra__job').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__jobs__top__cross').click(function () {
		$('.selection__dra__jobs').removeClass('show');
		$('.selection__back').hide();
	});

	//内定承諾意思確認
	$('.selection__dra__offer__top__cross').click(function () {
		$('.selection__drass__offer').removeClass('show');
		$('.selection__dra__offer').removeClass('show');
		$('.selection__back').hide();
	});
	//リンク
	$('.selection__link__offer').click(function () {
		$('.selection__drass__offer').addClass('show');
		$('.selection__dra__offer').addClass('show');
		$('.selection__back').show();
	});

	$('.selection__dra__four__top__cross').click(function () {
		$('.selection__dra__four').removeClass('show');
		$('.selection__dras').removeClass('show');
		$('.selection__back').hide();
	});

	$('.jobz__details__dra__four__top__cross').click(function () {
		$('.jobz__details__dra__four').removeClass('show');
		$('.jobz__details__dras').removeClass('show');
		$('.jobz__details__back').hide();
	});

	$('.academy__student__pdcamonth__dra__goal__top__cross').click(function () {
		$('.academy__student__pdcamonth__dra__goal').removeClass('show');
		$('.academy__student__pdcamonth__dras').removeClass('show');
		$('.academy__student__pdcamonth__back').hide();
	});
	$('.academy__student__pdcamonth__dra__one__top__cross').click(function () {
		$('.academy__student__pdcamonth__dra__one').removeClass('show');
		$('.academy__student__pdcamonth__dras').removeClass('show');
		$('.academy__student__pdcamonth__back').hide();
	});
	$('.academy__student__pdcamonth__dra__two__top__cross').click(function () {
		$('.academy__student__pdcamonth__dra__two').removeClass('show');
		$('.academy__student__pdcamonth__dras').removeClass('show');
		$('.academy__student__pdcamonth__back').hide();
	});
	$('.academy__student__pdcamonth__dra__three__top__cross').click(function () {
		$('.academy__student__pdcamonth__dra__three').removeClass('show');
		$('.academy__student__pdcamonth__dras').removeClass('show');
		$('.academy__student__pdcamonth__back').hide();
	});
	$('.academy__student__pdcamonth__dra__four__top__cross').click(function () {
		$('.academy__student__pdcamonth__dra__four').removeClass('show');
		$('.academy__student__pdcamonth__dras').removeClass('show');
		$('.academy__student__pdcamonth__back').hide();
	});


	$('.selection__dra__five__top__cross').click(function () {
		$('.selection__dra__five').removeClass('show');
		$('.selection__drass').removeClass('show');
		$('.selection__back').hide();
	});


	$('.selection__dra__seconds__top__cross').click(function () {
		$('.selection__dra__once').removeClass('show');
		$('.selection__drass__once').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__second__top__cross').click(function () {
		$('.selection__dra__second').removeClass('show');
		$('.selection__drassss__second').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__seven__top__cross').click(function () {
		$('.selection__dra__seven').removeClass('show');
		$('.selection__drassss').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__eight__top__cross').click(function () {
		$('.selection__dra__eight').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__nine__top__cross').click(function () {
		$('.selection__dra__nine').removeClass('show');
		$('.selection__back').hide();
	});


	$('.academy__student__info__dra__top__cross').click(function () {
		$('.academy__student__info__dra').removeClass('show');
		$('.academy__student__info__back').hide();
	});

	$('.course__info__dra__top__cross').click(function () {
		$('.course__info__dra').removeClass('show');
		$('.course__info__back').hide();
	});

	$('.selection__dra__one__content__flex__right__one').click(function () {
		$('.selection__drawer').addClass('active');
		$('.jobz__back').show();

	});

	$('.seeker__information__left__center__contents__content__table__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('.selection__dra__one__content__flex__right__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('.selection__dra__eight__three__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('.selection__dra__nine__three__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('.seeker__registration__content__blocks__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('#textnumber').on('input', function (e) {
		let value = $(e.currentTarget).val();
		value = value
			.replace(/[０-９]/g, function (s) {
				return String.fromCharCode(s.charCodeAt(0) - 65248);
			})
			.replace(/[^0-9]/g, '');
		$(e.currentTarget).val(value);
	});

	// 新規求人作成
	$('.jobs__create__buttons input').click(function () {
		if ($('.jobs__create__one textarea').val() === '') {
			$('.jobs__create__one textarea').addClass('false');
			$('.jobs__create__one').find('.error').addClass('false');
		} else {
			$('.jobs__create__one textarea').removeClass('false');
			$('.jobs__create__one').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__two').find('input[name=startdate]').is(':checked')) {
			$('.jobs__create__two').find('.error').addClass('false');
		} else {
			$('.jobs__create__two').find('.error').removeClass('false');
			if ($('.jobs__create__two').find('input[name=startdate]').last().is(':checked') && $('.jobs__create__left__top__left__flex').find('.jobs__create__left__top__left__flex__da').val() === '') {
				$('.jobs__create__two').find('.erro').addClass('false');
			} else {
				$('.jobs__create__two').find('.erro').removeClass('false');
			}
		}
		if (!$('.jobs__create__three').find('input[name=enddate]').is(':checked')) {
			$('.jobs__create__three').find('.error').addClass('false');
		} else {
			$('.jobs__create__three').find('.error').removeClass('false');
			if ($('.jobs__create__three').find('input[name=enddate]').last().is(':checked') && $('.jobs__create__left__top__left__flex').find('.jobs__create__left__top__left__flex__date').val() === '') {
				$('.jobs__create__three').find('.erro').addClass('false');
			} else {
				$('.jobs__create__three').find('.erro').removeClass('false');
			}
		}
		if ($('.jobs__create__one textarea').val() === '') {
			$('.jobs__create__one textarea').addClass('false');
			$('.jobs__create__one').find('.error').addClass('false');
		} else {
			$('.jobs__create__one textarea').removeClass('false');
			$('.jobs__create__one').find('.error').removeClass('false');
		}
		if ($('.jobs__create__four textarea').val() === '') {
			$('.jobs__create__four textarea').addClass('false');
			$('.jobs__create__four').find('.error').addClass('false');
		} else {
			$('.jobs__create__four textarea').removeClass('false');
			$('.jobs__create__four').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__five').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__five').find('.error').addClass('false');
		} else {
			$('.jobs__create__five').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__six').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__six').find('.error').addClass('false');
		} else {
			$('.jobs__create__six').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__seven').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__seven').find('.error').addClass('false');
		} else {
			$('.jobs__create__seven').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__eight').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__eight').find('.error').addClass('false');
		} else {
			$('.jobs__create__eight').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__nine').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__nine').find('.error').addClass('false');
		} else {
			$('.jobs__create__nine').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__ten').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__ten').find('.error').addClass('false');
		} else {
			$('.jobs__create__ten').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__eleven').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__eleven').find('.error').addClass('false');
		} else {
			$('.jobs__create__eleven').find('.error').removeClass('false');
		}
		if (!($('.one__select__flex__content__check').hasClass('show'))) {
			$('.jobs__create__twelve').find('.error').addClass('false');
		} else {
			$('.jobs__create__twelve').find('.error').removeClass('false');
		}
		if (!($('.two__select__flex__content__check').hasClass('show'))) {
			$('.jobs__create__thirteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirteen').find('.error').removeClass('false');
		}
		if (!($('.three__select__flex__content__check').hasClass('show'))) {
			$('.jobs__create__fourteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__fourteen').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__fifteen').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__fifteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__fifteen').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__sixteen').find('.custom-select-trigger').hasClass('change')) {
			$('.jobs__create__sixteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__sixteen').find('.error').removeClass('false');
		}
		if ($('.jobs__create__seventeen textarea').val() === '') {
			$('.jobs__create__seventeen textarea').addClass('false');
			$('.jobs__create__seventeen').find('.error').addClass('false');
		} else {
			$('.jobs__create__seventeen textarea').removeClass('false');
			$('.jobs__create__seventeen').find('.error').removeClass('false');
		}
		if ($('.jobs__create__eighteen textarea').val() === '') {
			$('.jobs__create__eighteen textarea').addClass('false');
			$('.jobs__create__eighteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__eighteen textarea').removeClass('false');
			$('.jobs__create__eighteen').find('.error').removeClass('false');
		}
		if ($('.jobs__create__nineteen textarea').val() === '') {
			$('.jobs__create__nineteen textarea').addClass('false');
			$('.jobs__create__nineteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__nineteen textarea').removeClass('false');
			$('.jobs__create__nineteen').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twenty textarea').val() === '') {
			$('.jobs__create__twenty textarea').addClass('false');
			$('.jobs__create__twenty').find('.error').addClass('false');
		} else {
			$('.jobs__create__twenty textarea').removeClass('false');
			$('.jobs__create__twenty').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentyone textarea').val() === '') {
			$('.jobs__create__twentyone textarea').addClass('false');
			$('.jobs__create__twentyone').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentyone textarea').removeClass('false');
			$('.jobs__create__twentyone').find('.error').removeClass('false');
		}
		if (!$('.jobs__create__twentytwo').find('input[name=jobswork]').is(':checked')) {
			$('.jobs__create__twentytwo').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentytwo').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentythree textarea').val() === '') {
			$('.jobs__create__twentythree textarea').addClass('false');
			$('.jobs__create__twentythree').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentythree textarea').removeClass('false');
			$('.jobs__create__twentythree').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentyfour textarea').val() === '') {
			$('.jobs__create__twentyfour textarea').addClass('false');
			$('.jobs__create__twentyfour').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentyfour textarea').removeClass('false');
			$('.jobs__create__twentyfour').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentyfive textarea').val() === '') {
			$('.jobs__create__twentyfive textarea').addClass('false');
			$('.jobs__create__twentyfive').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentyfive textarea').removeClass('false');
			$('.jobs__create__twentyfive').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentysix textarea').val() === '') {
			$('.jobs__create__twentysix textarea').addClass('false');
			$('.jobs__create__twentysix').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentysix textarea').removeClass('false');
			$('.jobs__create__twentysix').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentyseven textarea').val() === '') {
			$('.jobs__create__twentyseven textarea').addClass('false');
			$('.jobs__create__twentyseven').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentyseven textarea').removeClass('false');
			$('.jobs__create__twentyseven').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentyeight textarea').val() === '') {
			$('.jobs__create__twentyeight textarea').addClass('false');
			$('.jobs__create__twentyeight').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentyeight textarea').removeClass('false');
			$('.jobs__create__twentyeight').find('.error').removeClass('false');
		}
		if (!($('.jobs__create__twentynine').find('[name="document"]').prop('checked'))) {
			$('.jobs__create__twentynine').find('.error').addClass('false');
		} else {
			$('.jobs__create__twentynine').find('.error').removeClass('false');
		}
		if ($('.jobs__create__twentynine').find('.jobs__create__left__center__contents__content__ta__flexs').hasClass('active')) {
			$('.jobs__create__twentynine').find('.error').removeClass('false');
		}
		if (!($('.jobs__create__thirty').find('[name="flow"]').prop('checked'))) {
			$('.jobs__create__thirty').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirty').find('.error').removeClass('false');
		}
		if ($('.jobs__create__thirtyone textarea').val() === '') {
			$('.jobs__create__thirtyone textarea').addClass('false');
			$('.jobs__create__thirtyone').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirtyone textarea').removeClass('false');
			$('.jobs__create__thirtyone').find('.error').removeClass('false');
		}
		if ($('.jobs__create__thirtytwo input').val() === '') {
			$('.jobs__create__thirtytwo input').addClass('false');
			$('.jobs__create__thirtytwo').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirtytwo input').removeClass('false');
			$('.jobs__create__thirtytwo').find('.error').removeClass('false');
		}
	});

	// 求職者登録・受講申請
	//$('.seeker__jobz__serch__one').hide();
	$('.seeker__jobz__academy__one').hide();
	$('.seeker__jobz__radio__flex').click(function () {
		if ($('.seeker__jobz__radio__flex').first().find('input').is(':checked')) {
			$('.seeker__jobz__serch__one').show();
			$('.seeker__jobz__academy__one').hide();
		}
		if ($('.seeker__jobz__radio__flex').last().find('input').is(':checked')) {
			$('.seeker__jobz__academy__one').show();
			$('.seeker__jobz__serch__one').hide();
		}
	});

	// 求職者登録
	$('.seeker__jobz__buttons input').click(function () {
		if ($('.seeker__jobz__one__one').val() === '' && $('.seeker__jobz__one__two').val() === '') {
			$('.seeker__jobz__one__one').addClass('false');
			$('.seeker__jobz__one__two').addClass('false');
			$('.seeker__jobz__one').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__one__one').removeClass('false');
			$('.seeker__jobz__one__two').removeClass('false');
			$('.seeker__jobz__one').find('.error').removeClass('false');
		}
		if ($('.seeker__jobz__one__one').val() === '') {
			$('.seeker__jobz__one__one').addClass('false');
			$('.seeker__jobz__one').find('.error').addClass('false');
		} else if ($('.seeker__jobz__one__two').val() === '') {
			$('.seeker__jobz__one__two').addClass('false');
			$('.seeker__jobz__one').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__one__one').removeClass('false');
			$('.seeker__jobz__one__two').removeClass('false');
			$('.seeker__jobz__one').find('.error').removeClass('false');
		}

		if ($('.seeker__jobz__one__three').val() === '' && $('.seeker__jobz__one__four').val() === '') {
			$('.seeker__jobz__one__three').addClass('false');
			$('.seeker__jobz__one__four').addClass('false');
			$('.seeker__jobz__two').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__one__three').removeClass('false');
			$('.seeker__jobz__one__four').removeClass('false');
			$('.seeker__jobz__two').find('.error').removeClass('false');
		}
		if ($('.seeker__jobz__one__three').val() === '') {
			$('.seeker__jobz__one__three').addClass('false');
			$('.seeker__jobz__two').find('.error').addClass('false');
		} else if ($('.seeker__jobz__one__four').val() === '') {
			$('.seeker__jobz__one__four').addClass('false');
			$('.seeker__jobz__two').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__one__three').removeClass('false');
			$('.seeker__jobz__one__four').removeClass('false');
			$('.seeker__jobz__two').find('.error').removeClass('false');
		}
		//年齢
		if (!$('.seeker__jobz__three').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__jobz__three').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__three').find('.error').removeClass('false');
		}

		//性別
		if (!$('.seeker__jobz__four__sex__flex').find('input[name=seekerFourSex]').is(':checked')) {
			$('.seeker__jobz__four__sex').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__four__sex').find('.error').removeClass('false');
		}

		//担当者
		if (!$('.seeker__jobz__five').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__jobz__five').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__five').find('.error').removeClass('false');
		}

		//メールアドレス
		if (!$('.seeker__jobz__six input').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$('.seeker__jobz__six').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__six').find('.error').removeClass('false');
		}
		if ($('.seeker__jobz__six input').val() === '') {
			$('.seeker__jobz__six').find('.error').removeClass('false');
		}

		//現住所の都道府県
		if (!$('.seeker__jobz__first').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__jobz__first').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__first').find('.error').removeClass('false');
		}

		//現在の雇用形態
		if (!$('.seeker__jobz__second').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__jobz__second').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__second').find('.error').removeClass('false');
		}

		//最終学歴
		if (!$('.seeker__jobz__third').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__jobz__third').find('.error').addClass('false');
		} else {
			$('.seeker__jobz__third').find('.error').removeClass('false');
		}
	});


	// 受講者申請
	$('.seeker__ses__buttons input').click(function () {
		if (!$('.seeker__ses__courses__flex').find('input[name=seekerCourses]').is(':checked')) {
			$('.seeker__ses__courses').find('.error').addClass('false');
		} else {
			$('.seeker__ses__courses').find('.error').removeClass('false');
		}
		if (!$('.seeker__ses__sex__flex').find('input[name=seekerSex]').is(':checked')) {
			$('.seeker__ses__fours').find('.error').addClass('false');
		} else {
			$('.seeker__ses__fours').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__one').val() === '' && $('.seeker__ses__one__two').val() === '') {
			$('.seeker__ses__one__one').addClass('false');
			$('.seeker__ses__one__two').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__one').removeClass('false');
			$('.seeker__ses__one__two').removeClass('false');
			$('.seeker__ses__one').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__one').val() === '') {
			$('.seeker__ses__one__one').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else if ($('.seeker__ses__one__two').val() === '') {
			$('.seeker__ses__one__two').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__one').removeClass('false');
			$('.seeker__ses__one__two').removeClass('false');
			$('.seeker__ses__one').find('.error').removeClass('false');
		}

		if ($('.seeker__ses__one__three').val() === '' && $('.seeker__ses__one__four').val() === '') {
			$('.seeker__ses__one__three').addClass('false');
			$('.seeker__ses__one__four').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__three').removeClass('false');
			$('.seeker__ses__one__four').removeClass('false');
			$('.seeker__ses__two').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__three').val() === '') {
			$('.seeker__ses__one__three').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else if ($('.seeker__ses__one__four').val() === '') {
			$('.seeker__ses__one__four').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__three').removeClass('false');
			$('.seeker__ses__one__four').removeClass('false');
			$('.seeker__ses__two').find('.error').removeClass('false');
		}
		//年齢
		if (!$('.seeker__ses__three').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__three').find('.error').addClass('false');
		} else {
			$('.seeker__ses__three').find('.error').removeClass('false');
		}
		//性別
		if (!$('.seeker__ses__sex__flex').find('[name="seekerSesSex"]').is(':checked')) {
			$('.seeker__ses__sex').find('.error').addClass('false');
		} else {
			$('.seeker__ses__sex').find('.error').removeClass('false');
		}
		//メールアドレス
		if (!$('.seeker__ses__five input').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$('.seeker__ses__five').find('.error').addClass('false');
		} else {
			$('.seeker__ses__five').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__five input').val() === '') {
			$('.seeker__ses__five').find('.error').removeClass('false');
		}
		//担当者
		if (!$('.seeker__ses__six').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__six').find('.error').addClass('false');
		} else {
			$('.seeker__ses__six').find('.error').removeClass('false');
		}
		//現住所の都道府県
		if (!$('.seeker__ses__first').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__first').find('.error').addClass('false');
		} else {
			$('.seeker__ses__first').find('.error').removeClass('false');
		}
		//現在の雇用形態
		if (!$('.seeker__ses__second').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__second').find('.error').addClass('false');
		} else {
			$('.seeker__ses__second').find('.error').removeClass('false');
		}
		//最終学歴
		if (!$('.seeker__ses__third').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__third').find('.error').addClass('false');
		} else {
			$('.seeker__ses__third').find('.error').removeClass('false');
		}
		// 受講希望コース
		if (!($('.seeker__ses__course').find('[name="seekerCourse"]').prop('checked'))) {
			$('.seeker__ses__course').find('.error').addClass('false');
		} else {
			$('.seeker__ses__course').find('.error').removeClass('false');
		}
	});

	// いくじょぶ受講者申請
	$('.seeker__ikujob__buttons input').click(function () {
		if (!$('.seeker__ses__courses__flex').find('input[name=seekerCourses]').is(':checked')) {
			$('.seeker__ses__courses').find('.error').addClass('false');
		} else {
			$('.seeker__ses__courses').find('.error').removeClass('false');
		}
		if (!$('.seeker__ses__sex__flex').find('input[name=seekerSex]').is(':checked')) {
			$('.seeker__ses__fours').find('.error').addClass('false');
		} else {
			$('.seeker__ses__fours').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__one').val() === '' && $('.seeker__ses__one__two').val() === '') {
			$('.seeker__ses__one__one').addClass('false');
			$('.seeker__ses__one__two').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__one').removeClass('false');
			$('.seeker__ses__one__two').removeClass('false');
			$('.seeker__ses__one').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__one').val() === '') {
			$('.seeker__ses__one__one').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else if ($('.seeker__ses__one__two').val() === '') {
			$('.seeker__ses__one__two').addClass('false');
			$('.seeker__ses__one').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__one').removeClass('false');
			$('.seeker__ses__one__two').removeClass('false');
			$('.seeker__ses__one').find('.error').removeClass('false');
		}

		if ($('.seeker__ses__one__three').val() === '' && $('.seeker__ses__one__four').val() === '') {
			$('.seeker__ses__one__three').addClass('false');
			$('.seeker__ses__one__four').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__three').removeClass('false');
			$('.seeker__ses__one__four').removeClass('false');
			$('.seeker__ses__two').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__one__three').val() === '') {
			$('.seeker__ses__one__three').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else if ($('.seeker__ses__one__four').val() === '') {
			$('.seeker__ses__one__four').addClass('false');
			$('.seeker__ses__two').find('.error').addClass('false');
		} else {
			$('.seeker__ses__one__three').removeClass('false');
			$('.seeker__ses__one__four').removeClass('false');
			$('.seeker__ses__two').find('.error').removeClass('false');
		}
		//年齢
		if (!$('.seeker__ses__three').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__three').find('.error').addClass('false');
		} else {
			$('.seeker__ses__three').find('.error').removeClass('false');
		}
		//性別
		if (!$('.seeker__ses__sex__flex').find('[name="seekerSesSex"]').is(':checked')) {
			$('.seeker__ses__sex').find('.error').addClass('false');
		} else {
			$('.seeker__ses__sex').find('.error').removeClass('false');
		}
		//メールアドレス
		if (!$('.seeker__ses__five input').val().match(/^([a-zA-Z0-9])+([a-zA-Z0-9\._-])*@([a-zA-Z0-9_-])+([a-zA-Z0-9\._-]+)+$/)) {
			$('.seeker__ses__five').find('.error').addClass('false');
		} else {
			$('.seeker__ses__five').find('.error').removeClass('false');
		}
		if ($('.seeker__ses__five input').val() === '') {
			$('.seeker__ses__five').find('.error').removeClass('false');
		}
		//現住所の都道府県
		if (!$('.seeker__ses__first').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__first').find('.error').addClass('false');
		} else {
			$('.seeker__ses__first').find('.error').removeClass('false');
		}
		//現在の雇用形態
		if (!$('.seeker__ses__second').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__second').find('.error').addClass('false');
		} else {
			$('.seeker__ses__second').find('.error').removeClass('false');
		}
		//最終学歴
		if (!$('.seeker__ses__third').find('.custom-select-trigger').hasClass('change')) {
			$('.seeker__ses__third').find('.error').addClass('false');
		} else {
			$('.seeker__ses__third').find('.error').removeClass('false');
		}
		// 受講希望コース
		if (!($('.seeker__ses__course').find('[name="seekerCourse"]').prop('checked'))) {
			$('.seeker__ses__course').find('.error').addClass('false');
		} else {
			$('.seeker__ses__course').find('.error').removeClass('false');
		}
	});




	$('.academy__help__main__question__content').hide();
	$('.academy__help__main__question__title').click(function () {
		$(this).siblings('.academy__help__main__question__content').slideToggle();
		$(this).find('.academy__help__main__question__title__plus').toggleClass('remote');
	});

	$('.course__header__hamburger').click(function () {
		$(this).find('span').toggleClass('change');
	});

	$('.tca__header__hamburger').click(function () {
		$(this).find('span').toggleClass('change');
	});

	$('.ikujob__header__hamburger').click(function () {
		$(this).find('span').toggleClass('change');
	});


	$('.academy__student__pdcamonth__dra__goal__content__example__top').click(function () {
		$(this).find('h2').toggleClass('active');
		$(this).siblings('.academy__student__pdcamonth__dra__goal__content').slideToggle();
	});
	$('.academy__student__pdcamonth__dra__one__content__example__top').click(function () {
		$(this).find('h2').toggleClass('active');
		$(this).siblings('.academy__student__pdcamonth__dra__one__content').slideToggle();
	});
	$('.academy__student__pdcamonth__dra__two__content__example__top').click(function () {
		$(this).find('h2').toggleClass('active');
		$(this).siblings('.academy__student__pdcamonth__dra__two__content').slideToggle();
	});
	$('.academy__student__pdcamonth__dra__three__content__example__top').click(function () {
		$(this).find('h2').toggleClass('active');
		$(this).siblings('.academy__student__pdcamonth__dra__three__content').slideToggle();
	});
	$('.academy__student__pdcamonth__dra__four__content__example__top').click(function () {
		$(this).find('h2').toggleClass('active');
		$(this).siblings('.academy__student__pdcamonth__dra__four__content').slideToggle();
	});

	//　学習ページの資料を見る　TCA
	$('.academy__student__tca__center__flex a').click(function () {
		$('.selection__drawer').addClass('active');
		$('.selection__back').toggle();
	});

	//　学習ページの資料を見る　SES
	$('.academy__student__ses__center__flex a').click(function () {
		$('.selection__drawer').addClass('active');
		$('.selection__back').toggle();
	});

	//　学習ページの資料を見る　いくじょぶ
	$('.academy__student__ikujob__center__flex a').click(function () {
		$('.selection__drawer').addClass('active');
		$('.selection__back').toggle();
	});

	//　学習ページの資料を見る　じょぶふる
	$('.academy__student__jobfull__center__flex a').click(function () {
		$('.selection__drawer').addClass('active');
		$('.selection__back').toggle();
	});

	$('.jobs__details__left__center__contents__rights a').click(function () {
		if ($('.jobs__details__ten').height() > 830) {
			$('.jobs__details__ten').addClass('active');
			$('.jobs__details__tens').addClass('active');
		} else {
			$('.jobs__details__ten').removeClass('active');
			$('.jobs__details__tens').removeClass('active');
		}
	});

	$('.jobs__details__ten__top__cross').click(function () {
		$('.jobs__details__tens').removeClass('show');
		$('.jobs__details__ten').removeClass('show');
		$('.jobs__details__back').hide();
	});

	$('.jobs__details__left__center__contents__rights__show').click(function () {
		$('.jobs__details__tens').addClass('show');
		$('.jobs__details__ten').addClass('show');
		$('.jobs__details__back').toggle();
	});

	//7.27日程変更申請
	$('.selection__dra__change__bottom input').click(function () {
		if ($('.selection__dra__change__content__one').find('textarea').val() === '') {
			$('.selection__dra__change__content__one').find('.error').addClass('false');
			$('.selection__dra__change__content__one').find('textarea').addClass('false');
		} else {
			$('.selection__dra__change__content__one').find('.error').removeClass('false');
			$('.selection__dra__change__content__one').find('textarea').removeClass('false');
		}
		if ($('.selection__dra__change__content__two input').first().val() === '') {
			$('.selection__dra__change__content__two input').first().addClass('false');
			$('.selection__dra__change__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__change__content__two input').first().removeClass('false');
			$('.selection__dra__change__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__change__content__two input').last().val() === '') {
			$('.selection__dra__change__content__two input').last().addClass('false');
			$('.selection__dra__change__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__change__content__two input').last().removeClass('false');
			$('.selection__dra__change__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__change__content__two input').first().val() === '') {
			$('.selection__dra__change__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__change__content__two').find('.error').removeClass('false');
		}
		if ((!$('.selection__dra__change__content__two input').first().val() === '') && (!$('.selection__dra__change__content__two input').last().val() === '')) {
			$('.selection__dra__change__content__two').find('.error').addClass('false');
		}
	});

	$('.selection__link__change').click(function () {
		$('.selection__dra__change').addClass('show');
		$('.selection__back').show();
	});


	//希望日程提出
	$('.selection__dra__date__content__one__flex').click(function () {
		if ($('.selection__dra__date__content__one__flex').last().find('input').is(':checked')) {
			$('.selection__dra__date__content__three').show();
			$('.selection__dra__date__content__three').addClass('show');
		} else {
			$('.selection__dra__date__content__three').hide();
			$('.selection__dra__date__content__three').removeClass('show');
		}
		if ($('.selection__dra__date__content__one__flex').first().find('input').is(':checked')) {
			$('.selection__dra__date__content__two').show();
		} else {
			$('.selection__dra__date__content__two').hide();
		}
	});

	$('.selection__dra__date__content__three__flex__add').click(function () {
		if ($('.selection__dra__date__content__three input').first().val() === '') {
			$('.selection__dra__date__content__three input').first().addClass('false');
		} else {
			$('.selection__dra__date__content__three input').first().removeClass('false');
			$('.selection__dra__date__content__three').find('.error').removeClass('false');
		}
		if ($('.selection__dra__date__content__three input').last().val() === '') {
			$('.selection__dra__date__content__three input').last().addClass('false');
			$('.selection__dra__date__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__date__content__three input').last().removeClass('false');
		}
		if ($('.selection__dra__date__content__three input').first().val() === '' && $('.selection__dra__date__content__three input').last().val() === '') {
			$('.selection__dra__date__content__three input').first().addClass('false');
			$('.selection__dra__date__content__three input').last().addClass('false');
			$('.selection__dra__date__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__date__content__three').find('.error').removeClass('false');
			var date = new Date($('.selection__dra__date__content__three__flex__left__one').val());
			var day = date.getDate();
			var textarea = $('.selection__dra__date__content__three textarea');
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var dateOne = ([year, month, day].join('/'));
			var dateTwo = ($(".selection__dra__date__content__three__flex__left__two").val());
			var dateAll = dateOne + ' ' + dateTwo + '\n';
			textarea.val(textarea.val() + dateAll);
		}
	});

	$('.selection__dra__date__bottom__input').click(function () {
		if (!$('.selection__dra__date__content__one__flex').find('input[name=dateRadio]').is(':checked')) {
			$('.selection__dra__date__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__date__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__date__content__three').hasClass('show')) {
			if ($('.selection__dra__date__content__three input').first().val() === '') {
				$('.selection__dra__date__content__three input').first().addClass('false');
			} else {
				$('.selection__dra__date__content__three input').first().removeClass('false');
				$('.selection__dra__date__content__three').find('.error').removeClass('false');
			}
			if ($('.selection__dra__date__content__three input').last().val() === '') {
				$('.selection__dra__date__content__three input').last().addClass('false');
				$('.selection__dra__date__content__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__date__content__three input').last().removeClass('false');
			}
			if ((!$('.selection__dra__date__content__three input').first().val() === '') && (!$('.selection__dra__date__content__three input').last().val() === '')) {
				$('.selection__dra__date__content__three').find('.error').removeClass('false');
			}
		}
	});

	//日程を確定
	$('.selection__dra__date__fix__bottom__input').click(function () {
		if (!$('.selection__dra__date__content__one__flex').find('input[name=dateRadio]').is(':checked')) {
			$('.selection__dra__date__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__date__content__one').find('.error').removeClass('false');
		}
		if (!$('.selection__dra__date__content__two__flex').find('input[name=dateRadio]').is(':checked')) {
			$('.selection__dra__date__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__date__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__date__content__three').hasClass('show')) {
			if ($('.selection__dra__date__content__three input').first().val() === '') {
				$('.selection__dra__date__content__three input').first().addClass('false');
			} else {
				$('.selection__dra__date__content__three input').first().removeClass('false');
				$('.selection__dra__date__content__three').find('.error').removeClass('false');
			}
			if ($('.selection__dra__date__content__three input').last().val() === '') {
				$('.selection__dra__date__content__three input').last().addClass('false');
				$('.selection__dra__date__content__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__date__content__three input').last().removeClass('false');
			}
			if ((!$('.selection__dra__date__content__three input').first().val() === '') && (!$('.selection__dra__date__content__three input').last().val() === '')) {
				$('.selection__dra__date__content__three').find('.error').removeClass('false');
			}
		}
	});

	$('.selection__dra__results__content__one__flexs').click(function () {
		if ($(this).find('.selection__dra__results__content__one__flex').first().find('input[name=twoResult]').is(':checked')) {
			$('.selection__dra__results__content__three').show();
			$('.selection__dra__results__content__three').addClass('show');
		} else {
			$('.selection__dra__results__content__three').hide();
			$('.selection__dra__results__content__three').removeClass('show');
		}
	});

	$('.selection__dra__results__bottom__input').click(function () {
		if (!$('.selection__dra__results__content__one__flex').find('input[name=twoResult]').is(':checked')) {
			$('.selection__dra__results__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__results__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__results__content__three').hasClass('show')) {
			if (!$('.selection__dra__results__content__three__flex').find('input[name=twoNext]').is(':checked')) {
				$('.selection__dra__results__content__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__results__content__three').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__results__content__two').find('textarea').val() === '') {
			$('.selection__dra__results__content__two').find('.error').addClass('false');
			$('.selection__dra__results__content__two').find('textarea').addClass('false');
		} else {
			$('.selection__dra__results__content__two').find('.error').removeClass('false');
			$('.selection__dra__results__content__two').find('textarea').removeClass('false');
		}
	});

	$('.selection__link__resultss').click(function () {
		$('.selection__dra__resultss').addClass('show');
		$('.selection__back').show();
	});


	$('.selection__dra__resultss__content__one__flexs').click(function () {
		if ($(this).find('.selection__dra__resultss__content__one__flex').first().find('input[name=threeResult]').is(':checked')) {
			$('.selection__dra__resultss__content__three').show();
			$('.selection__dra__resultss__content__three').addClass('show');
		} else {
			$('.selection__dra__resultss__content__three').hide();
			$('.selection__dra__resultss__content__three').removeClass('show');
		}
	});

	$('.selection__dra__resultss__bottom__input').click(function () {
		if (!$('.selection__dra__resultss__content__one__flex').find('input[name=threeResult]').is(':checked')) {
			$('.selection__dra__resultss__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__resultss__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__resultss__content__three').hasClass('show')) {
			if (!$('.selection__dra__resultss__content__three__flex').find('input[name=threeNext]').is(':checked')) {
				$('.selection__dra__resultss__content__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__resultss__content__three').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__resultss__content__two').find('textarea').val() === '') {
			$('.selection__dra__resultss__content__two').find('.error').addClass('false');
			$('.selection__dra__resultss__content__two').find('textarea').addClass('false');
		} else {
			$('.selection__dra__resultss__content__two').find('.error').removeClass('false');
			$('.selection__dra__resultss__content__two').find('textarea').removeClass('false');
		}
	});

	$('.selection__link__resultsss').click(function () {
		$('.selection__dra__resultsss').addClass('show');
		$('.selection__back').show();
	});



	$('.selection__dra__resultsss__content__one__flexs').click(function () {
		if ($(this).find('.selection__dra__resultsss__content__one__flex').first().find('input[name=fourResult]').is(':checked')) {
			$('.selection__dra__resultsss__content__three').show();
			$('.selection__dra__resultsss__content__three').addClass('show');
		} else {
			$('.selection__dra__resultsss__content__three').hide();
			$('.selection__dra__resultsss__content__three').removeClass('show');
		}
	});

	$('.selection__dra__resultsss__bottom__input').click(function () {
		if (!$('.selection__dra__resultsss__content__one__flex').find('input[name=fourResult]').is(':checked')) {
			$('.selection__dra__resultsss__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__resultsss__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__resultsss__content__three').hasClass('show')) {
			if (!$('.selection__dra__resultsss__content__three__flex').find('input[name=threeNext]').is(':checked')) {
				$('.selection__dra__resultsss__content__three').find('.error').addClass('false');
			} else {
				$('.selection__dra__resultsss__content__three').find('.error').removeClass('false');
			}
		}
		if ($('.selection__dra__resultsss__content__two').find('textarea').val() === '') {
			$('.selection__dra__resultsss__content__two').find('.error').addClass('false');
			$('.selection__dra__resultsss__content__two').find('textarea').addClass('false');
		} else {
			$('.selection__dra__resultsss__content__two').find('.error').removeClass('false');
			$('.selection__dra__resultsss__content__two').find('textarea').removeClass('false');
		}
	});

	$('.selection__dra__company__three__flex__a').hide();
	$(".selection__dra__company__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__company__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__company__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__company__three__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__company__four__flex__a').hide();
	$(".selection__dra__company__four__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__company__four__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__company__four__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__company__four__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__company__three__flex i').click(function () {
		$(this).siblings('.selection__dra__company__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__company__three__flex__apps').find('.selection__dra__company__three__flex__a').hide();
		$(this).parent('.selection__dra__company__three__flex').find('.selection__dra__company__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__company__three__flex').find(".selection__dra__company__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__company__three__flex').find(".selection__dra__company__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__company__three__flex').find(".selection__dra__company__three__flex__apps").find('.filename').remove();
	});

	$('.selection__dra__company__four__flex i').click(function () {
		$(this).siblings('.selection__dra__company__four__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__company__four__flex__apps').find('.selection__dra__company__four__flex__a').hide();
		$(this).parent('.selection__dra__company__four__flex').find('.selection__dra__company__four__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__company__four__flex').find(".selection__dra__company__four__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__company__four__flex').find(".selection__dra__company__four__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__company__four__flex').find(".selection__dra__company__four__flex__apps").find('.filename').remove();
	});

	// 入社条件
	$('.selection__dra__company__bottom__input').on('click', function () {
		if ($('.selection__dra__company__one input').val() === '') {
			$('.selection__dra__company__one input').addClass('false');
			$('.selection__dra__company__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__company__one input').removeClass('false');
			$('.selection__dra__company__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__company__two input').val() === '') {
			$('.selection__dra__company__two input').addClass('false');
			$('.selection__dra__company__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__company__two input').removeClass('false');
			$('.selection__dra__company__two').find('.error').removeClass('false');
		}
	});

	$('.selection__links__company').click(function () {
		$('.selection__dra__company').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__company__three__flex__a').click(function () {
		$('.selection__drawer').addClass('active');
	});

	$('.selection__dra__confirm__three__flex__a').hide();
	$(".selection__dra__confirm__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__confirm__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__confirm__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__confirm__three__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__confirm__three__flex i').click(function () {
		$(this).siblings('.selection__dra__confirm__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__confirm__three__flex__apps').find('.selection__dra__confirm__three__flex__a').hide();
		$(this).parent('.selection__dra__confirm__three__flex').find('.selection__dra__confirm__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__confirm__three__flex').find(".selection__dra__confirm__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__confirm__three__flex').find(".selection__dra__confirm__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__confirm__three__flex').find(".selection__dra__confirm__three__flex__apps").find('.filename').remove();
	});


	$('.selection__dra__offerr__nine__flex__add').click(function () {
		if ($('.selection__dra__offerr__nine input').first().val() === '') {
			$('.selection__dra__offerr__nine input').first().addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').first().removeClass('false');
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').last().val() === '') {
			$('.selection__dra__offerr__nine input').last().addClass('false');
			$('.selection__dra__offerr__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__nine input').last().removeClass('false');
		}
		if ($('.selection__dra__offerr__nine input').first().val() === '' && $('.selection__dra__offerr__nine input').last().val() === '') {
			$('.selection__dra__offerr__nine input').first().addClass('false');
			$('.selection__dra__offerr__nine input').last().addClass('false');
			$('.selection__dra__offerr__nine').find('.error').addClass('false');
		} else {
			$('.selection__dra__offerr__nine').find('.error').removeClass('false');
			var date = new Date($('.selection__dra__offerr__nine__flex__left__one').val());
			var day = date.getDate();
			var textarea = $('.selection__dra__offerr__nine textarea');
			var month = date.getMonth() + 1;
			var year = date.getFullYear();
			var dateOne = ([year, month, day].join('/'));
			var dateTwo = ($(".selection__dra__offerr__nine__flex__left__two").val());
			var dateAll = dateOne + ' ' + dateTwo + '\n';
			textarea.val(textarea.val() + dateAll);
		}
	});

	//売上管理　アカデミー
	$('.selection__linkss__manager').click(function () {
		$('.selection__dradradra__manager').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__manager__top__cross').click(function () {
		$('.selection__back').hide();
		$('.selection__dradradra__manager').removeClass('show');
	});

	//担当者管理 担当者登録
	$('.selection__links__manager').click(function () {
		$('.selection__dra__manager').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__manager__top__cross').click(function () {
		$('.selection__back').hide();
		$('.selection__dra__manager').removeClass('show');
	});

	$('.selection__dra__manager__bottom__input').on('click', function () {
		if (!$('.selection__dra__manager__content__one__flex').find('input[name=authority]').is(':checked')) {
			$('.selection__dra__manager__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__two input').val() === '') {
			$('.selection__dra__manager__content__two input').addClass('false');
			$('.selection__dra__manager__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__two input').removeClass('false');
			$('.selection__dra__manager__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__three input').val() === '') {
			$('.selection__dra__manager__content__three input').addClass('false');
			$('.selection__dra__manager__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__three input').removeClass('false');
			$('.selection__dra__manager__content__three').find('.error').removeClass('false');
		}
	});

	//担当者管理 担当者情報 自分編集
	$('.selection__link__manager').click(function () {
		$('.selection__drara__manager').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__manager__top__cross').click(function () {
		$('.selection__back').hide();
		$('.selection__drara__manager').removeClass('show');
	});

	$('.selection__dra__manager__bottom__input').on('click', function () {
		if (!$('.selection__dra__manager__content__one__flex').find('input[name=authority]').is(':checked')) {
			$('.selection__dra__manager__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__two input').val() === '') {
			$('.selection__dra__manager__content__two input').addClass('false');
			$('.selection__dra__manager__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__two input').removeClass('false');
			$('.selection__dra__manager__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__three input').val() === '') {
			$('.selection__dra__manager__content__three input').addClass('false');
			$('.selection__dra__manager__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__three input').removeClass('false');
			$('.selection__dra__manager__content__three').find('.error').removeClass('false');
		}
	});

	//担当者管理 担当者情報 編集
	$('.selection__linkss__manager').click(function () {
		$('.selection__drarara__manager').addClass('show');
		$('.selection__back').show();
	});

	$('.selection__link__manager').click(function () {
		$('.selection__drara__manager').addClass('show');
		$('.selection__back').show();
	});

	$('.selection__dra__manager__top__cross').click(function () {
		$('.selection__back').hide();
		$('.selection__drarara__manager').removeClass('show');
	});

	$('.selection__dra__manager__bottom__input').on('click', function () {
		if (!$('.selection__dra__manager__content__one__flex').find('input[name=authority]').is(':checked')) {
			$('.selection__dra__manager__content__one').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__one').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__two input').val() === '') {
			$('.selection__dra__manager__content__two input').addClass('false');
			$('.selection__dra__manager__content__two').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__two input').removeClass('false');
			$('.selection__dra__manager__content__two').find('.error').removeClass('false');
		}
		if ($('.selection__dra__manager__content__three input').val() === '') {
			$('.selection__dra__manager__content__three input').addClass('false');
			$('.selection__dra__manager__content__three').find('.error').addClass('false');
		} else {
			$('.selection__dra__manager__content__three input').removeClass('false');
			$('.selection__dra__manager__content__three').find('.error').removeClass('false');
		}
	});

	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.one__selects__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.one__drawers').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.one__drawers__cross').click(function () {
		$('.jobz__back').hide();
		$('.one__drawers').removeClass('active');
	});
	$('.one__drawers__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.one__drawers').removeClass('active');
	});
	var nav = $('.one__drawers');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.one__drawers').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.one__drawers__contents__left__content li').click(function () {
		$('.one__drawers__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.one__drawers__contents__right__content__form li').removeClass('show');
		let inde = $(this).index();
		$('.one__drawers__contents__right__content__form li').eq(inde).addClass('show');
		$('.one__drawers__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.one__checkbox__is').click(function () {
		if ($(this).parent().parent().parent().find('.one__drawers__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.one__drawers__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.one__checkbox__alls').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.one__checkbox__alls').prop('checked', false);
		}
		if ($('.one__drawers__contents__right__content__block__content :checked').length > 0) {
			let index = $(this).parent().parent().parent().parent().index();
			$('.one__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.one__drawers__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.one__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			let indexs = $(this).parent().parent().parent().parent().index();
			$('.one__selects__flex__ul li').eq(indexs).addClass('show');
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check').eq(index).addClass('show');
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check').eq(index).removeClass('show');
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.one__drawers__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.one__selects__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.one__checkbox__alls').click(function () {
		$(this).parent().parent().parent().find("input[class='one__checkbox__is']").prop('checked', this.checked);
		if ($('.one__drawers__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.one__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.one__drawers__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.one__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.one__selects__flex__ul li').eq(indexs).addClass('show');
			$('.one__selects__flex__content__check').addClass('show');
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.one__selects__flex__content__check').removeClass('show');
			$('.one__selects__flex__ul li').eq(indexs).find('.one__selects__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.one__selects__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.one__drawers__bottom a').click(function () {
		$('.one__drawers').find('.one__drawers__contents__right').find('input').prop('checked', false);
		$('.one__drawers').find('.one__drawers__contents__left__content li').removeClass('show');
		$('.one__selects').find('.one__selects__flex__contents').removeClass('show');
		$('.one__selects').find('.one__selects__flex__content__check input').prop('checked', false);
		$('.one__selects').find('.one__selects__flex__content__check').removeClass('show');
		$('.one__selects').find('.one__selects__flex__ul li').removeClass('show');
	});

	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.one__selects__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			let number = $(this).parent().index();
			$('.one__drawers__contents__right__content__form li').eq(indexs).find('.one__drawers__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.one__selects__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.one__drawers__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.one__selects__flex__content__check :checked').length == $(this).parent().parent().find('.one__selects__flex__content__check').length)) {
				let all = $(this).parent().parent().parent().parent().index();
				$('.one__drawers__contents__right__content__form li').eq(all).find('.one__drawers__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});

	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.two__selects__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.two__drawers').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.two__drawers__cross').click(function () {
		$('.jobz__back').hide();
		$('.two__drawers').removeClass('active');
	});
	$('.two__drawers__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.two__drawers').removeClass('active');
	});
	nav = $('.two__drawers');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.two__drawers').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.two__drawers__contents__left__content li').click(function () {
		$('.two__drawers__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.two__drawers__contents__right__content__form li').removeClass('show');
		inde = $(this).index();
		$('.two__drawers__contents__right__content__form li').eq(inde).addClass('show');
		$('.two__drawers__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.two__checkbox__is').click(function () {
		if ($(this).parent().parent().parent().find('.two__drawers__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.two__drawers__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.two__checkbox__alls').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.two__checkbox__alls').prop('checked', false);
		}
		if ($('.two__drawers__contents__right__content__block__content :checked').length > 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.two__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.two__drawers__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.two__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.two__selects__flex__ul li').eq(indexs).addClass('show');
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check').eq(index).addClass('show');
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check').eq(index).removeClass('show');
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.two__drawers__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.two__selects__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.two__checkbox__alls').click(function () {
		$(this).parent().parent().parent().find("input[class='two__checkbox__is']").prop('checked', this.checked);
		if ($('.two__drawers__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.two__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.two__drawers__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.two__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.two__selects__flex__ul li').eq(indexs).addClass('show');
			$('.two__selects__flex__content__check').addClass('show');
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.two__selects__flex__content__check').removeClass('show');
			$('.two__selects__flex__ul li').eq(indexs).find('.two__selects__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.two__selects__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.two__drawers__bottom a').click(function () {
		$('.two__drawers').find('.two__drawers__contents__right').find('input').prop('checked', false);
		$('.two__drawers').find('.two__drawers__contents__left__content li').removeClass('show');
		$('.two__selects').find('.two__selects__flex__contents').removeClass('show');
		$('.two__selects').find('.two__selects__flex__content__check input').prop('checked', false);
		$('.two__selects').find('.two__selects__flex__content__check').removeClass('show');
		$('.two__selects').find('.two__selects__flex__ul li').removeClass('show');
	});

	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.two__selects__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			number = $(this).parent().index();
			$('.two__drawers__contents__right__content__form li').eq(indexs).find('.two__drawers__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.two__selects__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.two__drawers__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.two__selects__flex__content__check :checked').length == $(this).parent().parent().find('.two__selects__flex__content__check').length)) {
				all = $(this).parent().parent().parent().parent().index();
				$('.two__drawers__contents__right__content__form li').eq(all).find('.two__drawers__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});
	// 求人検索ページのドロワーメニュー(職種)
	// 求人検索ページの職種のモダール
	$('.three__selects__flex__a').click(function () {
		let show = $(this).parent().parent().parent().index();
		$('.three__drawers').addClass('active');
		$('.jobz__back').toggle();
	});
	$('.three__drawers__cross').click(function () {
		$('.jobz__back').hide();
		$('.three__drawers').removeClass('active');
	});
	$('.three__drawers__bottom span').click(function () {
		$('.jobz__back').hide();
		$('.three__drawers').removeClass('active');
	});
	nav = $('.three__drawers');
	$('.jobz__back').click(function () {
		if (nav.hasClass('active')) {
			$('.three__drawers').removeClass('active');
			$('.jobz__back').hide();
		}
	});

	// 求人検索ページの職種のドロワーの詳細
	$('.three__drawers__contents__left__content li').click(function () {
		$('.three__drawers__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.three__drawers__contents__right__content__form li').removeClass('show');
		inde = $(this).index();
		$('.three__drawers__contents__right__content__form li').eq(inde).addClass('show');
		$('.three__drawers__contents__right__content__none').addClass('none');
	});

	// 求人検索ページの職種のドロワーのチェックボックス
	$('.three__checkbox__is').click(function () {
		if ($(this).parent().parent().parent().find('.three__drawers__contents__right__content__block__content :checked').length == $(this).parent().parent().parent().find('.two__drawers__contents__right__content__block__content :input').length) {
			$(this).parent().parent().parent().find('.three__checkbox__alls').prop('checked', true);
		} else {
			$(this).parent().parent().parent().find('.two__checkbox__alls').prop('checked', false);
		}
		if ($('.three__drawers__contents__right__content__block__content :checked').length > 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.three__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.three__drawers__contents__right__content__block__content :checked').length == 0) {
			index = $(this).parent().parent().parent().parent().index();
			$('.three__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.three__selects__flex__ul li').eq(indexs).addClass('show');
			$('.three__selects__flex__ul li').eq(indexs).find('.three__selects__flex__content__check').eq(index).addClass('show');
			$('.three__selects__flex__ul li').eq(indexs).find('.three__selects__flex__content__check input').eq(index).prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			index = $(this).parent().index();
			indexs = $(this).parent().parent().parent().parent().index();
			$('.three__selects__flex__ul li').eq(indexs).find('.three__selects__flex__content__check').eq(index).removeClass('show');
			$('.three__selects__flex__ul li').eq(indexs).find('.three__selects__flex__content__check input').eq(index).prop('checked', false);
			if ($(this).parent().parent().find('.three__drawers__contents__right__content__block__content__flex :checked').length == 0) {
				indexs = $(this).parent().parent().parent().parent().index();
				$('.three__selects__flex__ul li').eq(indexs).removeClass('show');
			}
		}
	});

	$('.three__checkbox__alls').click(function () {
		$(this).parent().parent().parent().find("input[class='three__checkbox__is']").prop('checked', this.checked);
		if ($('.three__drawers__contents__right__content__block__flex :checked').length > 0) {
			index = $(this).parent().parent().parent().index();
			$('.three__drawers__contents__left__content li').eq(index).addClass('show');
		} else if ($('.three__drawers__contents__right__content__block__flex :checked').length == 0) {
			index = $(this).parent().parent().parent().index();
			$('.three__drawers__contents__left__content li').eq(index).removeClass('show');
		}
		if ($(this).prop('checked')) {
			indexs = $(this).parent().parent().parent().index();
			$('.three__selects__flex__ul li').eq(indexs).addClass('show');
			$('.three__selects__flex__content__check').addClass('show');
			$('.three__selects__flex__ul li').eq(indexs).find('.three__selects__flex__content__check input').prop('checked', true);
		} else if (!($(this).prop('checked'))) {
			$('.three__selects__flex__content__check').removeClass('show');
			$('.three__selects__flex__content__check input').prop('checked', false);
			indexs = $(this).parent().parent().parent().index();
			$('.three__selects__flex__ul li').eq(indexs).removeClass('show');
		}
	});

	// 条件リセット
	$('.three__drawers__bottom a').click(function () {
		$('.three__drawers').find('.three__drawers__contents__right').find('input').prop('checked', false);
		$('.three__drawers').find('.three__drawers__contents__left__content li').removeClass('show');
		$('.three__selects').find('.three__selects__flex__contents').removeClass('show');
		$('.three__selects').find('.three__selects__flex__content__check input').prop('checked', false);
		$('.three__selects').find('.three__selects__flex__content__check').removeClass('show');
		$('.three__selects').find('.three__selects__flex__ul li').removeClass('show');
	});

	$('.three__drawers__contents__left li').on('click', function () {
		$('.three__drawers__contents__left li').removeClass('active');
		$(this).addClass('active');
	});

	$('.work_location_check_1').on('change', function () {
		$('.' + this.id).prop('checked', this.checked);
	});

	$('.work_location_check_2').on('change', function () {
		$('.' + this.id).prop('checked', this.checked);
	});


	// 求人検索ページのサブメニューのチェックボックスをクリックした場合
	$('.three__selects__flex__content__check input').click(function () {
		if ($(this).prop('checked', false)) {
			$(this).parent().removeClass('show');
			indexs = $(this).parent().parent().parent().parent().index();
			number = $(this).parent().index();
			$('.three__drawers__contents__right__content__form li').eq(indexs).find('.three__drawers__contents__right__content__block__content__flex').eq(number).find('input').prop('checked', false);
			if ($(this).parent().parent().find('.three__selects__flex__content__check :checked').length == 0) {
				index = $(this).parent().parent().parent().parent().index();
				$('.three__drawers__contents__left__content li').eq(index).removeClass('show');
				$(this).parent().parent().parent().parent().removeClass('show');
			}
			if (!($(this).parent().parent().find('.three__selects__flex__content__check :checked').length == $(this).parent().parent().find('.three__selects__flex__content__check').length)) {
				all = $(this).parent().parent().parent().parent().index();
				$('.three__drawers__contents__right__content__form li').eq(all).find('.three__drawers__contents__right__content__block__flex input').prop('checked', false);
			}
		}
	});

	$('.selection__links__creates').click(function () {
		$('.selection__dra__creates').addClass('show');
		$('.selection__back').toggle();
	});

	$('.selection__dra__creates__top__cross').click(function () {
		$('.selection__dra__creates').removeClass('show');
		$('.selection__back').hide();
	});

	$('.selection__dra__creates__three__flex__a').hide();
	$(".selection__dra__creates__three__flex__apps__app").on('change', function () {
		var file = $(this).prop('files')[0];
		var label = $(this).next();
		if (!($(this).children(".filename").length)) {
			$(this).parent(".selection__dra__creates__three__flex__apps").append('<span class="filename"></span>');
			label.addClass('changed');
		}
		label.next().html(file.name);
		if ($('.selection__dra__creates__three__flex__apps label').hasClass('changed')) {
			$(this).siblings('label').hide();
			$(this).siblings('.selection__dra__creates__three__flex__a').show();
		} else {

		}
	});

	$('.selection__dra__creates__three__flex__apps__app').on('change', function (e) {
		// 1枚だけ表示する
		var file = e.target.files[0];

		// ファイルのブラウザ上でのURLを取得する
		var blobUrl = window.URL.createObjectURL(file);

		// img要素に表示
		$('#file-preview').attr('src', blobUrl);
	});

	$('.selection__dra__creates__three__flex__apps__app').on('change', function (e) { //ファイルが選択されたら

		var file = $(this).prop('files')[0]; //ファイルの情報を代入(file.name=ファイル名/file.size=ファイルサイズ/file.type=ファイルタイプ)
		$('.js-upload-filename').text(file.name); //ファイル名を出力
		$('.js-upload-fileclear').show(); //クリアボタンを表示
	});
	$('.fa-times').click(function () { //クリアボタンがクリックされたら
		$('.selection__dra__creates__three__flex__apps__app').val(''); //inputをリセット
		$('.js-upload-filename').text('ファイルが未選択です'); //ファイル名をリセット
		$(this).hide(); //クリアボタンを非表示
	});





	$('.selection__dra__creates__three__flex i').click(function () {
		$(this).siblings('.selection__dra__creates__three__flex__apps').find('label').show();
		$(this).siblings('.selection__dra__creates__three__flex__apps').find('.selection__dra__creates__three__flex__a').hide();
		$(this).parent('.selection__dra__creates__three__flex').find('.selection__dra__creates__three__flex__apps').find('label').removeClass('changed');
		$(this).parent('.selection__dra__creates__three__flex').find(".selection__dra__creates__three__flex__apps").find('.filename').empty();
		$(this).parent('.selection__dra__creates__three__flex').find(".selection__dra__creates__three__flex__apps").find('<span class="filename"></span>').remove();
		$(this).parent('.selection__dra__creates__three__flex').find(".selection__dra__creates__three__flex__apps").find('.filename').remove();
	});

	$('.selection__dra__creates__bottom input').on('click', function () {
		if ($('.selection__dra__creates__two input').val() === '') {
			$('.selection__dra__creates__two').find('.error').addClass('false');
			$('.selection__dra__creates__two input').addClass('false');
		} else {
			$('.selection__dra__creates__two').find('.error').removeClass('false');
			$('.selection__dra__creates__two input').removeClass('false');
		}
		if ($('.selection__dra__creates__three textarea').val() === '') {
			$('.selection__dra__creates__three').find('.error').addClass('false');
			$('.selection__dra__creates__three textarea').addClass('false');
		} else {
			$('.selection__dra__creates__three').find('.error').removeClass('false');
			$('.selection__dra__creates__three textarea').removeClass('false');
		}
	});

	// 学習ページ課題の提出 TCA
	$('.academy__student__tca__center__boxs__button input').click(function () {

		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer6').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer7').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__7').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__7').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__9').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__9').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__10').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__10').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').removeClass('false');
		}

		if (!$('.academy__student__tca__center__boxs__task__tests').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__tests').hide();
			$('.academy__student__tca__center__boxs__button').hide();
			$('.academy__student__tca__center__boxs__task__texts').show();
		}

	});

	// 学習ページ課題の提出 SES
	$('.academy__student__ses__center__boxs__button input').click(function () {

		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer6').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer7').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__7').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__7').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__9').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__9').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__10').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__10').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').removeClass('false');
		}

		if (!$('.academy__student__tca__center__boxs__task__tests').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__tests').hide();
			$('.academy__student__ses__center__boxs__button').hide();
			$('.academy__student__tca__center__boxs__task__texts').show();
		}

	});

	// 学習ページ課題の提出 じょぶふる
	$('.academy__student__jobfull__center__boxs__button input').click(function () {

		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer6').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer7').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__7').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__7').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__9').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__9').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__10').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__10').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').removeClass('false');
		}

		if (!$('.academy__student__tca__center__boxs__task__testss').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__testss').hide();
			$('.academy__student__jobfull__center__boxs__button').hide();
			$('.academy__student__tca__center__boxs__task__texts').show();
		}

	});


	// 学習ページ課題の提出 いくじょぶ生
	$('.academy__student__ikujob__center__boxs__button input').click(function () {

		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__1').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__1').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer6').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer6').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__2').find('.answer7').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.answer7').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__2').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__2').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__3').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.answer3').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__3').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__3').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__4').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__4').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__5').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__5').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer2').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer3').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer3').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer4').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer4').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('.answer5').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.answer5').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__6').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__6').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__7').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__7').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__7').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__8').find('.answer2').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.answer2').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__8').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__8').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__9').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__9').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__9').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__10').find('.answer1').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.answer1').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__10').find('input').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__10').find('.error').removeClass('false');
		}

		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').val() === '') {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11 textarea').removeClass('false');
		}
		if ($('.academy__student__tca__center__boxs__task__test__11 textarea').hasClass('false')) {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').addClass('false');
		} else {
			$('.academy__student__tca__center__boxs__task__test__11').find('.error').removeClass('false');
		}

		if (!$('.academy__student__tca__center__boxs__task__tests').find('input').hasClass('false')) {

			$('.academy__student__tca__center__boxs__task__texts').show();
		}

	});

	// 企業登録
	// 人材紹介会社　編集
	$('.signup__jobfull__content__bottom input').on('click', function () {
		if ($('.signup__jobs__content__table__one input').val() === '') {
			$('.signup__jobs__content__table__one').find('.error').addClass('false');
			$('.signup__jobs__content__table__one input').addClass('false');
		} else {
			$('.signup__jobs__content__table__one').find('.error').removeClass('false');
			$('.signup__jobs__content__table__one input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__two input').val() === '') {
			$('.signup__jobs__content__table__two').find('.error').addClass('false');
			$('.signup__jobs__content__table__two input').addClass('false');
		} else {
			$('.signup__jobs__content__table__two').find('.error').removeClass('false');
			$('.signup__jobs__content__table__two input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__two input').val() === '')) {
			if ($('.signup__jobs__content__table__two input').val().length !== 13) {
				$('.signup__jobs__content__table__two').find('.erro').addClass('false');
				$('.signup__jobs__content__table__two input').addClass('false');
			} else {
				$('.signup__jobs__content__table__two').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__two input').removeClass('false');
			}
		}
		if ($('.signup__jobs__content__table__three input').val() === '') {
			$('.signup__jobs__content__table__three').find('.error').addClass('false');
			$('.signup__jobs__content__table__three input').addClass('false');
		} else {
			$('.signup__jobs__content__table__three').find('.error').removeClass('false');
			$('.signup__jobs__content__table__three input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__three input').val() === '')) {
			if ($('.signup__jobs__content__table__three input').val().length !== 8) {
				$('.signup__jobs__content__table__three').find('.erro').addClass('false');
				$('.signup__jobs__content__table__three input').addClass('false');
			} else {
				$('.signup__jobs__content__table__three').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__three input').removeClass('false');
			}
		}
		if ($('.signup__jobs__content__table__five input').val() === '') {
			$('.signup__jobs__content__table__five').find('.error').addClass('false');
			$('.signup__jobs__content__table__five input').addClass('false');
		} else {
			$('.signup__jobs__content__table__five').find('.error').removeClass('false');
			$('.signup__jobs__content__table__five input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__six input').val() === '') {
			$('.signup__jobs__content__table__six').find('.error').addClass('false');
			$('.signup__jobs__content__table__six input').addClass('false');
		} else {
			$('.signup__jobs__content__table__six').find('.error').removeClass('false');
			$('.signup__jobs__content__table__six input').removeClass('false');
		}
		// if(!($('.signup__jobs__content__table__six input').val() === '')){
		//     if($('.signup__jobs__content__table__six input').val().length !== 10){
		//         $('.signup__jobs__content__table__six').find('.erro').addClass('false');
		//         $('.signup__jobs__content__table__six input').addClass('false');
		//     } else {
		//         $('.signup__jobs__content__table__six').find('.erro').removeClass('false');
		//         $('.signup__jobs__content__table__six input').removeClass('false');
		//     }
		// }
		if ($('.signup__jobs__content__table__seven .one').val() === '' || $('.signup__jobs__content__table__seven .two').val() === '' || $('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .one').val() === '') {
			$('.signup__jobs__content__table__seven .one').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .one').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .two').val() === '') {
			$('.signup__jobs__content__table__seven .two').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .two').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven .three').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .three').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__seven .one').val() === '')) {
			if ($('.signup__jobs__content__table__seven .one').val().length !== 8) {
				$('.signup__jobs__content__table__seven').find('.erro').addClass('false');
				$('.signup__jobs__content__table__seven .one').addClass('false');
			} else {
				$('.signup__jobs__content__table__seven').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__seven .one').removeClass('false');
			}
		}
		if ($('.signup__jobs__content__table__eight input').val() === '') {
			$('.signup__jobs__content__table__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__one input').val() === '') {
			$('.signup__jobs__content__tables__first__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__two input').val() === '') {
			$('.signup__jobs__content__tables__first__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__two').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__three').find('.custom-select-trigger').hasClass('change')) {
			$('.signup__jobs__content__tables__first__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__eight').find('input[name=signupPay]').is(':checked')) {
			$('.signup__jobs__content__tables__first__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__nine input').val() === '') {
			$('.signup__jobs__content__tables__first__nine').find('input').addClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__nine').find('input').removeClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__one input').val() === '') {
			$('.signup__jobs__content__tables__one__one').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__one').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__two input').val() === '') {
			$('.signup__jobs__content__tables__one__two').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__two').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__three input').val() === '') {
			$('.signup__jobs__content__tables__one__three').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__three').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__one__four').find('input[name=signupAccount]').is(':checked')) {
			$('.signup__jobs__content__tables__one__four').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__four').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__five input').val() === '') {
			$('.signup__jobs__content__tables__one__five').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__five').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__six input').val() === '') {
			$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').removeClass('false');
		}
		if (!($('.signup__jobs__content__tables__one__six input').val() === '')) {
			let str = $('.signup__jobs__content__tables__one__six input').val();
			if (str.match(/[^ƒ@-ƒ–[@]+$/)) {
				$('.signup__jobs__content__tables__one__six').find('.erro').addClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			} else {
				$('.signup__jobs__content__tables__one__six').find('.erro').removeClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			}
		}
	});

	// 求人企業　編集
	$('.signup__jobfull__content__bottom input').on('click', function () {
		if ($('.signup__jobs__content__table__one input').val() === '') {
			$('.signup__jobs__content__table__one').find('.error').addClass('false');
			$('.signup__jobs__content__table__one input').addClass('false');
		} else {
			$('.signup__jobs__content__table__one').find('.error').removeClass('false');
			$('.signup__jobs__content__table__one input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__two input').val() === '') {
			$('.signup__jobs__content__table__two').find('.error').addClass('false');
			$('.signup__jobs__content__table__two input').addClass('false');
		} else {
			$('.signup__jobs__content__table__two').find('.error').removeClass('false');
			$('.signup__jobs__content__table__two input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__two input').val() === '')) {
			if ($('.signup__jobs__content__table__two input').val().length !== 13) {
				$('.signup__jobs__content__table__two').find('.erro').addClass('false');
				$('.signup__jobs__content__table__two input').addClass('false');
			} else {
				$('.signup__jobs__content__table__two').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__two input').removeClass('false');
			}
		}
		if ($('.signup__jobs__content__table__five input').val() === '') {
			$('.signup__jobs__content__table__five').find('.error').addClass('false');
			$('.signup__jobs__content__table__five input').addClass('false');
		} else {
			$('.signup__jobs__content__table__five').find('.error').removeClass('false');
			$('.signup__jobs__content__table__five input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__six input').val() === '') {
			$('.signup__jobs__content__table__six').find('.error').addClass('false');
			$('.signup__jobs__content__table__six input').addClass('false');
		} else {
			$('.signup__jobs__content__table__six').find('.error').removeClass('false');
			$('.signup__jobs__content__table__six input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .one').val() === '' || $('.signup__jobs__content__table__seven .two').val() === '' || $('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .one').val() === '') {
			$('.signup__jobs__content__table__seven .one').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .one').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .two').val() === '') {
			$('.signup__jobs__content__table__seven .two').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .two').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven .three').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .three').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__seven .one').val() === '')) {
			if ($('.signup__jobs__content__table__seven .one').val().length !== 8) {
				$('.signup__jobs__content__table__seven').find('.erro').addClass('false');
				$('.signup__jobs__content__table__seven .one').addClass('false');
			} else {
				$('.signup__jobs__content__table__seven').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__seven .one').removeClass('false');
			}
		}
		if (!($('.two__select__flex__content__check').hasClass('show'))) {
			$('.jobs__create__thirteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirteen').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__six input').val() === '') {
			$('.signup__jobs__content__table__six').find('.error').addClass('false');
			$('.signup__jobs__content__table__six input').addClass('false');
		} else {
			$('.signup__jobs__content__table__six').find('.error').removeClass('false');
			$('.signup__jobs__content__table__six input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__eight input').val() === '') {
			$('.signup__jobs__content__table__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__three input').val() === '') {
			$('.signup__jobs__content__table__three').find('.error').addClass('false');
			$('.signup__jobs__content__table__three input').addClass('false');
		} else {
			$('.signup__jobs__content__table__three').find('.error').removeClass('false');
			$('.signup__jobs__content__table__three input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__three input').val() === '')) {
			if ($('.signup__jobs__content__table__three input').val().length !== 8) {
				$('.signup__jobs__content__table__three').find('.erro').addClass('false');
				$('.signup__jobs__content__table__three input').addClass('false');
			} else {
				$('.signup__jobs__content__table__three').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__three input').removeClass('false');
			}
		}

		if ($('.signup__jobs__content__tables__first__one input').val() === '') {
			$('.signup__jobs__content__tables__first__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__two input').val() === '') {
			$('.signup__jobs__content__tables__first__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__two').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__three').find('.custom-select-trigger').hasClass('change')) {
			$('.signup__jobs__content__tables__first__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__eight').find('input[name=signupPay]').is(':checked')) {
			$('.signup__jobs__content__tables__first__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__nine input').val() === '') {
			$('.signup__jobs__content__tables__first__nine').find('input').addClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__nine').find('input').removeClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__one input').val() === '') {
			$('.signup__jobs__content__tables__one__one').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__one').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__two input').val() === '') {
			$('.signup__jobs__content__tables__one__two').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__two').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__three input').val() === '') {
			$('.signup__jobs__content__tables__one__three').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__three').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__one__four').find('input[name=signupAccount]').is(':checked')) {
			$('.signup__jobs__content__tables__one__four').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__four').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__five input').val() === '') {
			$('.signup__jobs__content__tables__one__five').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__five').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__six input').val() === '') {
			$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').removeClass('false');
		}
		if (!($('.signup__jobs__content__tables__one__six input').val() === '')) {
			let str = $('.signup__jobs__content__tables__one__six input').val();
			if (str.match(/[^ƒ@-ƒ–[@]+$/)) {
				$('.signup__jobs__content__tables__one__six').find('.erro').addClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			} else {
				$('.signup__jobs__content__tables__one__six').find('.erro').removeClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			}
		}
	});

	// いくじょぶ企業　編集
	$('.signup__jobfull__content__bottom input').on('click', function () {
		if ($('.signup__jobs__content__table__one input').val() === '') {
			$('.signup__jobs__content__table__one').find('.error').addClass('false');
			$('.signup__jobs__content__table__one input').addClass('false');
		} else {
			$('.signup__jobs__content__table__one').find('.error').removeClass('false');
			$('.signup__jobs__content__table__one input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__two input').val() === '') {
			$('.signup__jobs__content__table__two').find('.error').addClass('false');
			$('.signup__jobs__content__table__two input').addClass('false');
		} else {
			$('.signup__jobs__content__table__two').find('.error').removeClass('false');
			$('.signup__jobs__content__table__two input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__two input').val() === '')) {
			if ($('.signup__jobs__content__table__two input').val().length !== 13) {
				$('.signup__jobs__content__table__two').find('.erro').addClass('false');
				$('.signup__jobs__content__table__two input').addClass('false');
			} else {
				$('.signup__jobs__content__table__two').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__two input').removeClass('false');
			}
		}
		if ($('.signup__jobs__content__table__five input').val() === '') {
			$('.signup__jobs__content__table__five').find('.error').addClass('false');
			$('.signup__jobs__content__table__five input').addClass('false');
		} else {
			$('.signup__jobs__content__table__five').find('.error').removeClass('false');
			$('.signup__jobs__content__table__five input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__six input').val() === '') {
			$('.signup__jobs__content__table__six').find('.error').addClass('false');
			$('.signup__jobs__content__table__six input').addClass('false');
		} else {
			$('.signup__jobs__content__table__six').find('.error').removeClass('false');
			$('.signup__jobs__content__table__six input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .one').val() === '' || $('.signup__jobs__content__table__seven .two').val() === '' || $('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .one').val() === '') {
			$('.signup__jobs__content__table__seven .one').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .one').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .two').val() === '') {
			$('.signup__jobs__content__table__seven .two').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .two').removeClass('false');
		}
		if ($('.signup__jobs__content__table__seven .three').val() === '') {
			$('.signup__jobs__content__table__seven .three').addClass('false');
		} else {
			$('.signup__jobs__content__table__seven .three').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__seven .one').val() === '')) {
			if ($('.signup__jobs__content__table__seven .one').val().length !== 8) {
				$('.signup__jobs__content__table__seven').find('.erro').addClass('false');
				$('.signup__jobs__content__table__seven .one').addClass('false');
			} else {
				$('.signup__jobs__content__table__seven').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__seven .one').removeClass('false');
			}
		}
		if (!($('.two__select__flex__content__check').hasClass('show'))) {
			$('.jobs__create__thirteen').find('.error').addClass('false');
		} else {
			$('.jobs__create__thirteen').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__six input').val() === '') {
			$('.signup__jobs__content__table__six').find('.error').addClass('false');
			$('.signup__jobs__content__table__six input').addClass('false');
		} else {
			$('.signup__jobs__content__table__six').find('.error').removeClass('false');
			$('.signup__jobs__content__table__six input').removeClass('false');
		}
		if ($('.signup__jobs__content__table__eight input').val() === '') {
			$('.signup__jobs__content__table__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__table__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__table__three input').val() === '') {
			$('.signup__jobs__content__table__three').find('.error').addClass('false');
			$('.signup__jobs__content__table__three input').addClass('false');
		} else {
			$('.signup__jobs__content__table__three').find('.error').removeClass('false');
			$('.signup__jobs__content__table__three input').removeClass('false');
		}
		if (!($('.signup__jobs__content__table__three input').val() === '')) {
			if ($('.signup__jobs__content__table__three input').val().length !== 8) {
				$('.signup__jobs__content__table__three').find('.erro').addClass('false');
				$('.signup__jobs__content__table__three input').addClass('false');
			} else {
				$('.signup__jobs__content__table__three').find('.erro').removeClass('false');
				$('.signup__jobs__content__table__three input').removeClass('false');
			}
		}

		if ($('.signup__jobs__content__tables__first__one input').val() === '') {
			$('.signup__jobs__content__tables__first__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__two input').val() === '') {
			$('.signup__jobs__content__tables__first__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__two').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__three').find('.custom-select-trigger').hasClass('change')) {
			$('.signup__jobs__content__tables__first__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__first__eight').find('input[name=signupPay]').is(':checked')) {
			$('.signup__jobs__content__tables__first__eight').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__eight').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__first__nine input').val() === '') {
			$('.signup__jobs__content__tables__first__nine').find('input').addClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__first__nine').find('input').removeClass('false');
			$('.signup__jobs__content__tables__first__nine').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__one input').val() === '') {
			$('.signup__jobs__content__tables__one__one').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__one').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__one').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__two input').val() === '') {
			$('.signup__jobs__content__tables__one__two').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__two').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__two').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__three input').val() === '') {
			$('.signup__jobs__content__tables__one__three').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__three').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__three').find('.error').removeClass('false');
		}
		if (!$('.signup__jobs__content__tables__one__four').find('input[name=signupAccount]').is(':checked')) {
			$('.signup__jobs__content__tables__one__four').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__four').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__five input').val() === '') {
			$('.signup__jobs__content__tables__one__five').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__five').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__five').find('.error').removeClass('false');
		}
		if ($('.signup__jobs__content__tables__one__six input').val() === '') {
			$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').addClass('false');
		} else {
			$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			$('.signup__jobs__content__tables__one__six').find('.error').removeClass('false');
		}
		if (!($('.signup__jobs__content__tables__one__six input').val() === '')) {
			let str = $('.signup__jobs__content__tables__one__six input').val();
			if (str.match(/[^ƒ@-ƒ–[@]+$/)) {
				$('.signup__jobs__content__tables__one__six').find('.erro').addClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').addClass('false');
			} else {
				$('.signup__jobs__content__tables__one__six').find('.erro').removeClass('false');
				$('.signup__jobs__content__tables__one__six').find('input').removeClass('false');
			}
		}
	});


	$('.js-accordion-title').on('click', function () {
		/*クリックでコンテンツを開閉*/
		$(this).next().slideToggle(200);
		/*矢印の向きを変更*/
		$(this).toggleClass('open', 200);
	});

	//選考詳細ページ

	//書類選考結果　求人
	$("#step3form").validate({
		rules: {
			oneResult: {
				required: true
			},
			approve_reason: {
				required: true
			},
			reject_reason: {
				required: true
			},
			oneNext: {
				required: true
			},
		},
		messages: {
			oneResult: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			approve_reason: {
				required: '必ず入力して下さい。'
			},
			reject_reason: {
				required: '必ず入力して下さい。'
			},
			oneNext: {
				required: '必ずどれか一つ選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="oneResult"]:radio').change(function () {
		if ($('#oneResult_ok').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#oneResult_no').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
		}
	});

	//一次面接詳細　求人
	$("#check_04_1").validate({
		rules: {
			method: {
				required: true
			},
			destination: {
				required: true
			},
			manager: {
				required: true
			},
			property: {
				required: true
			},
			emergency_contact: {
				required: true,
				number: true
			},
			datetime: {
				required: true
			},
		},
		messages: {
			method: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			destination: {
				required: '面接場所の住所を入力して下さい。'
			},
			manager: {
				required: '必ず入力して下さい。'
			},
			property: {
				required: '必ず入力して下さい。'
			},
			emergency_contact: {
				required: '必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			datetime: {
				required: '日程候補を必ず一つ以上選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="method"]:radio').change(function () {
		if ($('#check_04_1_meet').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_04_1_video').prop('checked')) {
			$('.text').hide();
		}
	});

	$('.selection_datetime_decision').click(function () {

		var date = new Date($('#date').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($("#time").val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		textarea.val(textarea.val() + dateAll);
	});

	//一次面接結果　求人
	$("#step4form").validate({
		rules: {
			twoResult: {
				required: true
			},
			approve_reason: {
				required: true
			},
			reject_reason: {
				required: true
			},
			twoNext: {
				required: true
			},
		},
		messages: {
			twoResult: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			approve_reason: {
				required: '必ず入力して下さい。'
			},
			reject_reason: {
				required: '必ず入力して下さい。'
			},
			twoNext: {
				required: '必ずどちらか一つ選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="twoResult"]:radio').change(function () {
		if ($('#twoResult_ok').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#twoResult_no').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
		}
	});

	//二次面接詳細　求人
	$("#check_05_1").validate({
		rules: {
			method: {
				required: true
			},
			destination: {
				required: true
			},
			manager: {
				required: true
			},
			property: {
				required: true
			},
			emergency_contact: {
				required: true,
				number: true
			},
			'datetime[memo]': {
				required: true
			},
		},
		messages: {
			method: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			destination: {
				required: '面接場所の住所を入力して下さい。'
			},
			manager: {
				required: '必ず入力して下さい。'
			},
			property: {
				required: '必ず入力して下さい。'
			},
			emergency_contact: {
				required: '必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			'datetime[memo]': {
				required: '日程候補を必ず一つ以上選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="method"]:radio').change(function () {
		if ($('#check_05_1_meet').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_05_1_video').prop('checked')) {
			$('.text').hide();
		}
	});

	$('.deletemastedate').hide();

	$('.selection_datetime_decision_2').click(function () {

		var date = new Date($('#date_2').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_2 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_2').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		$('.masterdate').append('<div><input name="datetime[]" type="text" readonly></div>');
		$('.masterdate').find('input:last').val(dateAll);
		$('.deletemastedate').show();
	});

	$('.deletemastedate').click(function () {
		$('.masterdate').find('div:last').remove();
	});

	//二次面接結果　求人
	$("#step5form").validate({
		rules: {
			threeResult: {
				required: true
			},
			approve_reason: {
				required: true
			},
			threeNext: {
				required: true
			},
		},
		messages: {
			threeResult: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			approve_reason: {
				required: '必ず入力して下さい。'
			},
			threeNext: {
				required: '必ず選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="threeResult"]:radio').change(function () {
		if ($('#threeResult_ok').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#threeResult_no').prop('checked')) {
			$('.text').hide();
		}
	});

	//最終面接詳細　求人
	$("#check_06_1").validate({
		rules: {
			method: {
				required: true
			},
			destination: {
				required: true
			},
			manager: {
				required: true
			},
			property: {
				required: true
			},
			emergency_contact: {
				required: true,
				number: true
			},
			'datetime[memo]': {
				required: true
			},
		},
		messages: {
			method: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			destination: {
				required: '面接場所の住所を入力して下さい。'
			},
			manager: {
				required: '必ず入力して下さい。'
			},
			property: {
				required: '必ず入力して下さい。'
			},
			emergency_contact: {
				required: '必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			'datetime[memo]': {
				required: '日程候補を必ず一つ以上選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="method"]:radio').change(function () {
		if ($('#check_06_1_meet').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_06_1_video').prop('checked')) {
			$('.text').hide();
		}
	});

	$('.selection_datetime_decision_3').click(function () {

		var date = new Date($('#date_3').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_3 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_3').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		$('.masterdate').append('<div><input name="datetime[]" type="text" readonly></div>');
		$('.masterdate').find('input:last').val(dateAll);
		$('.deletemastedate').show();
	});

	$('.selection_datetime_decision_4').click(function () {

		var date = new Date($('#date_4').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_4 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_4').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		$('.masterdate').append('<div><input name="datetime[]" type="text" readonly></div>');
		$('.masterdate').find('input:last').val(dateAll);
		$('.deletemastedate').show();
	});

	$('.selection_datetime_decision_5').click(function () {

		var date = new Date($('#date_5').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_5 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_5').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		$('.masterdate').append('<div><input name="datetime[]" type="text" readonly></div>');
		$('.masterdate').find('input:last').val(dateAll);
		$('.deletemastedate').show();
	});

	$('.selection_datetime_decision_7').click(function () {

		var date = new Date($('#date_7').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_7 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_7').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		$('.masterdate').append('<div><input name="datetime[]" type="text" readonly></div>');
		$('.masterdate').find('input:last').val(dateAll);
		$('.deletemastedate').show();
	});




	//最終面接結果　求人
	$("#step6form").validate({
		rules: {
			fourResult: {
				required: true
			},
			approve_reason: {
				required: true
			},
			fourNext: {
				required: true
			},
		},
		messages: {
			fourResult: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			approve_reason: {
				required: '必ず入力して下さい。'
			},
			fourNext: {
				required: '必ず選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="fourResult"]:radio').change(function () {
		if ($('#fourResult_ok').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#fourResult_no').prop('checked')) {
			$('.text').hide();
		}
	});

	//オファー面談詳細　求人
	$("#check_07_1").validate({
		rules: {
			offerrThree: {
				required: true
			},
			destination: {
				required: true
			},
			manager: {
				required: true
			},
			property: {
				required: true
			},
			emergency_contact: {
				required: true,
				number: true
			},
			'datetime[memo]': {
				required: true
			},
		},
		messages: {
			offerrThree: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			destination: {
				required: '面接場所の住所を入力して下さい。'
			},
			manager: {
				required: '必ず入力して下さい。'
			},
			property: {
				required: '必ず入力して下さい。'
			},
			emergency_contact: {
				required: '必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			'datetime[memo]': {
				required: '日程候補を必ず一つ以上選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="offerrThree"]:radio').change(function () {
		if ($('#check_07_1_meet').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_07_1_video').prop('checked')) {
			$('.text').hide();
		}
	});

	$('.selection_datetime_decision_4').click(function () {

		var date = new Date($('#date_4').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_4 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_4').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		textarea.val(textarea.val() + dateAll);
	});

	//入社条件(仮)　求人
	$("#check_07_2").validate({
		rules: {
			money_bonus: {
				required: true
			},
			reply_deadline: {
				required: true
			},
		},
		messages: {
			money_bonus: {
				required: '必ず入力して下さい。'
			},
			reply_deadline: {
				required: '必ず日付を選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//入社条件(確定)　求人
	$("#check_08").validate({
		rules: {
			money_bonus: {
				required: true
			},
			hire_date: {
				required: true
			},
		},
		messages: {
			money_bonus: {
				required: '必ず入力して下さい。'
			},
			hire_date: {
				required: '必ず日付を選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//返金申請(確定)　求人
	$("#check_09").validate({
		rules: {
			leave_date: {
				required: true
			},
			retirement_certificate: {
				required: true
			},
			resignation_ticket: {
				required: true
			},
		},
		messages: {
			leave_date: {
				required: '必ず日付を選択して下さい。'
			},
			retirement_certificate: {
				required: '必ずファイルを選択して下さい。'
			},
			resignation_ticket: {
				required: '必ずファイルを選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//面接日程変更申請
	$("#check_10").validate({
		rules: {
			reason_change: {
				required: true
			},
			'datetime[memo]': {
				required: true
			},
		},
		messages: {
			reason_change: {
				required: '必ず入力して下さい。'
			},
			'datetime[memo]': {
				required: '日程候補を必ず一つ以上選択して下さい。'
			},
		},
	});

	$('.selection_datetime_decision_5').click(function () {

		var date = new Date($('#date_5').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_5 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_5').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		textarea.val(textarea.val() + dateAll);
	});

	//確定日程の提出
	$("#check_11").validate({
		rules: {
			datetime_decision: {
				required: true
			},
			'datetime[date]]': {
				required: true
			},
			'datetime[time]': {
				required: true
			},
			'datetime[demo]]': {
				required: true
			},
		},
		messages: {
			datetime_decision: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			'datetime[date]]': {
				required: '必ず日時を選択して下さい。'
			},
			'datetime[time]': {
				required: '必ず日時を選択して下さい。'
			},
			'datetime[demo]': {
				required: '日程候補を一つ以上選択して下さい。'
			},
		},
	});
	var changid = $('#change').val();
	$('[name="datetime_decision"]:radio').change(function () {
		if ($('#choice').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
			$('.text02').find('#change').prop('checked', false);
			$('#change').val(changid);
		} else if ($('#again').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
			$('.text02').find('#change').prop('checked', true);
			$('#change').val(changid);
		}
	});

	$('.selection_datetime_decision_6').click(function () {
		var date = new Date($('#date_6').val());
		var day = date.getDate();
		var textarea = $('.selection_datetime_6 textarea');
		var month = date.getMonth() + 1;
		var year = date.getFullYear();
		var dateOne = ([year, month, day].join('/'));
		var dateTwo = ($('#time_6').val());
		var dateAll = dateOne + ' ' + dateTwo + '\n';
		textarea.val(textarea.val() + dateAll);
	});


	//辞退申請　人材
	$("#check_12").validate({
		rules: {
			reason: {
				required: true
			},
		},
		messages: {
			reason: {
				required: '必ず辞退申請理由を入力して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//意思確認　人材
	$("#check_13").validate({
		rules: {
			threeOne: {
				required: true
			},
			reason: {
				required: true
			},
		},
		messages: {
			threeOne: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			reason: {
				required: '必ず入力して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="threeOne"]:radio').change(function () {
		if ($('#check_13_no').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_13_ok').prop('checked')) {
			$('.text').hide();
		}
	});

	//内定意思確認　人材
	$("#check_14").validate({
		rules: {
			offerOne: {
				required: true
			},
			reject_reason: {
				required: true
			},
			available_dates: {
				required: true
			},
		},
		messages: {
			offerOne: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			reject_reason: {
				required: '必ず入力して下さい。'
			},
			available_dates: {
				required: '必ず入力して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="offerOne"]:radio').change(function () {
		if ($('#check_14_no').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_14_ok').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
		}
	});

	//面接希望日提出　人材
	$("#check_15").validate({
		rules: {
			offerOne: {
				required: true
			},
			reject_reason: {
				required: true
			},
			'datetime[]': {
				required: true
			}
		},
		messages: {
			offerOne: {
				required: '必ずどちらか一つ選択して下さい。'
			},
			reject_reason: {
				required: '必ず入力して下さい。'
			},
			'datetime[]': {
				required: '必ず入力して下さい。'
			}
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="offerOne"]:radio').change(function () {
		if ($('#check_15_no').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#check_15_ok').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
		}
	});

	//面接希望日変更申請　人材
	$("#check_16").validate({
		rules: {
			reason: {
				required: true
			},
			'datetime[]': {
				required: true
			}
		},
		messages: {
			reason: {
				required: '必ず入力して下さい。'
			},
			'datetime[]': {
				required: '必ず入力して下さい。'
			}
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//エントリー情報変更　人材
	$("#check_17").validate({
		rules: {
			checklist: {
				required: true
			},
			recommendation: {
				required: true
			}
		},
		messages: {
			checklist: {
				required: '必ず入力して下さい。'
			},
			recommendation: {
				required: '必ず入力して下さい。'
			}
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//返金申請承認　じょぶふる
	$("#check_18").validate({
		rules: {
			amount_refund: {
				required: true
			}
		},
		messages: {
			amount_refund: {
				required: '必ず確定返金額を選択して下さい。',
				number: '数字のみ入力出来ます。'
			}
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	//課題添削
	$("#check_result").validate({
		rules: {
			point: {
				required: true
			}
		},
		messages: {
			point: {
				required: '必ず点数を入力して下さい。'
			}
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$('[name="btn"]:radio').change(function () {
		if ($('#result_no').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#result_ok').prop('checked')) {
			$('.text').hide();
		}
	});

	$("#industry_check").validate({
		rules: {
			createindustry: {
				required: true
			},
		},
		messages: {
			createindustry: {
				required: '業種を必ず一つ選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':checkbox')) {
				error.insertAfter("#industry_no");
			} else {
				error.insertAfter(element);
			}
		}
	});

	//独自の検証ルールを設定
	var methods = {
		//電話番号
		tel: function (value, element) {
			return this.optional(element) || /^\d{2}-\d{4}-\d{4}$|^\d{3}-\d{4}-\d{4}$/.test(value);
		},
		//郵便番号
		postalcode: function (value, element) {
			return this.optional(element) || /^\d{3}-\d{4}$/.test(value);
		},
		//カタカナ
		katakana: function (value, element) {
			return this.optional(element) || /^[ア-ン゛゜ァ-ォャ-ョー「」、]+$/.test(value);
		}
	};


	//独自の検証ルールを追加（基本的に変更しなくてOKです）
	$.each(methods, function (key) {
		$.validator.addMethod(key, this);
	});


	$("#formCheck").validate({
		rules: {
			name: {
				required: true
			},
			company_number: {
				required: true,
				maxlength: 13,
				minlength: 13,
				number: true
			},
			homepage: {
				required: true
			},
			acceptance_number: {
				required: true,
				maxlength: 8,
				minlength: 8,
				number: true
			},
			telephone_number: {
				tel: true,
				required: true,
			},
			'headquarter_address[zipcode]': {
				required: true,
				postalcode: true
			},
			'headquarter_address[address_1]': {
				required: true
			},
			industry: {
				required: true
			},
			employees_number: {
				required: true,
				number: true
			},
			established_year: {
				required: true
			},
			contract_plan: {
				required: true
			},
			payment_method: {
				required: true
			},
			company_overview: {
				required: true
			},
			business_content: {
				required: true
			},
			financial_institution_name: {
				required: true
			},
			branch_name: {
				required: true
			},
			branch_number: {
				required: true,
				number: true
			},
			account_type: {
				required: true
			},
			account_number: {
				required: true,
				number: true
			},
			account_holder_name_kana: {
				required: true,
				katakana: true
			},
			name_admin_company: {
				required: true
			},
			email_admin_company: {
				required: true,
				email: true
			},
			furigana: {
				required: true
			},
			tel: {
				required: true,
				number: true
			},
			email: {
				required: true,
				email: true
			},
			email_conf: {
				required: true,
				email: true,
				equalTo: '#email'
			},
			content: {
				required: true,
				maxlength: 100
			},
			subject: {
				required: true
			},
			content: {
				required: true,
				maxlength: 100
			},
			name_curriculum: {
				required: true
			},
			number_of_lessons: {
				required: true,
				number: true
			},
			'category_id[]': {
				required: true
			},
			average_school_day: {
				required: true,
				number: true
			},
			period: {
				required: true
			},
			'privacy_policy[destination_1]': {
				required: true
			},
			'privacy_policy[]': {
				required: true
			},
			title: {
				required: true,
				maxlength: 54,
			},
			startdate: {
				required: true,
			},
			enddate: {
				required: true,
			},
			work_content: {
				required: true,
			},
			min_age: {
				required: true,
			},
			min_age: {
				required: true,
			},
			sex: {
				required: true,
			},
			highest_degree: {
				required: true,
			},
			number_worked_company: {
				required: true,
			},
			japanese_level: {
				required: true,
			},
			english_level: {
				required: true,
			},
			chinese_level: {
				required: '中国語レベルを必ず選択して下さい。',
			},
		},
		messages: {
			name: {
				required: '企業名を必ず入力して下さい。'
			},
			company_number: {
				required: '法人番号を必ず入力して下さい。',
				maxlength: '13ケタの半角数字を入力して下さい。',
				minlength: '13ケタの半角数字を入力して下さい。',
				number: '半角数字のみ入力出来ます。'
			},
			homepage: {
				required: '企業URLを必ず入力して下さい。',
			},
			acceptance_number: {
				required: '許可・届出受理番号を必ず入力して下さい。',
				maxlength: '8ケタの半角数字を入力して下さい。',
				minlength: '8ケタの半角数字を入力して下さい。',
				number: '半角数字のみ入力出来ます。'
			},
			telephone_number: {
				tel: '電話番号を正確に入力して下さい。例：00-0000-0000',
				required: '電話番号を必ず入力して下さい。例：00-0000-0000',
			},
			'headquarter_address[zipcode]': {
				required: '郵便番号を必ず入力して下さい。例：123-4567',
				postalcode: '郵便番号を正確に入力して下さい。例：123-4567'
			},
			'headquarter_address[address_1]': {
				required: '本社住所を必ず入力して下さい。'
			},
			industry: {
				required: '業種を必ず選択して下さい。'
			},
			employees_number: {
				required: '従業員数を必ず入力して下さい。',
				number: '半角数字のみ入力出来ます。'
			},
			established_year: {
				required: '設立年月を必ず選択して下さい。'
			},
			contract_plan: {
				required: '契約プランを必ず選択して下さい。'
			},
			payment_method: {
				required: '支払いサイクルを必ず選択して下さい。'
			},
			company_overview: {
				required: '会社概要を必ず入力して下さい。'
			},
			business_content: {
				required: '事業内容を必ず入力して下さい。'
			},
			financial_institution_name: {
				required: '金融機関名を必ず入力して下さい。'
			},
			branch_name: {
				required: '支店名を必ず入力して下さい。'
			},
			branch_number: {
				required: '支店番号を必ず入力して下さい。',
				number: '半角数字のみ入力出来ます。'
			},
			account_type: {
				required: '口座種別を必ず選択して下さい。'
			},
			account_number: {
				required: '口座番号を必ず入力して下さい。',
				number: '半角数字のみ入力出来ます。'
			},
			account_holder_name_kana: {
				required: '口座名義人名（法人名）を必ず【カタカナ】で入力して下さい。',
				katakana: '全角カタカナで入力して下さい。'
			},
			name_admin_company: {
				required: '担当者名を必ず入力して下さい。'
			},
			email_admin_company: {
				required: 'メールアドレスを必ず入力して下さい。',
				email: 'Eメールの形式で入力して下さい。'
			},

			furigana: {
				required: 'フリガナを必ず入力して下さい。'
			},
			email: {
				required: 'メールアドレスを必ず入力して下さい。',
				email: 'Eメールの形式で入力して下さい。'
			},
			email_conf: {
				required: '再度メールアドレスを必ず入力して下さい。',
				email: 'Eメールの形式で入力して下さい。',
				equalTo: '入力した値が一致しません。'
			},
			tel: {
				required: '電話番号を必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			subject: {
				required: '件名を必ず入力して下さい。',
			},
			content: {
				required: 'お知らせ内容を必ず入力して下さい。',
			},
			contentt: {
				required: '内容を必ず入力して下さい。',
				maxlength: '最大文字数100を超えています。文章を短くして下さい。'
			},
			name_curriculum: {
				required: 'タイトルを必ず入力して下さい。',
			},
			number_of_lessons: {
				required: 'No.を必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			'category_id[]': {
				required: 'コースを必ず選択して下さい。',
			},
			average_school_day: {
				required: '平均学習日数を必ず入力して下さい。',
				number: '数字のみ入力出来ます。'
			},
			period: {
				required: '必ずどちらかひとつ選択して下さい。',
			},
			'destination_1[]': {
				required: '必ず選択して下さい。',
			},
			'privacy_policy[]': {
				required: '必ず選択して下さい。',
			},
			title: {
				required: '募集名を必ず入力して下さい。',
				maxlength: '54文字以内で入力して下さい。',
			},
			startdate: {
				required: '公開日を必ず選択して下さい。',
			},
			enddate: {
				required: '公開終了日を必ず選択して下さい。',
			},
			work_content: {
				required: '業務内容を必ず入力して下さい。',
			},
			name: {
				required: '企業名を必ず入力して下さい。',
			},
			min_age: {
				required: '応募可能な年齢を必ず選択して下さい。',
			},
			sex: {
				required: '性別を必ず選択して下さい。',
			},
			highest_degree: {
				required: '最終学歴を必ず選択して下さい。',
			},
			number_worked_company: {
				required: '就業経験社数を必ず選択して下さい。',
			},
			japanese_level: {
				required: '日本語レベルを必ず選択して下さい。',
			},
			english_level: {
				required: '英語レベルを必ず選択して下さい。',
			},
			chinese_level: {
				required: '中国語レベルを必ず選択して下さい。',
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':text')) {
				error.insertAfter(element)
			} else if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}


	});

	$('[name="curriculum_type"]:radio').change(function () {
		if ($('#type_write').prop('checked')) {
			$('.text').hide();
			$('.text01').show();
		} else if ($('#type_read').prop('checked')) {
			$('.text').hide();
			$('.text02').show();
		}
	});

	$("#mainform").validate({
		rules: {
			academy_type: {
				required: true
			},
			name: {
				required: true
			},
			name_rubi: {
				required: true
			},
			min_age: {
				required: true
			},
			sex: {
				required: true
			},
			person_in_charge_id: {
				required: true
			},
			email: {
				required: true,
				email: true
			},
			address: {
				required: true,
			},
			current_recruitment_form: {
				required: true,
			},
			highest_degree: {
				required: true,
			},
		},
		messages: {
			academy_type: {
				required: '受講希望コースを必ず一つ選択して下さい。'
			},
			name: {
				required: '名前を必ず入力して下さい。'
			},
			name_rubi: {
				required: 'ふりがなを必ず入力して下さい。'
			},
			min_age: {
				required: '年齢を必ず選択して下さい。'
			},
			sex: {
				required: '性別を必ず選択して下さい。'
			},
			person_in_charge_id: {
				required: '担当者を必ず選択して下さい。'
			},
			email: {
				required: 'メールアドレスを必ず選択して下さい。'
			},
			address: {
				required: '現住所を必ず選択して下さい。'
			},
			current_recruitment_form: {
				required: '現住の雇用形態を必ず選択して下さい。'
			},
			highest_degree: {
				required: '最終学歴を必ず選択して下さい。'
			},
		},
		//エラーメッセージ出力箇所調整
		errorPlacement: function (error, element) {
			if (element.is(':text')) {
				error.insertAfter(element)
			} else if (element.is(':checkbox')) {
				error.appendTo(element.parent());
			} else if (element.is(':radio')) {
				error.appendTo(element.parent());
			} else {
				error.insertAfter(element);
			}
		}
	});

	$(".hira_change").blur(function () {
		hiraChange($(this));
	});

	hiraChange = function (ele) {
		var val = ele.val();
		var hira = val.replace(/[ぁ-ん]/g, function (s) {
			return String.fromCharCode(s.charCodeAt(0) + 0x60)
		});

		if (val.match(/[ァ-ン]/g)) {
			$(ele).val(hira)
		}
	};

	$(".char_change").blur(function () {
		charactersChange($(this));
	});

	charactersChange = function (ele) {
		var val = ele.val();
		var han = val.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s) {
			return String.fromCharCode(s.charCodeAt(0) - 0xFEE0)
		});

		if (val.match(/[Ａ-Ｚａ-ｚ０-９]/g)) {
			$(ele).val(han.replace(/[‐－―]/g, "-"));
		}
	}

	$('.three__drawers__contents__right__content__block').click(function () {
		// カテゴリーAのチェックを全部入れる
		$('input[name="location1"]').on('click', function () {
			$('input[name="area[hokkaido]"]').attr('checked', true).prop('checked', true).change();
		});
		// カテゴリーAのチェックを全部外す
		$('input[name="location2"]').on('click', function () {
			$('input[name="area[hokkaido]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location3"]').on('click', function () {
			$('input[name="area[kanto]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location4"]').on('click', function () {
			$('input[name="area[kanto]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location5"]').on('click', function () {
			$('input[name="area[chubu]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location6"]').on('click', function () {
			$('input[name="area[chubu]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location7"]').on('click', function () {
			$('input[name="area[kinki]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location8"]').on('click', function () {
			$('input[name="area[kinki]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location9"]').on('click', function () {
			$('input[name="area[chugoku]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location10"]').on('click', function () {
			$('input[name="area[chugoku]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location11"]').on('click', function () {
			$('input[name="area[shikoku]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location12"]').on('click', function () {
			$('input[name="area[shikoku]"]').removeAttr('checked').prop('checked', false).change();
		});
		$('input[name="location13"]').on('click', function () {
			$('input[name="area[okinawa]"]').attr('checked', true).prop('checked', true).change();
		});
		$('input[name="location14"]').on('click', function () {
			$('input[name="area[okinawa]"]').removeAttr('checked').prop('checked', false).change();
		});
	});


	$.datetimepicker.setLocale('ja');

	$("#datetimepicker1").datetimepicker({
		format: 'Y年m月d日 H:i',
	});

	$('#logout_button').click(function () {
		$('#logoutvalue').val('1');
		$('#logout').submit();
		return false;
	});
	$('#logout_button_2').click(function () {
		$('#logoutvalue').val('1');
		$('#logout').submit();
		return false;
	});



});
