function outsideClick( $document, $parse, $log ) {
    return {
        link: function( $scope, $element, $attributes ){
            var scopeExpression = $attributes.outsideClick,
                onDocumentClick = function(event){
                    var el = $(event.target).parents(".treebox-widget");
                    $log.warn($(event.target), el, el.length)
                    if (!(el && el.length)) {
                        $scope.$apply(scopeExpression);
                    }
                };

            $document.on("click", onDocumentClick);

            $element.on('$destroy', function() {
                $document.off("click", onDocumentClick);
            });
        }
    };
}