$(document).ready(function () {
	$('.header__all__right a').hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		}
	);

	$('.footer__menu a').hover(
		function () {
			$(this).addClass('hover');
		},
		function () {
			$(this).removeClass('hover');
		}
	);

	$('.contents__service__block').hover(
		function () {
			$(this).addClass('show');
			$(this).find('p').addClass('show');
		},
		function () {
			$(this).removeClass('show');
			$(this).find('p').removeClass('show');
		}
	);

	$('.contents__faq__content__question').click(function () {

		$(this).siblings('.contents__faq__content__answers').slideToggle();
		$(this).toggleClass('change');
		$(this).find('.contents__faq__content__question__plus').toggleClass('change');
	});

	$('.header__hamburger').click(function () {
		$(this).stop(true, false).toggleClass('change');
		$('body').toggleClass('hidden');
		$('.header__menu').slideToggle(300);
	});

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

	$('.two__drawer__contents__left__content li').click(function () {
		$('.two__drawer__contents__left__content li').removeClass('active');
		$(this).addClass('active');
		$('.two__drawer__contents__right__content__form li').removeClass('show');
		inde = $(this).index();
		$('.two__drawer__contents__right__content__form li').eq(inde).addClass('show');
		$('.two__drawer__contents__right__content__none').addClass('none');
	});

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

	$('.two__drawer__bottom a').click(function () {
		$('.two__drawer').find('.two__drawer__contents__right').find('input').prop('checked', false);
		$('.two__drawer').find('.two__drawer__contents__left__content li').removeClass('show');
		$('.two__select').find('.two__select__flex__contents').removeClass('show');
		$('.two__select').find('.two__select__flex__content__check input').prop('checked', false);
		$('.two__select').find('.two__select__flex__content__check').removeClass('show');
		$('.two__select').find('.two__select__flex__ul li').removeClass('show');
	});

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


});
