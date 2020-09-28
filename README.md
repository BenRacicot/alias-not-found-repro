# alias-not-found-repro
A reproduction of alias'ed common files not found for https://github.com/angular/angular-cli/issues/18631

1. Pull, install packages and run to see the aliased files `not found` error with "@angular-devkit/build-angular": "~0.1001.x"
2. Change build-angular package to `"@angular-devkit/build-angular": "~0.1000.4"` install and run to see them work as expected
