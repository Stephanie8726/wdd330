const checkoutProcess = {
    lsKey: '',
    sumarySelector: '',
    list:[],
    itemTotal: 0,
    shippingTotal: 0,
    tax: 0,
    orderTatal: 0,
    init(lsKey, summarySelector){
        this.lsKey = lsKey;
        this.sumarySelector = summarySelector;
        this.list = getLocalStorage(lskey);
        this.calAndDisplaySubTotal();
    },

    init(lsKey, summarySelector){
        this.lsKey = lsKey;
        this.sumarySelector = sumarySelector;
    },
    calcAndDisplaySubtotal(){},
    calAndDisplaySubTotal(){},

};

export default checkoutProcess;