import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name: 'clapKweek'
})

export class ClapKweek implements PipeTransform{
    /**
     * 
     * this function claps the kweek if its lenght > 50 letters
     * @param value {string} the kweek string
     * @returns  claped kweek
     */
    transform(value: string): string {
        if (value.length > 50) {
            let dots:string = "..."
        return value.substring(0,51).concat(dots);    
        }
        else {
            return value;
        }
        
    }
}