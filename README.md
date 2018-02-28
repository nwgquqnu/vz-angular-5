# VzAngular5Shop

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


# Demo Angular5 Shop application 

This application contains mocked list of Products which can be added to a cart and removed from it

Each item in the cart has a number input which allows user to change item quantity.

Notification area shows last performed event

When user clicks on Welcome text or Product text then text color is changed to lightsalmon

LocalStorage is used to store elements of the cart, so cart items are present on page reload 

CartService uses ConfigOptionsService to determine key for the LocalStorage

### Pipes
Built in pipes:
- `DatePipe` is used in `AppComponent` to show time of the component initialization. Used as `pageUpdatedDate | date:'medium':'UTC+2'`
- `UpperCasePipe` is used inside `ProductComponent` to convert category to upper case, `category | uppercase`
- `CurrencyPipe` is used in `CartListComponent`. Used as `totalSum | currency:USD:symbol`
- `AsyncPipe` is used on `ProductListComponent` to load products. Used as `<div *ngFor="let product of (products$ | async)">`. On `Reload data` button click data is reloaded with 500 miliseconds interval.

Custom pipe:
`OrderByPipe` is located at `src/app/shared/pipes/order-by.pipe.ts` and is used inside `CartListComponent`
Usage `someArray | orderBy:sortField[:asc]`
- `someArray` - array of objects
- `sortField: string` can be any object's field inside `someArray`. Accepts paths, e.g. `product.price`, where product is a field inside sorted object
- `asc: boolean` specifies sorting order. default value is `false`, Can be eigher `true` or `false`

