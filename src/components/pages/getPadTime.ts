type tm = number | string

export function getPadTime(time: tm){
return time.toString().padStart(2, '0');
};