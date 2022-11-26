import { HeaderComponent } from "./header/header.component";
import { SearchComponent } from "./search/search.component";
import { FooterComponent } from "./footer/footer.component";
import { HomeLayoutComponent } from "./home-layout/home-layout.component";
import { CategoryComponent } from "./category/category.component";
import { ProductComponent } from "./product/product.component";

export const components: any[] = [
    HeaderComponent,
    FooterComponent,
    HomeLayoutComponent,
    SearchComponent,
    CategoryComponent,
    ProductComponent
];

export * from './footer/footer.component';
export * from './header/header.component';
export * from './search/search.component';
export * from './home-layout/home-layout.component';
export * from "./category/category.component";
export * from "./product/product.component";