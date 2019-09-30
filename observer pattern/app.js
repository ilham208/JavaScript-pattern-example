function EventObserver(){
    this.observers = [];
}

EventObserver.prototype = {
    subscribe: function(fn){
        this.observers.push(fn);
        console.log(`You are now subscribed to ${fn.name}`)
    },

    unsubscribe: function(fn){
        this.observers = this.observers.filter(function(item){
            if(item !== fn){
                return item;
            }
        });
        console.log(`You are now unsubscribed from ${fn.name}`);
    },

    fire: function(){
        this.observers.forEach(function (item) {
            item.call();
        })
    }
}

const click = new EventObserver();

document.querySelector('.sub-ms').addEventListener('click', function(){
    click.subscribe(getCurrentMillisecond);
});

document.querySelector('.unsub-ms').addEventListener('click', function(){
    click.unsubscribe(getCurrentMillisecond);
});

document.querySelector('.sub-s').addEventListener('click', function(){
    click.subscribe(getCurrentSecond);
});

document.querySelector('.unsub-s').addEventListener('click', function(){
    click.unsubscribe(getCurrentSecond);
});

document.querySelector('.fire').addEventListener('click', function(){
    click.fire();
});

const getCurrentMillisecond = function () {
    console.log(`Current Milliseconds: ${new Date().getMilliseconds()}`)
}

const getCurrentSecond = function () {
    console.log(`Current Milliseconds: ${new Date().getSeconds()}`)
}






