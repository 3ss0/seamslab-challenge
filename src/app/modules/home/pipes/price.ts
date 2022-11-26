import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'priceFilter',
    pure: false
})
export class PriceFilterPipe implements PipeTransform {
    transform(items: any[], filter: {from: number ; to: number;}[] , accessor: string): any {
        if (!items || !filter || !accessor) {
            return items;
        }
        return filter.length ? items.filter(item => filter.some(({to , from}) => item[accessor] >= from && item[accessor] <= to)) : items;
    }
}