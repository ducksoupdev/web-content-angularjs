describe("waHero", function() {
    beforeEach(module("example.web.content"));

    beforeEach(function() {
        this.addMatchers({
            toEqualData: function(expect) {
                return angular.equals(expect, this.actual);
            }
        });
    });

    var scope, $compile;
    beforeEach(inject(function (_$rootScope_, _$compile_) {
        scope = _$rootScope_.$new();
        $compile = _$compile_;
    }));

    function compile(template) {
        var element = $compile(template)(scope);
        scope.$apply();
        return element;
    }

    describe("Binding to a model", function() {
        var element;
        beforeEach(function() {
            element = compile("<wa-hero interval='-1'><section title='test 1'><p>test 1 content</p></section><section title='test 2'><p>test 2 content</p></section></wa-hero>");
        });

        it("Should add an element for the hero accordion", function() {
            expect(element.html()).toContain("hero-accordion");
        });

        it("Should add an element for the hero carousel", function() {
            expect(element.html()).toContain("hero-carousel");
        });
    });
});