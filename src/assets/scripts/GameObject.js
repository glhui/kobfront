const GAME_OBJECTS = [];

export class GameObject {
    constructor() {
        GAME_OBJECTS.push(this);
        this.timedelta = 0;
        this.has_called_start = false;
    }

    start() {
        
    }

    update() {
       
    }

    // 
    on_destroy() {
        
    }

    destroy() {
        this.on_destroy();
        for (let i = 0; i < GAME_OBJECTS.length; i++) {
            if (GAME_OBJECTS[i] === this) {
                GAME_OBJECTS.splice(i);
                break;
            }
        }
    }
}

let last_timestamp; //上一次执行的时刻
const step = timesamp => {
    for (let obj of GAME_OBJECTS){
        if(!obj.has_called_start){
            obj.has_called_start = true;
            obj.start();
        }else {
            obj.timedelta = timesamp - last_timestamp;
            obj.update();
        }
    }
    last_timestamp = timesamp;
    requestAnimationFrame(step)
}


requestAnimationFrame(step);