if (typeof angular === 'undefined') { return false; }
angular.element(this).injector().invoke(function($compile) {
var scope = angular.element(this).scope();
$compile(this)(scope);
scope.$digest();
});
return true;