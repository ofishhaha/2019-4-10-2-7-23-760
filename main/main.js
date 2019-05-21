module.exports = function main(inputs) {
    if(inputs["distance"]<2 && inputs["distance"]>0)
    {
	var price=6+0.25*inputs["parkTime"];
    }else if(inputs["distance"]<8 && inputs["distance"]>2){
        var price=6+0.25*inputs["parkTime"]+0.8*(inputs["distance"]-2);
    }else if(inputs["distance"]>8){
    	var price=10.8+1.2*(inputs["distance"]-8)+0.25*inputs["parkTime"];
    }else{
	var price=0;
    }
    price=Math.round(price);

    // write your code here...
    return price;
};
