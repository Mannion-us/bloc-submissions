
var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        while (currentParent.className != targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};    



var findParentByClassName = function(element, targetClass) {
    if (element) {
        var currentParent = element.parentElement;
        if (currentParent === null){
        	alert ("No Parent Found");
        }
        if (currentParent.className != targetClass){
        	alert("No Parent found with that className");
        }
        while (currentParent.className != targetClass && currentParent.className !== null) {
            currentParent = currentParent.parentElement;
        }
        return currentParent;
    }
};    
