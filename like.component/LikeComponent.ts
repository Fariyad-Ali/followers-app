import {main} from '../ts-hello'; 
export class LikeComponent{
    public totallike: number;
    public isSeleted: boolean;

    constructer( totallike:number, isSeleted:boolean){
        this.totallike=totallike;
        this.isSeleted=isSeleted;
    }

    onClick()
    {
        this.totallike=(this.isSeleted)?-1:+1;
        this.isSeleted=!this.isSeleted;
    }
}


