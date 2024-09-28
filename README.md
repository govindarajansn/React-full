# React-full

`Episode 2`

```
package.json is the cofig file for npm.
npm manages all packages(versions), dependencies it take cares in the package.json
keeps the track of all the packages and dependencies. ^(minor updates) / ~(major updates) - sign caret/tilde is used to manage the versions. higher version are automatically upgraded

Most import package - Bundler(webpack, parcel, vite) - bundles your app to ship your code to production.

2 types package - Dev dependency - this is used only during development
                - Dependency - this can be done in production phase as well

package-lock.json - keeps track of exact version
        integrety - it has hash values

Node Modules - contains all the code(actual data) that are fetched from NPM. collection of dependency.

transitive dependency - eg-parcel as a project has its own dependency which inturn have their own dependency and it gooes on.

how many package.json in an application - it will have a lot. one is commmon package.json and each dependency have their own package.json

like npm(install a package) - we have npx(executing a package)

```

# parcel

- Dev Build
- Local Server
- HMR = Hot Module Replacement (hit save - it automatically renders in the website)
- file watching algorithm - written in c++ (keeps eye on everything)
- Caching - Faster Builds
