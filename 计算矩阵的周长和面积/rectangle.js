$(function(){
    //get dom elem
    var $width = $('#width');
    var $height = $('#height');
    var $btnCal = $('#calculate');
    var $perimeter = $('#perimeter');
    var $area = $('#area');
    //cal button click event
    $btnCal.click(function(){
        //roundFractional函数
        function roundFractional(x,n) {
            return Math.round(x*Math.pow(10,n))/Math.pow(10,n);
        }
        //get value
        var w =  Number($width.val());
        var h = Number($height.val());
        //output
        var p = roundFractional(2*(w+h),1);
        var a = roundFractional(w*h,2);
        $perimeter.val(p);
        $area.val(a);
    })
})