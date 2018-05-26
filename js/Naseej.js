$(document).ready(function(){
    /// vars defenations
var  panelContentObject , x="",i;
  panelContentObject = {
   
    "content": [
 { "titl":"العنوان الأول", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان الثانى", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النش وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان الثالث ", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النش وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
        
 { "titl":"العنوان الرابع", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشوليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان الخامس ", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النش المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان السادس", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل ووليس المحتوى ويُستخدم في صناعات المطابع ودور النشليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان السابع", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكلوليس المحتوى ويُستخدم في صناعات المطابع ودور النش وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
        
 { "titl":"العنوان الثامن", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليوليس المحتوى ويُستخدم في صناعات المطابع ودور النشس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان التاسع", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكل وليس المحتوى ويُستخدم في صناعات المطابع ودور النشوليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },
 { "titl":"العنوان العاشر", "description":"لوريم إيبسوم هو ببساطة نص شكلي بمعنى أن الغاية هي الشكلوليس المحتوى ويُستخدم في صناعات المطابع ودور النش وليس المحتوى ويُستخدم في صناعات المطابع ودور النشر" },

    ]
}
 // carousel
    $("li[data-target='#myCarousel']").click(function(){
        
       $(this).addClass("active");
        
       $("li[data-target='#myCarousel']").not($(this)).removeClass("active");
        
    });
// dynamic collections

 for (i in panelContentObject.content) {
   x+= "<div class=' col-md-3 col-xs-6 tabHolder single-item'><div class='col-xs-12 withoutPadding  tabContentHolder'><h2  class='tabTitle'>"+panelContentObject.content[i].titl + "</h2><p>" + panelContentObject.content[i].description + "</p><footer><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'width='27px' height='23px' viewBox='0 0 27 23' enable-background='new 0 0 27 23' xml:space='preserve'><g><g><path fill='#2A902D' d='M24,21V2l2,0.001v-2L1,0v2h2v19H0v2h27v-2H24z M22,21h-7v-3c0-0.773-0.861-1.677-1.667-1.677c-0.805,0-1.3,0.929-1.238,1.42L12,18v3H5V2h17V21z M20,14.001h-3v3h3V14.001z M20,9.001h-3v3h3V9.001z M20,4.001h-3v3h3V4.001zM15,9.001h-3v3h3V9.001z M15,4.001h-3v3h3V4.001z M10,14.001H7v3h3V14.001z M10,9.001H7v3h3V9.001z M10,4.001H7v3h3V4.001z'/></g></g></svg><svg version='1.1' id='Layer_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'width='26px'height='19px' viewBox='0 0 26 19'enable-background='new 0 0 26 19'xml:space='preserve'><g><g><path fill='#2A902D' d='M3,2h20v12.999h2V1c0-0.478-0.502-1-1-1H2C1.502,0,1,0.522,1,1v13.999h2V2z M26,16.999H14v1L12,18v-1.001H0V18c0,0.478,0.503,1,1,1h24c0.498,0,1-0.522,1-1V16.999z M9.625,6.307C9.52,6.413,9.488,6.571,9.543,6.708l2.806,7.047c0.053,0.132,0.176,0.223,0.319,0.233c0.142,0.01,0.277-0.062,0.348-0.185l0.911-1.58l2.211,2.216c0.07,0.069,0.164,0.109,0.263,0.109s0.193-0.039,0.263-0.109l1.079-1.081c0.145-0.146,0.145-0.381,0-0.527l-2.211-2.214l1.578-0.913c0.123-0.071,0.195-0.207,0.185-0.349s-0.101-0.266-0.233-0.319l-7.035-2.811C9.888,6.17,9.731,6.203,9.625,6.307z M9.198,5.353L8.372,4.526c-0.145-0.145-0.38-0.145-0.526,0c-0.145,0.145-0.145,0.381,0,0.526l0.826,0.827C8.744,5.952,8.84,5.988,8.935,5.988s0.19-0.036,0.263-0.109C9.343,5.734,9.343,5.498,9.198,5.353z M8.652,7.099c0-0.206-0.166-0.372-0.372-0.372H7.112c-0.205,0-0.372,0.166-0.372,0.372c0,0.206,0.167,0.372,0.372,0.372H8.28C8.485,7.471,8.652,7.304,8.652,7.099z M7.938,9.71c0.095,0,0.19-0.036,0.263-0.109l0.826-0.827c0.145-0.145,0.145-0.381,0-0.526c-0.145-0.146-0.38-0.146-0.526,0L7.675,9.074C7.53,9.219,7.53,9.455,7.675,9.6C7.748,9.673,7.843,9.71,7.938,9.71z M10.787,4.96V3.791c0-0.206-0.166-0.372-0.372-0.372s-0.372,0.166-0.372,0.372v1.17c0,0.205,0.166,0.372,0.372,0.372S10.787,5.165,10.787,4.96z M12.087,5.708l0.826-0.827c0.145-0.146,0.145-0.381,0-0.527c-0.145-0.145-0.381-0.145-0.525,0l-0.826,0.827c-0.145,0.145-0.145,0.381,0,0.526c0.073,0.073,0.167,0.109,0.263,0.109S12.015,5.781,12.087,5.708z'/></g></g></svg><a class='pull-left'>استفد من الخدمة</a></footer></div></div>"
 };
     $(".tabContent").prepend(x);
function appendCont() {
  //alert("jj");
         $(".tabContent").prepend(x);

}
  /// nav show 
     $(".nav-tabs a").click(function(){
        $(this).tab('show');
    });
 ////pagination
    (function($) {
	var pagify = {
		items: {},
		containerPagination: null,
		totalPages: 1,
		perPage: 3,
		currentPage: 0,
		createNavigation: function() {
			this.totalPages = Math.ceil(this.items.length / this.perPage);
var pagination ;
			$('.pagination', this.containerPagination.parent()).remove();
			$('.prevDiv').append('<a class="nav prev disabled previous around" data-next="false"><</a>');

//			for (var i = 0; i < this.totalPages; i++) {
//				var pageElClass = "page";
//				if (!i)
//					pageElClass = "page current";
//				var pageEl = '<a class="' + pageElClass + '" data-page="' + (
//				i + 1) + '">' + (
//				i + 1) + "</a>";
//				pagination.append(pageEl);
//			}
			$(".nextDiv").append('<a class="nav next nextArrow around" data-next="true">></a>');

			this.containerPagination.after(pagination);

			var that = this;
			$("body").off("click", ".nav");
			this.navigator = $("body").on("click", ".nav", function() {
				var el = $(this);
				that.navigate(el.data("next"));
			});

			$("body").off("click", ".page");
			this.pageNavigator = $("body").on("click", ".page", function() {
				var el = $(this);
				that.goToPage(el.data("page"));
			});
		},
		navigate: function(next) {
			// default perPage to 5
			if (isNaN(next) || next === undefined) {
				next = true;
			}
			$(".pagination .nav").removeClass("disabled");
			if (next) {
				this.currentPage++;
				if (this.currentPage > (this.totalPages - 1))
					this.currentPage = (this.totalPages - 1);
				if (this.currentPage == (this.totalPages - 1))
					$(".pagination .nav.next").addClass("disabled");
				}
			else {
				this.currentPage--;
				if (this.currentPage < 0)
					this.currentPage = 0;
				if (this.currentPage == 0)
					$(".pagination .nav.prev").addClass("disabled");
				}

			this.showItems();
		},
		updateNavigation: function() {

			var pages = $(".pagination .page");
			pages.removeClass("current");
			$('.pagination .page[data-page="' + (
			this.currentPage + 1) + '"]').addClass("current");
		},
		goToPage: function(page) {

			this.currentPage = page - 1;

			$(".pagination .nav").removeClass("disabled");
			if (this.currentPage == (this.totalPages - 1))
				$(".pagination .nav.next").addClass("disabled");

			if (this.currentPage == 0)
				$(".pagination .nav.prev").addClass("disabled");
			this.showItems();
		},
		showItems: function() {
			this.items.hide();
			var base = this.perPage * this.currentPage;
			this.items.slice(base, base + this.perPage).show();

			this.updateNavigation();
		},
		init: function(containerPagination, items, perPage) {
			this.containerPagination = containerPagination;
			this.currentPage = 0;
			this.totalPages = 1;
			this.perPage = perPage;
			this.items = items;
			this.createNavigation();
			this.showItems();
		}
	};

	// stuff it all into a jQuery method!
	$.fn.pagify = function(perPage, itemSelector) {
		var el = $(this);
		var items = $(itemSelector, el);

		// default perPage to 5
		if (isNaN(perPage) || perPage === undefined) {
			perPage = 3;
		}

		// don't fire if fewer items than perPage
		if (items.length <= perPage) {
			return true;
		}

		pagify.init(el, items, perPage);
	};
})(jQuery);

$(".containerPagination").pagify(4, ".single-item");

});