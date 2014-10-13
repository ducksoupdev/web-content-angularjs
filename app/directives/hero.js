"use strict";
angular.module("example.web.content")
    .directive("waHero", ["$compile", function($compile) {
        return {
            restrict: "EAC",
            scope: {
                interval: "=?"
            },
            template: "<div class='wa-hero-container container'><div class='transcluded' ng-transclude></div></div>",
            transclude: true,
            link: function(scope, element) {
                scope.accordionStatus = {
                    isFirstOpen: true
                };

                var heroAccordion = angular.element("<div class='hero-accordion visible-xs visible-sm' accordion='' close-others='true'></div>");
                var heroCarousel = angular.element("<div class='hero-carousel wa-carousel-container visible-md visible-lg' carousel='' interval='interval'></div>");
                var transcludedBlock = element[0].querySelector("div.transcluded");
                var transcludedSections = angular.element(transcludedBlock).find("section");

                angular.forEach(transcludedSections, function(elem, idx) {
                    var copiedElement = elem.cloneNode(true);
                    var elementTitle = elem.getAttribute("title");

                    // create an accordion element
                    var isOpen = "";
                    if (idx === 0) {
                        isOpen = " is-open='accordionStatus.isFirstOpen'";
                    }
                    var accordionGroup = angular.element("<div accordion-group='' heading='" + elementTitle + "'" + isOpen + "></div");
                    accordionGroup.append(copiedElement);
                    heroAccordion.append(accordionGroup);

                    // create a carousel element
                    elem.setAttribute("slide", "");
                    heroCarousel.append(elem);
                });

                var compiledAccordionElement = $compile(heroAccordion);
                var compiledCarouselElement = $compile(heroCarousel);
                var compiledAccordionView = compiledAccordionElement(scope)[0];
                var compiledCarouselView = compiledCarouselElement(scope)[0];

                element.append(compiledAccordionView);
                element.append(compiledCarouselView);

                angular.element(transcludedBlock).remove();
            }
        };
    }]);