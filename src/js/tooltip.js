const isAnimationReduced = window.matchMedia(`(prefers-reduced-motion: reduce)`) === true || window.matchMedia(`(prefers-reduced-motion: reduce)`).matches === true;

if (!!isAnimationReduced) {
    console.log("Animations are disabled.")
} else {
    // Tooltip by Xobyte
    // Dynamic data-* tooltips by DinPixels muhehehehe
    Element.prototype.tooltip = function(text){
    var root = this;
    this.onmouseover = function(e){
        if (window.innerWidth >= 769) {
            var offsetX = e.pageX;
            var offsetY = e.pageY - document.documentElement.scrollTop;
            offsetX += 96;
            offsetY += 96;
            var borderRight = window.innerWidth;
            var borderTop = 0;
            var div = document.createElement("DIV");
            //div.style.background = "whitesmoke";
            //div.style.border = "solid 4px #2EB41C";
            //div.style.borderRadius = "3px";
            div.style.opacity = "1.0";
            div.style.padding = "5px 10px";
            div.style.fontSize = "10pt";
            var maximumWidth = (borderRight - offsetX) - 50;
            if(maximumWidth > 500){
                div.style.maxWidth = "500px";
            } else {
                div.style.maxWidth = (maximumWidth + "px");
            }
            div.style.position = "fixed";
            div.style.top = offsetY + "px";
            div.style.left = offsetX + "px";
            div.style.zIndex = "999999999";
            div.style.color = "black";
            div.style.fontFamily = "Ubuntu";
            div.innerHTML = text;
            div.className = "tooltip"; div.class = "toolip"; div.id = "tooltip";
            document.body.appendChild(div);
        }
    };
    this.onmouseout = function(){
        if (window.innerWidth >= 769) {
            document.body.removeChild(document.getElementsByClassName("tooltip")[0]);
        }
    };
    this.onmousemove = function(e){
        if (window.innerWidth >= 769) {
            var tt = document.getElementsByClassName("tooltip")[0];
        tt.style.top = ((e.pageY - document.documentElement.scrollTop) + 80) + "px";
        tt.style.left = (e.pageX + 16) + "px";
        }
    };
    };
    document.querySelectorAll(".tooltipable").forEach(btn => btn.tooltip(btn.getAttribute("data-tooltip")));
}