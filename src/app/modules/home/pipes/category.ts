import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'categoryFilter',
    pure: false
})
export class CategoryFilterPipe implements PipeTransform {
    transform(items: any[], filter: string[] , accessor: string): any {
        if (!items || !filter || !accessor) {
            return items;
        }
        return filter.length ? items.filter(item => filter.includes(item[accessor])) : items;
    }
}